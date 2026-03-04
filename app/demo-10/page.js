"use client"

import { Akshar } from "next/font/google";
const akshar = Akshar({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"]
});

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import AnimatedPathText from "./components/AnimatedPathText";

import "@/styles/demo/demo10.scss";

const Demo10 = () => {
  // Rounded rectangle path
  const rectPath = "M 20,20 L 180,20 A 20,20 0 0,1 200,40 L 200,160 A 20,20 0 0,1 180,180 L 20,180 A 20,20 0 0,1 0,160 L 0,40 A 20,20 0 0,1 20,20"

  const repeatedText = "JOIN THE WAITLIST • ".repeat(12) + "";
  const scaleClasses = [
    'scale-[1]',
    'scale-[1.15] sm:scale-[1.15]',
    'scale-[1.32] sm:scale-[1.3]',
    'scale-[1.5] sm:scale-[1.45]',
    'scale-[1.7] sm:scale-[1.6]'
  ];

  // START :: Handle Subscribe
  const [buttonState, setButtonState] = useState('idle')
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const isValidEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  }

  const buttonCopy = {
    idle: "Subscribe",
    loading: (
      <motion.div className="h-2 w-2 sm:h-4 sm:w-4 animate-spin rounded-full border-2 border-white border-t-transparent mx-auto" />
    ),
    success: "✓ Done",
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (buttonState === "success") return
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setError("")
    setButtonState("loading")

    setTimeout(() => {
      setButtonState("success")
      console.log("Collected Email:", email)
    }, 1750)

    setTimeout(() => {
      // setButtonState("idle")
      setEmail("")
    }, 3500)
  };
  // END :: Handle Subscribe

  return (
    <main className={`main-content-10 ${akshar.className} overflow-clip`}>
      <div className="w-dvw h-dvh flex justify-center items-center relative bg-white">
        {Array.from({ length: 5 }, (_, index) => (
          <motion.div
            key={`text-${index + 1}`}
            className={`${scaleClasses[index]} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full`}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
            initial={{ opacity: 0, scale: 3 }}
            animate={{ opacity: index * 0.05 + 0.2, scale: 1 }}
          >
            <AnimatedPathText
              path={rectPath}
              svgClassName="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              viewBox="-20 10 240 180"
              text={repeatedText}
              textClassName="text-[7.6px] lowercase uppercase"
              duration={index + 1 * 50}
              textAnchor="start"
            />
          </motion.div>
        ))}

        <motion.div
          transition={{ type: "spring", duration: 0.5, bounce: .1 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 text-center"
        >
          <div className="mb-10 max-w-[360px]">
            <Link
              href="/"
              aria-label="Logo"
              className="transition-all duration-300 hover:opacity-60 text-lg sm:text-2xl block mb-4"
            >
              SlinkStudio
            </Link>
            <p className="text-6xl leading-[1.2] uppercase">
              Coming Soon
            </p>
            <p className="text-balance text-[#000]/65">Join a new design community. Connect, share, and celebrate the best designs every day.</p>
          </div>
          

          <form onSubmit={handleSubmit} className="space-y-2 max-w-[300px] mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 h-9 sm:h-12 border border-[#0015ff] focus:outline-hidden focus:ring-primary-blue/50 text-xs sm:text-base placeholder:text-[#0015ff]/60 rounded-full bg-white text-center"
            />
            {error && <p className="text-red-500 text-xs text-center">{error}</p>}
            <button
              type="submit"
              disabled={buttonState === "loading"}
              className="w-full px-3 py-2 h-9 sm:h-12 sm:px-8 sm:py-2 bg-[#0015ff] text-white hover:bg-[#0015ff]/90 transition-colors text-xs sm:text-base rounded-full cursor-pointer uppercase"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  className="block"
                  transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 25 }}
                  key={buttonState}
                >
                  {buttonCopy[buttonState]}
                </motion.span>
              </AnimatePresence>
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}

export default Demo10;