'use client';

import { cn } from '@/lib/utils';

interface GradientOrbsProps {
  variant?: 'hero' | 'subtle' | 'dark';
  className?: string;
}

const GradientOrbs = ({ variant = 'subtle', className }: GradientOrbsProps) => {
  const palette = {
    hero: {
      a: 'rgba(201, 166, 107, 0.55)',
      b: 'rgba(229, 211, 168, 0.45)',
      c: 'rgba(184, 149, 107, 0.4)',
      blur: '110px',
    },
    subtle: {
      a: 'rgba(201, 166, 107, 0.28)',
      b: 'rgba(229, 211, 168, 0.22)',
      c: 'rgba(184, 149, 107, 0.18)',
      blur: '90px',
    },
    dark: {
      a: 'rgba(201, 166, 107, 0.35)',
      b: 'rgba(255, 255, 255, 0.05)',
      c: 'rgba(201, 166, 107, 0.25)',
      blur: '120px',
    },
  }[variant];

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden -z-10', className)} aria-hidden>
      <div
        className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full animate-orbit"
        style={{ background: palette.a, filter: `blur(${palette.blur})` }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[460px] h-[460px] rounded-full animate-float-slow"
        style={{ background: palette.b, filter: `blur(${palette.blur})`, animationDelay: '-4s' }}
      />
      <div
        className="absolute -bottom-32 left-1/4 w-[400px] h-[400px] rounded-full animate-float-x"
        style={{ background: palette.c, filter: `blur(${palette.blur})`, animationDelay: '-8s' }}
      />
    </div>
  );
};

export default GradientOrbs;
