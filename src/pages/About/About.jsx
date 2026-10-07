import { useEffect, useRef } from "react";
import { ArrowUpRight, Factory, Target, ShieldCheck, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(".about-hero-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Image animation
      gsap.from(".about-image", {
        scale: 1.15,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
        },
      });

      // Content animations
      gsap.utils.toArray(".about-reveal").forEach((element) => {
        gsap.from(element, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      number: "01",
      icon: Factory,
      title: "Precision",
      text: "Every component is engineered with accuracy, consistency and attention to detail.",
    },
    {
      number: "02",
      icon: Target,
      title: "Reliability",
      text: "We focus on dependable manufacturing solutions built for demanding industrial environments.",
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Quality",
      text: "Quality is integrated into every stage of our process, from material to finished product.",
    },
    {
      number: "04",
      icon: Zap,
      title: "Innovation",
      text: "Modern technology and practical engineering help us continuously improve our solutions.",
    },
  ];

  return (
    <div ref={pageRef} className="bg-syncro-bg text-syncro-black">
      {/* =========================================
          PAGE HERO
      ========================================= */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden border-b border-syncro-border pt-32">
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
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

        {/* Red accent */}
        <div className="absolute right-[8%] top-[28%] h-24 w-24 rounded-full border border-syncro-red/30" />
        <div className="absolute right-[8%] top-[28%] h-24 w-24 animate-ping rounded-full border border-syncro-red/20" />

        <div className="relative mx-auto w-full max-w-[1450px] px-5 pb-20 sm:px-8 lg:px-12">
          <div className="about-hero-item mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-syncro-red" />

            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-syncro-gray">
              About SYNCRO Metal Tech
            </span>
          </div>

          <h1 className="about-hero-item max-w-5xl font-display text-[clamp(3.5rem,8vw,9rem)] font-semibold leading-[0.82] tracking-[-0.06em]">
            ENGINEERED
            <br />
            <span className="text-syncro-gray">TO PERFORM.</span>
          </h1>

          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-syncro-black pt-6 md:flex-row">
            <p className="about-hero-item max-w-xl font-display text-xl leading-relaxed text-syncro-dark sm:text-2xl">
              Precision-driven metal technology built around quality,
              reliability and practical engineering.
            </p>

            <div className="about-hero-item flex items-end gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-syncro-gray">
                Scroll to explore
              </span>

              <div className="h-10 w-px bg-syncro-red" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRO
      ========================================= */}
      <section className="border-b border-syncro-border bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1450px] gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="about-reveal">
            <p className="mb-6 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-syncro-red">
              / WHO WE ARE
            </p>

            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Building metal solutions with
              <span className="text-syncro-gray"> purpose.</span>
            </h2>
          </div>

          <div className="about-reveal space-y-6 text-base leading-8 text-syncro-gray sm:text-lg">
            <p>
              SYNCRO Metal Tech is focused on delivering practical and
              precision-oriented metal manufacturing solutions for modern
              industrial requirements.
            </p>

            <p>
              Our approach combines engineering knowledge, manufacturing
              discipline and attention to detail to create products that perform
              consistently in real-world applications.
            </p>

            <p>
              From concept to finished component, every stage is approached with
              a focus on quality, efficiency and long-term reliability.
            </p>

            <div className="pt-5">
              <a
                href="#values"
                className="group inline-flex items-center gap-3 border-b border-syncro-black pb-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
              >
                Our approach
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          IMAGE + STORY
      ========================================= */}
      <section className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="grid overflow-hidden bg-syncro-black lg:grid-cols-[1.1fr_0.9fr]">
            <div className="about-image relative min-h-[450px] overflow-hidden sm:min-h-[600px]">
              <img
                src="/hero-metal.jpg"
                alt="Industrial metal manufacturing"
                className="absolute inset-0 h-full w-full object-cover grayscale"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-10 sm:top-10">
                <span className="h-2 w-2 rounded-full bg-syncro-red" />

                <span className="font-mono text-[8px] font-bold uppercase tracking-[0.25em] text-white">
                  Manufacturing
                </span>
              </div>

              <div className="absolute bottom-6 left-6 font-mono text-[9px] text-white/60 sm:bottom-10 sm:left-10">
                SYNCRO / 01
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 text-white sm:p-12 lg:p-16">
              <div>
                <p className="mb-8 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-syncro-red">
                  Our Philosophy
                </p>

                <h3 className="max-w-xl font-display text-4xl font-medium leading-tight sm:text-5xl">
                  Technology should make manufacturing
                  <span className="text-white/40"> better.</span>
                </h3>
              </div>

              <div className="mt-16 border-t border-white/15 pt-6">
                <p className="max-w-lg text-sm leading-7 text-white/60 sm:text-base">
                  We believe good engineering is not only about complexity. It
                  is about creating solutions that are accurate, efficient,
                  repeatable and built to last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          VALUES
      ========================================= */}
      <section
        id="values"
        className="border-y border-syncro-border bg-syncro-light-gray py-24 sm:py-32"
      >
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="about-reveal mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-syncro-red">
                / OUR VALUES
              </p>

              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
                Built on fundamentals.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-syncro-gray">
              Four principles guide how we approach every project, component and
              manufacturing challenge.
            </p>
          </div>

          <div className="grid border-l border-t border-syncro-border sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.number}
                  className="group min-h-[220px] rounded-2xl hover:shadow-2xl border-b border-r border-syncro-border bg-white p-7 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] sm:p-6"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-syncro-gray">
                      {value.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-syncro-border transition-all duration-500 group-hover:border-syncro-red group-hover:bg-syncro-red group-hover:text-white">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <h3 className="font-display text-2xl font-semibold text-syncro-black">
                      {value.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-syncro-gray">
                      {value.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}
      
      <section className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="cta-inner mx-auto max-w-[1450px] overflow-hidden bg-syncro-black px-7 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
          <div className="cta-line mb-10 h-px w-full origin-left bg-syncro-red" />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-syncro-red">
                Start a conversation
              </span>

              <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                Have a manufacturing
                <br />
                challenge?
              </h2>
            </div>

            <button
              type="button"
              className="group inline-flex w-fit items-center gap-3 border border-white/30 px-6 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:border-syncro-red hover:bg-syncro-red"
            >
              Talk to us
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

export default About;
