import { useEffect, useRef, useState } from "react";
import {
  AboutSection,
  ContactSection,
  DecorativeWebs,
  Footer,
  HomeSection,
  Navbar,
  ProfileDialog,
  ProjectsSection,
} from "./components.jsx";
import "./app.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const profileDialogRef = useRef(null);

  useEffect(() => {
    const portfolio = document.querySelector(".portfolio");
    if (!portfolio || !("IntersectionObserver" in window)) return;

    const revealTargets = document.querySelectorAll(
      ".section, .contact, .project-card"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );

    portfolio.classList.add("motion-ready");
    revealTargets.forEach((target) => {
      target.classList.add("reveal-on-scroll");
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
      portfolio.classList.remove("motion-ready");
      revealTargets.forEach((target) => {
        target.classList.remove("reveal-on-scroll", "is-visible");
      });
    };
  }, []);

  // Keep the native dialog's open state in sync with React state.
  useEffect(() => {
    const dialog = profileDialogRef.current;
    if (!dialog) return;

    if (isProfileOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isProfileOpen && dialog.open) {
      dialog.close();
    }
  }, [isProfileOpen]);

  // Close the dialog after its short greeting animation finishes.
  useEffect(() => {
    if (!isCelebrating) return;

    const celebrationTimer = window.setTimeout(() => {
      setIsCelebrating(false);
      setIsProfileOpen(false);
    }, 2200);

    return () => window.clearTimeout(celebrationTimer);
  }, [isCelebrating]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <div className={`App portfolio ${theme}`}>
      <DecorativeWebs />

      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main id="main-content" tabIndex="-1">
        <HomeSection setIsProfileOpen={setIsProfileOpen} />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <ProfileDialog
        dialogRef={profileDialogRef}
        isCelebrating={isCelebrating}
        setIsCelebrating={setIsCelebrating}
        setIsProfileOpen={setIsProfileOpen}
      />

      <Footer />
    </div>
  );
}

export default App;
