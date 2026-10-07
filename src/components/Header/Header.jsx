import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Home Page",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Product Range",
    path: "/products",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  // =====================================================
  // HIDE HEADER ON SCROLL DOWN
  // SHOW HEADER ON SCROLL UP
  // =====================================================

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show header near top
      if (currentScrollY <= 20) {
        setHeaderVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Scrolling down
      if (currentScrollY > lastScrollY) {
        setHeaderVisible(false);

        // Close mobile menu when scrolling down
        setMenuOpen(false);
      }

      // Scrolling up
      else if (currentScrollY < lastScrollY) {
        setHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // CLOSE MOBILE MENU WHEN SCREEN BECOMES DESKTOP
  // =====================================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // =====================================================
  // PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  // =====================================================

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        px-4
        py-4
        transition-transform
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        sm:px-6
        lg:px-8

        ${
          headerVisible
            ? "translate-y-0"
            : "-translate-y-[120%]"
        }
      `}
    >

      {/* ==================================================
          HEADER
      ================================================== */}

      <div
        className="
          mx-auto
          flex
          h-[76px]
          max-w-[1450px]
          items-center
          justify-between
          rounded-full
          border
          border-syncro-border
          bg-white/95
          px-4
          shadow-[0_10px_40px_rgba(0,0,0,0.06)]
          backdrop-blur-xl
          sm:px-6
        "
      >

        {/* ==================================================
            LOGO
        ================================================== */}

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="
            flex
            shrink-0
            items-center
          "
        >
          <img
            src="/logo.jpeg"
            alt="SYNCRO Metal Tech"
            className="
              h-[42px]
              w-auto
              object-contain
              sm:h-[48px]
            "
          />
        </Link>


        {/* ==================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">

          {navigation.map((item) => (
            <NavLink
  key={item.path}
  to={item.path}
  className={({ isActive }) => `
    group
    relative
    py-2
    font-mono
    text-[10px]
    font-bold
    uppercase
    tracking-[0.16em]
    transition-colors
    duration-300
    ${
      isActive
        ? "text-syncro-black"
        : "text-syncro-gray hover:text-syncro-black"
    }
  `}
>
  {({ isActive }) => (
    <>
      {item.name}

      <span
        className={`
          absolute
          bottom-0
          left-0
          h-[2px]
          rounded-full
          bg-syncro-red
          transition-all
          duration-300
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
    </>
  )}
</NavLink>
          ))}

        </nav>


        {/* ==================================================
            DESKTOP ENQUIRE BUTTON
        ================================================== */}

        <Link
          to="/contact"
          className="
            hidden
            items-center
            gap-2
            rounded-full
            bg-syncro-red
            px-5
            py-3
            font-mono
            text-[10px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-white
            transition-all
            duration-300
            hover:bg-syncro-black
            lg:flex
          "
        >
          Enquire Now

          <ArrowUpRight
            size={14}
            strokeWidth={2.5}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </Link>


        {/* ==================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-syncro-border
            text-syncro-black
            transition-all
            duration-300
            hover:border-syncro-red
            hover:bg-syncro-red
            hover:text-white
            lg:hidden
          "
        >
          {menuOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>

      </div>


      {/* ==================================================
          MOBILE MENU
      ================================================== */}

      <div
        className={`
          mx-auto
          max-w-[1450px]
          lg:hidden
          ${
            menuOpen
              ? "pointer-events-auto mt-3 opacity-100"
              : "pointer-events-none mt-0 opacity-0"
          }
          transition-all
          duration-400
        `}
      >

        <div
          className="
            rounded-[28px]
            border
            border-syncro-border
            bg-white
            p-3
            shadow-[0_20px_50px_rgba(0,0,0,0.08)]
          "
        >

          {/* ==================================================
              SCROLLABLE MOBILE NAVIGATION
          ================================================== */}

          <div
            className="
              max-h-[calc(100vh-180px)]
              overflow-y-auto
              overscroll-contain
              pr-1
            "
          >

            <nav className="flex flex-col">

              {navigation.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-5
                    py-4
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-syncro-black text-white"
                        : "text-syncro-black hover:bg-syncro-light-gray"
                    }
                  `}
                >

                  <div className="flex items-center gap-4">

                    {/* Number */}

                    <span
                      className="
                        font-mono
                        text-[9px]
                        tracking-[0.15em]
                        text-syncro-gray
                      "
                    >
                      0{index + 1}
                    </span>

                    {/* Name */}

                    <span
                      className="
                        font-display
                        text-lg
                        font-medium
                      "
                    >
                      {item.name}
                    </span>

                  </div>

                  <ArrowUpRight
                    size={18}
                    className="
                      text-syncro-red
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </NavLink>
              ))}

            </nav>

          </div>


          {/* ==================================================
              MOBILE CTA
          ================================================== */}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              mt-2
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-syncro-red
              px-5
              py-4
              font-mono
              text-[10px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
              transition-all
              duration-300
              hover:bg-syncro-black
            "
          >
            Enquire Now

            <ArrowUpRight size={15} />
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Header;