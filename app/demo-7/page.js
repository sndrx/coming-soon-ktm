"use client"

import { Antonio, Bricolage_Grotesque } from "next/font/google";
const bricolageGrotesque = Bricolage_Grotesque({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: '--font-bricolage-grotesque',
});

const antonio = Antonio({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: '--font-antonio',
});

import { motion } from "motion/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Countdown from "./components/Countdown";
import Ripple from "./components/Ripple";

import "@/styles/demo/demo7.scss";

const Demo7 = () => {
  return (
    <main className={`main-content-7 ${bricolageGrotesque.className} w-full overflow-clip`}>
      <motion.div
        initial={{ y: "-100px" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className={`${bricolageGrotesque.className} capitalize sticky text-xs sm:text-sm w-full max-w-full left-0 top-0 overflow-clip z-50`}
      >
        <Marquee direction="right" className="py-1 bg-[var(--primary)] text-white">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="mx-2.5 md:mx-4">
              <span className="italic">Stay TUNED</span> <span className="px-2">—</span> Coming SOON
            </div>
          ))}
        </Marquee>
      </motion.div>

      {/* main-content */}
      <div className="relative flex h-[80vh] w-full flex-col items-center justify-center">
        <div className={`-mt-16 text-center ${antonio.variable} ${bricolageGrotesque.variable}`}>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="text-2xl font-bold mb-12 inline-block">Slink & CO</Link>
          </motion.p>

          <Countdown date={`2026-02-20T00:00:00`} />
        </div>

        <Ripple />
      </div>

      <section className="-mt-20 pb-16 px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="text-xl sm:text-3xl mb-6 sm:mb-8 leading-snug max-w-[550px] mx-auto text-balance text-center"
        >Join our waitlist to be the first to know at our launches.</motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          action="#" 
          className="max-w-96 mx-auto border-2 border-transparent focus-within:border-[var(--primary)] rounded-[10px] group shadow-2xl"
        >
          <div className="flex items-center">
            <input
              className="peer text-sm sm:text-base bg-white text-black block w-full h-12 ps-4 focus:outline-none focus:bg-white focus:text-black transition duration-200 focus:placeholder:text-black/50 rounded-s-lg"
              type="email"
              name="email"
              id="email"
              placeholder="eg: alex@email.com"
              required
            />

            <button className="flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base bg-white text-black hover:opacity-50 peer-focus:text-[var(--primary)] px-5 flex-1 h-12 w-full transition duration-200 focus:outline-none focus:shadow-none relative after:absolute after:content-[''] after:h-4 after:w-px after:left-0 after:top-[calc(50%-8px)] after:bg-black/25 rounded-e-lg" type="submit" aria-label="Submit notify email">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentcolor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 108 0A4 4 0 008 7"></path><path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M6 21v-2a4 4 0 014-4h4"></path></svg>
              Join
            </button>
          </div>
        </motion.form>
      </section>

      {/* footer */}
      <footer className="px-8 py-8 mt-1">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="md:w-1/2 text-center md:text-start order-2 md:order-1">
              <span className="text-sm text-balance inline-block">&copy; {new Date().getFullYear()} by Slink — Developed by <Link className="relative after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-0 after:left-0 hover:after:left-auto hover:after:right-0 after:bottom-0" href="https://themeforest.net/user/platol/portfolio" aria-label="Slink">Platol</Link></span>
            </div>
            <div className="md:w-1/2 mb-6 md:mb-0 order-1 md:order-2">
              <ul className="flex items-center justify-center md:justify-end flex-wrap gap-4 [&_li]:leading-[0] [&_a]:bg-black/4 [&_a]:rounded-lg">
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

export default Demo7;