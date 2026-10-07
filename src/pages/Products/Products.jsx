import { useEffect, useState } from "react";
import { ArrowUpRight, Plus, Factory, Settings, Cog } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    number: "01",
    category: "Precision Components",
    title: "Precision Metal Components",
    description:
      "High-accuracy metal components manufactured for demanding industrial applications.",
    image: "/hero-metal.jpg",
  },
  {
    id: 2,
    number: "02",
    category: "Fabrication",
    title: "Custom Fabricated Parts",
    description:
      "Custom metal fabrication solutions designed around specific project requirements.",
    image: "/hero-metal.jpg",
  },
  {
    id: 3,
    number: "03",
    category: "Industrial Systems",
    title: "Industrial Assemblies",
    description:
      "Engineered assemblies combining multiple components into reliable production-ready systems.",
    image: "/hero-metal.jpg",
  },
  {
    id: 4,
    number: "04",
    category: "Engineering",
    title: "Engineered Metal Solutions",
    description:
      "Application-focused metal solutions developed with performance and durability in mind.",
    image: "/hero-metal.jpg",
  },
];

const categories = [
  "All",
  "Precision Components",
  "Fabrication",
  "Industrial Systems",
  "Engineering",
];

function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.from(".products-hero-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Product cards
      gsap.utils.toArray(".product-card").forEach((card, index) => {
        gsap.from(card, {
          y: 70,
          opacity: 0,
          duration: 0.9,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });
      });

      // Bottom CTA
      gsap.from(".products-cta", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".products-cta",
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="bg-syncro-bg text-syncro-black">
      {/* =========================================
          HERO
      ========================================= */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden border-b border-syncro-border pt-32">
        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #D9D9D9 1px, transparent 1px),
                linear-gradient(to bottom, #D9D9D9 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Decorative circles */}
        <div className="absolute right-[8%] top-[25%] h-40 w-40 rounded-full border border-syncro-border" />

        <div className="absolute right-[10%] top-[29%] h-28 w-28 rounded-full border border-syncro-red/40" />

        <div className="absolute right-[14%] top-[38%] h-3 w-3 rounded-full bg-syncro-red" />

        <div className="relative mx-auto w-full max-w-[14050px] px-5 pb-20 sm:px-8 lg:px-12">
          <div className="products-hero-item mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-syncro-red" />

            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-syncro-gray">
              Product Range
            </span>
          </div>

          <h1 className="products-hero-item max-w-6xl font-display text-[clamp(3.5rem,7vw,9rem)] font-semibold leading-[0.82] tracking-[-0.06em]">
            BUILT FOR
            <br />
            <span className="text-syncro-gray">INDUSTRY.</span>
          </h1>

          <div className="products-hero-item mt-12 flex flex-col justify-between gap-8 border-t border-syncro-black pt-6 md:flex-row">
            <p className="max-w-xl font-display text-xl leading-relaxed text-syncro-dark sm:text-2xl">
              Precision metal products and engineered solutions for demanding
              industrial applications.
            </p>

            <div className="flex items-end gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-syncro-gray">
                Explore products
              </span>

              <div className="h-10 w-px bg-syncro-red" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PRODUCT INTRO
      ========================================= */}
      <section className="border-b border-syncro-border bg-white py-20 sm:py-20">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-syncro-red">
                / WHAT WE MAKE
              </p>

              <h2 className="max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Manufacturing solutions
                <span className="text-syncro-gray">
                  {" "}
                  built around performance.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <Factory size={20} strokeWidth={1.5} />

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-syncro-gray">
                Industrial Manufacturing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CATEGORY FILTER
      ========================================= */}
      <section className="sticky top-0 z-30 border-b border-syncro-border bg-syncro-bg/95 py-5 backdrop-blur-xl">
        <div
          className="
      mx-auto
      flex
      max-w-[1450px]
      gap-2
      overflow-x-auto
      px-5
      sm:px-8
      lg:px-12
      scrollbar-hide
      [-ms-overflow-style:none]
      [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
    "
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`
          shrink-0
          whitespace-nowrap
          rounded-full
          border
          px-5
          py-3
          font-mono
          text-[9px]
          font-bold
          uppercase
          tracking-[0.15em]
          transition-all
          duration-300

          ${
            activeCategory === category
              ? "border-syncro-black bg-syncro-black text-white"
              : "border-syncro-border bg-white text-syncro-gray hover:border-syncro-black hover:text-syncro-black"
          }
        `}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* =========================================
          PRODUCTS
      ========================================= */}
      <section className="py-15 ">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex items-end justify-between border-b border-syncro-border pb-5">
            <div>
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-syncro-red">
                / PRODUCTS
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Our capabilities
              </h2>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-syncro-gray">
              {filteredProducts.length.toString().padStart(2, "0")} Products
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="product-card group overflow-hidden border border-syncro-border bg-white"
              >
                {/* Image */}
                <div className="relative h-[320px] overflow-hidden bg-syncro-light-gray ">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/20" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white font-mono text-[9px] font-bold">
                    {product.number}
                  </div>

                  {/* Plus */}
                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white transition-all duration-500 group-hover:bg-syncro-red group-hover:text-white">
                    <Plus
                      size={18}
                      className="transition-transform duration-500 group-hover:rotate-90"
                    />
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-syncro-black px-4 py-2 font-mono text-[8px] font-bold uppercase tracking-[0.15em] text-white">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 min-h-[220px]">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="font-display text-xl font-semibold ">
                        {product.title}
                      </h3>
                    </div>

                    <div className="hidden shrink-0 sm:flex h-10 w-10 items-center justify-center rounded-full border border-syncro-border transition-all duration-300 group-hover:border-syncro-red group-hover:bg-syncro-red group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-6 text-syncro-gray">
                    {product.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-syncro-border pt-5">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-syncro-gray">
                      SYNCRO METAL TECH
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-syncro-gray">
                      0{product.id} / 04
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CAPABILITY STRIP
      ========================================= */}
      <section className="border-y border-syncro-border bg-syncro-black py-16 text-white">
        <div className="mx-auto grid max-w-[1450px] gap-8 px-5 sm:px-8 md:grid-cols-3 lg:px-12">
          <div className="flex items-center gap-5 border-b border-white/10 pb-8 md:border-b-0 md:border-r md:pb-0">
            <Cog size={32} strokeWidth={1.2} className="text-syncro-red" />

            <div>
              <p className="font-display text-xl font-medium">Precision</p>

              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
                Engineered accuracy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 border-b border-white/10 pb-8 md:border-b-0 md:border-r md:pb-0">
            <Settings size={32} strokeWidth={1.2} className="text-syncro-red" />

            <div>
              <p className="font-display text-xl font-medium">Performance</p>

              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
                Built for industry
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Factory size={32} strokeWidth={1.2} className="text-syncro-red" />

            <div>
              <p className="font-display text-xl font-medium">Reliability</p>

              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
                Consistent production
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}
      <div className="products-cta">
        <section className="px-5 pb-10 sm:px-8 lg:px-12 py-10">
          <div className="cta-inner mx-auto max-w-[1450px] overflow-hidden bg-syncro-black px-7 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
            <div className="cta-line mb-10 h-px w-full origin-left bg-syncro-red" />

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-syncro-red">
                  Need a custom solution?
                </span>

                <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                  Let's build something
                  <br />
                  precise.
                </h2>
              </div>

              <button
                type="button"
                className="group inline-flex w-fit items-center gap-3 border border-white/30 px-6 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:border-syncro-red hover:bg-syncro-red"
              >
                Discuss your project
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Products;
