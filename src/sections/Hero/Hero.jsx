import { useEffect, useRef } from "react";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Hero() {
  const heroRef = useRef(null);

  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const imageOverlayRef = useRef(null);

  const eyebrowRef = useRef(null);

  const titleRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);
  const titleLine3Ref = useRef(null);

  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const bottomRef = useRef(null);

  const redLineRef = useRef(null);
  const verticalLineRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    const imageWrap = imageWrapRef.current;
    const image = imageRef.current;
    const imageOverlay = imageOverlayRef.current;

    const eyebrow = eyebrowRef.current;

    const titleLine1 = titleLine1Ref.current;
    const titleLine2 = titleLine2Ref.current;
    const titleLine3 = titleLine3Ref.current;

    const description = descriptionRef.current;
    const buttons = buttonsRef.current;

    const redLine = redLineRef.current;
    const verticalLine = verticalLineRef.current;

    /* =====================================================
     SET INITIAL STATE IMMEDIATELY
  ===================================================== */

    gsap.set(imageWrap, {
      clipPath: "inset(0 100% 0 0)",
    });

    gsap.set(image, {
      scale: 1.25,
      x: 0,
      y: 0,
    });

    gsap.set(imageOverlay, {
      opacity: 1,
    });

    gsap.set(eyebrow, {
      opacity: 0,
      y: 40,
    });

    gsap.set([titleLine1, titleLine2, titleLine3], {
      opacity: 0,
      y: 130,
    });

    gsap.set(description, {
      opacity: 0,
      y: 40,
    });

    gsap.set(buttons, {
      opacity: 0,
      y: 40,
    });

    gsap.set(redLine, {
      scaleY: 0,
      transformOrigin: "top center",
    });

    gsap.set(verticalLine, {
      scaleY: 0,
      transformOrigin: "bottom center",
    });

    /* =====================================================
     REVEAL TIMELINE
  ===================================================== */

    const timeline = gsap.timeline({
      delay: 0.3,
    });

    /* RED LINE */

    timeline.to(redLine, {
      scaleY: 1,
      duration: 0.8,
      ease: "power4.inOut",
    });

    /* IMAGE */

    timeline.to(
      imageWrap,
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.4,
        ease: "power4.inOut",
      },
      "-=0.4",
    );

    /* IMAGE ZOOM */

    timeline.to(
      image,
      {
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
      },
      "<",
    );

    /* OVERLAY */

    timeline.to(
      imageOverlay,
      {
        opacity: 0.38,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.9",
    );

    /* EYEBROW */

    timeline.to(
      eyebrow,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power4.out",
      },
      "-=0.5",
    );

    /* TITLE 1 */

    timeline.to(
      titleLine1,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power4.out",
      },
      "-=0.3",
    );

    /* TITLE 2 */

    timeline.to(
      titleLine2,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power4.out",
      },
      "-=0.55",
    );

    /* TITLE 3 */

    timeline.to(
      titleLine3,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power4.out",
      },
      "-=0.55",
    );

    /* DESCRIPTION */

    timeline.to(
      description,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3",
    );

    /* BUTTONS */

    timeline.to(
      buttons,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3",
    );

    /* VERTICAL LINE */

    timeline.to(
      verticalLine,
      {
        scaleY: 1,
        duration: 0.8,
        ease: "power3.inOut",
      },
      "-=0.3",
    );

    /* =====================================================
     IMAGE MOUSE PARALLAX
  ===================================================== */

    const handleMouseMove = (event) => {
      const rect = hero.getBoundingClientRect();

      const mouseX = (event.clientX - rect.left) / rect.width - 0.5;

      const mouseY = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(image, {
        x: mouseX * 16,
        y: mouseY * 12,
        duration: 1.2,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);

    /* =====================================================
     CLEANUP
  ===================================================== */

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);

      timeline.kill();

      gsap.killTweensOf([
        imageWrap,
        image,
        imageOverlay,
        eyebrow,
        titleLine1,
        titleLine2,
        titleLine3,
        description,
        buttons,
        redLine,
        verticalLine,
      ]);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-syncro-black"
    >
      {/* =================================================
          HERO IMAGE
      ================================================= */}

      <div ref={imageWrapRef} className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src="/hero-metal.jpg"
          alt="Precision metal manufacturing"
          className="h-full w-full object-cover"
        />

        {/* Dark overlay */}

        <div ref={imageOverlayRef} className="absolute inset-0 bg-black/55" />

        {/* Left cinematic gradient */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/20" />

        {/* Bottom gradient */}

        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/90 to-transparent" />
      </div>

      {/* =================================================
          RED SIDE ACCENT
      ================================================= */}

      <div
        ref={redLineRef}
        className="absolute left-0 top-0 z-30 h-full w-[3px] bg-syncro-red"
      />

      {/* =================================================
          TOP INFORMATION
      ================================================= */}

      <div className="absolute left-0 top-0 z-30 flex w-full items-center justify-between px-6 py-7 sm:px-10 lg:px-14">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute h-full w-full animate-ping rounded-full bg-syncro-red opacity-50" />

            <span className="relative h-2 w-2 rounded-full bg-syncro-red shadow-[0_0_15px_rgba(229,57,53,0.8)]" />
          </span>

          <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.3em] text-white/70">
            SYNCRO METAL TECH
          </span>
        </div>

        <div className="hidden items-center gap-8 sm:flex">
          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/50">
            Precision Engineering
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/50">
            2026
          </span>
        </div>
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="relative z-20 flex min-h-screen items-center px-6 pb-24 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="max-w-[760px]">
            {/* EYEBROW */}

            <div ref={eyebrowRef} className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-syncro-red" />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-white/70">
                Advanced Metal Technology
              </span>
            </div>

            {/* =================================================
                TITLE
            ================================================= */}

            <h1
              ref={titleRef}
              className="overflow-hidden font-display max-w-[500px] text-[17vw] font-bold uppercase leading-[0.8] tracking-[-0.07em] text-white sm:text-[110px] lg:text-[85px]"
            >
              <span ref={titleLine1Ref} className="block">
                Precision
              </span>

              <span ref={titleLine2Ref} className="block">
                Built
              </span>

              <span ref={titleLine3Ref} className="block text-syncro-red">
                Different.
              </span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              ref={descriptionRef}
              className="mt-5 max-w-[530px] text-[14px] leading-5 text-white/65"
            >
              We engineer and manufacture high-performance metal solutions with
              precision, advanced technology and uncompromising quality.
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              ref={buttonsRef}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/products"
                className="group flex items-center rounded-full gap-5 bg-syncro-red px-6 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-syncro-black"
              >
                Explore Product Range
                <span className="flex h-5 w-5 items-center justify-center bg-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-syncro-black/10">
                  <ArrowUpRight size={13} />
                </span>
              </Link>

              <Link
                to="/contact"
                className="group flex items-center gap-3 border rounded-full border-white/30 bg-white/5 px-6 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-syncro-black"
              >
                Talk To Us
                <MoveUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          VERTICAL LINE
      ================================================= */}

      <div
        ref={verticalLineRef}
        className="absolute bottom-0 right-[15%] z-20 hidden h-[180px] w-px bg-white/20 lg:block"
      />
    </section>
  );
}

export default Hero;
