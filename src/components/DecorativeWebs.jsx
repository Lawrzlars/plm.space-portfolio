// Decorative background artwork is hidden from assistive technology.
export function DecorativeWebs() {
  return (
    <>
      <svg
        className="web-decoration web-decoration-top"
        viewBox="0 0 220 240"
        aria-hidden="true"
      >
        <g className="web-lines">
          <path d="M220 0H0M220 0L0 90M220 0L40 160M220 0L100 210M220 0L220 240M220 0L220 80M220 0L150 150" />
          <path d="M185 0Q180 35 220 40M145 0Q140 70 220 85M105 0Q100 110 220 130M65 0Q60 150 220 175M25 0Q20 190 220 215" />
        </g>
        <g className="hanging-spider">
          <path className="spider-thread" d="M168 0V82" />
          <circle className="spider-body" cx="168" cy="91" r="6" />
          <circle className="spider-head" cx="168" cy="82" r="3" />
          <path className="spider-legs" d="M164 84L157 79L153 82M172 84L179 79L183 82M163 89L155 88L151 92M173 89L181 88L185 92M164 94L158 100L154 98M172 94L178 100L182 98" />
        </g>
      </svg>
      <svg
        className="web-decoration web-decoration-bottom"
        viewBox="0 0 220 220"
        aria-hidden="true"
      >
        <g className="web-lines">
          <path d="M0 220V0M0 220H220M0 220L60 0M0 220L130 0M0 220L220 50M0 220L220 130" />
          <path d="M0 185Q40 180 45 220M0 145Q80 140 85 220M0 105Q120 100 125 220M0 65Q160 60 165 220M0 25Q200 20 205 220" />
        </g>
        <g className="crawling-spider">
          <circle className="spider-body" cx="73" cy="154" r="5" />
          <circle className="spider-head" cx="73" cy="146" r="2.5" />
          <path className="spider-legs" d="M70 148L64 144L60 147M76 148L82 144L86 147M69 153L62 152L59 156M77 153L84 152L87 156M70 158L65 163L61 161M76 158L81 163L85 161" />
        </g>
      </svg>
    </>
  );
}
