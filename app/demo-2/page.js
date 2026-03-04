"use client"

import { Faculty_Glyphic } from "next/font/google";
const facultyGlyphic = Faculty_Glyphic({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import "@/styles/demo/demo2.scss";

const Demo2 = () => {
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const toggleNotifyPanel = () => {
    setIsNotifyOpen((prev) => !prev);
  };

  // START :: Subscribe button
  const [buttonState, setButtonState] = useState('idle')
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const isValidEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  }

  const buttonCopy = {
    idle: (
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" color="currentColor"><path d="m7 7.5l2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 7.5"/><path d="M11.5 19.5s-1.43-.012-2.401-.037c-3.149-.079-4.723-.118-5.854-1.254c-1.131-1.135-1.164-2.668-1.23-5.733a69 69 0 0 1 0-2.952c.066-3.065.099-4.598 1.23-5.733C4.376 2.655 5.95 2.616 9.099 2.537a115 115 0 0 1 5.802 0c3.149.079 4.723.118 5.854 1.254c1.131 1.135 1.164 2.668 1.23 5.733c.007.357.012.976.014 1.476M14 17.5h8m-4 4v-8"/></g></svg>
    ),
    loading: (
      <motion.div className="h-2 w-2 sm:h-4 sm:w-4 animate-spin rounded-full border-2 border-[var(--primary)] border-t-transparent mx-auto" />
    ),
    success: (
      <motion.div className="text-[var(--primary)] flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11" color="currentColor"/></svg>
        <span>Done</span>
      </motion.div>
    ),
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
  // END :: Subscribe button

  return (
    <main className={`${facultyGlyphic.className} min-h-screen flex overflow-hidden`}>
      {/* main content */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="main-content-2 px-8 flex-1"
      >
        {/* Header */}
        <header className="flex justify-between items-center py-8">
          <div className="w-1/2 lg:w-full lg:text-center">
            <Link className="font-bold text-3xl" href="/" aria-label="Logo">Slink</Link>
          </div>
          <div className="w-1/2 block lg:hidden text-end">
            <button onClick={toggleNotifyPanel} type="button" className="cursor-pointer relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0" href="/" aria-label="Open Nofify me panel">Notify Me</button>
          </div>
        </header>

        {/* Content */}
        <section className="grid place-content-center text-center h-[calc(100vh-200px)]">
          <p>Our New Site Is</p>
          <div className="filter-[url(#ripples)]">
            <svg className="w-64 sm:w-72 animate-spin-slow" viewBox="0 0 460 460"><defs><path id="circle-button-text" d="M230,380 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path></defs><text className="text-uppercase text-[2.1rem] uppercase"><textPath fill="currentColor" href="#circle-button-text">Coming Soon — Coming Soon — Coming Soon — </textPath></text></svg>
          </div>
          <p>Stay Tuned!</p>
        </section>

        <svg height="0" className="hidden">
          <filter id="ripples" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              type="turbulence"
              id="ripple-turbulence"
              numOctaves="1"
              seed="0.1"
              baseFrequency="0.02 0.05"
            ></feTurbulence>
            <feDisplacementMap scale="10" in="SourceGraphic"></feDisplacementMap>
            <animate
              href="#ripple-turbulence"
              attributeName="baseFrequency"
              dur="75s"
              keyTimes="0;0.5;1"
              values="0.02 0.03; 0.04 0.04; 0.02 0.03"
              repeatCount="indefinite"
            ></animate>
          </filter>

          <filter id="ripples2" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              type="turbulence"
              numOctaves="5"
              seed="0"
              baseFrequency="0.03 0.04"
            ></feTurbulence>
            <feDisplacementMap scale="5" in="SourceGraphic"></feDisplacementMap>
          </filter>
        </svg>

        {/* footer */}
        <footer className="py-8">
          <div className="text-center">
            <span className="text-sm text-balance inline-block">&copy; {new Date().getFullYear()} by Slink — Developed by <Link className="relative after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-0 after:left-0 hover:after:left-auto hover:after:right-0 after:bottom-0" href="https://themeforest.net/user/platol/portfolio" aria-label="Slink">Platol</Link></span>
          </div>
        </footer>
      </motion.section>

      {/* sidebar */}
      <motion.aside
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className={`${isNotifyOpen ? "" : "translate-x-full lg:translate-x-0"} transition lg:transition-none duration-200 fixed lg:static h-screen z-[9999] bg-white lg:bg-white/30 top-0 right-0 w-[90%] md:w-[60%] lg:w-[40%] xl:w-[33%] lg:max-w-[490px]`}
      >
        
        {/* close button */}
        <button type="button" onClick={toggleNotifyPanel} className="cursor-pointer block lg:hidden absolute top-6 sm:top-8 right-4 sm:right-8 opacity-20 transition duration-200 hover:opacity-100 p-3 bg-white z-50" aria-label="Close Notify me">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 5L5 19M5 5l14 14" color="currentColor"/></svg>
        </button>

        {/* content */}
        <div className="p-8 sm:p-10 flex flex-col h-full overflow-y-auto">
          <div className="mb-12 sm:mb-16">
            <Link className="font-bold text-3xl inline-block lg:hidden mb-8 sm:mb-16" href="/" aria-label="Logo">Slink</Link>

            <p className="mb-2 sm:mb-3 opacity-75 text-sm">We are almost ready to launch!</p>
            <p className="text-2xl sm:text-3xl mb-6 sm:mb-8">Be the first to know</p>

            <form onSubmit={handleSubmit}>
              <label
                className="block mb-2 text-sm"
                htmlFor="email"
              >
                Enter your email <span className="text-red-500">*</span>
              </label>
              
              <div className="flex items-center">
                <input
                  className="block w-full h-12 pe-4 focus:outline-none border-b border-gray-300 hover:border-gray-200 focus:border-[var(--primary)] transition duration-200 peer"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  className="cursor-pointer text-gray-400 border-b border-gray-300 focus:border-[var(--primary)] flex-1 h-12 w-full transition duration-200 focus:outline-none peer-focus:border-[var(--primary)] peer-focus:text-[var(--primary)] focus:text-[var(--primary)] hover:text-[var(--primary)] hover:border-[var(--primary)] focus:shadow-none overflow-clip"
                  type="submit"
                  aria-label="Submit notify email"
                  disabled={buttonState === "loading"}
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
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
              </div>
              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </form>
          </div>


          <div className="mt-auto">
            <hr className="w-10 block mb-8" />

            <p className="mb-6 opacity-60 text-[15px]">About Slink</p>
            <p className="text-[15px] sm:text-base leading-relaxed sm:leading-loose">We are a team of designers and developers that create high performing website templates and applications. Stay tuned! we are launching soon.</p>

            <ul className="flex gap-3 mt-8 [&_a]:bg-gray-100">
              <li className="hover:filter-[url(#ripples2)]">
                <Link className="w-full h-10 min-w-10 grid place-content-center hover:border-[var(--primary)] transition duration-200 hover:bg-[var(--primary)] hover:text-white" href="#">
                  <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                </Link>
              </li>
              <li className="hover:filter-[url(#ripples2)]">
                <Link className="w-full h-10 min-w-10 grid place-content-center hover:border-[var(--primary)] transition duration-200 hover:bg-[var(--primary)] hover:text-white" href="#">
                  <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                </Link>
              </li>
              <li className="hover:filter-[url(#ripples2)]">
                <Link className="w-full h-10 min-w-10 grid place-content-center hover:border-[var(--primary)] transition duration-200 hover:bg-[var(--primary)] hover:text-white" href="#">
                  <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                </Link>
              </li>
              <li className="hover:filter-[url(#ripples2)]">
                <Link className="w-full h-10 min-w-10 grid place-content-center hover:border-[var(--primary)] transition duration-200 hover:bg-[var(--primary)] hover:text-white" href="#">
                <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.aside>

      {/* sidebar overlay */}
      <section
        onClick={toggleNotifyPanel}
        className={`${isNotifyOpen ? "" : "opacity-0 visisbility-hidden pointer-events-none"} fixed top-0 left-0 w-full h-full bg-black/50 z-[9990] transition duration-200 cursor-pointer`}
        aria-hidden="true"
      ></section>
    </main>
  );
}

export default Demo2;