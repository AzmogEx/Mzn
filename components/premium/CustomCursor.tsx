'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [variant, setVariant] = useState<'default' | 'hover' | 'image' | 'text'>('default');
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 900, damping: 40, mass: 0.2 });
  const dotY = useSpring(mouseY, { stiffness: 900, damping: 40, mass: 0.2 });

  const ringX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.6 });

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

  const ringScale = variant === 'hover' ? 1.7 : variant === 'image' ? 2.6 : variant === 'text' ? 0.4 : 1;
  const dotScale = variant === 'hover' ? 0 : variant === 'image' ? 0 : variant === 'text' ? 1.6 : 1;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{ x: dotX, y: dotY, opacity: visible ? 1 : 0 }}
      >
        <motion.div
          animate={{ scale: dotScale }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          className="-translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"
        />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
      >
        <motion.div
          animate={{ scale: ringScale }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          className="-translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border flex items-center justify-center"
          style={{
            borderColor: variant === 'default' ? 'rgba(10,10,10,0.22)' : '#C9A66B',
            background: variant === 'image' ? 'rgba(201,166,107,0.2)' : 'transparent',
            backdropFilter: variant === 'image' ? 'blur(2px)' : 'none',
          }}
        >
          {variant === 'image' && (
            <span className="text-[9px] font-display tracking-widest uppercase text-[#C9A66B] font-semibold">
              Voir
            </span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
