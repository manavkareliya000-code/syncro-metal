import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-syncro-black text-white">

      {/* Red top line */}
      <div className="h-1 w-full bg-syncro-red" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-6 py-16 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <img
              src="/logo.jpeg"
              alt="SYNCRO Metal Tech"
              className="mb-6 w-[150px] "
            />

            <p className="max-w-sm text-sm leading-7 text-white/60">
              Precision engineering and advanced metal technology
              for modern industrial requirements.
            </p>

            <Link
              to="/contact"
              className="mt-5 mb-2 inline-flex items-center gap-2 rounded-full hover:bg-syncro-red px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.15em] hover:text-white transition-all duration-300 bg-white text-syncro-black"
            >
              Enquire Now
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Navigation
            </h3>

            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-sm text-white/70 transition-colors hover:text-syncro-red"
              >
                Home Page
              </Link>

              <Link
                to="/about"
                className="text-sm text-white/70 transition-colors hover:text-syncro-red"
              >
                About Us
              </Link>

              <Link
                to="/products"
                className="text-sm text-white/70 transition-colors hover:text-syncro-red"
              >
                Product Range
              </Link>

              <Link
                to="/blog"
                className="text-sm text-white/70 transition-colors hover:text-syncro-red"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="text-sm text-white/70 transition-colors hover:text-syncro-red"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Capabilities
            </h3>

            <div className="flex flex-col gap-4">
              <span className="text-sm text-white/70">
                Precision Components
              </span>

              <span className="text-sm text-white/70">
                Metal Fabrication
              </span>

              <span className="text-sm text-white/70">
                Industrial Systems
              </span>

              <span className="text-sm text-white/70">
                Engineering Solutions
              </span>

              <span className="text-sm text-white/70">
                Manufacturing
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Contact
            </h3>

            <div className="space-y-4">

              <div>
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Phone
                </p>

                <p className="text-sm text-white/70">
                  +91 99999 99999
                </p>
              </div>

              <div>
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Email
                </p>

                <p className="text-sm text-white/70">
                  info@syncrometaltech.com
                </p>
              </div>

              <div>
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Location
                </p>

                <p className="text-sm text-white/70">
                  Gujarat, India
                </p>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-7 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 font-mono text-[9px] font-bold text-white/60 transition-all duration-300 hover:border-syncro-red hover:bg-syncro-red hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 font-mono text-[9px] font-bold text-white/60 transition-all duration-300 hover:border-syncro-red hover:bg-syncro-red hover:text-white"
              >
                IN
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 font-mono text-[9px] font-bold text-white/60 transition-all duration-300 hover:border-syncro-red hover:bg-syncro-red hover:text-white"
              >
                FB
              </a>

            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="my-0 border-y border-white/10 py-4">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-syncro-red">
                Start a project
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Let's build something precise.
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:border-syncro-red hover:bg-syncro-red"
            >
              Talk to us
              <ArrowUpRight size={16} />
            </Link>

          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-5 border-t border-white/10 pt-7 text-xs text-white/40 md:flex-row">

          <p>
            © 2026 SYNCRO METAL TECH. All rights reserved.
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.15em]">
            Industrial Technology / India
          </p>

        </div>
      </div>

      {/* Background Watermark */}
      <div className="pointer-events-none absolute bottom-[-16px] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[18vw] font-bold uppercase leading-none text-white/[0.025]">
        SYNCRO
      </div>

    </footer>
  );
}

export default Footer;