"use client"

import type React from "react"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { X, UploadCloud, CheckCircle, AlertCircle, Github, Linkedin, Globe } from "lucide-react"
// Removed supabase client import as it wasn't used in the provided code for submission logic
// import { createClient } from '@supabase/supabase-js'

// --- Define Types ---
interface JobApplicationFormProps {
  jobTitle: string
  jobDescription: string
  onClose: () => void
  showGithubInput?: boolean // <-- Add new optional prop
}

interface FormDataState {
  name: string
  email: string
  cv: File | null
  coverLetter: File | null
  github: string
  linkedin: string
  website: string
}

type FormErrors = Partial<Record<keyof FormDataState | "form", string>>
type SubmissionStatus = "success" | "error" | null

// --- Component ---
const JobApplicationForm: React.FC<JobApplicationFormProps> = ({
  jobTitle,
  jobDescription,
  onClose,
  showGithubInput = true, // <-- Destructure prop, default to true if not provided
}) => {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    cv: null,
    coverLetter: null,
    github: "",
    linkedin: "",
    website: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>(null)

  // --- Event Handlers ---
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name as keyof FormDataState]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name as keyof FormErrors]: undefined }))
    }
    setSubmissionStatus(null)
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    const fileKey = name as "cv" | "coverLetter"

    if (files && files.length > 0) {
      const file = files[0]
      // Allow only PDF
      if (file.type === "application/pdf") {
        setFormData((prev) => ({ ...prev, [fileKey]: file }))
        if (errors[fileKey]) {
          setErrors((prev) => ({ ...prev, [fileKey]: undefined }))
        }
      } else {
        // Reset if not PDF
        setErrors((prev) => ({ ...prev, [fileKey]: "Only PDF files are accepted." }))
        e.target.value = "" // Clear the file input visually
        setFormData((prev) => ({ ...prev, [fileKey]: null }))
      }
    } else {
      // Handle case where file selection is cancelled
      setFormData((prev) => ({ ...prev, [fileKey]: null }))
    }
    setSubmissionStatus(null) // Reset submission status on file change
  }

  // --- Validation ---
  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {}
    if (!formData.name.trim()) tempErrors.name = "Name is required."
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid."
    }
    if (!formData.cv) tempErrors.cv = "CV (PDF) is required."

    // Only validate GitHub if it's shown AND has a value
    if (showGithubInput && formData.github && !/^https?:\/\/.+/.test(formData.github)) {
      tempErrors.github = "Please enter a valid URL starting with http(s)://"
    }

    if (formData.linkedin && !/^https?:\/\/.+/.test(formData.linkedin)) {
      tempErrors.linkedin = "Please enter a valid URL starting with http(s)://"
    }
    if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
      tempErrors.website = "Please enter a valid URL starting with http(s)://"
    }

    // Note: Validation for coverLetter PDF type is handled in handleFileChange

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  // --- Form Submission ---
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmissionStatus(null) // Reset status on new submission attempt
    setErrors({}) // Clear previous errors

    if (!validateForm()) return // Stop if validation fails

    setIsSubmitting(true)

    try {
      const data = new FormData()
      data.append("name", formData.name)
      data.append("email", formData.email)
      data.append("jobTitle", jobTitle)
      data.append("jobDescription", jobDescription) // Consider if this is needed in the form data itself
      // Only include github if it was shown and has a value
      if (showGithubInput && formData.github) {
         data.append("github", formData.github)
      }
      // Always include linkedin/website if provided (they are always shown)
      if (formData.linkedin) data.append("linkedin", formData.linkedin)
      if (formData.website) data.append("website", formData.website)

      // CV is required, so it should always exist at this point if validation passed
      if (formData.cv) data.append("cv", formData.cv)
      // Cover Letter is optional
      if (formData.coverLetter) data.append("coverLetter", formData.coverLetter)

      // Example: Replace with your actual API endpoint call
      const res = await fetch("/api/application", {
        method: "POST",
        body: data,
      })

      if (!res.ok) {
        // Attempt to read error message from response
        let errorMsg = "Submission failed. Server responded with an error."
        try {
          const errorResult = await res.json();
          errorMsg = errorResult.message || errorMsg;
        } catch (jsonError) {
           // Ignore if response is not JSON
        }
        throw new Error(errorMsg)
      }

      const result = await res.json(); // Assuming success returns JSON
      console.log("Submission successful:", result);

      setSubmissionStatus("success")
      // Reset form state after successful submission? Optional.
      // setFormData({ name: "", email: "", cv: null, coverLetter: null, github: "", linkedin: "", website: "" });
      setTimeout(onClose, 2500) // Close modal after a delay

    } catch (error: any) {
      console.error("Error during submission:", error)
      setErrors({ form: error.message || "An unexpected error occurred while submitting. Please try again." })
      setSubmissionStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  // --- Helper to render file input ---
  const renderFileInput = (id: "cv" | "coverLetter", label: string, required: boolean) => {
    const file = formData[id]
    const error = errors[id]
    const isPrimary = id === "cv"

    return (
      <div className="relative">
        <label htmlFor={id} className={`block text-sm font-medium mb-1.5 ${error ? "text-red-400" : "text-blue-300"}`}>
          {label} {required && <span className="text-blue-400">*</span>}
          {!required && <span className="text-blue-200/60 text-xs ml-1">(Optional)</span>}
        </label>
        <div className={`relative group overflow-hidden rounded-lg ${error ? "ring-2 ring-red-500" : ""}`}>
          {/* Input container styling */}
          <div
            className={`flex items-center w-full px-4 py-3 ${isPrimary ? "bg-black/60" : "bg-black/70"} border ${error ? "border-red-500" : "border-blue-500/50"} rounded-lg transition-all duration-200 group-hover:border-blue-400/90 group-focus-within:ring-2 group-focus-within:ring-blue-500/50 backdrop-blur-sm`}
          >
            <div
              className={`flex-shrink-0 mr-3 p-2 rounded-md ${isPrimary ? "bg-blue-900/40" : "bg-blue-800/30"} text-blue-400`}
            >
              <UploadCloud size={20} />
            </div>
            <div className="flex-1 truncate">
              <span className={`text-sm ${file ? "text-blue-200" : "text-blue-400/70"} truncate`}>
                {file ? file.name : "No file selected (PDF only)"}
              </span>
            </div>
            <label
              htmlFor={id}
              className={`ml-3 px-3 py-1.5 rounded-md text-xs font-medium ${isPrimary ? "bg-blue-700 hover:bg-blue-600" : "bg-blue-800 hover:bg-blue-700"} text-white font-bold transition-colors cursor-pointer`} // Changed text color for better contrast
            >
              {file ? "Change" : "Browse"}
            </label>
          </div>
          {/* Hidden actual file input */}
          <input
            type="file"
            id={id}
            name={id}
            accept=".pdf" // Only accept PDF
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            // No 'required' attribute here; validation is handled in JS
            disabled={isSubmitting}
          />
        </div>
        {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
      </div>
    )
  }

  // --- Render Component ---
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity duration-300 ease-in-out overflow-hidden">
      {/* Matrix effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-500 text-xs animate-fall whitespace-nowrap"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${20 + Math.random() * 10}px`,
                animationDuration: `${10 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              01010110 10101010 00101010 11001010 10101101
            </div>
          ))}
        </div>
      </div>

      {/* Form container */}
      <div className="relative w-full max-w-2xl bg-black/70 border border-blue-600/30 rounded-xl shadow-2xl shadow-blue-900/30 max-h-[90vh] overflow-y-auto backdrop-blur-md">
        {/* Noise overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjgiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay pointer-events-none rounded-xl"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-blue-400 rounded-full hover:text-blue-200 hover:bg-blue-900/50 transition-colors z-10"
          aria-label="Close application form"
          disabled={isSubmitting}
        >
          <X size={20} />
        </button>

        {/* Form Content */}
        <div className="p-8">
          {/* Header */}
          <div className="relative -mx-8 -mt-8 px-8 pt-12 pb-8 mb-6 bg-gradient-to-r from-black via-blue-950 to-black border-b border-blue-500/30 rounded-t-xl shadow-md overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="h-px bg-blue-400/20 w-full absolute animate-scanline"></div>
            </div>
            <h2 className="text-3xl font-bold text-blue-400 mb-3 tracking-wider">{jobTitle}</h2>
            <p className="text-blue-300 text-sm leading-relaxed max-w-xl">{jobDescription}</p>
          </div>

          {/* Section 1 Title */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-400 flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-blue-900 text-blue-300 flex items-center justify-center mr-3 text-sm border border-blue-400/50">
                1
              </span>
              Personal Information
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-1.5 ${errors.name ? "text-red-400" : "text-blue-300"}`}
                >
                  Name <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required // Keep basic HTML5 required for accessibility/UX hints
                  className={`w-full px-4 py-3 bg-black/60 border ${errors.name ? "border-red-500" : "border-blue-700/60"} rounded-lg text-blue-300 placeholder-blue-700 focus:outline-none focus:ring-2 ${errors.name ? "focus:ring-red-500" : "focus:ring-blue-500/50"} focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
                  placeholder="e.g., Neo Anderson"
                  disabled={isSubmitting}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-1.5 ${errors.email ? "text-red-400" : "text-blue-300"}`}
                >
                  Email <span className="text-blue-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 bg-black/60 border ${errors.email ? "border-red-500" : "border-blue-700/60"} rounded-lg text-blue-300 placeholder-blue-700 focus:outline-none focus:ring-2 ${errors.email ? "focus:ring-red-500" : "focus:ring-blue-500/50"} focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
                  placeholder="e.g., neo@zion.com"
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
              </div>
            </div>

            {/* CV & Cover Letter */}
            <div className="space-y-6 pt-2">
              {renderFileInput("cv", "Curriculum Vitae (CV)", true)}
              {renderFileInput("coverLetter", "Cover Letter", false)}
            </div>

            {/* Links Section */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-blue-400 flex items-center mb-6">
                <span className="inline-block w-8 h-8 rounded-full bg-blue-900 text-blue-300 flex items-center justify-center mr-3 text-sm border border-blue-400/50">
                  2
                </span>
                Professional Links
              </h3>
              <div className="space-y-6">
                {/* GitHub Link - Conditional Rendering */}
                {showGithubInput && ( // <-- Use the prop here
                  <div>
                    <label
                      htmlFor="github"
                      className={`block text-sm font-medium mb-1.5 flex items-center ${errors.github ? "text-red-400" : "text-blue-300"}`}
                    >
                      <Github size={16} className="mr-2 text-blue-500" />
                      GitHub Profile <span className="text-blue-400/60 text-xs ml-1"></span>
                    </label>
                    <input
                      type="url"
                      id="github"
                      name="github"
                      value={formData.github}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-black/60 border ${errors.github ? "border-red-500" : "border-blue-700/60"} rounded-lg text-blue-300 placeholder-blue-700 focus:outline-none focus:ring-2 ${errors.github ? "focus:ring-red-500" : "focus:ring-blue-500/50"} focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
                      placeholder="https://github.com/..."
                      disabled={isSubmitting}
                    />
                    {errors.github && <p className="text-red-400 text-xs mt-1.5">{errors.github}</p>}
                  </div>
                )}

                {/* LinkedIn Link */}
                <div>
                  <label
                    htmlFor="linkedin"
                    className={`block text-sm font-medium mb-1.5 flex items-center ${errors.linkedin ? "text-red-400" : "text-blue-300"}`}
                  >
                    <Linkedin size={16} className="mr-2 text-blue-500" />
                    LinkedIn Profile <span className="text-blue-400/60 text-xs ml-1"></span>
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black/60 border ${errors.linkedin ? "border-red-500" : "border-blue-700/60"} rounded-lg text-blue-300 placeholder-blue-700 focus:outline-none focus:ring-2 ${errors.linkedin ? "focus:ring-red-500" : "focus:ring-blue-500/50"} focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
                    placeholder="https://linkedin.com/in/..."
                    disabled={isSubmitting}
                  />
                  {errors.linkedin && <p className="text-red-400 text-xs mt-1.5">{errors.linkedin}</p>}
                </div>

                {/* Personal Website/Blog */}
                <div>
                  <label
                    htmlFor="website"
                    className={`block text-sm font-medium mb-1.5 flex items-center ${errors.website ? "text-red-400" : "text-blue-300"}`}
                  >
                    <Globe size={16} className="mr-2 text-blue-500" />
                    Personal Website/Blog <span className="text-blue-400/60 text-xs ml-1">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black/60 border ${errors.website ? "border-red-500" : "border-blue-700/60"} rounded-lg text-blue-300 placeholder-blue-700 focus:outline-none focus:ring-2 ${errors.website ? "focus:ring-red-500" : "focus:ring-blue-500/50"} focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
                    placeholder="https://your-site.com"
                    disabled={isSubmitting}
                  />
                  {errors.website && <p className="text-red-400 text-xs mt-1.5">{errors.website}</p>}
                </div>
              </div>
            </div>

            {/* Submission Status Area */}
            <div className="pt-4 min-h-[40px]">
              {submissionStatus === "success" && (
                <div className="flex items-center justify-center gap-2 text-blue-400 text-sm p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg backdrop-blur-sm">
                  <CheckCircle size={18} />
                  <span>Application submitted successfully! Closing form...</span>
                </div>
              )}
              {submissionStatus === "error" && (
                <div className="flex items-center justify-center gap-2 text-red-400 text-sm p-3 bg-red-900/20 border border-red-500/30 rounded-lg backdrop-blur-sm">
                  <AlertCircle size={18} />
                  <span>{errors.form || "An unexpected error occurred."}</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting || submissionStatus === "success"}
                className={`w-full flex justify-center items-center px-6 py-3.5 rounded-lg shadow-lg text-base font-medium text-black transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-900 focus:ring-blue-400 border border-blue-400/50 ${isSubmitting || submissionStatus === "success"
                  ? "bg-blue-700 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-400 shadow-blue-500/20 font-bold"
                  }`}
              >
                {/* Button Content Logic */}
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    PROCESSING...
                  </>
                ) : submissionStatus === "success" ? (
                  <>
                    <CheckCircle className="-ml-1 mr-2 h-5 w-5" /> SUBMITTED
                  </>
                ) : (
                  "SUBMIT APPLICATION"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JobApplicationForm