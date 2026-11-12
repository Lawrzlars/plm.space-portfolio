import { useState } from "react";
import { SpiderMark } from "./SpiderMark.jsx";

// Contact links plus an email-copy button with a clipboard fallback.
export function ContactSection() {
  const [copyStatus, setCopyStatus] = useState("Click to copy");
  const email = "lawrzlars@gmail.com";

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setCopyStatus("Copied!");
        return;
      }
    } catch {
      // Fall back when clipboard access is unavailable or denied.
    }

    // This fallback supports browsers that do not expose the Clipboard API.
    const textArea = document.createElement("textarea");
    textArea.value = email;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);

    try {
      textArea.select();
      const copied = document.execCommand("copy");
      setCopyStatus(copied ? "Copied!" : "Copy failed. Select the email to copy.");
    } catch {
      setCopyStatus("Copy failed. Select the email to copy.");
    } finally {
      textArea.remove();
    }
  };

  return (
    <section className="contact" id="contact">
      <p className="eyebrow">03 / CONTACT</p>
      <h2>Have an idea for an app that could help?<SpiderMark /></h2>
      <p>
        Thanks for visiting. I'm learning and building toward making useful
        things.
      </p>
      <div className="contact-details" aria-label="Contact details">
        <button
          className="contact-detail contact-detail-link contact-detail-copy"
          type="button"
          onClick={copyEmail}
          aria-label={`Copy email address ${email}`}
        >
          <span className="contact-detail-label">Email</span>
          <span className="contact-detail-placeholder">{email}</span>
          <span className="contact-copy-status" aria-live="polite">
            {copyStatus}
          </span>
        </button>
        <a
          className="contact-detail contact-detail-link"
          href="https://github.com/Lawrzlars"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit GitHub profile"
        >
          <span className="contact-detail-label">GitHub</span>
          <span className="contact-detail-placeholder">
            Lawrzlars<span className="contact-detail-arrow">↗</span>
          </span>
        </a>
        <a
          className="contact-detail contact-detail-link"
          href="https://www.instagram.com/p_a_u_l__19/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Instagram profile"
        >
          <span className="contact-detail-label">Instagram</span>
          <span className="contact-detail-placeholder">
            p_a_u_l__19<span className="contact-detail-arrow">↗</span>
          </span>
        </a>
      </div>
    </section>
  );
}
