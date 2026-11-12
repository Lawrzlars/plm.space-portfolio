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
