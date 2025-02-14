"use client";
import { useState, useEffect, useRef } from "react"

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    const columns = canvas.width / fontSize

    const drops: number[] = []
    // Initialize drops with random y-positions to skip the initial stage.
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * (canvas.height / fontSize))
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#60a5fa" // Equivalent to Tailwind's text-blue-400.
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(Math.random() * 128)
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)
    return () => clearInterval(interval)
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
}


const SplashScreen = () => {

  useEffect(() => {
    const introTimer = setTimeout(() => {
    }, 2000);

    return () => clearTimeout(introTimer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background space-y-6">
      <MatrixRain />
      <div
        className={`flex-shrink-0 text-focus-in`}
      >
        <img
          src="/images/logowhite.png"
          alt="NovaGate Solutions Logo"
          className="w-50 h-36 md:w-72 md:h-48"
        />
      </div>

      {/* Company Name */}
      <div className="text-center">
        <h1
          className={`text-4xl md:text-7xl font-bold text-white text-focus-in`}
        >
          NOVAGATE SOLUTIONS
        </h1>
      </div>
    </div>

  );
};

export default SplashScreen;