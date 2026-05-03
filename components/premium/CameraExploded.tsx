'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface AnnotationProps {
  scrollYProgress: MotionValue<number>;
  /** Anchor point on the camera (0-100 in % of stage width / height) */
  pinX: number;
  pinY: number;
  /** Label position */
  labelX: number;
  labelY: number;
  label: string;
  detail?: string;
  align?: 'left' | 'right';
  delay?: number;
}

const Annotation = ({
  scrollYProgress,
  pinX,
  pinY,
  labelX,
  labelY,
  label,
  detail,
  align = 'left',
  delay = 0,
}: AnnotationProps) => {
  const start = 0.6 + delay;
  const end = Math.min(start + 0.12, 0.95);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const dashOffset = useTransform(scrollYProgress, [start, end], [120, 0]);
  const pinScale = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{ opacity }}
      aria-hidden
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.line
          x1={pinX}
          y1={pinY}
          x2={labelX}
          y2={labelY}
          stroke="#C9A66B"
          strokeWidth={0.18}
          strokeDasharray="120"
          vectorEffect="non-scaling-stroke"
          style={{ strokeDashoffset: dashOffset }}
        />
      </svg>
      <motion.span
        className="absolute block w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A66B] ring-4 ring-[#C9A66B]/20"
        style={{
          left: `${pinX}%`,
          top: `${pinY}%`,
          scale: pinScale,
        }}
      />
      <div
        className="absolute -translate-y-1/2"
        style={{
          left: `${labelX}%`,
          top: `${labelY}%`,
          transform: `translate(${align === 'left' ? '-100%' : '0'}, -50%)`,
        }}
      >
        <div
          className={`flex flex-col gap-1 ${
            align === 'left' ? 'items-end pr-3' : 'items-start pl-3'
          }`}
        >
          <span className="block w-1.5 h-1.5 rounded-full bg-white border border-[#C9A66B]" />
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#0A0A0A] whitespace-nowrap">
            {label}
          </span>
          {detail && (
            <span className="text-[10px] text-[#666] whitespace-nowrap">{detail}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CameraExploded = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<React.RefObject<HTMLDivElement> | undefined>(undefined);

  useEffect(() => {
    setTarget(sectionRef);
  }, []);

  const { scrollYProgress } = useScroll({
    target,
    offset: ['start start', 'end end'],
  });

  // Phase 1 (0-0.4): assembled image visible, slight scale-in
  // Phase 2 (0.3-0.65): crossfade to exploded image while zoom continues
  // Phase 3 (0.55-1): exploded image stable, annotations trace in

  const assembledOpacity = useTransform(scrollYProgress, [0, 0.25, 0.45], [1, 1, 0]);
  const assembledScale = useTransform(scrollYProgress, [0, 0.45], [0.92, 1.04]);
  const assembledBlur = useTransform(scrollYProgress, [0.25, 0.45], [0, 8]);

  const explodedOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);
  const explodedScale = useTransform(scrollYProgress, [0.3, 0.6, 1], [1.08, 1, 1.02]);

  // Slight parallax of the whole stage on Y for cinematic feel
  const stageY = useTransform(scrollYProgress, [0, 1], ['2%', '-2%']);

  // Headline & step indicators
  const headlineOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 1],
    [0, 1, 1, 0.4]
  );

  const stepOpacity1 = useTransform(scrollYProgress, [0, 0.1, 0.32, 0.4], [1, 1, 1, 0]);
  const stepOpacity2 = useTransform(scrollYProgress, [0.32, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const stepOpacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.95, 1], [0, 1, 1, 1]);

  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Subtle blur during transition
  const explodedBlur = useTransform(scrollYProgress, [0.3, 0.55], [10, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAFAFA]"
      style={{ height: '420vh' }}
      aria-label="Vue éclatée d'une caméra Canon EOS R5"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Tech grid background */}
        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

        {/* Decorative orbs */}
        <div
          className="absolute -top-20 right-0 w-[520px] h-[520px] rounded-full opacity-50 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(201,166,107,0.35), transparent 60%)',
            filter: 'blur(90px)',
          }}
        />
        <div
          className="absolute bottom-0 -left-20 w-[520px] h-[520px] rounded-full opacity-40 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(229,211,168,0.4), transparent 60%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Headline top */}
        <motion.div
          style={{ opacity: headlineOpacity }}
          className="absolute top-12 md:top-16 left-1/2 -translate-x-1/2 text-center z-30 px-6 max-w-3xl"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-px bg-[#C9A66B]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A66B] font-semibold">
              Savoir-faire technique
            </span>
            <span className="block w-8 h-px bg-[#C9A66B]" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05]">
            Chaque pièce, un{' '}
            <span className="italic text-[#C9A66B]">détail</span> qui compte.
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#666] max-w-xl mx-auto">
            Notre équipement broadcast, étudié au millimètre. Faites défiler pour
            explorer chaque module de notre caméra de référence.
          </p>
        </motion.div>

        {/* Camera stage */}
        <motion.div
          style={{ y: stageY }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full max-w-[1400px] aspect-[16/9] mx-auto">
            {/* Assembled image */}
            <motion.div
              className="absolute inset-0 select-none pointer-events-none"
              style={{
                opacity: assembledOpacity,
                scale: assembledScale,
                filter: useTransform(assembledBlur, (v) => `blur(${v}px)`),
              }}
            >
              <Image
                src="/assets/camera-assembled.png"
                alt="Caméra Canon EOS R5 assemblée"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1400px"
                className="object-contain"
                draggable={false}
              />
            </motion.div>

            {/* Exploded image */}
            <motion.div
              className="absolute inset-0 select-none pointer-events-none"
              style={{
                opacity: explodedOpacity,
                scale: explodedScale,
                filter: useTransform(explodedBlur, (v) => `blur(${v}px)`),
              }}
            >
              <Image
                src="/assets/camera-exploded.png"
                alt="Vue éclatée de la caméra Canon EOS R5"
                fill
                sizes="(max-width: 768px) 100vw, 1400px"
                className="object-contain"
                draggable={false}
              />
            </motion.div>

            {/* Annotations — overlay sur la phase 3 (exploded) */}
            <Annotation
              scrollYProgress={scrollYProgress}
              pinX={48}
              pinY={20}
              labelX={70}
              labelY={8}
              label="Capot supérieur"
              detail="Hot shoe · molettes"
              align="right"
              delay={0}
            />
            <Annotation
              scrollYProgress={scrollYProgress}
              pinX={62}
              pinY={48}
              labelX={86}
              labelY={42}
              label="Carte processeur"
              detail="DIGIC X · 4K 120p"
              align="right"
              delay={0.04}
            />
            <Annotation
              scrollYProgress={scrollYProgress}
              pinX={75}
              pinY={50}
              labelX={94}
              labelY={64}
              label="Écran orientable"
              detail="3,2″ · 2,1M points"
              align="right"
              delay={0.08}
            />
            <Annotation
              scrollYProgress={scrollYProgress}
              pinX={20}
              pinY={48}
              labelX={4}
              labelY={36}
              label="Grip cuir"
              detail="Magnésium · cuir"
              align="left"
              delay={0.12}
            />
            <Annotation
              scrollYProgress={scrollYProgress}
              pinX={42}
              pinY={62}
              labelX={20}
              labelY={70}
              label="Bague de zoom"
              detail="24–70 mm f/2,8L"
              align="left"
              delay={0.16}
            />
            <Annotation
              scrollYProgress={scrollYProgress}
              pinX={14}
              pinY={70}
              labelX={4}
              labelY={84}
              label="Lentilles"
              detail="ED · UD · asphérique"
              align="left"
              delay={0.2}
            />
            <Annotation
              scrollYProgress={scrollYProgress}
              pinX={88}
              pinY={78}
              labelX={96}
              labelY={92}
              label="Batterie LP-E6NH"
              detail="2130 mAh · USB-C"
              align="right"
              delay={0.24}
            />
          </div>
        </motion.div>

        {/* Step labels — bottom left */}
        <div className="absolute bottom-24 left-6 md:left-12 z-20 select-none">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-3">
            Étape
          </p>
          <div className="relative h-8 overflow-hidden">
            <motion.div
              style={{ opacity: stepOpacity1 }}
              className="absolute inset-0 flex items-center gap-3"
            >
              <span className="text-3xl font-display font-bold tabular-nums text-[#0A0A0A]">
                01
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-[#666]">
                Assemblée
              </span>
            </motion.div>
            <motion.div
              style={{ opacity: stepOpacity2 }}
              className="absolute inset-0 flex items-center gap-3"
            >
              <span className="text-3xl font-display font-bold tabular-nums text-[#C9A66B]">
                02
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-[#666]">
                Déconstruction
              </span>
            </motion.div>
            <motion.div
              style={{ opacity: stepOpacity3 }}
              className="absolute inset-0 flex items-center gap-3"
            >
              <span className="text-3xl font-display font-bold tabular-nums text-[#0A0A0A]">
                03
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-[#666]">
                Anatomie
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bottom right indicator */}
        <div className="absolute bottom-24 right-6 md:right-12 z-20 select-none text-right">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#999]">
            Canon EOS R5 · référence
          </p>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A66B] mt-1 tabular-nums">
            45 MP · 8K RAW
          </p>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 h-px bg-[#0A0A0A]/8 z-20 overflow-hidden">
          <motion.div
            style={{ scaleX: progressScaleX, transformOrigin: 'left' }}
            className="h-full w-full bg-gradient-to-r from-[#C9A66B] via-[#E5D3A8] to-[#B8956B]"
          />
        </div>
      </div>
    </section>
  );
};

export default CameraExploded;
