import { useEffect, useRef } from "react";
import gsap from "gsap";

function Preloader({ onComplete }) {
  const preloaderRef = useRef(null);
  const logoWrapRef = useRef(null);
  const logoRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const scanRef = useRef(null);
  const textRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const preloader = preloaderRef.current;
    const logoWrap = logoWrapRef.current;
    const logo = logoRef.current;
    const topLine = topLineRef.current;
    const bottomLine = bottomLineRef.current;
    const scan = scanRef.current;
    const text = textRef.current;
    const number = numberRef.current;

    const counter = { value: 0 };

    const tl = gsap.timeline();

    /* Initial states */

    gsap.set(logoWrap, {
      clipPath: "inset(0 100% 0 0)",
    });

    gsap.set(logo, {
      x: -80,
    });

    gsap.set([topLine, bottomLine], {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.set(text, {
      opacity: 0,
      y: 15,
    });

    /* Top line */

    tl.to(topLine, {
      scaleX: 1,
      duration: 0.8,
      ease: "power3.inOut",
    });

    /* Logo */

    tl.to(
      logoWrap,
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        ease: "power4.inOut",
      },
      "-=0.2"
    );

    tl.to(
      logo,
      {
        x: 0,
        duration: 1.2,
        ease: "power4.out",
      },
      "<"
    );

    /* Text */

    tl.to(
      text,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4"
    );

    /* Percentage */

    tl.to(
      counter,
      {
        value: 100,
        duration: 1.8,
        ease: "power2.inOut",

        onUpdate: () => {
          number.textContent = Math.round(counter.value)
            .toString()
            .padStart(2, "0");
        },
      },
      "-=0.2"
    );

    /* Bottom line */

    tl.to(
      bottomLine,
      {
        scaleX: 1,
        duration: 0.8,
        ease: "power3.inOut",
      },
      "-=0.5"
    );

    /* Scan */

    gsap.fromTo(
      scan,
      {
        x: "-100%",
      },
      {
        x: "100%",
        duration: 1.5,
        repeat: -1,
        ease: "none",
      }
    );

    /* Exit */

    tl.to(preloader, {
      opacity: 0,
      duration: 0.7,
      delay: 0.3,
      ease: "power2.inOut",

      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
      },
    });

    return () => {
      tl.kill();
      gsap.killTweensOf(scan);
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] overflow-hidden bg-syncro-bg text-syncro-black"
    >
      {/* --------------------------------
          BACKGROUND
      -------------------------------- */}

      <div className="absolute inset-0">

        {/* Large subtle circles */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-syncro-border/40" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-syncro-border/30" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-syncro-red/[0.04] blur-[90px]" />

        {/* Fine horizontal lines */}
        <div className="absolute left-0 top-[25%] h-px w-full bg-syncro-border/30" />

        <div className="absolute left-0 top-[75%] h-px w-full bg-syncro-border/30" />

        {/* Vertical center line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-syncro-border/20" />
      </div>

      {/* --------------------------------
          TOP
      -------------------------------- */}

      <div className="absolute left-0 top-0 flex w-full items-center justify-between px-6 py-6 sm:px-10 sm:py-8">

        <div className="flex items-center gap-3">

          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-syncro-red opacity-50" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-syncro-red" />
          </span>

          <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.3em]">
            SYNCRO METAL TECH
          </span>

        </div>

        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-syncro-gray">
          SYSTEM / 01
        </span>

      </div>

      {/* --------------------------------
          MAIN
      -------------------------------- */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

        <div className="w-full max-w-[760px]">

          {/* Small top information */}

          <div className="mb-8 flex items-center justify-between">

            <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-syncro-gray">
              Precision Engineering
            </span>

            <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-syncro-gray">
              00 / 01
            </span>

          </div>

          {/* Top line */}

          <div
            ref={topLineRef}
            className="h-[1px] w-full bg-syncro-black"
          />

          {/* Logo */}

          <div className="flex justify-center py-14 sm:py-20">

            <div
              ref={logoWrapRef}
              className="relative overflow-hidden"
            >

              <img
                ref={logoRef}
                src="/logo.jpeg"
                alt="SYNCRO Metal Tech"
                className="w-[190px] object-contain sm:w-[270px]"
              />

              {/* Scan light */}

              <div
                ref={scanRef}
                className="pointer-events-none absolute inset-y-0 left-0 w-[25%] bg-gradient-to-r from-transparent via-white/90 to-transparent"
              />

            </div>

          </div>

          {/* Bottom content */}

          <div
            ref={textRef}
            className="flex items-end justify-between"
          >

            <div>

              <p className="font-display text-sm font-medium uppercase tracking-wide">
                Manufacturing
              </p>

              <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.25em] text-syncro-gray">
                Metal Technology
              </p>

            </div>

            <div className="text-right">

              <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-syncro-gray">
                Loading
              </p>

              <div className="mt-1 flex items-baseline justify-end">

                <span
                  ref={numberRef}
                  className="font-display text-3xl font-semibold leading-none"
                >
                  00
                </span>

                <span className="ml-1 font-mono text-[8px] text-syncro-red">
                  %
                </span>

              </div>

            </div>

          </div>

          {/* Bottom line */}

          <div
            ref={bottomLineRef}
            className="mt-6 h-[2px] w-full bg-syncro-red"
          />

          {/* Footer information */}

          <div className="mt-4 flex items-center justify-between">

            <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-syncro-gray">
              Initializing Experience
            </span>

            <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-syncro-gray">
              India
            </span>

          </div>

        </div>

      </div>

      {/* --------------------------------
          CORNER DETAILS
      -------------------------------- */}

      <div className="absolute left-5 top-1/2 h-12 w-12 -translate-y-1/2 border-l border-t border-syncro-red/60" />

      <div className="absolute right-5 top-1/2 h-12 w-12 -translate-y-1/2 border-r border-b border-syncro-red/60" />

      <div className="absolute bottom-6 left-6 h-3 w-3 border-b border-l border-syncro-black sm:bottom-8 sm:left-10" />

      <div className="absolute right-6 top-6 h-3 w-3 border-r border-t border-syncro-black sm:right-10 sm:top-8" />

    </div>
  );
}

export default Preloader;