'use client';

import { motion, Variants } from 'framer-motion';
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
    hidden: { y: '110%', opacity: 0, rotateX: -45 },
    visible: {
      y: '0%',
      opacity: 1,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Tag className={cn(className)} style={{ perspective: 600 }}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.3 }}
        className="inline-block"
      >
        {segments.map((seg, i) => {
          const isItalic = italicWords.includes(seg);
          const isGold = goldWords.includes(seg);
          return (
            <span
              key={i}
              className="inline-block align-baseline"
              style={{
                overflow: 'hidden',
                paddingTop: '0.18em',
                paddingBottom: '0.22em',
                marginTop: '-0.18em',
                marginBottom: '-0.22em',
              }}
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
                {splitBy === 'word' && i < segments.length - 1 && ' '}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
};

export default RevealText;
