'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1500;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 320);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0A0A0A] text-white overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: '-101%' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(circle at 20% 30%, rgba(201,166,107,0.4), transparent 55%), radial-gradient(circle at 80% 70%, rgba(229,211,168,0.35), transparent 55%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-12 text-center"
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A66B] mb-3 animate-blink-soft">
              Mémoire Image &amp; Sons
            </p>
            <h1 className="text-7xl md:text-9xl font-display font-bold tracking-tight">
              <span className="gradient-text-gold">MIS</span>
            </h1>
          </motion.div>

          <div className="relative w-[280px] md:w-[420px]">
            <div className="h-[2px] w-full bg-white/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C9A66B] via-[#E5D3A8] to-[#C9A66B]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <div className="mt-4 flex justify-between text-[10px] tracking-[0.3em] uppercase text-white/50">
              <span>Chargement</span>
              <span className="tabular-nums text-[#C9A66B]">{progress.toString().padStart(3, '0')} %</span>
            </div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Studio · Paris
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
