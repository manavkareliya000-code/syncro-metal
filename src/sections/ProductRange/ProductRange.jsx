import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    number: "01",
    title: "Sheet Metal",
    description:
      "Precision fabricated sheet metal components engineered for demanding industrial applications.",
    image: "/hero-metal.jpg",
  },
  {
    number: "02",
    title: "Fabrication",
    description:
      "Reliable metal fabrication solutions combining accuracy, strength and consistent finishing.",
    image: "/hero-metal.jpg",
  },
  {
    number: "03",
    title: "Industrial Components",
    description:
      "Purpose-built metal components designed around performance, durability and application requirements.",
    image: "/hero-metal.jpg",
  },
  {
    number: "04",
    title: "Custom Solutions",
    description:
      "Engineered metal solutions developed to meet specific customer and industrial requirements.",
    image: "/hero-metal.jpg",
  },
];

function ProductRange() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const eyebrowRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      /* ---------------------------------------------
         INITIAL STATES
      --------------------------------------------- */

      gsap.set(eyebrowRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(headingRef.current, {
        opacity: 0,
        y: 70,
      });

      gsap.set(descriptionRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.set(card, {
          opacity: 0,
          y: 80,
        });

        const image = card.querySelector(".product-image");
        const imageReveal = card.querySelector(".image-reveal");

        gsap.set(image, {
          scale: 1.2,
        });

        gsap.set(imageReveal, {
          xPercent: 0,
        });
      });

      /* ---------------------------------------------
         MAIN REVEAL
      --------------------------------------------- */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          toggleActions: "restart none restart none",
        },
      });

      tl.to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
      });

      tl.to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.25"
      );

      tl.to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 0.7,
          ease: "power3.inOut",
        },
        "-=0.45"
      );

      tl.to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        "-=0.3"
      );

      /* ---------------------------------------------
         PRODUCT CARDS
      --------------------------------------------- */

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const image = card.querySelector(".product-image");
        const imageReveal = card.querySelector(".image-reveal");

        tl.to(
          card,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          index === 0 ? "-=0.15" : "-=0.5"
        );

        tl.to(
          imageReveal,
          {
            xPercent: 100,
            duration: 0.9,
            ease: "power4.inOut",
          },
          "<"
        );

        tl.to(
          image,
          {
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "<"
        );
      });

      /* ---------------------------------------------
         PARALLAX
      --------------------------------------------- */

      cardsRef.current.forEach((card) => {
        if (!card) return;

        const image = card.querySelector(".product-image");

        gsap.to(image, {
          yPercent: -7,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-syncro-white px-5 py-24 sm:px-8 sm:py-28 lg:px-14 lg:py-10"
    >
      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute right-0 top-[20%] h-px w-[18%] bg-syncro-border" />

      <div className="pointer-events-none absolute left-0 top-[65%] h-px w-[10%] bg-syncro-border" />

      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-syncro-red/[0.025] blur-[120px]" />

      <div className="mx-auto max-w-[1450px]">
        {/* ---------------------------------------------
            SECTION INTRO
        --------------------------------------------- */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            {/* EYEBROW */}

            <div
              ref={eyebrowRef}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-syncro-red" />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-syncro-gray">
                03 / Product Range
              </span>
            </div>

            {/* HEADING */}

            <div className="overflow-hidden">
              <h2
                ref={headingRef}
                className="max-w-[800px] font-display text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-syncro-black sm:text-6xl lg:text-[82px]"
              >
                Solutions
                <br />
                <span className="text-syncro-red">Built</span> For
                <br />
                Industry.
              </h2>
            </div>

            <div
              ref={lineRef}
              className="mt-9 h-[2px] w-24 bg-syncro-red"
            />
          </div>

          {/* DESCRIPTION */}

          <div ref={descriptionRef}>
            <p className="max-w-[450px] text-sm leading-7 text-syncro-gray sm:text-base sm:leading-8">
              Explore our range of precision metal products and engineered
              solutions, developed to meet the evolving requirements of
              modern industry.
            </p>

            <Link
              to="/products"
              className="group mt-7 inline-flex items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-syncro-black"
            >
              View Complete Range

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-syncro-black text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-syncro-red">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>
        </div>

        {/* ---------------------------------------------
            PRODUCT GRID
        --------------------------------------------- */}

        <div className="mt-16 grid gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
          {products.map((product, index) => (
            <Link
              to="/products"
              key={product.number}
              ref={(element) => {
                cardsRef.current[index] = element;
              }}
              className="product-card group relative block overflow-hidden border border-syncro-border bg-syncro-bg"
            >
              {/* IMAGE */}

              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-syncro-black/60 via-transparent to-transparent" />

                {/* REVEAL MASK */}

                <div className="image-reveal absolute inset-0 z-10 bg-syncro-black" />

                {/* TOP NUMBER */}

                <div className="absolute left-5 top-5 z-20">
                  <span className="font-mono text-[9px] font-semibold tracking-[0.2em] text-white/70">
                    {product.number}
                  </span>
                </div>

                {/* ARROW */}

                <div className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/10 text-white backdrop-blur-sm transition-all duration-500 group-hover:rotate-45 group-hover:border-syncro-red group-hover:bg-syncro-red">
                  <ArrowUpRight size={17} />
                </div>

                {/* IMAGE TITLE */}

                <div className="absolute bottom-5 left-5 z-20">
                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    Metal Technology
                  </span>

                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {product.title}
                  </h3>
                </div>
              </div>

              {/* CARD CONTENT */}

              <div className="relative p-6 sm:p-7">
                <div className="flex items-start justify-between gap-6">
                  <p className="max-w-[500px] text-xs leading-6 text-syncro-gray sm:text-sm sm:leading-7">
                    {product.description}
                  </p>

                  <span className="hidden h-8 w-8 shrink-0 items-center justify-center border border-syncro-border transition-all duration-300 group-hover:border-syncro-red group-hover:bg-syncro-red group-hover:text-white sm:flex">
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                {/* BOTTOM RED LINE */}

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-syncro-red transition-all duration-500 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>

        {/* ---------------------------------------------
            BOTTOM STATEMENT
        --------------------------------------------- */}

        <div className="mt-16 border-t border-syncro-border pt-7 sm:mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.25em] text-syncro-gray">
              Engineered With Precision
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-syncro-gray">
              SYNCRO / 03
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductRange;