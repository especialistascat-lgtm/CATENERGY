import React from 'react';

export interface CatEnergyLogoProps {
  className?: string;
  size?: number | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  variant?: 'full' | 'icon-only' | 'horizontal' | 'stacked' | 'badge';
  theme?: 'gold' | 'yellow' | 'black' | 'white' | 'adaptive';
  showSubtitle?: boolean;
  subtitleText?: string;
  withHazardStripes?: boolean;
  animated?: boolean;
}

/**
 * High-Precision Vector Transmission Tower Icon
 * Faithfully matches the exact geometry of the real CAT ENERGY logo:
 * - Lattice tower framework
 * - Insulator drop-strings hanging under the crossarms
 * - Cross-braced structural steel trusses
 * - Solid ground grounding bar
 */
export const TransmissionTowerIcon: React.FC<{
  size?: number;
  color?: string;
  animated?: boolean;
  className?: string;
}> = ({ size = 48, color = '#FFC700', animated = false, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${animated ? 'transition-all duration-300 hover:scale-105' : ''} ${className}`}
      aria-label="CAT ENERGY Transmission Tower"
    >
      {/* 1. Base Grounding Bar */}
      <rect x="4" y="93" width="92" height="5" rx="2.5" fill={color} />

      {/* 2. Main Outward Spreading Corner Legs */}
      {/* Left Outer Leg */}
      <line x1="39" y1="14" x2="16" y2="93" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
      {/* Right Outer Leg */}
      <line x1="61" y1="14" x2="84" y2="93" stroke={color} strokeWidth="4.5" strokeLinecap="round" />

      {/* 3. Top Peak Triangle */}
      <path
        d="M50 6L38 18H62L50 6Z"
        fill={color}
      />
      <line x1="50" y1="5" x2="38" y2="18" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
      <line x1="50" y1="5" x2="62" y2="18" stroke={color} strokeWidth="4.5" strokeLinecap="round" />

      {/* 4. Top Crossarm & Upper Truss */}
      <line x1="28" y1="28" x2="72" y2="28" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <line x1="38" y1="18" x2="62" y2="38" stroke={color} strokeWidth="3" />
      <line x1="62" y1="18" x2="38" y2="38" stroke={color} strokeWidth="3" />
      <line x1="35" y1="38" x2="65" y2="38" stroke={color} strokeWidth="3.5" />

      {/* 5. Main High-Voltage Crossarm with Insulator Droplets */}
      {/* Crossarm Support Struts */}
      <line x1="35" y1="38" x2="8" y2="52" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="65" y1="38" x2="92" y2="52" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      {/* Main Horizontal Crossarm Bar */}
      <line x1="6" y1="52" x2="94" y2="52" stroke={color} strokeWidth="4.5" strokeLinecap="round" />

      {/* Left Hanging Insulator Strings */}
      <line x1="12" y1="52" x2="12" y2="62" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="12" cy="62" r="1.5" fill={color} />
      <line x1="20" y1="52" x2="20" y2="62" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="20" cy="62" r="1.5" fill={color} />
      <line x1="28" y1="52" x2="28" y2="62" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="28" cy="62" r="1.5" fill={color} />

      {/* Right Hanging Insulator Strings */}
      <line x1="72" y1="52" x2="72" y2="62" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="72" cy="62" r="1.5" fill={color} />
      <line x1="80" y1="52" x2="80" y2="62" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="80" cy="62" r="1.5" fill={color} />
      <line x1="88" y1="52" x2="88" y2="62" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="88" cy="62" r="1.5" fill={color} />

      {/* 6. Middle Body X-Lattice & Horizontal Waist */}
      <line x1="35" y1="38" x2="68" y2="70" stroke={color} strokeWidth="3" />
      <line x1="65" y1="38" x2="32" y2="70" stroke={color} strokeWidth="3" />
      <line x1="22" y1="70" x2="78" y2="70" stroke={color} strokeWidth="4" strokeLinecap="round" />

      {/* Waist Insulator Strings */}
      <line x1="24" y1="70" x2="24" y2="78" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="78" r="1.5" fill={color} />
      <line x1="76" y1="70" x2="76" y2="78" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="76" cy="78" r="1.5" fill={color} />

      {/* 7. Lower Braced Lattice & Foundation */}
      <line x1="30" y1="70" x2="80" y2="93" stroke={color} strokeWidth="3.2" />
      <line x1="70" y1="70" x2="20" y2="93" stroke={color} strokeWidth="3.2" />
      <line x1="50" y1="70" x2="50" y2="93" stroke={color} strokeWidth="2.5" />
    </svg>
  );
};

export const CatEnergyLogo: React.FC<CatEnergyLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
  theme = 'gold',
  showSubtitle = true,
  subtitleText = 'AUDITORIA, CONSULTORIA Y SERVICIOS EN ENERGIA',
  withHazardStripes = false,
  animated = false
}) => {
  // Dimensions & proportions
  const getDimensions = () => {
    if (typeof size === 'number') {
      return { 
        iconSize: size, 
        mainTextSize: Math.round(size * 0.72),
        subTextSize: Math.max(9, Math.round(size * 0.22)),
        gap: Math.round(size * 0.25)
      };
    }
    switch (size) {
      case 'sm':
        return { iconSize: 32, mainTextSize: 22, subTextSize: 8, gap: 8 };
      case 'md':
        return { iconSize: 46, mainTextSize: 32, subTextSize: 9.5, gap: 12 };
      case 'lg':
        return { iconSize: 64, mainTextSize: 44, subTextSize: 12, gap: 16 };
      case 'xl':
        return { iconSize: 84, mainTextSize: 58, subTextSize: 15, gap: 20 };
      case 'hero':
        return { iconSize: 110, mainTextSize: 76, subTextSize: 18, gap: 24 };
      default:
        return { iconSize: 46, mainTextSize: 32, subTextSize: 9.5, gap: 12 };
    }
  };

  const { iconSize, mainTextSize, subTextSize, gap } = getDimensions();

  // Determine colors based on theme
  const getColors = () => {
    switch (theme) {
      case 'yellow':
      case 'gold':
        return {
          tower: '#FFC700', // Real CAT ENERGY Gold Yellow
          brand: '#FFC700',
          subtitle: '#FFFFFF', // High contrast white for dark background or customizable
          subtitleDark: '#0A0E1A'
        };
      case 'black':
        return {
          tower: '#000000',
          brand: '#000000',
          subtitle: '#000000',
          subtitleDark: '#000000'
        };
      case 'white':
        return {
          tower: '#FFFFFF',
          brand: '#FFFFFF',
          subtitle: '#E2E8F0',
          subtitleDark: '#FFFFFF'
        };
      case 'adaptive':
      default:
        return {
          tower: '#FFC700',
          brand: '#FFC700',
          subtitle: '#E2E8F0',
          subtitleDark: '#0A0E1A'
        };
    }
  };

  const colors = getColors();

  // Icon only
  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <TransmissionTowerIcon size={iconSize} color={colors.tower} animated={animated} />
      </div>
    );
  }

  // Compact Badge
  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-black/80 border border-amber-500/40 shadow-lg ${className}`}>
        <TransmissionTowerIcon size={iconSize * 0.75} color={colors.tower} animated={animated} />
        <div className="flex flex-col">
          <span 
            className="font-black tracking-tight leading-none uppercase font-heading"
            style={{ color: colors.brand, fontSize: `${mainTextSize * 0.6}px` }}
          >
            CAT ENERGY
          </span>
          {showSubtitle && (
            <span className="text-[8px] font-mono-tech tracking-wider text-slate-300 font-semibold uppercase mt-0.5">
              ALTA TENSIÓN & ENERGÍA
            </span>
          )}
        </div>
      </div>
    );
  }

  // Stacked Layout (Tower on Top, CAT ENERGY in Middle, Subtitle below)
  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`}>
        {withHazardStripes && (
          <div className="w-full h-1.5 mb-3 bg-[repeating-linear-gradient(45deg,#FFC700,#FFC700_10px,#000000_10px,#000000_20px)] rounded-full" />
        )}

        <TransmissionTowerIcon size={iconSize * 1.3} color={colors.tower} animated={animated} />

        <div className="mt-3">
          <h1
            className="font-black uppercase tracking-tight font-heading leading-none"
            style={{
              color: colors.brand,
              fontSize: `${mainTextSize * 1.2}px`,
              letterSpacing: '0.02em',
              textShadow: theme === 'gold' || theme === 'adaptive' ? '0 0 20px rgba(255, 199, 0, 0.4)' : 'none'
            }}
          >
            CAT ENERGY
          </h1>

          {showSubtitle && (
            <p
              className="font-mono-tech font-bold uppercase tracking-widest mt-2"
              style={{
                color: colors.subtitle,
                fontSize: `${subTextSize}px`,
                letterSpacing: '0.12em'
              }}
            >
              {subtitleText}
            </p>
          )}
        </div>

        {withHazardStripes && (
          <div className="w-full h-1.5 mt-3 bg-[repeating-linear-gradient(45deg,#FFC700,#FFC700_10px,#000000_10px,#000000_20px)] rounded-full" />
        )}
      </div>
    );
  }

  // Real Official Horizontal Logo (Tower + "CAT ENERGY" + full width Subtitle spanning underneath)
  // Exact layout matching Logos CAT - 2.jpg and Logos CAT - 2 (1).jpg
  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      {withHazardStripes && (
        <div className="w-full h-1 mb-2 bg-[repeating-linear-gradient(45deg,#FFC700,#FFC700_8px,#000000_8px,#000000_16px)] rounded-full" />
      )}

      {/* Main Horizontal Block: Tower on Left + CAT ENERGY on Right */}
      <div className="inline-flex items-center" style={{ gap: `${gap}px` }}>
        {/* Transmission Tower */}
        <TransmissionTowerIcon size={iconSize} color={colors.tower} animated={animated} />

        {/* Real Typography: "CAT ENERGY" */}
        <div className="flex flex-col justify-center">
          <span
            className="font-black uppercase tracking-wider font-display-wide leading-none select-none"
            style={{
              color: colors.brand,
              fontSize: `${mainTextSize}px`,
              letterSpacing: '0.06em',
              fontFamily: "'Syncopate', 'Syne', sans-serif",
              textShadow: theme === 'gold' || theme === 'adaptive' ? '0 0 15px rgba(255, 199, 0, 0.35)' : 'none'
            }}
          >
            CAT ENERGY
          </span>
        </div>
      </div>

      {/* Real Full-Width Subtitle: "AUDITORIA, CONSULTORIA Y SERVICIOS EN ENERGIA" */}
      {showSubtitle && (
        <div className="w-full mt-1.5 flex items-center justify-between">
          <span
            className="font-mono-tech font-bold uppercase tracking-wider select-none text-left w-full"
            style={{
              color: colors.subtitle,
              fontSize: `${subTextSize}px`,
              letterSpacing: '0.08em',
              lineHeight: 1.1
            }}
          >
            {subtitleText}
          </span>
        </div>
      )}

      {withHazardStripes && (
        <div className="w-full h-1 mt-2 bg-[repeating-linear-gradient(45deg,#FFC700,#FFC700_8px,#000000_8px,#000000_16px)] rounded-full" />
      )}
    </div>
  );
};
