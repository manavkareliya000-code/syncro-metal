import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import blogData, { categories } from "./blogData";

gsap.registerPlugin(ScrollTrigger);

function Blog() {
  const pageRef = useRef(null);
  const featuredRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("All");

  /* =====================================================
     CATEGORY FILTER
  ===================================================== */

  const filteredBlogs =
    activeCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === activeCategory);

  /* =====================================================
     FEATURED BLOG
  ===================================================== */

  const featuredBlog = blogData.find((blog) => blog.featured === true);

  /* =====================================================
     NORMAL BLOGS
  ===================================================== */

  const articleBlogs =
    activeCategory === "All"
      ? blogData.filter((blog) => blog.id !== featuredBlog?.id)
      : filteredBlogs;

  /* =====================================================
     ANIMATIONS
  ===================================================== */

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* -------------------------------------------------
         HERO
      ------------------------------------------------- */

      gsap.set(".blog-hero-label", {
        y: 25,
        opacity: 0,
      });

      gsap.set(".blog-hero-title-line", {
        y: 80,
        opacity: 0,
      });

      gsap.set(".blog-hero-description", {
        y: 30,
        opacity: 0,
      });

      gsap.set(".blog-hero-meta", {
        y: 20,
        opacity: 0,
      });

      gsap.set(".hero-red-line", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTimeline
        .to(".blog-hero-label", {
          y: 0,
          opacity: 1,
          duration: 0.7,
        })
        .to(
          ".blog-hero-title-line",
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.3",
        )
        .to(
          ".blog-hero-description",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.45",
        )
        .to(
          ".blog-hero-meta",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.4",
        )
        .to(
          ".hero-red-line",
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.5",
        );

      /* -------------------------------------------------
         FEATURED ARTICLE
      ------------------------------------------------- */

      if (activeCategory === "All" && featuredRef.current) {
        gsap.fromTo(
          ".featured-image-wrap",
          {
            clipPath: "inset(0 100% 0 0)",
          },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.2,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 78%",
            },
          },
        );

        gsap.fromTo(
          ".featured-image",
          {
            scale: 1.18,
          },
          {
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 78%",
            },
          },
        );

        gsap.fromTo(
          ".featured-content",
          {
            x: 70,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 75%",
            },
          },
        );
      }

      /* -------------------------------------------------
         LATEST HEADING
      ------------------------------------------------- */

      gsap.fromTo(
        ".latest-heading",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".latest-section",
            start: "top 80%",
          },
        },
      );

      /* -------------------------------------------------
         BLOG CARDS
      ------------------------------------------------- */

      gsap.fromTo(
        ".blog-card",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 82%",
          },
        },
      );

      /* -------------------------------------------------
         CTA
      ------------------------------------------------- */

      gsap.fromTo(
        ".cta-inner",
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".cta-line",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
          },
        },
      );

      /* -------------------------------------------------
         REFRESH SCROLLTRIGGER
      ------------------------------------------------- */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, pageRef);

    return () => ctx.revert();
  }, [activeCategory]);

  /* =====================================================
     CATEGORY CHANGE
  ===================================================== */

  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    // Scroll to article section
    setTimeout(() => {
      const section = document.querySelector(".latest-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div ref={pageRef} className="overflow-hidden bg-syncro-bg">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28 lg:pt-44">
        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#D9D9D9 1px, transparent 1px), linear-gradient(90deg, #D9D9D9 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage: "linear-gradient(to bottom, black, transparent 80%)",
            }}
          />
        </div>

        {/* Floating dot */}
        <div className="floating-dot absolute right-[12%] top-[25%] h-3 w-3 rounded-full bg-syncro-red" />

        <div className="relative mx-auto max-w-[1450px]">
          <div className="blog-hero-label flex items-center gap-4">
            <span className="h-px w-10 bg-syncro-red" />

            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-syncro-gray">
              SYNCRO / JOURNAL
            </span>
          </div>

          <div className="mt-8 overflow-hidden">
            <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-syncro-black sm:text-6xl lg:text-[82px]">
              <span className="blog-hero-title-line block">Insights</span>

              <span className="blog-hero-title-line block text-syncro-gray">
                & Ideas
              </span>
            </h1>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <div className="hero-red-line mb-6 h-[3px] w-20 bg-syncro-red" />

              <p className="blog-hero-description max-w-xl text-base leading-7 text-syncro-gray sm:text-lg">
                Perspectives on precision engineering, manufacturing technology
                and the ideas shaping the future of metal manufacturing.
              </p>
            </div>

            <div className="blog-hero-meta flex items-center justify-between border-t border-syncro-border pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-syncro-gray">
              <span>Latest Journal</span>

              <span>2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED ARTICLE
          ONLY SHOW WHEN ALL IS SELECTED
      ===================================================== */}

      {activeCategory === "All" && featuredBlog && (
        <section
          ref={featuredRef}
          className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32"
        >
          <div className="mx-auto max-w-[1450px]">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-syncro-gray">
                Featured Article
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-syncro-gray">
                01 / 06
              </span>
            </div>

            <article className="grid overflow-hidden border border-syncro-border bg-white lg:grid-cols-[1.1fr_0.9fr]">
              {/* Image */}

              <div className="featured-image-wrap relative h-[330px] overflow-hidden sm:h-[460px] lg:h-[580px]">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="featured-image h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <span className="rounded-full bg-syncro-red px-3 py-1.5 font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-white">
                    {featuredBlog.category}
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/80">
                    {featuredBlog.date}
                  </span>
                </div>

                <div className="absolute right-5 top-5 h-12 w-12 border-r border-t border-white/60" />
              </div>

              {/* Content */}

              <div className="featured-content flex flex-col justify-between p-7 sm:p-10 lg:p-14">
                <div>
                  <div className="mb-8 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-syncro-gray">
                    <BookOpen size={13} />
                    Featured Insight
                  </div>

                  <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-syncro-black sm:text-4xl">
                    {featuredBlog.title}
                  </h2>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-syncro-gray sm:text-base">
                    {featuredBlog.excerpt}
                  </p>
                </div>

                <div className="mt-12">
                  <div className="mb-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-syncro-gray">
                    <Clock size={13} />5 Min Read
                  </div>

                  <button
                    type="button"
                    className="group inline-flex items-center gap-3 border-b border-syncro-black pb-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-syncro-black transition-colors duration-300 hover:border-syncro-red hover:text-syncro-red"
                  >
                    Read Article
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* =====================================================
          LATEST ARTICLES
      ===================================================== */}

      <section className="latest-section px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-[1450px]">
          {/* Heading */}

          <div className="latest-heading mb-10 flex flex-col gap-5 border-b border-syncro-border pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-syncro-red">
                02 / Journal
              </span>

              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-syncro-black sm:text-4xl">
                {activeCategory === "All"
                  ? "Latest Articles"
                  : `${activeCategory} Articles`}
              </h2>
            </div>

            <span className="max-w-sm text-sm leading-6 text-syncro-gray">
              Practical ideas, technical perspectives and manufacturing
              knowledge from the world of metal technology.
            </span>
          </div>

          {/* =================================================
              CATEGORY BUTTONS
          ================================================= */}

          <div
            className="
    mb-12
    flex
    gap-2
    overflow-x-auto
    overscroll-x-contain
    touch-pan-x
    pb-1
    [-ms-overflow-style:none]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
  "
          >
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`
          group
          relative
          shrink-0
          overflow-hidden
          rounded-full
          border
          px-5
          py-2.5
          font-mono
          text-[9px]
          font-bold
          uppercase
          tracking-[0.16em]
          transition-all
          duration-300

          ${
            active
              ? "border-syncro-black bg-syncro-black text-white"
              : "border-syncro-border bg-white text-syncro-gray hover:border-syncro-black hover:text-syncro-black"
          }
        `}
                >
                  <span className="relative z-10">{category}</span>

                  {!active && (
                    <span
                      className="
              absolute
              inset-0
              -translate-x-full
              bg-syncro-light-gray
              transition-transform
              duration-300
              group-hover:translate-x-0
            "
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* =================================================
              BLOG GRID
          ================================================= */}

          <div
            ref={cardsRef}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {articleBlogs.map((blog, index) => (
              <article
                key={blog.id}
                className="blog-card group border border-syncro-border bg-white transition-all duration-500 hover:-translate-y-2 hover:border-syncro-black hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >
                {/* Image */}

                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-syncro-black/0 transition-all duration-500 group-hover:bg-syncro-black/20" />

                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
                    <span className="font-mono text-[8px] font-bold">
                      {String(
                        activeCategory === "All" ? index + 2 : index + 1,
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-syncro-red text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                {/* Content */}

                <div className="p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-syncro-red">
                      {blog.category}
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-syncro-gray">
                      {blog.date}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-syncro-black transition-colors duration-300 group-hover:text-syncro-red">
                    {blog.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-syncro-gray">
                    {blog.excerpt}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-syncro-border pt-5">
                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-syncro-gray">
                      4 Min Read
                    </span>

                    <span className="flex items-center gap-1 font-mono text-[8px] font-bold uppercase tracking-[0.15em] text-syncro-black transition-all duration-300 group-hover:gap-3 group-hover:text-syncro-red">
                      Read
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No results */}

          {articleBlogs.length === 0 && (
            <div className="border border-dashed border-syncro-border py-20 text-center">
              <p className="font-display text-xl text-syncro-gray">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section ref={ctaRef} className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="cta-inner mx-auto max-w-[1450px] overflow-hidden bg-syncro-black px-7 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
          <div className="cta-line mb-10 h-px w-full origin-left bg-syncro-red" />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-syncro-red">
                Have a Project?
              </span>

              <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                Let&apos;s talk engineering.
              </h2>
            </div>

            <button
              type="button"
              className="group inline-flex w-fit items-center gap-3 border border-white/30 px-6 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:border-syncro-red hover:bg-syncro-red"
            >
              Start a Conversation
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
