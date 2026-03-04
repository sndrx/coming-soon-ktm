"use client"

import { Faculty_Glyphic } from "next/font/google";
const facultyGlyphic = Faculty_Glyphic({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

import "@/styles/demo/demo1.scss";

const Demo1 = () => {
  const emailInputRef = useRef();
  const aboutRef = useRef();
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  
  const toggleNotifyPanel = ( status ) => {
    setIsNotifyOpen((prev) => !prev);

    const target = emailInputRef.current;
    if (target && status !== "about") {
      setTimeout(() => { target.focus() }, 200);
    }
    if (status === "about" && aboutRef.current) {
      aboutRef.current.style.background = "#FFFF00";
      aboutRef.current.style.color = "#000000";
  
      setTimeout(() => {
        aboutRef.current.style.background = "";
        aboutRef.current.style.color = "";
      }, 2000);
    }
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
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" color="currentColor"><path d="m7 7.5l2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 7.5"/><path d="M11.5 19.5s-1.43-.012-2.401-.037c-3.149-.079-4.723-.118-5.854-1.254c-1.131-1.135-1.164-2.668-1.23-5.733a69 69 0 0 1 0-2.952c.066-3.065.099-4.598 1.23-5.733C4.376 2.655 5.95 2.616 9.099 2.537a115 115 0 0 1 5.802 0c3.149.079 4.723.118 5.854 1.254c1.131 1.135 1.164 2.668 1.23 5.733c.007.357.012.976.014 1.476M14 17.5h8m-4 4v-8"/></g></svg>
        <span>Subscribe</span>
      </>
    ),
    loading: (
      <motion.div className="h-2 w-2 sm:h-4 sm:w-4 animate-spin rounded-full border-2 border-white border-t-transparent mx-auto" />
    ),
    success: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11" color="currentColor"/></svg>
        <span>Done</span>
      </>
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
    <main className={`${facultyGlyphic.className} main-content-1 px-8 min-h-screen bg-no-repeat bg-cover`}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="flex justify-between items-center py-8"
      >
        <div className="w-1/2">
          <Link className="font-bold text-3xl" href="/" aria-label="Logo">Slink</Link>
        </div>
        <div className="w-1/2 text-end">
          <button type="button" className="cursor-pointer relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 after:pointer-events-none" aria-label="Open About and Subscription Panel">
            <span className="block sm:hidden" onClick={() => toggleNotifyPanel()}>Notify Me</span>
            <span className="hidden sm:block" onClick={() => toggleNotifyPanel("about")}>About Us</span>
          </button>
        </div>
      </motion.header>

      {/* Content */}
      <section className="grid place-content-center text-center h-[calc(100vh-200px)]"
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >Our New Site Is</motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="filter-[url(#ripples)]"
        >
          <svg className="w-64 sm:w-96 animate-spin-slow" viewBox="0 0 460 460"><defs><path id="circle-button-text" d="M230,380 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path></defs><text className="text-uppercase text-[2.1rem] uppercase"><textPath fill="currentColor" href="#circle-button-text">Coming Soon — Coming Soon — Coming Soon — </textPath></text></svg>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >Stay Tuned!</motion.p>
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
      </svg>

      {/* sidebar */}
      <aside className={`${isNotifyOpen ? "" : "-translate-x-full"} transition duration-200 fixed h-full top-0 left-0 z-[9998] w-[90%] md:w-[60%] lg:w-1/2 xl:w-[35%] bg-white text-black`}>
        
        {/* close button */}
        <button type="button" onClick={() => toggleNotifyPanel()} className="cursor-pointer absolute top-6 sm:top-11 right-4 sm:right-9 opacity-20 transition duration-200 hover:opacity-100 p-3 bg-white z-50 overflow-clip" aria-label="Close Notify me">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 5L5 19M5 5l14 14" color="currentColor"/></svg>
        </button>

        {/* content */}
        <div className="p-8 sm:p-12 flex flex-col h-full overflow-y-auto">
          <div className="mb-12 sm:mb-16">
            <Link className="font-bold text-3xl inline-block mb-8 sm:mb-16" href="/" aria-label="Logo">Slink</Link>

            <p className="mb-2 sm:mb-3 opacity-75 text-sm">We are almost ready to launch!</p>
            <p className="text-2xl sm:text-3xl mb-6 sm:mb-8">Be the first to know</p>

            <form onSubmit={handleSubmit}>
              <label
                className="block mb-2 text-sm"
                htmlFor="email"
              >
                Enter your email <span className="text-red-500">*</span>
              </label>
              
              <div className="sm:flex gap-1 items-center">
                <input
                  className="block w-full px-4 h-12 focus:outline-none focus:bg-white border-2 border-gray-100 hover:border-gray-200 rounded-md focus:border-[var(--primary-shade)] transition duration-200 peer"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@email.com"
                  aria-label="Enter your email"
                  ref={emailInputRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  className="cursor-pointer flex justify-center items-center gap-2 text-black bg-gray-100 flex-1 px-6 h-12 w-full transition duration-200 rounded-md hover:bg-[var(--primary-shade)] hover:text-white focus:outline-[var(--primary-shade)] peer-focus:bg-[var(--primary-shade)] peer-focus:text-white focus:shadow-none mt-1 sm:mt-0"
                  type="submit"
                  aria-label="Submit notify email"
                  disabled={buttonState === "loading"}
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      className="flex items-center gap-2"
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
            <p ref={aboutRef} className="mb-6 text-black/50 text-[15px] inline-block">About Slink</p>
            <p className="text-[15px] sm:text-base leading-relaxed sm:leading-loose">We are a team of designers and developers that create high performing website templates and applications. Stay tuned! we are launching soon.</p>

            <ul className="flex items-center flex-wrap gap-6 mt-8">
              <li>
                <Link className="hover:scale-110 transition duration-200 inline-block" href="#">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                </Link>
              </li>
              <li>
                <Link className="hover:scale-110 transition duration-200 inline-block" href="#">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                </Link>
              </li>
              <li>
                <Link className="hover:scale-110 transition duration-200 inline-block" href="#">
                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {/* sidebar overlay */}
      <section
        onClick={() => toggleNotifyPanel()}
        className={`${isNotifyOpen ? "" : "opacity-0 visisbility-hidden pointer-events-none"} fixed top-0 left-0 w-full h-full bg-black/50 z-[9990] transition duration-200 cursor-pointer`}
        aria-hidden="true"
      ></section>

      {/* footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="sm:flex justify-between items-center py-8"
      >
        <div className="w-full sm:w-2/3 text-center sm:text-start">
          <span className="text-sm text-balance inline-block">&copy; {new Date().getFullYear()} by Slink — Developed by <Link className="relative after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-0 after:left-0 hover:after:left-auto hover:after:right-0 after:bottom-0" href="https://themeforest.net/user/platol/portfolio" aria-label="Slink">Platol</Link></span>
        </div>
        <div className="w-1/3 text-end hidden sm:block">
          <button onClick={() => toggleNotifyPanel()} type="button" className="cursor-pointer relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0" href="/" aria-label="Open Nofify me panel">Notify Me</button>
        </div>
      </motion.footer>
    </main>
  );
}

export default Demo1;