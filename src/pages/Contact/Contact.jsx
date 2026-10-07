import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const pageRef = useRef(null);
  const formRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
         HERO ANIMATION
      ===================================================== */

      gsap.set(".contact-label", {
        y: 25,
        opacity: 0,
      });

      gsap.set(".contact-title-line", {
        y: 70,
        opacity: 0,
      });

      gsap.set(".contact-description", {
        y: 30,
        opacity: 0,
      });

      gsap.set(".contact-meta", {
        y: 20,
        opacity: 0,
      });

      gsap.set(".contact-red-line", {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTimeline
        .to(".contact-label", {
          y: 0,
          opacity: 1,
          duration: 0.7,
        })
        .to(
          ".contact-title-line",
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.3"
        )
        .to(
          ".contact-description",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.45"
        )
        .to(
          ".contact-meta",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.4"
        )
        .to(
          ".contact-red-line",
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.5"
        );

      /* =====================================================
         CONTACT INFO CARDS
      ===================================================== */

      gsap.fromTo(
        ".contact-info-card",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".contact-info-section",
            start: "top 78%",
          },
        }
      );

      /* =====================================================
         FORM
      ===================================================== */

      gsap.fromTo(
        ".contact-form-wrap",
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
            trigger: formRef.current,
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        ".form-intro",
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 78%",
          },
        }
      );

      /* =====================================================
         LOCATION
      ===================================================== */

      gsap.fromTo(
        ".location-section",
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
            trigger: ".location-section",
            start: "top 82%",
          },
        }
      );

      /* =====================================================
         CTA
      ===================================================== */

      gsap.fromTo(
        ".contact-cta",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".contact-cta",
            start: "top 82%",
          },
        }
      );

      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     FORM SUBMIT
  ===================================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <div
      ref={pageRef}
      className="overflow-hidden bg-syncro-bg"
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28 lg:pt-44">
        {/* Background Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#D9D9D9 1px, transparent 1px), linear-gradient(90deg, #D9D9D9 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 80%)",
            }}
          />
        </div>

        {/* Floating red dot */}
        <div className="absolute right-[12%] top-[27%] h-3 w-3 animate-pulse rounded-full bg-syncro-red" />

        <div className="relative mx-auto max-w-[1450px]">
          {/* Label */}
          <div className="contact-label flex items-center gap-4">
            <span className="h-px w-10 bg-syncro-red" />

            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-syncro-gray">
              SYNCRO / CONTACT
            </span>
          </div>

          {/* Heading */}
          <div className="mt-8 overflow-hidden">
            <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-syncro-black sm:text-6xl lg:text-[82px]">
              <span className="contact-title-line block">
                Let&apos;s
              </span>

              <span className="contact-title-line block text-syncro-gray">
                Connect.
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <div className="contact-red-line mb-6 h-[3px] w-20 bg-syncro-red" />

              <p className="contact-description max-w-xl text-base leading-7 text-syncro-gray sm:text-lg">
                Have a project in mind? Tell us what you are building,
                and let&apos;s explore how precision metal technology can
                help bring it to life.
              </p>
            </div>

            <div className="contact-meta flex items-center justify-between border-t border-syncro-border pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-syncro-gray">
              <span>Start a Conversation</span>
              <span>India / 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="contact-info-section px-5 pb-24 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Phone */}
            <a
              href="tel:+919999999999"
              className="contact-info-card group border border-syncro-border bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-syncro-black hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-syncro-light-gray transition-all duration-500 group-hover:bg-syncro-red group-hover:text-white">
                  <Phone size={18} />
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-syncro-gray transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-syncro-red"
                />
              </div>

              <p className="mt-8 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-syncro-gray">
                Call Us
              </p>

              <h3 className="mt-2 font-display text-lg font-semibold">
                +91 99999 99999
              </h3>
            </a>

            {/* Email */}
            <a
              href="mailto:info@syncrometaltech.com"
              className="contact-info-card group border border-syncro-border bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-syncro-black hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-syncro-light-gray transition-all duration-500 group-hover:bg-syncro-red group-hover:text-white">
                  <Mail size={18} />
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-syncro-gray transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-syncro-red"
                />
              </div>

              <p className="mt-8 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-syncro-gray">
                Email Us
              </p>

              <h3 className="mt-2 break-all font-display text-lg font-semibold">
                info@syncrometaltech.com
              </h3>
            </a>

            {/* Location */}
            <div className="contact-info-card group border border-syncro-border bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-syncro-black hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-syncro-light-gray transition-all duration-500 group-hover:bg-syncro-red group-hover:text-white">
                  <MapPin size={18} />
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-syncro-gray transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-syncro-red"
                />
              </div>

              <p className="mt-8 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-syncro-gray">
                Location
              </p>

              <h3 className="mt-2 font-display text-lg font-semibold">
                Gujarat, India
              </h3>
            </div>

            {/* Working Hours */}
            <div className="contact-info-card group border border-syncro-border bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-syncro-black hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-syncro-light-gray transition-all duration-500 group-hover:bg-syncro-red group-hover:text-white">
                  <Clock size={18} />
                </div>

                <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.15em] text-syncro-red">
                  <span className="h-1.5 w-1.5 rounded-full bg-syncro-red" />
                  Open
                </span>
              </div>

              <p className="mt-8 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-syncro-gray">
                Working Hours
              </p>

              <h3 className="mt-2 font-display text-lg font-semibold">
                Mon — Sat / 09:00 — 18:00
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM SECTION
      ===================================================== */}

      <section
        ref={formRef}
        className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32"
      >
        <div className="mx-auto grid max-w-[1450px] gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left content */}
          <div className="form-intro border border-syncro-border bg-syncro-black p-7 text-white sm:p-10 lg:p-12">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-syncro-red">
                01 / Inquiry
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/40">
                S.M.T
              </span>
            </div>

            <div className="mt-16">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                Tell us about
                <br />
                your project.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
                Whether you need precision components, fabrication,
                engineering support or a complete manufacturing solution,
                our team is ready to discuss your requirements.
              </p>
            </div>

            <div className="mt-16 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-syncro-red" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/50">
                  Response within 1 business day
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap border border-syncro-border bg-white p-7 sm:p-10 lg:p-12">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-syncro-red text-white">
                  <CheckCircle2 size={30} />
                </div>

                <h2 className="mt-6 font-display text-3xl font-semibold">
                  Message Sent
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-syncro-gray">
                  Thank you for contacting SYNCRO Metal Tech. Our team
                  will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-10 flex items-center justify-between border-b border-syncro-border pb-5">
                  <h2 className="font-display text-2xl font-semibold">
                    Project Inquiry
                  </h2>

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-syncro-gray">
                    Required *
                  </span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div className="group">
                    <label className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-syncro-gray">
                      Your Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="mt-2 w-full border-b border-syncro-border bg-transparent px-0 py-3 font-body text-sm text-syncro-black outline-none transition-colors duration-300 placeholder:text-syncro-gray/50 focus:border-syncro-red"
                    />
                  </div>

                  {/* Company */}
                  <div className="group">
                    <label className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-syncro-gray">
                      Company
                    </label>

                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      className="mt-2 w-full border-b border-syncro-border bg-transparent px-0 py-3 font-body text-sm text-syncro-black outline-none transition-colors duration-300 placeholder:text-syncro-gray/50 focus:border-syncro-red"
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-syncro-gray">
                      Email *
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="mt-2 w-full border-b border-syncro-border bg-transparent px-0 py-3 font-body text-sm text-syncro-black outline-none transition-colors duration-300 placeholder:text-syncro-gray/50 focus:border-syncro-red"
                    />
                  </div>

                  {/* Phone */}
                  <div className="group">
                    <label className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-syncro-gray">
                      Phone *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91"
                      className="mt-2 w-full border-b border-syncro-border bg-transparent px-0 py-3 font-body text-sm text-syncro-black outline-none transition-colors duration-300 placeholder:text-syncro-gray/50 focus:border-syncro-red"
                    />
                  </div>

                  {/* Service */}
                  <div className="group sm:col-span-2">
                    <label className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-syncro-gray">
                      What do you need?
                    </label>

                    <select
                      name="service"
                      defaultValue=""
                      className="mt-2 w-full border-b border-syncro-border bg-transparent px-0 py-3 font-body text-sm text-syncro-black outline-none transition-colors duration-300 focus:border-syncro-red"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="precision-components">
                        Precision Components
                      </option>

                      <option value="fabrication">
                        Metal Fabrication
                      </option>

                      <option value="industrial-systems">
                        Industrial Systems
                      </option>

                      <option value="engineering">
                        Engineering Support
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="group sm:col-span-2">
                    <label className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-syncro-gray">
                      Project Details *
                    </label>

                    <textarea
                      name="message"
                      required
                      rows="5"
                      placeholder="Tell us about your project, requirements, quantity, material, timeline..."
                      className="mt-2 w-full resize-none border-b border-syncro-border bg-transparent px-0 py-3 font-body text-sm leading-6 text-syncro-black outline-none transition-colors duration-300 placeholder:text-syncro-gray/50 focus:border-syncro-red"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-10 flex flex-col gap-5 border-t border-syncro-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-5 text-syncro-gray">
                    By submitting this form, you agree to be contacted
                    regarding your project inquiry.
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-syncro-red px-7 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-syncro-black"
                  >
                    Send Inquiry

                    <Send
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="location-section px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1450px]">
          <div className="relative min-h-[380px] overflow-hidden border border-syncro-border bg-syncro-light-gray">
            {/* Industrial image */}
            <img
              src="/hero-metal.jpg"
              alt="SYNCRO Metal Tech facility"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-syncro-black/65" />

            {/* Content */}
            <div className="relative flex min-h-[380px] flex-col justify-between p-7 text-white sm:p-10 lg:p-12">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-syncro-red">
                  02 / Location
                </span>

                <MapPin size={18} />
              </div>

              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/50">
                  Manufacturing Base
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                  Gujarat, India
                </h2>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
                  Connect with our team to discuss your manufacturing
                  requirements and project specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="contact-cta mx-auto max-w-[1450px] bg-syncro-black px-7 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
          <div className="mb-10 h-px w-full bg-syncro-red" />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-syncro-red">
                SYNCRO METAL TECH
              </span>

              <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                Precision starts with a conversation.
              </h2>
            </div>

            <a
              href="mailto:info@syncrometaltech.com"
              className="group inline-flex w-fit items-center gap-3 border border-white/30 px-6 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:border-syncro-red hover:bg-syncro-red"
            >
              Email Our Team

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;