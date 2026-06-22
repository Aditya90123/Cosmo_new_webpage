import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let scrollTimeout;
    let lastScrollY = window.scrollY;
    
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setIsScrolling(true);
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      
      lastScrollY = currentScrollY;
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
    };
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
          className={`site-header__menu ${menuOpen ? "site-header__menu--open" : ""} ${isScrolling ? "site-header__menu--scrolling" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
        >
          <img 
            src="/images/HAMBURGER.png" 
            alt="Menu" 
            className={`site-header__menu-icon ${isScrolling ? (scrollDirection === "down" ? "site-header__menu-icon--clockwise" : "site-header__menu-icon--anticlockwise") : ""}`} 
          />
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
          <Link to="/all-products" onClick={closeMenu}>
            Explore More Products
          </Link>
          <Link to="/history" onClick={closeMenu}>
            Our History
          </Link>
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
