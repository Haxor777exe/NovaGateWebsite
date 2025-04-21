// app/api/application/route.ts

import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { runMiddleware, upload } from "@/lib/middleware"

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

function sanitizeFileName(name: string): string {
  return name
    .replace(/[^a-z0-9.\-_]/gi, "_") // replace weird characters with "_"
    .toLowerCase()
}

export async function POST(req: Request) {
  const formData = await req.formData()

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const jobTitle = formData.get("jobTitle") as string
  const jobDescription = formData.get("jobDescription") as string
  const github = formData.get("github") as string
  const linkedin = formData.get("linkedin") as string
  const website = formData.get("website") as string

  const cv = formData.get("cv") as File
  const coverLetter = formData.get("coverLetter") as File | null

  
  try {
    if (!cv || cv.type !== "application/pdf") {
      return NextResponse.json({ error: "Invalid or missing CV" }, { status: 400 })
    }

    const buffer = Buffer.from(await cv.arrayBuffer())
    const cvPath = `cv/${Date.now()}_${sanitizeFileName(cv.name)}`

    const { data: cvUpload, error: cvError } = await supabase
      .storage
      .from("files")
      .upload(cvPath, buffer, { contentType: "application/pdf" })

    if (cvError) throw cvError

    const cvURL = supabase.storage.from("applications").getPublicUrl(cvPath).data.publicUrl

    let coverLetterURL = null
    if (coverLetter && coverLetter.type === "application/pdf") {
      const clBuffer = Buffer.from(await coverLetter.arrayBuffer())
      const clPath = `cover_letters/${Date.now()}_${sanitizeFileName(coverLetter.name)}`

      const { data: clUpload, error: clErr } = await supabase
        .storage
        .from("files")
        .upload(clPath, clBuffer, { contentType: "application/pdf" })

      if (clErr) throw clErr

      coverLetterURL = supabase.storage.from("applications").getPublicUrl(clPath).data.publicUrl
    }

    const { error: insertError } = await supabase.from("job_applications").insert({
      job_title: jobTitle,
      job_description: jobDescription,
      name,
      email,
      github,
      linkedin,
      website,
      cv: cvURL,
      cover_letter: coverLetterURL,
    })

    if (insertError) throw insertError

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Submission error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
