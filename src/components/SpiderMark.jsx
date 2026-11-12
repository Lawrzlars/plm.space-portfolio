// Shared decorative spider mark used in headings and navigation.
export function SpiderMark({ className = "" }) {
  return (
    <svg
      className={`spider-mark ${className}`}
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path d="M18 18 10 12 5 15M30 18l8-6 5 3M17 24 9 23 5 28M31 24l8-1 4 5M19 30l-7 7-5-2M29 30l7 7 5-2" />
      <ellipse cx="24" cy="27" rx="7" ry="8" />
      <circle cx="24" cy="16" r="5" />
      <circle className="spider-mark-eye" cx="22" cy="15" r="1" />
      <circle className="spider-mark-eye" cx="26" cy="15" r="1" />
    </svg>
  );
}
