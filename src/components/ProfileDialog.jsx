import { SpiderMark } from "./SpiderMark.jsx";

// Modal profile details opened from the portrait in the hero section.
export function ProfileDialog({
  dialogRef,
  isCelebrating,
  setIsCelebrating,
  setIsProfileOpen,
}) {
  return (
    <dialog
      ref={dialogRef}
      className="profile-dialog"
      aria-labelledby="profile-dialog-title"
      onClose={() => {
        setIsProfileOpen(false);
        setIsCelebrating(false);
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setIsProfileOpen(false);
        }
      }}
    >
      <div className="greeting-spiders" aria-hidden="true">
        {["top-right", "bottom-left", "bottom-right"].map((position) => (
          <svg
            className={`greeting-spider greeting-spider-${position}`}
            key={position}
            viewBox="0 0 64 64"
          >
            <path d="M25 25 14 17 7 20M39 25l11-8 7 3M23 32 12 30 6 36M41 32l11-2 6 6M25 39l-9 9-7-2M39 39l9 9 7-2" />
            <circle cx="32" cy="34" r="10" />
            <circle cx="32" cy="20" r="6" />
            <circle className="greeting-spider-eye" cx="30" cy="19" r="1" />
            <circle className="greeting-spider-eye" cx="34" cy="19" r="1" />
          </svg>
        ))}
      </div>

      {isCelebrating && (
        <span className="party-message" aria-hidden="true">
          Great to meet you!
        </span>
      )}

      <button
        className="profile-dialog-close"
        type="button"
        aria-label="Close profile details"
        onClick={() => {
          setIsCelebrating(false);
          setIsProfileOpen(false);
        }}
      >
        &times;
      </button>

      <img
        className="profile-dialog-photo"
        src="/profile.png"
        alt="Paul Lawrence Mendoza"
      />
      <div className="profile-dialog-copy">
        <p className="eyebrow">A LITTLE MORE ABOUT ME</p>
        <h2 id="profile-dialog-title">
          Hi, I'm Paul Lawrence Mendoza.<SpiderMark />
        </h2>
        <p>
          I'm a 3rd year computer science student learning frontend and backend
          development. I enjoy working through challenging problems, and I'm
          building my skills so I can create apps that solve real problems for
          people.
        </p>
        <button
          className="primary-btn"
          type="button"
          onClick={() => setIsCelebrating(true)}
          disabled={isCelebrating}
        >
          {isCelebrating ? "THANKS FOR VISITING" : "NICE TO MEET YOU"}
        </button>
      </div>
    </dialog>
  );
}
