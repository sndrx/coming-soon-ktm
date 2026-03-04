"use client"

import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  weight: ["300", "400"],
  display: "swap",
  subsets: ["latin"],
  style: 'italic'
});

import { motion } from "motion/react";
import Link from "next/link";
import Balatro from "./components/Balatro";
import ScrambleHover from "./components/ScrambleHover";

import "@/styles/demo/demo9.scss";

const Demo9 = () => {
  return (
    <main className={`main-content-9 ${urbanist.className} overflow-clip`}>
      <div className="fixed h-screen w-screen pointer-events-none -z-10">
        <Balatro
          isRotate={true}
          mouseInteraction={false}
          pixelFilter={5000}
          color1="#ffffff"
          color2="#fafafa"
          color3="#eeeeee"
          spinAmount={0.1}
          spinRotation={0.1}
          // contrast={0.5}
          // lighting={1}
          // spinSpeed={-10}
        />
      </div>
      
      <div className="flex">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-1/3 hidden lg:block"
        >
          {/* content */}
          <div className="p-8 sm:p-10 h-full">
            <Link href="/" className="text-4xl fixed top-10">Slinkton <br /> Alberto</Link>

            <span className="fixed bottom-10 left-10 h-5 w-5 bg-black rounded-full -skew-x-6"></span>
          </div>
        </motion.div>

        {/* main content */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="px-8 flex-1"
        >
          {/* Content */}
          <div className="py-8 sm:py-10 w-full">
            <div className="h-[70vh]">
              <Link href="/" className="text-2xl lg:hidden mb-10 inline-block pt-10 sm:pt-0">
                Slinkton Alberto
              </Link>

              <p className="text-4xl sm:text-5xl leading-12 sm:leading-15">
                Independent <br />
                Creative Developer
              </p>
            </div>

            <p className="text-lg font-[300] mb-8">Projects</p>
            <ul className="text-4xl flex flex-col gap-3 [&_i]:text-sm [&_i]:text-[#f54900] [&_i]:align-top [&_i]:opacity-0 [&_a]:hover:[&_i]:opacity-100 [&_a]:hover:[&_i]:delay-[0.42s]">
              <li><Link href="#!"><ScrambleHover text="NexaSite"/> <i>(2024)</i></Link></li>
              <li><Link href="#!"><ScrambleHover text="MockSphere"/> <i>(2024)</i></Link></li>
              <li><Link href="#!"><ScrambleHover text="WebNest"/> <i>(2024)</i></Link></li>
              <li><Link href="#!"><ScrambleHover text="PhantomPage"/> <i>(2024)</i></Link></li>
              <li><Link href="#!"><ScrambleHover text="SiteForge"/> <i>(2024)</i></Link></li>
              <li><Link href="#!"><ScrambleHover text="PixelFrame"/> <i>(2024)</i></Link></li>
              <li><Link href="#!"><ScrambleHover text="EchoWeb"/> <i>(2023)</i></Link></li>
              <li><Link href="#!"><ScrambleHover text="CodeCanvas"/> <i>(2023)</i></Link></li>
              <li><Link href="#!"><ScrambleHover text="VirtuaVista"/> <i>(2022)</i></Link></li>
            </ul>

            <div className="h-[87vh] flex flex-col justify-center">
              <p className="text-lg font-[300] mt-32 mb-6">Contact</p>
              <ul className="text-2xl flex flex-col gap-1">
                <li><Link href="mailto:uM7yT@example.com">
                  <ScrambleHover text="Email"/>
                </Link></li>
                <li><Link href="www.x.com">
                  <ScrambleHover text="X(Twitter)"/>
                </Link></li>
                <li><Link href="www.linkedin.com">
                  <ScrambleHover text="Linkedin"/>
                </Link></li>
              </ul>
            </div>
          </div>

          {/* footer */}
          <footer className="py-8">
            <span className="text-sm text-balance inline-block">&copy; {new Date().getFullYear()} by Slink — Developed by <Link className="relative after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-0 after:left-0 hover:after:left-auto hover:after:right-0 after:bottom-0" href="https://themeforest.net/user/platol/portfolio" aria-label="Slink">Platol</Link></span>
          </footer>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="lg:w-1/4 absolute sm:fixed sm:right-2 top-1"
        >
          {/* content */}
          <div className="p-8 sm:p-10 h-full text-end">
            <p className="opacity-50 text-sm sm:text-xl sticky sm:top-10">Full Site Soon</p>

            <span className="block lg:hidden fixed bottom-8 right-8 h-5 w-5 bg-black rounded-full -skew-x-6"></span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default Demo9;