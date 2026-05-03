'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, ReactNode, MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  intensity?: number;
  variant?: 'gold' | 'ghost' | 'dark';
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
}

const MagneticButton = ({
  children,
  onClick,
  className,
  intensity = 0.35,
  variant = 'gold',
  type = 'button',
  disabled,
  ariaLabel,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const rotateX = useTransform(sy, [-40, 40], [8, -8]);
  const rotateY = useTransform(sx, [-40, 40], [-8, 8]);

  const trailX = useTransform(sx, (v) => v * 0.4);
  const trailY = useTransform(sy, (v) => v * 0.4);

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * intensity);
    y.set(offsetY * intensity);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    gold:
      'bg-[#C9A66B] text-white shadow-[0_18px_50px_-12px_rgba(201,166,107,0.55)] hover:shadow-[0_30px_70px_-15px_rgba(201,166,107,0.75)]',
    ghost:
      'bg-transparent text-[#0A0A0A] border border-[#0A0A0A]/15 hover:border-[#C9A66B] hover:text-[#C9A66B]',
    dark:
      'bg-[#0A0A0A] text-white shadow-[0_18px_50px_-12px_rgba(10,10,10,0.45)] hover:bg-[#1a1a1a]',
  };

  const halo =
    variant === 'gold'
      ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.35), transparent 60%)'
      : variant === 'dark'
      ? 'radial-gradient(circle at 50% 50%, rgba(201,166,107,0.35), transparent 60%)'
      : 'radial-gradient(circle at 50% 50%, rgba(201,166,107,0.18), transparent 60%)';

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy, rotateX, rotateY, transformPerspective: 600 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        'relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold tracking-wide overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        className
      )}
    >
      <span
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: halo }}
      />
      <motion.span
        style={{ x: trailX, y: trailY }}
        className="inline-flex items-center gap-3"
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default MagneticButton;
