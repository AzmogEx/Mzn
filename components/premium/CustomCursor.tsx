'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [variant, setVariant] = useState<'default' | 'hover' | 'image' | 'text'>('default');
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, { stiffness: 500, damping: 32, mass: 0.3 });
  const y = useSpring(mouseY, { stiffness: 500, damping: 32, mass: 0.3 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;
    setIsPointer(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('[data-cursor="hover"]') || target.closest('button, a, [role="button"]')) {
        setVariant('hover');
      } else if (target.closest('[data-cursor="image"]')) {
        setVariant('image');
      } else if (target.closest('input, textarea, select, [data-cursor="text"]')) {
        setVariant('text');
      } else {
        setVariant('default');
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
    };
  }, [mouseX, mouseY, visible]);

  if (!isPointer) return null;

  const ringScale = variant === 'hover' ? 1.7 : variant === 'image' ? 2.6 : variant === 'text' ? 0.5 : 1;
  const dotScale = variant === 'hover' ? 0 : variant === 'image' ? 0 : variant === 'text' ? 1.4 : 1;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ x, y, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        animate={{ scale: ringScale }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        className="relative -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border flex items-center justify-center"
        style={{
          borderColor: variant === 'default' ? 'rgba(10,10,10,0.25)' : '#C9A66B',
          background: variant === 'image' ? 'rgba(201,166,107,0.2)' : 'transparent',
          backdropFilter: variant === 'image' ? 'blur(2px)' : 'none',
        }}
      >
        <motion.span
          animate={{ scale: dotScale }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          className="block w-1.5 h-1.5 rounded-full bg-[#0A0A0A]"
        />
        {variant === 'image' && (
          <span className="absolute inset-0 flex items-center justify-center text-[9px] font-display tracking-widest uppercase text-[#C9A66B] font-semibold">
            Voir
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
