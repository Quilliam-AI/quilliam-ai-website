/**
 * Inline SVG pattern overlays for dark section backgrounds.
 * AI/tech themed: circuit nodes, connection dots, microchip traces.
 * Rendered as fixed, pointer-events-none layers for zero performance cost.
 */

export function CircuitPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal and vertical traces */}
            <path
              d="M0 60h40M80 60h40M60 0v40M60 80v40"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              opacity="0.12"
            />
            {/* Connection nodes */}
            <circle cx="60" cy="60" r="2.5" fill="currentColor" opacity="0.15" />
            <circle cx="0" cy="60" r="1.5" fill="currentColor" opacity="0.1" />
            <circle cx="120" cy="60" r="1.5" fill="currentColor" opacity="0.1" />
            <circle cx="60" cy="0" r="1.5" fill="currentColor" opacity="0.1" />
            <circle cx="60" cy="120" r="1.5" fill="currentColor" opacity="0.1" />
            {/* Diagonal traces */}
            <path
              d="M40 60l10-10M70 50l10 10M40 60l10 10M70 70l10-10"
              stroke="currentColor"
              strokeWidth="0.4"
              fill="none"
              opacity="0.08"
            />
            {/* Small squares (chip pads) */}
            <rect
              x="56"
              y="56"
              width="8"
              height="8"
              rx="1"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.08"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
  );
}

export function DotGridPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dot-grid"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.15" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>
    </div>
  );
}

export function NodeNetworkPattern({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="node-network"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Primary nodes */}
            <circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.12" />
            <circle cx="160" cy="80" r="2.5" fill="currentColor" opacity="0.1" />
            <circle cx="100" cy="160" r="3.5" fill="currentColor" opacity="0.08" />
            <circle cx="20" cy="140" r="2" fill="currentColor" opacity="0.06" />
            <circle cx="180" cy="20" r="2" fill="currentColor" opacity="0.06" />

            {/* Connection lines between nodes */}
            <line
              x1="40"
              y1="40"
              x2="160"
              y2="80"
              stroke="currentColor"
              strokeWidth="0.4"
              opacity="0.06"
            />
            <line
              x1="160"
              y1="80"
              x2="100"
              y2="160"
              stroke="currentColor"
              strokeWidth="0.4"
              opacity="0.05"
            />
            <line
              x1="40"
              y1="40"
              x2="100"
              y2="160"
              stroke="currentColor"
              strokeWidth="0.3"
              opacity="0.04"
            />
            <line
              x1="40"
              y1="40"
              x2="20"
              y2="140"
              stroke="currentColor"
              strokeWidth="0.3"
              opacity="0.04"
            />
            <line
              x1="160"
              y1="80"
              x2="180"
              y2="20"
              stroke="currentColor"
              strokeWidth="0.3"
              opacity="0.04"
            />

            {/* Small accent dots */}
            <circle cx="100" cy="60" r="1" fill="currentColor" opacity="0.06" />
            <circle cx="80" cy="100" r="1" fill="currentColor" opacity="0.05" />
            <circle cx="140" cy="130" r="1" fill="currentColor" opacity="0.05" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#node-network)" />
      </svg>
    </div>
  );
}
