import React from 'react';

interface MacawIconProps {
  className?: string;
  size?: number;
  animated?: boolean;
  withPerchLine?: boolean;
}

export const MacawIcon: React.FC<MacawIconProps> = ({
  className = '',
  size = 48,
  animated = false,
  withPerchLine = true
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible ${animated ? 'transition-transform duration-500 hover:scale-110' : ''}`}
      >
        <defs>
          <linearGradient id="macawRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="60%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>

          <linearGradient id="macawYellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          <linearGradient id="macawBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>

          <linearGradient id="macawGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          <linearGradient id="electricGlow" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#E5A919" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FDE047" stopOpacity="1" />
            <stop offset="100%" stopColor="#E5A919" stopOpacity="0.8" />
          </linearGradient>

          <filter id="energyGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Power Line / Perch if enabled */}
        {withPerchLine && (
          <g id="power-cable">
            {/* Ambient glow line */}
            <line
              x1="0"
              y1="92"
              x2="120"
              y2="92"
              stroke="#E5A919"
              strokeWidth="4"
              strokeOpacity="0.4"
              filter="url(#energyGlow)"
            />
            {/* Core metallic power conductor */}
            <line
              x1="0"
              y1="92"
              x2="120"
              y2="92"
              stroke="url(#electricGlow)"
              strokeWidth="2.5"
            />
            {/* Energy pulse nodes */}
            <circle cx="20" cy="92" r="2" fill="#FFFFFF" opacity="0.9" />
            <circle cx="100" cy="92" r="2" fill="#FFFFFF" opacity="0.9" />
          </g>
        )}

        {/* Macaw Tail Feathers (Streamlined, elegant, royal blue & scarlet) */}
        <path
          d="M 50 75 Q 46 100 42 118 Q 48 108 52 82 Z"
          fill="url(#macawBlue)"
          opacity="0.9"
        />
        <path
          d="M 52 75 Q 51 98 48 116 Q 54 100 56 80 Z"
          fill="url(#macawRed)"
        />
        <path
          d="M 55 77 Q 56 96 54 114 Q 58 97 58 80 Z"
          fill="url(#macawYellow)"
        />

        {/* Wing Layer 1 (Lower Blue Flight Feathers) */}
        <path
          d="M 46 45 C 38 52 35 68 44 82 C 48 76 54 62 52 48 Z"
          fill="url(#macawBlue)"
        />

        {/* Wing Layer 2 (Middle Emerald & Gold Feathers) */}
        <path
          d="M 48 40 C 42 46 41 58 48 70 C 52 64 57 52 54 42 Z"
          fill="url(#macawGreen)"
        />
        <path
          d="M 52 38 C 47 44 48 56 55 64 C 58 56 61 48 57 38 Z"
          fill="url(#macawYellow)"
        />

        {/* Macaw Body & Chest (Vibrant Scarlet Red with muscular proud posture) */}
        <path
          d="M 55 24 C 64 24 72 32 72 44 C 72 58 64 74 54 82 C 48 78 46 64 48 52 C 49 40 50 28 55 24 Z"
          fill="url(#macawRed)"
        />

        {/* Macaw Head & Crest */}
        <path
          d="M 55 20 C 52 14 58 8 68 10 C 76 12 80 18 78 26 C 76 30 70 34 62 32 C 57 30 55 24 55 20 Z"
          fill="url(#macawRed)"
        />

        {/* Facial Skin Patch (Characteristic white bare patch with subtle dark feather lines) */}
        <path
          d="M 66 14 C 72 15 76 19 75 24 C 73 27 68 28 65 24 C 63 20 64 16 66 14 Z"
          fill="#FAFAFA"
        />
        {/* Facial feather striations */}
        <path d="M 68 18 Q 72 19 74 21" stroke="#991B1B" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M 67 21 Q 70 22 73 24" stroke="#991B1B" strokeWidth="0.8" strokeLinecap="round" />

        {/* Powerful Eye (Intelligent, proud, golden iris with black pupil) */}
        <circle cx="70" cy="18" r="2.8" fill="#F59E0B" />
        <circle cx="70" cy="18" r="1.6" fill="#0B0F17" />
        <circle cx="69.4" cy="17.4" r="0.6" fill="#FFFFFF" />

        {/* Upper Beak (Hooked, ivory white with black base, massive and majestic) */}
        <path
          d="M 76 18 Q 88 20 86 28 C 84 31 80 30 76 27 C 74 25 74 20 76 18 Z"
          fill="#F8FAFC"
          stroke="#0F172A"
          strokeWidth="0.6"
        />
        <path
          d="M 76 18 C 78 19 78 22 76 24 Z"
          fill="#1E293B"
        />

        {/* Lower Beak (Black, curved, fits beneath upper hook) */}
        <path
          d="M 76 26 C 79 28 82 28 81 31 C 78 32 75 30 74 28 Z"
          fill="#0F172A"
        />

        {/* Strong Talons gripping the electrical line */}
        <g id="talons" fill="#334155" stroke="#1E293B" strokeWidth="0.5">
          <rect x="52" y="89" width="3" height="6" rx="1.5" />
          <rect x="56" y="89" width="3" height="6" rx="1.5" />
          <rect x="60" y="89" width="3" height="6" rx="1.5" />
          {/* Subtle electric spark near talons */}
          <circle cx="58" cy="92" r="1.5" fill="#FDE047" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
};
