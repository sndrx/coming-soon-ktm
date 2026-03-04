"use client"

import { Bodoni_Moda, Bricolage_Grotesque } from "next/font/google";
const bricolageGrotesque = Bricolage_Grotesque({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});
const bodoniModa = Bodoni_Moda({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import Floating, { FloatingElement } from "./components/Floating";

import "@/styles/demo/demo5.scss";
import Image from "next/image";

const Demo5 = () => {
  const subscribeRef = useRef(null);
  const handleSubscribeButton = (e) => {
    e.preventDefault();
    const target = subscribeRef.current;
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      const input = target.querySelector("input");
      setTimeout(() => {
        if (input) input.focus();
      }, 450);
    }
  }

  const [menuOpen, setMenuOpen] = useState(false);

  // START :: Subscribe button
  const [buttonState, setButtonState] = useState('idle')
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const isValidEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  }

  const buttonCopy = {
    idle: "Subscribe",
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
    <main className={`main-content-5 ${bricolageGrotesque.className} w-full overflow-hidden`}>
      {/* header */}
      <motion.header
        initial={{ opacity: 0, translateY: -60 }}
        animate={{ opacity: 1, translateY: 0 }} 
        transition={{ duration: 0.3, delay: 1 }} 
        className="fixed w-full top-0 z-[5000] py-3 sm:py-5 px-5 bg-linear-to-t from-[var(--bg)]/0 to-[var(--bg)]/90 backdrop-blur-[1px] origin-top"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap md:justify-between items-center">
            <div className="md:w-1/3">
              <Link className="font-bold text-2xl" href="/" aria-label="Logo">Slink & CO</Link>
            </div>
            <div className={`${menuOpen ? "flex bg-white rounded-lg" : "hidden md:flex"} order-last md:order-none w-full mt-2 md:mt-0 py-6 md:py-0 flex flex-col md:flex-row md:w-1/3 text-center gap-4 md:gap-12 justify-center items-center transition-all duration-300`}>
              <Link href="#" className="cursor-pointer relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 after:pointer-events-none">Services</Link>
              <Link href="#" className="cursor-pointer relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 after:pointer-events-none">Resources</Link>
              <Link href="#" className="cursor-pointer relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 after:pointer-events-none">Support</Link>
            </div>

            <div className="md:w-1/3 text-end ml-auto md:ml-0">
              <div className="flex items-center justify-end">
                <Link href="#" className="hover:scale-[1.03] transition duration-300">
                  <svg className="h-11 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.7 41">
                    <path fill="#A6A6A6" d="M110.1 0H7.5l-2 .2A7 7 0 0 0 2 2 6 6 0 0 0 .2 5.5l-.2 2v25l.2 2A7 7 0 0 0 2 38a6 6 0 0 0 3.5 1.8l3 .2h102.7l3-.2a7 7 0 0 0 3.5-1.8 6 6 0 0 0 1.8-3.5l.2-2v-25l-.2-2a7 7 0 0 0-1.8-3.5A6 6 0 0 0 114 .2l-2-.2z" />
                    <path d="M8.4 39.1 5.7 39a6 6 0 0 1-3-1.6 5 5 0 0 1-1.6-3l-.2-2.9v-24l.2-1.8a6 6 0 0 1 1.5-3 6 6 0 0 1 3-1.6l2-.2h104.6l1.8.2 1.7.5a6 6 0 0 1 3 4v28.7a6 6 0 0 1-1.6 3A5 5 0 0 1 114 39l-2.8.1z" />
                    <path d="M24.8 20.3c0-2.8 2.2-4 2.3-4.2a5 5 0 0 0-4-2.1c-1.6-.2-3.3 1-4.1 1-.9 0-2.2-1-3.6-1q-3 .1-4.5 2.8c-2 3.3-.5 8.2 1.4 11 .9 1.3 2 2.7 3.4 2.7s1.9-.9 3.6-.9c1.6 0 2.1.9 3.5.9 1.5 0 2.5-1.4 3.4-2.7 1-1.5 1.5-3 1.5-3.1 0 0-2.9-1.1-3-4.4M22 12.2q1.3-1.5 1.2-3.5a5 5 0 0 0-3.3 1.7c-.6.8-1.3 2.1-1.1 3.3q2 0 3.2-1.5m20.3 14.9h-4.7l-1.2 3.4h-2L39 18.1h2l4.6 12.4h-2zm-4.2-1.5h3.7L40 20zm17.1.4c0 2.8-1.5 4.6-3.8 4.6q-2 0-2.9-1.6v4.5h-1.9v-12h1.8v1.4q1-1.6 3-1.6c2.2 0 3.8 1.9 3.8 4.7m-2 0q-.1-3-2.3-3-2.3.1-2.4 3 .1 2.9 2.4 3 2.2-.1 2.4-3m11.8 0q-.2 4.4-3.8 4.6-2 0-2.8-1.6v4.5h-1.9v-12h1.8v1.4q.8-1.6 3-1.6c2.2 0 3.7 1.9 3.7 4.7m-1.9 0q-.1-3-2.4-3-2.2.1-2.4 3 .2 2.9 2.4 3 2.3-.1 2.4-3m8.5 1q.3 2 3 2c1.5 0 2.7-.7 2.7-1.8q0-1.5-2.3-2l-1.6-.4q-3.4-.7-3.4-3.3c0-2.2 1.9-3.6 4.6-3.6s4.4 1.4 4.4 3.6h-1.8q-.4-2-2.7-2c-2.3 0-2.5.8-2.5 1.9q0 1.2 2.3 1.7l1.3.4q3.8.8 3.6 3.4-.2 3.6-4.8 3.8c-2.7 0-4.6-1.4-4.7-3.7zm11.6-7.7v2.1h1.8V23h-1.8v5q0 1.2 1.1 1.1h.7v1.5h-1q-2.8.1-2.6-2.4V23h-1.3v-1.5h1.3v-2.1zM86 26q.2-4.5 4.4-4.7c2.6 0 4.3 1.8 4.3 4.7 0 2.8-1.7 4.6-4.3 4.6-2.7 0-4.3-1.8-4.3-4.6m6.8 0q-.1-3-2.4-3.1c-2.3-.1-2.4 1.1-2.4 3q0 3.1 2.4 3.2c2.4 0 2.4-1.2 2.4-3.1m3.3-4.6H98V23q.5-1.6 2.2-1.7l.6.1v1.8l-.8-.2q-1.9.1-2 2.1v5.4h-1.8zm13.2 6.4c-.3 1.7-1.9 2.8-4 2.8-2.5 0-4.2-1.8-4.2-4.6s1.7-4.7 4.2-4.7 4 1.8 4 4.5v.6h-6.3v.1q.1 2.5 2.4 2.6 1.7 0 2.1-1.3zm-6.3-2.7h4.5q-.1-2.2-2.2-2.3-2 .2-2.3 2.3M38 8.7q1.9.1 2 2-.2 1.9-2 2h-1.4v2h-1v-6zM36.6 12h1.2q1.2 0 1.2-1.2t-1.2-1.2h-1.2zm4.6-1.8h.8v.7h.1q.2-.8 1.2-.8h.4v1l-.5-.1q-1 0-1.1 1v2.7h-1zm7.2 3.3q-.4 1.3-2 1.3-1.9-.1-2-2.3.1-2.3 2-2.4 2 .1 2 2.3v.3h-3.1q0 1.3 1.2 1.3.8 0 1-.5zM45.3 12h2.2q0-1-1-1.1-1.1 0-1.2 1.1m4.4.7V12h2.7v.8zm3.9-.3q0-2.2 2.1-2.3 2 .1 2.1 2.3 0 2.3-2.1 2.4-2 0-2.1-2.4m3.3 0q0-1.5-1.2-1.5t-1.2 1.5 1.2 1.6 1.2-1.6m2.1-2.2h.9v.7q.4-.8 1.3-.8h.4v1L61 11q-1.1 0-1.2 1v2.7H59zm3.2 2.2q0-2.2 1.9-2.3 1 0 1.3.8h.1V8.4h.9v6.3h-.9V14q-.5.8-1.4.8-1.8-.2-1.9-2.4m1 0q0 1.6 1.1 1.6t1.2-1.6-1.2-1.5q-1.1 0-1.2 1.5m8.6 1.1q-.4 1.3-2 1.3-2-.1-2-2.3 0-2.3 2-2.4 2 .1 2 2.3v.3h-3.2q0 1.3 1.2 1.3 1 0 1.1-.5zM68.5 12h2.3q0-1-1-1.1-1.2 0-1.3 1.1m4.5-1.8h.8v.7q.4-.8 1.3-.8h.3v1L75 11q-1.1 0-1.2 1v2.7h-.9zm5.6 2.2q.1-2.2 2.2-2.3 2 .1 2.1 2.3 0 2.3-2.1 2.4-2 0-2.2-2.4m3.4 0q0-1.5-1.2-1.5t-1.2 1.5 1.2 1.6q1.1 0 1.2-1.6m2-2.2h1v.7q.3-.8 1.4-.8 1.5 0 1.5 1.7v2.9H87V12q0-1-1-1c-1 0-1 .4-1 1v2.7h-1zM93 9v1.2h1v.8h-1v2.3q0 .7.6.7h.3v.7h-.5q-1.4 0-1.4-1.2V11h-.7v-.8h.7V9.1zm2.1-.6h.9V11q.5-.8 1.4-.8 1.5 0 1.6 1.7v2.9h-.9V12q0-1-1-1t-1 1v2.7h-1zm9.1 5.1q-.4 1.3-2 1.3-2-.1-2-2.3.1-2.3 2-2.4 2 .1 2 2.3v.3h-3.1q0 1.3 1.2 1.3.8 0 1-.5zM101 12h2.2q0-1-1-1.1-1.1 0-1.2 1.1" fill="#FFF" />
                  </svg>
                </Link>
              </div>
            </div>

            <button className="cursor-pointer block md:hidden text-black ml-4 relative w-6 h-6" type="button" aria-label="Open Menu" title="Open Menu" onClick={() => setMenuOpen(!menuOpen)}>
              <AnimatePresence>
                {menuOpen ? (
                  <motion.svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }} key="open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></motion.svg>
                ) : (
                  <motion.svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }} key="close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></motion.svg>
                )}
                </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* main-content */}
      <section className="relative max-w-[1410px] mx-auto h-screen max-h-[1000px] flex items-center justify-center">
        <motion.div
          className="z-50 text-center space-y-4 items-center flex flex-col px-6"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring",
            visualDuration: 0.4,
            bounce: 0.3,
            delay: 0.05
          }}
        >
          <div className="text-4xl md:text-6xl leading-[1.2] mb-4 md:mb-6">
            <p>Slink Studio</p>
            <p>
              <span className={`!italic uppercase text-3xl md:text-5xl ${bodoniModa.className}`}>Launching</span> SOON
            </p>
          </div>
          <p className="md:text-lg mb-6 md:mb-8 text-balance text-black/75">Placehold your website with Slink.</p>

          <button type="button" onClick={handleSubscribeButton} className="cursor-pointer bg-[var(--primary)] inline-block text-white px-7 py-3 rounded-lg hover:brightness-115 transition duration-300">
            Join the waitlist
          </button>
        </motion.div>

        <Floating sensitivity={-0.5} className="no-transform-mobile [&_img]:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          <FloatingElement depth={1.5} className="top-[12%] lg:top-[16%] start-3 lg:start-[10%]">
            <motion.div
              initial={{ scale: 0.5, y: -100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                visualDuration: 0.4,
                bounce: 0.3,
                delay: 0.3 + 0.2
              }}
            >
              <Image
                src="/demo-5/01.jpg"
                alt="01"
                className="d-block w-16 lg:w-36 aspect-square object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg"
                height={100}
                width={100}
              />
            </motion.div>
          </FloatingElement>

          <FloatingElement depth={2} className="top-20 lg:top-[-5%] end-[-5%] lg:end-[13%]">
            <motion.div
              initial={{ scale: 0.5, y: -100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                visualDuration: 0.4,
                bounce: 0.3,
                delay: 0.3
              }}
            >
              <Image
                src="/demo-5/06.jpg"
                alt="03"
                className="d-block w-26 lg:w-40 aspect-[4/5] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg"
                height={100}
                width={100}
              />
            </motion.div>
          </FloatingElement>

          <FloatingElement depth={1.75} className="bottom-10 sm:bottom-25 start-[8%]">
            <motion.div
              initial={{ scale: 0.5, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                visualDuration: 0.4,
                bounce: 0.3,
                delay: 0.3 + 0.2
              }}
            >
              <Image
                src="/demo-5/04.jpg"
                alt="04"
                className="d-block w-20 lg:w-36 aspect-[4/5] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg"
                height={100}
                width={100}
              />
            </motion.div>
          </FloatingElement>
          <FloatingElement depth={2.5} className="bottom-0 lg:bottom-[-5%] start-[15%] hidden sm:block">
            <motion.div
              initial={{ scale: 0.5, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                visualDuration: 0.4,
                bounce: 0.3,
                delay: 0.3 + 0.35
              }}
            >
              <Image
                src="/demo-5/03.jpg"
                alt="05"
                className="d-block w-26 lg:w-46 aspect-[8/10] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg"
                height={100}
                width={100}
              />
            </motion.div>
          </FloatingElement>

          <FloatingElement depth={1} className="bottom-[-7%] start-[40%] lg:start-[45%]">
            <motion.div
              initial={{ scale: 0.5, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                visualDuration: 0.4,
                bounce: 0.3,
                delay: 0.3 + 0.2
              }}
            >
              <Image
                src="/demo-5/07.jpg"
                alt="07"
                className="d-block w-20 lg:w-32 aspect-[8/10] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg"
                height={100}
                width={100}
              />
            </motion.div>
          </FloatingElement>

          <FloatingElement depth={1.75} className="bottom-[5%] end-[17%] hidden sm:block">
            <motion.div
              initial={{ scale: 0.5, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                visualDuration: 0.4,
                bounce: 0.3,
                delay: 0.3 + 0.25
              }}
            >
              <Image
                src="/demo-5/02.jpg"
                alt="08"
                className="d-block w-18 lg:w-28 aspect-square object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg"
                height={100}
                width={100}
              />
            </motion.div>
          </FloatingElement>
          <FloatingElement depth={2.5} className="bottom-10 md:bottom-[10%] end-[6%]">
            <motion.div
              initial={{ scale: 0.5, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                visualDuration: 0.4,
                bounce: 0.3,
                delay: 0.3 + 0.1
              }}
            >
              <Image
                src="/demo-5/05.jpg"
                alt="06"
                className="d-block w-24 lg:w-42 aspect-[8/12] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg"
                height={100}
                width={100}
              />
            </motion.div>
          </FloatingElement>
        </Floating>
      </section>

      <section
        className="pt-30 pb-16 px-6"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.05) 100%, rgba(255,255,255,0) 100%)" }}
      >
        <p className="text-xl sm:text-3xl mb-6 sm:mb-8 leading-snug max-w-[550px] mx-auto text-balance text-center">Join our newsletter to be the first to know when Slink launches.</p>

        <form ref={subscribeRef} onSubmit={handleSubmit} className="max-w-96 mx-auto border-2 border-transparent focus-within:border-[var(--primary)] rounded-[10px] group transition duration-200 shadow-2xl">
          <div className="flex items-center">
            <input
              className="peer text-sm sm:text-base bg-white text-black block w-full h-12 ps-4 focus:outline-none focus:bg-white focus:text-black transition duration-200 focus:placeholder:text-black/50 rounded-s-lg"
              type="email"
              name="email"
              id="email"
              placeholder="eg: alex@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="cursor-pointer text-sm sm:text-base bg-white text-black hover:text-[var(--primary)] peer-focus:text-[var(--primary)] px-5 flex-1 h-12 w-full transition duration-200 focus:outline-none focus:shadow-none relative after:absolute after:content-[''] after:h-4 after:w-px after:left-0 after:top-[calc(50%-8px)] after:bg-black/25 rounded-e-lg overflow-clip"
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
        </form>
        {error && <p className="text-dark text-xs mt-2 text-center">{error}</p>}
      </section>

      {/* footer */}
      <footer className="px-8 py-8 mt-1">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="md:w-1/2 text-center md:text-start order-2 md:order-1">
              <span className="text-sm text-balance inline-block">&copy; {new Date().getFullYear()} by Slink — Developed by <Link className="relative after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-0 after:left-0 hover:after:left-auto hover:after:right-0 after:bottom-0" href="https://themeforest.net/user/platol/portfolio" aria-label="Slink">Platol</Link></span>
            </div>
            <div className="md:w-1/2 mb-6 md:mb-0 order-1 md:order-2">
              <ul className="flex items-center justify-center md:justify-end flex-wrap gap-4 [&_li]:leading-[0] [&_a]:bg-white [&_a]:rounded-lg">
                <li>
                  <Link className="hover:scale-105 transition duration-200 inline-block p-3" href="#">
                    <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                  </Link>
                </li>
                <li>
                  <Link className="hover:scale-105 transition duration-200 inline-block p-3" href="#">
                    <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                  </Link>
                </li>
                <li>
                  <Link className="hover:scale-105 transition duration-200 inline-block p-3" href="#">
                    <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Demo5;