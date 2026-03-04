"use client"

import { Bricolage_Grotesque } from "next/font/google";
const bricolageGrotesque = Bricolage_Grotesque({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

import { motion } from "motion/react";
import Link from "next/link";
import CirclingElements from "./components/CirclingElements";
import FitText from "./components/FitText";
import VerticalCutReveal from "./components/VerticalCutReveal";
import useScreenSize from "./hooks/useScreenSize";

import "@/styles/demo/demo6.scss";
import Image from "next/image";

const Demo6 = () => {
  const screenSize = useScreenSize();
  const communityImages = [
    "/demo-6/01.jpg",
    "/demo-6/02.jpg",
    "/demo-6/03.jpg",
    "/demo-6/04.jpg",
    "/demo-6/05.jpg",
    "/demo-6/06.jpg",
    "/demo-6/07.jpg",
    "/demo-6/08.jpg",
    "/demo-6/09.jpg",
    "/demo-6/10.jpg",
    "/demo-6/11.jpg",
    "/demo-6/12.jpg",
  ];
  const communityImageLength = communityImages.length;

  return (
    <main className={`main-content-6 ${bricolageGrotesque.className} w-full overflow-hidden`}>
      {/* main-content */}
      <section className="relative h-[70vh]">
        
        <Link href="/" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-2xl z-50">
          <motion.div
            initial={{ y: 150, scale: 1.75 }}
            animate={{ y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
              duration: 0.3,
              delay: communityImageLength * 0.06
            }}
          >
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.05}
              staggerFrom="center"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
              }}
            >
              {`Slink & CO`}
            </VerticalCutReveal>
          </motion.div>
        </Link>
        
        <CirclingElements radius={screenSize.lessThan(`sm`) ? 110 : 140}>
          {communityImages.map((image, index) => (
            <div
              key={index}
              className="w-16 h-16 md:w-20 md:h-20 absolute -translate-x-1/2 -translate-y-1/2 bg-white/10 rounded-clip"
            >
              <Image src={image} fill alt="image" className="object-cover rounded-clip" />
            </div>
          ))}
        </CirclingElements>
      </section>

      <section className="pb-20 pt-6 px-6">
        <div className="text-xl sm:text-3xl mb-6 sm:mb-8 leading-snug max-w-[360px] sm:max-w-[550px] mx-auto text-balance text-center">
        <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.005}
            staggerFrom="random"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 40,
              delay: 0.3,
            }}
            containerClassName="justify-center"
          >
            {`Join our newsletter to be the first to know when Slink launches.`}
          </VerticalCutReveal>
        </div>

        <form action="#" className="max-w-96 mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="flex items-center"
          >
            <input
              className="text-sm sm:text-base bg-white text-black block grow h-13 px-6 focus:outline-none rounded-full"
              type="email"
              name="email"
              id="email"
              placeholder="eg: alex@email.com"
              required
            />

            <button className="cursor-pointer text-sm sm:text-base bg-white text-black p-0 w-13 h-13 focus:outline-none focus:shadow-none rounded-full grid place-content-center transition-all hover:opacity-95 group relative overflow-clip -rotate-30" type="submit" aria-label="Submit notify email">
              <span className="inline-block">
                <svg className="transition-all group-hover:translate-x-[40px]" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                <svg className="transition-all absolute top-[14px] left-[-30px] group-hover:left-[14px]" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </button>
          </motion.div>
        </form>
      </section>

      {/* footer */}
      <footer className="px-6 py-8">
        <div className="container mx-auto text-center">
          
          <motion.ul
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-4 [&_li]:leading-[0] [&_a]:bg-white/10 [&_a]:rounded-lg mb-5 text-[15px]"
          >
            <li>
              <Link className="hover:scale-105 transition duration-200 inline-block py-4 px-3" href="#">
                X .COM
              </Link>
            </li>
            <li>
              <Link className="hover:scale-105 transition duration-200 inline-block py-4 px-3" href="#">
                Facebook
              </Link>
            </li>
            <li>
              <Link className="hover:scale-105 transition duration-200 inline-block py-4 px-3" href="#">
                Instagram
              </Link>
            </li>
          </motion.ul>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-[15px] text-balance">&copy; {new Date().getFullYear()} by Slink — Developed by <Link className="relative after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-0 after:left-0 hover:after:left-auto hover:after:right-0 after:bottom-0" href="https://themeforest.net/user/platol/portfolio" aria-label="Slink">Platol</Link></motion.p>
        </div>
      </footer>

      <div className="fixed -bottom-4 md:-bottom-6 w-full text-center pointer-events-none -z-50 text-white/3">
        <FitText className="leading-[1]" as="p">Slink & CO</FitText>
      </div>
    </main>
  );
}

export default Demo6;