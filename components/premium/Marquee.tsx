'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
  fadeEdges?: boolean;
}

const speedMap = {
  slow: '60s',
  normal: '40s',
  fast: '22s',
};

const Marquee = ({ children, reverse = false, speed = 'normal', className, fadeEdges = true }: MarqueeProps) => {
  return (
    <div className={cn('relative w-full overflow-hidden', fadeEdges && 'mask-reveal', className)}>
      <div
        className="flex w-max gap-16 whitespace-nowrap"
        style={{
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speedMap[speed]} linear infinite`,
        }}
      >
        <div className="flex items-center gap-16">{children}</div>
        <div className="flex items-center gap-16" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
