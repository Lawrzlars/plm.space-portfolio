import { SpiderMark } from "./SpiderMark.jsx";

// Primary navigation, theme switch, and responsive menu toggle.
export function Navbar({ theme, toggleTheme, isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="logo" href="#home">
        PLM<span>.</span><b>SPACE</b>
      </a>

      <div className="navbar-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <svg
              className="theme-toggle-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.2 15.1A8.3 8.3 0 0 1 8.9 3.8 8.7 8.7 0 1 0 20.2 15.1Z" />
            </svg>
          ) : (
            <svg
              className="theme-toggle-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </svg>
          )}
        </button>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      <div
        className={`nav-links${isMenuOpen ? " is-open" : ""}`}
        id="primary-navigation"
      >
        <a href="#home" onClick={() => setIsMenuOpen(false)}>
          <SpiderMark className="nav-spider-mark" />
          <span>Home</span>
          <SpiderMark className="nav-spider-mark" />
        </a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>
          <SpiderMark className="nav-spider-mark" />
          <span>About</span>
          <SpiderMark className="nav-spider-mark" />
        </a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>
          <SpiderMark className="nav-spider-mark" />
          <span>Projects &amp; Certificates</span>
          <SpiderMark className="nav-spider-mark" />
        </a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
          <SpiderMark className="nav-spider-mark" />
          <span>Contact</span>
          <SpiderMark className="nav-spider-mark" />
        </a>
      </div>
    </nav>
  );
}
