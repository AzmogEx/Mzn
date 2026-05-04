/**
 * Illustrations SVG abstraites pour la section Matériel.
 * Style monochrome, accent or subtil, gradient métallique, lumière intérieure.
 * Chaque pièce est conçue pour être détourée (pas de fond rectangulaire).
 *
 * À remplacer par de vraies photos détourées (PNG transparent) plus tard —
 * on garde juste la même API : <CanonR5 />, <OpticsL />, etc.
 */

const sharedDefs = (id: string) => (
  <defs>
    <linearGradient id={`${id}-body`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#2a2a2a" />
      <stop offset="50%" stopColor="#0e0e0e" />
      <stop offset="100%" stopColor="#1a1a1a" />
    </linearGradient>
    <linearGradient id={`${id}-highlight`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#f5f3ee" stopOpacity="0.18" />
      <stop offset="100%" stopColor="#f5f3ee" stopOpacity="0" />
    </linearGradient>
    <radialGradient id={`${id}-glass`} cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#c9a961" stopOpacity="0.45" />
      <stop offset="40%" stopColor="#1a1208" stopOpacity="0.95" />
      <stop offset="100%" stopColor="#000000" stopOpacity="1" />
    </radialGradient>
    <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" />
      <feOffset dy="8" />
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.45" />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

/* ---------- Canon EOS R5 — boîtier reflex ---------- */
export function CanonR5({ className }: { className?: string }) {
  const id = "canonr5";
  return (
    <svg
      viewBox="0 0 400 280"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Canon EOS R5"
    >
      {sharedDefs(id)}
      <g filter={`url(#${id}-shadow)`}>
        {/* Bosse viseur */}
        <path
          d="M 165 60 L 235 60 L 245 95 L 155 95 Z"
          fill={`url(#${id}-body)`}
          stroke="#3a3a3a"
          strokeWidth="0.5"
        />
        {/* Corps principal */}
        <rect
          x="60"
          y="90"
          width="280"
          height="150"
          rx="14"
          fill={`url(#${id}-body)`}
          stroke="#3a3a3a"
          strokeWidth="0.5"
        />
        {/* Reflet haut sur le corps */}
        <rect
          x="60"
          y="90"
          width="280"
          height="40"
          rx="14"
          fill={`url(#${id}-highlight)`}
        />
        {/* Grip à droite */}
        <path
          d="M 290 90 Q 340 95 340 165 Q 340 240 295 240 L 290 240 Z"
          fill="#0a0a0a"
          opacity="0.5"
        />
        {/* Monture objectif (anneau) */}
        <circle cx="180" cy="165" r="62" fill="#0a0a0a" />
        <circle cx="180" cy="165" r="62" fill="none" stroke="#3a3a3a" strokeWidth="1" />
        <circle cx="180" cy="165" r="50" fill={`url(#${id}-glass)`} />
        <circle cx="180" cy="165" r="50" fill="none" stroke="#1a1a1a" strokeWidth="1" />
        {/* Reflet sur la lentille */}
        <ellipse cx="165" cy="148" rx="14" ry="7" fill="#f5f3ee" opacity="0.12" />
        {/* Trait or signature objectif L */}
        <circle
          cx="180"
          cy="165"
          r="56"
          fill="none"
          stroke="#c9a961"
          strokeWidth="1.5"
          opacity="0.85"
        />
        {/* Bouton shutter */}
        <circle cx="305" cy="105" r="6" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="0.5" />
        {/* Petit écran/leds */}
        <rect x="240" y="115" width="44" height="14" rx="2" fill="#080808" />
        <rect x="245" y="119" width="6" height="6" fill="#c9a961" opacity="0.6" />
        {/* Texte EOS R5 */}
        <text
          x="78"
          y="118"
          fill="#5a5a5a"
          fontSize="9"
          fontFamily="ui-monospace, monospace"
          letterSpacing="2"
        >
          EOS R5
        </text>
        {/* Marque CANON */}
        <text
          x="120"
          y="232"
          fill="#3a3a3a"
          fontSize="7"
          fontFamily="ui-sans-serif, sans-serif"
          letterSpacing="1.5"
        >
          CANON
        </text>
      </g>
    </svg>
  );
}

/* ---------- Optiques série L ---------- */
export function OpticsL({ className }: { className?: string }) {
  const id = "opticsl";
  return (
    <svg
      viewBox="0 0 400 280"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Optiques Canon série L"
    >
      {sharedDefs(id)}
      <g filter={`url(#${id}-shadow)`}>
        {/* Cylindre objectif (vue de côté) */}
        <rect x="80" y="90" width="240" height="100" rx="6" fill={`url(#${id}-body)`} />
        {/* Anneau métallique 1 */}
        <rect x="120" y="86" width="3" height="108" fill="#3a3a3a" />
        <rect x="180" y="86" width="3" height="108" fill="#3a3a3a" />
        <rect x="240" y="86" width="3" height="108" fill="#3a3a3a" />
        {/* Bague de mise au point texturée */}
        <rect x="125" y="100" width="50" height="80" fill="#1a1a1a" />
        {Array.from({ length: 18 }).map((_, i) => (
          <rect key={i} x={127 + i * 2.7} y="105" width="1" height="70" fill="#0a0a0a" />
        ))}
        {/* Bague de zoom texturée */}
        <rect x="185" y="100" width="50" height="80" fill="#1a1a1a" />
        {Array.from({ length: 18 }).map((_, i) => (
          <rect key={i} x={187 + i * 2.7} y="105" width="1" height="70" fill="#0a0a0a" />
        ))}
        {/* Anneau or signature L */}
        <rect x="245" y="92" width="8" height="96" fill="#c9a961" opacity="0.95" />
        <rect x="245" y="92" width="8" height="20" fill="#e6c989" opacity="0.6" />
        {/* Avant objectif (lentille frontale) */}
        <circle cx="320" cy="140" r="60" fill="#0a0a0a" />
        <circle cx="320" cy="140" r="60" fill="none" stroke="#3a3a3a" strokeWidth="0.5" />
        <circle cx="320" cy="140" r="48" fill={`url(#${id}-glass)`} />
        {/* Reflet lentille */}
        <ellipse cx="305" cy="122" rx="13" ry="7" fill="#f5f3ee" opacity="0.14" />
        {/* Texte L lens spec */}
        <text
          x="135"
          y="200"
          fill="#5a5a5a"
          fontSize="8"
          fontFamily="ui-monospace, monospace"
          letterSpacing="1.5"
        >
          24-70mm f/2.8
        </text>
        {/* Petit "L" or */}
        <text
          x="248"
          y="184"
          fill="#0a0a0a"
          fontSize="9"
          fontWeight="700"
          fontFamily="ui-serif, serif"
        >
          L
        </text>
      </g>
    </svg>
  );
}

/* ---------- Mixer ATEM ---------- */
export function AtemMixer({ className }: { className?: string }) {
  const id = "atem";
  return (
    <svg
      viewBox="0 0 400 280"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Mixer Blackmagic ATEM"
    >
      {sharedDefs(id)}
      <g filter={`url(#${id}-shadow)`}>
        {/* Plateau */}
        <rect
          x="40"
          y="80"
          width="320"
          height="160"
          rx="10"
          fill={`url(#${id}-body)`}
          stroke="#2a2a2a"
          strokeWidth="0.5"
        />
        {/* Reflet haut */}
        <rect
          x="40"
          y="80"
          width="320"
          height="40"
          rx="10"
          fill={`url(#${id}-highlight)`}
        />
        {/* Rangée de boutons sources (8 boutons) */}
        {Array.from({ length: 8 }).map((_, i) => {
          const x = 60 + i * 30;
          const isLive = i === 2;
          const isPreview = i === 5;
          return (
            <g key={`src-${i}`}>
              <rect
                x={x}
                y={130}
                width="24"
                height="24"
                rx="3"
                fill={isLive ? "#7a1a1a" : isPreview ? "#1a4a1a" : "#0a0a0a"}
                stroke="#1a1a1a"
                strokeWidth="0.5"
              />
              {(isLive || isPreview) && (
                <rect
                  x={x}
                  y={130}
                  width="24"
                  height="24"
                  rx="3"
                  fill={isLive ? "#c92a2a" : "#3aaa3a"}
                  opacity="0.7"
                />
              )}
              <text
                x={x + 12}
                y={147}
                textAnchor="middle"
                fill="#f5f3ee"
                fontSize="8"
                fontFamily="ui-monospace, monospace"
                opacity={isLive || isPreview ? 1 : 0.5}
              >
                {i + 1}
              </text>
            </g>
          );
        })}
        {/* Rangée 2 — destinations */}
        {Array.from({ length: 8 }).map((_, i) => {
          const x = 60 + i * 30;
          return (
            <g key={`dst-${i}`}>
              <rect
                x={x}
                y={165}
                width="24"
                height="14"
                rx="2"
                fill="#0a0a0a"
                stroke="#1a1a1a"
                strokeWidth="0.5"
              />
            </g>
          );
        })}
        {/* T-bar (fader transition) */}
        <rect x="60" y="195" width="220" height="6" rx="3" fill="#0a0a0a" />
        <rect x="155" y="190" width="30" height="16" rx="2" fill="#3a3a3a" />
        <rect x="155" y="190" width="30" height="6" rx="2" fill="#5a5a5a" />
        {/* Knob droite */}
        <circle cx="320" cy="155" r="22" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.5" />
        <circle cx="320" cy="155" r="18" fill="#0a0a0a" />
        <line x1="320" y1="155" x2="320" y2="142" stroke="#c9a961" strokeWidth="1.5" />
        {/* Logo ATEM */}
        <text
          x="60"
          y="105"
          fill="#5a5a5a"
          fontSize="9"
          fontFamily="ui-monospace, monospace"
          letterSpacing="2"
        >
          ATEM MINI EXTREME
        </text>
      </g>
    </svg>
  );
}

/* ---------- Micro Sennheiser ---------- */
export function SennheiserMic({ className }: { className?: string }) {
  const id = "senn";
  return (
    <svg
      viewBox="0 0 400 280"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Micro Sennheiser"
    >
      {sharedDefs(id)}
      <g filter={`url(#${id}-shadow)`}>
        {/* Tube long du shotgun */}
        <rect x="80" y="125" width="200" height="30" rx="3" fill={`url(#${id}-body)`} />
        {/* Reflet supérieur */}
        <rect x="80" y="125" width="200" height="10" rx="3" fill={`url(#${id}-highlight)`} />
        {/* Grille capsule devant (à gauche) */}
        <g>
          <rect x="80" y="125" width="50" height="30" rx="3" fill="#1a1a1a" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1={84 + i * 6}
              y1="128"
              x2={84 + i * 6}
              y2="152"
              stroke="#3a3a3a"
              strokeWidth="0.5"
            />
          ))}
        </g>
        {/* Anneau or */}
        <rect x="135" y="123" width="3" height="34" fill="#c9a961" opacity="0.9" />
        {/* Section corps (XLR connector à droite) */}
        <rect x="280" y="130" width="40" height="20" rx="2" fill="#0a0a0a" />
        <circle cx="316" cy="140" r="3" fill="#3a3a3a" />
        {/* Texte SENNHEISER */}
        <text
          x="155"
          y="146"
          fill="#5a5a5a"
          fontSize="7"
          fontFamily="ui-sans-serif, sans-serif"
          letterSpacing="2"
          fontWeight="600"
        >
          SENNHEISER
        </text>
        {/* Onde sonore subtile à gauche */}
        <g opacity="0.3">
          <path
            d="M 50 130 Q 40 140 50 150"
            fill="none"
            stroke="#c9a961"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M 35 122 Q 20 140 35 158"
            fill="none"
            stroke="#c9a961"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M 20 115 Q 0 140 20 165"
            fill="none"
            stroke="#c9a961"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.4"
          />
        </g>
      </g>
    </svg>
  );
}

/* ---------- LiveU ---------- */
export function LiveU({ className }: { className?: string }) {
  const id = "liveu";
  return (
    <svg
      viewBox="0 0 400 280"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="LiveU streaming unit"
    >
      {sharedDefs(id)}
      <g filter={`url(#${id}-shadow)`}>
        {/* Sac/boîtier principal */}
        <rect
          x="100"
          y="70"
          width="200"
          height="180"
          rx="14"
          fill={`url(#${id}-body)`}
          stroke="#2a2a2a"
          strokeWidth="0.5"
        />
        {/* Reflet haut */}
        <rect
          x="100"
          y="70"
          width="200"
          height="50"
          rx="14"
          fill={`url(#${id}-highlight)`}
        />
        {/* Panneau supérieur — antennes simulées (4 leds verticales) */}
        {Array.from({ length: 5 }).map((_, i) => {
          const x = 130 + i * 32;
          const active = i < 4;
          return (
            <g key={i}>
              <rect x={x - 1.5} y="50" width="3" height="22" rx="1.5" fill="#3a3a3a" />
              <circle cx={x} cy="48" r="3" fill={active ? "#c9a961" : "#3a3a3a"} />
              {active && (
                <circle cx={x} cy="48" r="6" fill="#c9a961" opacity="0.25" />
              )}
            </g>
          );
        })}
        {/* Écran central */}
        <rect
          x="125"
          y="100"
          width="150"
          height="60"
          rx="3"
          fill="#000000"
          stroke="#1a1a1a"
          strokeWidth="0.5"
        />
        {/* Contenu écran : stats */}
        <text
          x="135"
          y="120"
          fill="#c9a961"
          fontSize="8"
          fontFamily="ui-monospace, monospace"
          letterSpacing="1"
        >
          LIVE · 4K
        </text>
        <text
          x="135"
          y="135"
          fill="#5a5a5a"
          fontSize="7"
          fontFamily="ui-monospace, monospace"
        >
          BONDED 4G/5G
        </text>
        {/* Barre signal */}
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x={135 + i * 6}
              y={148 - i * 2}
              width="4"
              height={4 + i * 2}
              fill={i < 4 ? "#3aaa3a" : "#3a3a3a"}
            />
          ))}
        </g>
        {/* Boutons bas */}
        <rect x="125" y="180" width="50" height="22" rx="2" fill="#0a0a0a" />
        <rect x="180" y="180" width="50" height="22" rx="2" fill="#0a0a0a" />
        <rect x="235" y="180" width="40" height="22" rx="2" fill="#7a1a1a" />
        <text
          x="255"
          y="194"
          textAnchor="middle"
          fill="#f5f3ee"
          fontSize="7"
          fontFamily="ui-monospace, monospace"
          letterSpacing="1"
        >
          ON-AIR
        </text>
        {/* Logo LiveU */}
        <text
          x="125"
          y="232"
          fill="#5a5a5a"
          fontSize="9"
          fontFamily="ui-sans-serif, sans-serif"
          fontWeight="700"
          letterSpacing="2"
        >
          LiveU
        </text>
        <text
          x="160"
          y="232"
          fill="#c9a961"
          fontSize="7"
          fontFamily="ui-sans-serif, sans-serif"
          letterSpacing="1"
        >
          LU800
        </text>
      </g>
    </svg>
  );
}
