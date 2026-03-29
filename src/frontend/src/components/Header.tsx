import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-black"
      }`}
      style={{
        borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg text-white"
            style={{ background: "#FF3B3B" }}
          >
            R.
          </div>
          <span className="text-white font-semibold text-base hidden sm:block">
            Ranjit Portfolio
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
              className={({ isActive }) =>
                `nav-link-underline text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white active"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          type="button"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-[#1a1a1a] px-6 pb-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
              className={({ isActive }) =>
                `block py-3 text-sm font-medium border-b border-[#1a1a1a] transition-colors ${
                  isActive ? "text-[#FF3B3B]" : "text-gray-400 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
