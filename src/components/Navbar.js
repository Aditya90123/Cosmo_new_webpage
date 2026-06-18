import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenuToggle = () => setMenuOpen((open) => !open);

  const closeMenu = () => setMenuOpen(false);

  const handleLogoClick = (event) => {
    event.preventDefault();
    closeMenu();

    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: "#hero" });
      return;
    }

    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", "/#hero");
    } else {
      navigate({ pathname: "/", hash: "#hero" });
    }
  };

  return (
    <header className={scrolled ? "site-header site-header--blur" : "site-header"}>
      <div className="site-header__inner">
        <button
          className={`site-header__menu ${menuOpen ? "site-header__menu--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
        >
          <span className="site-header__menu-icon" />
        </button>

        <nav className={`site-header__nav ${menuOpen ? "site-header__nav--open" : ""}`} aria-label="Navigation options">
          <div className="site-header__nav-title">COSMO Menu</div>
          <a href="/#hero" onClick={handleLogoClick}>
            Home
          </a>
          <a href="/#products" onClick={closeMenu}>
            Product Gallery
          </a>
          <a href="/#solutions" onClick={closeMenu}>
            Solutions
          </a>
          <Link to="/contact" onClick={closeMenu}>
            Contact Sales
          </Link>
          <a href="/#about" onClick={closeMenu}>
            Why COSMO
          </a>
        </nav>

        <a href="/#hero" onClick={handleLogoClick} className="site-header__brand">
          <img src="/logo.png" alt="COSMO" className="site-header__logo" />
        </a>

        <Link to="/contact" className="site-header__cta" onClick={closeMenu}>
          Contact us →
        </Link>
      </div>
    </header>
  );
}
