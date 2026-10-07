import { useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
  {
    number: 25,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    number: 1000,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    number: 50,
    suffix: "+",
    label: "Products & Solutions",
  },
  {
    number: 300,
    suffix: "+",
    label: "Global Customers",
  },
];

function StatsStrip() {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const statItems = section.querySelectorAll(".stat-item");

    let hasAnimated = false;

    const animateStats = () => {
      if (hasAnimated) return;

      hasAnimated = true;

      gsap.fromTo(
        statItems,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      stats.forEach((stat, index) => {
        const element = numberRefs.current[index];

        if (!element) return;

        const counter = {
          value: 0,
        };

        gsap.to(counter, {
          value: stat.number,
          duration: 1.2,
          delay: index * 0.1,
          ease: "power2.out",

          onUpdate: () => {
            element.textContent =
              Math.floor(counter.value).toLocaleString("en-IN") +
              stat.suffix;
          },

          onComplete: () => {
            element.textContent =
              stat.number.toLocaleString("en-IN") +
              stat.suffix;
          },
        });
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(statItems);
      gsap.killTweensOf(numberRefs.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 -mt-[70px] px-4 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* FLOATING STATS CARD */}
        <div className="overflow-hidden rounded-[26px] border border-syncro-border bg-white shadow-[0_25px_70px_rgba(0,0,0,0.12)] ">
          
          {/* TOP RED LINE */}
          <div className="h-[3px] w-full bg-syncro-red" />

          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  stat-item group relative
                  px-5 py-7
                  sm:px-7 sm:py-9
                  lg:px-9 lg:py-9
                  ${
                    index < 2
                      ? "border-b border-syncro-border lg:border-b-2"
                      : ""
                  }
                  ${
                    index === 0 || index === 1
                      ? "border-r border-syncro-border"
                      : ""
                  }
                `}
              >
                {/* NUMBER */}
                <div className="flex items-center  justify-between">
                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-syncro-gray">
                    0{index + 1}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-syncro-red transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_14px_rgba(229,57,53,0.6)]" />
                </div>

                {/* COUNTER */}
                <div className="mt-2  overflow-hidden">
                  <span
                    ref={(element) => {
                      numberRefs.current[index] = element;
                    }}
                    className="block font-display   text-4xl font-semibold leading-none tracking-[-0.06em] text-syncro-black sm:text-5xl lg:text-[43px]"
                  >
                    0{stat.suffix}
                  </span>
                </div>

                {/* LABEL */}
                <div className="mt-2 flex items-center  gap-2">
                  <span className="h-px w-5 bg-syncro-red transition-all duration-300 group-hover:w-9" />

                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.13em] text-syncro-gray sm:text-[9px]">
                    {stat.label}
                  </span>
                </div>

                {/* HOVER LINE */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-syncro-red transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsStrip;