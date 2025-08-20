export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" fill="#E0E0E0" stroke="#B0B0B0" strokeWidth="2" />
      <circle cx="50" cy="50" r="38" fill="url(#grad1)" stroke="#B0B0B0" strokeWidth="1" />
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#D0D0D0', stopOpacity: 1 }} />
        </radialGradient>
        <path id="circlePath" d="M 15, 50 a 35,35 0 1,1 70,0" />
      </defs>
      <path d="M48 48 L20 20 H48 V48Z" fill="#0099FF" />
      <path d="M52 48 L80 20 H52 V48Z" fill="#0099FF" />
      <path d="M48 52 L20 80 H48 V52Z" fill="#0099FF" />
      <path d="M52 52 L80 80 H52 V52Z" fill="#0099FF" />
      <text fill="#000" fontSize="8" fontWeight="bold" letterSpacing="0.1">
        <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
          COMPUTER SOCIETY OF INDIA
        </textPath>
      </text>
      <text x="50" y="85" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#000">
        ESTD. 1965
      </text>
    </svg>
  );
}
