"use client";

import Link from "next/link";

import "@/styles/demo/demo1.scss";
import { Bricolage_Grotesque } from "next/font/google";
const bricolageGrotesque = Bricolage_Grotesque({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

import Image from "next/image";
import Aurora from "@/components/Aurora";

const SlinkApp = () => {
  return (
    <main
      className={`${bricolageGrotesque.className} main-content px-8 min-h-screen text-white relative z-10`}
    >
      <div className="fixed w-full start-0 top-0 pointer-events-none opacity-70">
        <Aurora
          colorStops={["#00d8fe", "#7cff67", "#00d8fe"]}
          blend={0.5}
          amplitude={0.5}
          speed={0.6}
        />
      </div>

      {/* Header */}
      <header className="text-center py-8 relative z-10">
        <Link className="font-bold text-3xl" href="/" aria-label="Logo">
          Slink
        </Link>
      </header>

      <section className="relative py-10 md:py-16 text-white z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
            <Link
              href="/"
              className="rounded-lg mx-auto flex w-fit items-center gap-2 border border-white/15 p-1 pr-3"
            >
              <span className="bg-white/15 rounded px-2 py-1 text-xs">New</span>
              <span className="text-sm">Skyrocket Your Next Launch</span>
              <span className="bg-white/20 block h-4 w-px"></span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m7 7 10 10" />
                <path d="M17 7v10H7" />
              </svg>
            </Link>

            <h1 className="mt-8 text-3xl font-semibold md:text-5xl xl:text-5xl xl:[line-height:1.25]">
              Grab 10 Irresistible <br /> Coming Soon template
            </h1>
            <p className="mx-auto my-8 text-balance max-w-[500px] opacity-85">
              Elevate your next big reveal with this premium Coming Soon
              templates! Sleek and ready to launch.
            </p>

            <Link
              href="/"
              className="inline-grid place-items-center group relative rounded-full bg-gradient-to-b from-[#444] to-[#222] py-3 px-7 text-white"
            >
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[120%] group-hover:skew-y-12 inline-flex gap-3">
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 46 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.9998 41.64L25.8698 43.37C25.5698 43.4 25.4198 43.03 25.6598 42.84L41.4398 30.55C42.4598 29.71 43.1198 28.41 42.8398 27.01C42.5598 24.87 40.7898 23.47 38.5498 23.75L21.3998 26.26C21.0998 26.3 20.9398 25.92 21.1798 25.73L38.1798 12.75C41.5298 10.14 41.8098 5.01999 38.7398 2.03999C35.9498 -0.750012 31.4698 -0.660012 28.6798 2.12999L1.28975 30C0.269752 31.12 -0.200248 32.61 0.079752 34.19C0.549752 36.71 3.05975 38.38 5.57975 37.92L20.3498 34.91C20.6698 34.84 20.8398 35.27 20.5698 35.45L4.18975 45.94C2.13975 47.24 1.20975 49.57 1.85975 51.9C2.50975 54.97 5.58975 56.74 8.56975 56L33.0598 49.97C33.3398 49.9 33.5398 50.22 33.3598 50.44L29.5398 55.16C28.5198 56.46 30.1898 58.23 31.5898 57.21L44.1698 46.87C46.4098 45.01 44.9198 41.37 42.0298 41.65L41.9998 41.64Z"
                      fill="#87E64B"
                    />
                  </svg>
                  BUY NOW
                </div>
                <div className="absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 inline-flex gap-3">
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 46 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.9998 41.64L25.8698 43.37C25.5698 43.4 25.4198 43.03 25.6598 42.84L41.4398 30.55C42.4598 29.71 43.1198 28.41 42.8398 27.01C42.5598 24.87 40.7898 23.47 38.5498 23.75L21.3998 26.26C21.0998 26.3 20.9398 25.92 21.1798 25.73L38.1798 12.75C41.5298 10.14 41.8098 5.01999 38.7398 2.03999C35.9498 -0.750012 31.4698 -0.660012 28.6798 2.12999L1.28975 30C0.269752 31.12 -0.200248 32.61 0.079752 34.19C0.549752 36.71 3.05975 38.38 5.57975 37.92L20.3498 34.91C20.6698 34.84 20.8398 35.27 20.5698 35.45L4.18975 45.94C2.13975 47.24 1.20975 49.57 1.85975 51.9C2.50975 54.97 5.58975 56.74 8.56975 56L33.0598 49.97C33.3398 49.9 33.5398 50.22 33.3598 50.44L29.5398 55.16C28.5198 56.46 30.1898 58.23 31.5898 57.21L44.1698 46.87C46.4098 45.01 44.9198 41.37 42.0298 41.65L41.9998 41.64Z"
                      fill="#87E64B"
                    />
                  </svg>
                  BUY NOW
                </div>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 relative z-10">
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-10 max-w-[1000px] mx-auto">
          <Link
            className="text-center rounded-lg overflow-clip shadow-2xl shadow-white/15 transition-all hover:-translate-y-2"
            href="/demo-1"
          >
            <Image
              src="/previews/01.png"
              height={431}
              width={700}
              alt="coming soon template"
            />
            <p className="bg-white/15 py-3">Demo 01</p>
          </Link>

          <Link
            className="text-center rounded-lg overflow-clip shadow-2xl shadow-white/15 transition-all hover:-translate-y-2"
            href="/demo-2"
          >
            <Image
              src="/previews/02.png"
              height={431}
              width={700}
              alt="coming soon template"
            />
            <p className="bg-white/15 py-3">Demo 02</p>
          </Link>

          <Link
            className="text-center rounded-lg overflow-clip shadow-2xl shadow-white/15 transition-all hover:-translate-y-2"
            href="/demo-3"
          >
            <Image
              src="/previews/03.png"
              height={431}
              width={700}
              alt="coming soon template"
            />
            <p className="bg-white/15 py-3">Demo 03</p>
          </Link>

          <Link
            className="text-center rounded-lg overflow-clip shadow-2xl shadow-white/15 transition-all hover:-translate-y-2"
            href="/demo-4"
          >
            <Image
              src="/previews/04.png"
              height={431}
              width={700}
              alt="coming soon template"
            />
            <p className="bg-white/15 py-3">Demo 04</p>
          </Link>

          <Link
            className="text-center rounded-lg overflow-clip shadow-2xl shadow-white/15 transition-all hover:-translate-y-2"
            href="/demo-5"
          >
            <Image
              src="/previews/05.png"
              height={431}
              width={700}
              alt="coming soon template"
            />
            <p className="bg-white/15 py-3">Demo 05</p>
          </Link>

          <Link
            className="text-center rounded-lg overflow-clip shadow-2xl shadow-white/15 transition-all hover:-translate-y-2"
            href="/demo-6"
          >
            <Image
              src="/previews/06.png"
              height={431}
              width={700}
              alt="coming soon template"
            />
            <p className="bg-white/15 py-3">Demo 06</p>
          </Link>

          <Link
            className="text-center rounded-lg overflow-clip shadow-2xl shadow-white/15 transition-all hover:-translate-y-2"
            href="/demo-7"
          >
            <Image
              src="/previews/07.png"
              height={431}
              width={700}
              alt="coming soon template"
            />
            <p className="bg-white/15 py-3">Demo 07</p>
          </Link>

          <Link
            className="text-center rounded-lg overflow-clip shadow-2xl shadow-white/15 transition-all hover:-translate-y-2"
            href="/demo-8"
          >
            <Image
              src="/previews/08.png"
              height={431}
              width={700}
              alt="coming soon template"
            />
            <p className="bg-white/15 py-3">Demo 08</p>
          </Link>

          <Link
            className="text-center rounded-lg overflow-clip shadow-2xl shadow-white/15 transition-all hover:-translate-y-2"
            href="/demo-9"
          >
            <Image
              src="/previews/09.png"
              height={431}
              width={700}
              alt="coming soon template"
            />
            <p className="bg-white/15 py-3">Demo 09</p>
          </Link>

          <Link
            className="text-center rounded-lg overflow-clip shadow-2xl shadow-white/15 transition-all hover:-translate-y-2"
            href="/demo-10"
          >
            <Image
              src="/previews/10.png"
              height={431}
              width={700}
              alt="coming soon template"
            />
            <p className="bg-white/15 py-3">Demo 10</p>
          </Link>
        </div>
      </section>

      {/* footer */}
      <footer className="sm:flex justify-between items-center py-8 relative z-10">
        <div className="w-full text-center">
          <span className="text-sm text-balance inline-block">
            &copy; {new Date().getFullYear()} by Slink — Developed by{" "}
            <Link
              className="relative after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-0 after:left-0 hover:after:left-auto hover:after:right-0 after:bottom-0"
              href="https://themeforest.net/user/platol/portfolio"
              aria-label="Slink"
            >
              Platol
            </Link>
          </span>
        </div>
      </footer>
    </main>
  );
};

export default SlinkApp;
