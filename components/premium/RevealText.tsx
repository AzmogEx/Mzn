'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  splitBy?: 'word' | 'char' | 'line';
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
  italicWords?: string[];
  goldWords?: string[];
}

const RevealText = ({
  text,
  className,
  as = 'h2',
  splitBy = 'word',
  delay = 0,
  stagger = 0.05,
  duration = 0.9,
  once = true,
  italicWords = [],
  goldWords = [],
}: RevealTextProps) => {
  const Tag = as as any;
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.01 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [once]);

  const segments =
    splitBy === 'char'
      ? text.split('')
      : splitBy === 'line'
      ? text.split('\n')
      : text.split(' ');

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const child: Variants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Tag ref={ref as any} className={cn(className)}>
      <motion.span
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="inline-block"
      >
        {segments.map((seg, i) => {
          const isItalic = italicWords.includes(seg);
          const isGold = goldWords.includes(seg);
          return (
            <span
              key={i}
              className="inline-block overflow-hidden align-top"
              style={{ paddingBottom: '0.15em' }}
            >
              <motion.span
                variants={child}
                className={cn(
                  'inline-block will-change-transform',
                  isItalic && 'italic',
                  isGold && 'text-[#C9A66B]'
                )}
              >
                {seg}
                {splitBy === 'word' && i < segments.length - 1 && ' '}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
};

export default RevealText;
