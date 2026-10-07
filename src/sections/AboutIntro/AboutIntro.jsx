import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "Precision",
    text: "Accurate engineering with consistent manufacturing quality.",
  },
  {
    number: "02",
    title: "Innovation",
    text: "Smarter metal solutions designed for real applications.",
  },
  {
    number: "03",
    title: "Reliability",
    text: "Solutions built to deliver dependable long-term performance.",
  },
];

function AboutIntro() {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const imageOverlayRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingLinesRef = useRef([]);
  const paragraphRef = useRef(null);
  const featuresRef = useRef([]);
  const buttonRef = useRef(null);
  const numberRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      // ---------------------------------------------
      // INITIAL STATES
      // ---------------------------------------------

      gsap.set(imageWrapperRef.current, {
        clipPath: "inset(0 100% 0 0)",
      });

      gsap.set(imageRef.current, {
        scale: 1.35,
      });

      gsap.set(imageOverlayRef.current, {
        xPercent: 0,
      });

      gsap.set(eyebrowRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(headingLinesRef.current, {
        opacity: 0,
        yPercent: 110,
      });

      gsap.set(paragraphRef.current, {
        opacity: 0,
        y: 25,
      });

      gsap.set(featuresRef.current, {
        opacity: 0,
        y: 25,
      });

      gsap.set(buttonRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(numberRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // ---------------------------------------------
      // MAIN REVEAL TIMELINE
      // ---------------------------------------------

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          end: "bottom 20%",
          toggleActions: "restart none restart none",
        },
      });

      // Image reveal
      tl.to(imageWrapperRef.current, {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.25,
        ease: "power4.inOut",
      });

      // Image zoom
      tl.to(
        imageRef.current,
        {
          scale: 1,
          duration: 1.6,
          ease: "power3.out",
        },
        "<"
      );

      // Image overlay sweep
      tl.to(
        imageOverlayRef.current,
        {
          xPercent: 100,
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.7"
      );

      // Eyebrow
      tl.to(
        eyebrowRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        "-=0.65"
      );

      // Heading lines
      tl.to(
        headingLinesRef.current,
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power4.out",
        },
        "-=0.35"
      );

      // Red line
      tl.to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 0.7,
          ease: "power3.inOut",
        },
        "-=0.45"
      );

      // Paragraph
      tl.to(
        paragraphRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        "-=0.35"
      );

      // Features
      tl.to(
        featuresRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.25"
      );

      // Button
      tl.to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        "-=0.2"
      );

      // Large 02
      tl.to(
        numberRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // ---------------------------------------------
      // IMAGE PARALLAX
      // ---------------------------------------------

      gsap.to(imageRef.current, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-syncro-bg px-5 py-24 sm:px-8 sm:py-28 lg:px-14 lg:py-10"
    >
      {/* BACKGROUND DETAILS */}

      <div className="pointer-events-none absolute right-0 top-[15%] hidden h-px w-[22%] bg-syncro-border lg:block" />

      <div className="pointer-events-none absolute left-0 top-[70%] hidden h-px w-[12%] bg-syncro-border lg:block" />

      <div className="pointer-events-none absolute -right-20 top-1/3 h-[400px] w-[400px] rounded-full bg-syncro-red/[0.025] blur-[100px]" />

      <div className="mx-auto max-w-[1450px]">
        {/* SECTION HEADER */}

        <div className="mb-16 flex items-end justify-between lg:mb-24">
          <div
            ref={eyebrowRef}
            className="flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-syncro-red" />

            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-syncro-gray">
              02 / Who We Are
            </span>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-syncro-gray">
              Metal Technology
            </span>

            <span className="h-px w-16 bg-syncro-border" />

            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-syncro-gray">
              Since 2001
            </span>
          </div>
        </div>

        {/* MAIN CONTENT */}

        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* LEFT CONTENT */}

          <div className="relative order-2 lg:order-1">
            {/* LARGE BACKGROUND NUMBER */}

            <span
              ref={numberRef}
              className="pointer-events-none absolute -left-8 -top-20 hidden font-display text-[180px] font-bold leading-none tracking-[-0.1em] text-syncro-black/[0.035] xl:block"
            >
              02
            </span>

            {/* HEADING */}

            <div className="relative overflow-hidden">
              <h2 className="font-display text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-syncro-black sm:text-6xl lg:text-[76px]">
                <span className="block overflow-hidden">
                  <span
                    ref={(el) => {
                      headingLinesRef.current[0] = el;
                    }}
                    className="block"
                  >
                    Engineering
                  </span>
                </span>

                <span className="block overflow-hidden">
                  <span
                    ref={(el) => {
                      headingLinesRef.current[1] = el;
                    }}
                    className="block"
                  >
                    <span className="text-syncro-red">Metal</span> With
                  </span>
                </span>

                <span className="block overflow-hidden">
                  <span
                    ref={(el) => {
                      headingLinesRef.current[2] = el;
                    }}
                    className="block"
                  >
                    Purpose.
                  </span>
                </span>
              </h2>
            </div>

            {/* ACCENT LINE */}

            <div
              ref={lineRef}
              className="mt-9 h-[2px] w-24 bg-syncro-red"
            />

            {/* DESCRIPTION */}

            <p
              ref={paragraphRef}
              className="mt-8 max-w-[540px] text-sm leading-7 text-syncro-gray sm:text-base sm:leading-8"
            >
              SYNCRO METAL TECH brings together precision engineering,
              manufacturing expertise and practical innovation to create
              dependable metal solutions for modern industries.
            </p>

            {/* FEATURES */}

            <div className="mt-12 border-t border-syncro-border">
              {features.map((feature, index) => (
                <div
                  key={feature.number}
                  ref={(el) => {
                    featuresRef.current[index] = el;
                  }}
                  className="group flex gap-5 border-b border-syncro-border py-5 transition-all duration-300 hover:pl-3"
                >
                  {/* NUMBER */}

                  <span className="pt-1 font-mono text-[8px] font-semibold tracking-[0.2em] text-syncro-red">
                    {feature.number}
                  </span>

                  {/* CONTENT */}

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-base font-semibold uppercase tracking-wide text-syncro-black">
                        {feature.title}
                      </h3>

                      <ArrowUpRight
                        size={16}
                        className="text-syncro-gray transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-syncro-red"
                      />
                    </div>

                    <p className="mt-1.5 max-w-[430px] text-xs leading-5 text-syncro-gray">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTON */}

            <Link
              ref={buttonRef}
              to="/about"
              className="group mt-10 inline-flex items-center gap-4"
            >
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-syncro-black transition-colors duration-300 group-hover:text-syncro-red">
                Discover Our Story
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-syncro-black text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-syncro-red">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>

          {/* RIGHT IMAGE */}

          <div className="relative order-1 lg:order-2">
            {/* IMAGE */}

            <div
              ref={imageWrapperRef}
              className="relative aspect-[4/5] overflow-hidden bg-syncro-light-gray "
            >
              <img
                ref={imageRef}
                src="/hero-metal.jpg"
                alt="Industrial metal manufacturing"
                className="h-full w-full object-cover"
              />

              {/* DARK IMAGE GRADIENT */}

              <div className="absolute inset-0 bg-gradient-to-t from-syncro-black/50 via-transparent to-transparent" />

              {/* REVEAL OVERLAY */}

              <div
                ref={imageOverlayRef}
                className="absolute inset-0 z-10 bg-syncro-black"
              />

              {/* CORNER MARKERS */}

              <div className="absolute left-6 top-6 z-20 h-12 w-12 border-l border-t border-white/70" />

              <div className="absolute bottom-6 right-6 z-20 h-12 w-12 border-b border-r border-white/70" />

              {/* IMAGE INFORMATION */}

              <div className="absolute bottom-7 left-7 z-20">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-syncro-red" />

                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-white">
                    Precision Manufacturing
                  </span>
                </div>

                <p className="mt-3 font-display text-xl font-medium text-white sm:text-2xl">
                  Built for performance.
                </p>
              </div>
            </div>

            {/* FLOATING CARD */}

            <div className="absolute -bottom-7 rounded-2xl -left-5 z-30 w-[190px] border border-syncro-border bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:-left-8 sm:w-[220px]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-syncro-gray">
                  Our Focus
                </span>

                <span className="h-2 w-2 rounded-full bg-syncro-red" />
              </div>

              <p className="mt-2 font-display text-md font-semibold leading-tight tracking-tight text-syncro-black">
                Precision
                
                <span className="text-syncro-red"> Without</span>
                <br />
                Compromise.
              </p>
            </div>

            {/* SIDE LABEL */}

            <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rotate-90 lg:block">
              <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.3em] text-syncro-gray">
                Engineered / Manufactured / Delivered
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;