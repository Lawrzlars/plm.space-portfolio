import { SpiderMark } from "./SpiderMark.jsx";

// Intro section with a button that opens the profile dialog.
export function HomeSection({ setIsProfileOpen }) {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="eyebrow">FRONT &amp; BACKEND DEVELOPMENT STUDENT</p>
        <h1>
          Hi, I'm <span>Paul!</span>
          <SpiderMark className="hero-spider-mark" />
        </h1>
        <p className="description">
          I'm learning frontend and exploring backend development. I'm still a
          beginner, but I keep practicing through the tricky parts. My goal is
          to build an app that solves a real problem for people.
        </p>
        <a className="primary-btn" href="#projects">
          EXPLORE MY WORLD
        </a>
        <p className="hero-note">
          FRONTEND BEGINNER · BACKEND BEGINNER · FUTURE APP BUILDER
        </p>
      </div>

      <div className="hero-art">
        <button
          className="profile-photo-button"
          type="button"
          aria-label="Learn more about Paul Lawrence Mendoza"
          aria-haspopup="dialog"
          onClick={() => setIsProfileOpen(true)}
        >
          <img
            className="hero-profile-photo"
            src="/profile.png"
            alt="Portrait of Paul Lawrence Mendoza"
          />
        </button>
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <span className="art-label">⇧⇧CLICK TO KNOW MORE⇧⇧</span>
      </div>
    </section>
  );
}
