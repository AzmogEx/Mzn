'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface PartProps {
  scrollYProgress: MotionValue<number>;
  range?: [number, number];
  toX?: number;
  toY?: number;
  toR?: number;
  children: React.ReactNode;
}

const Part = ({ scrollYProgress, range = [0.15, 0.7], toX = 0, toY = 0, toR = 0, children }: PartProps) => {
  const x = useTransform(scrollYProgress, range, [0, toX]);
  const y = useTransform(scrollYProgress, range, [0, toY]);
  const r = useTransform(scrollYProgress, range, [0, toR]);
  return <motion.g style={{ x, y, rotate: r }}>{children}</motion.g>;
};

interface AnnotationProps {
  scrollYProgress: MotionValue<number>;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  detail?: string;
  align?: 'left' | 'right';
  delay?: number;
}

const Annotation = ({ scrollYProgress, x1, y1, x2, y2, label, detail, align = 'left', delay = 0 }: AnnotationProps) => {
  const start = 0.55 + delay;
  const opacity = useTransform(scrollYProgress, [start, Math.min(start + 0.12, 0.95)], [0, 1]);
  const dash = useTransform(scrollYProgress, [start, Math.min(start + 0.18, 0.95)], [60, 0]);

  return (
    <motion.g style={{ opacity }}>
      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#C9A66B"
        strokeWidth={0.8}
        strokeDasharray="60"
        style={{ strokeDashoffset: dash }}
      />
      <circle cx={x1} cy={y1} r={2.2} fill="#C9A66B" />
      <circle cx={x2} cy={y2} r={3} fill="#FAFAFA" stroke="#C9A66B" strokeWidth={1} />
      <text
        x={x2 + (align === 'left' ? -10 : 10)}
        y={y2 - 6}
        textAnchor={align === 'left' ? 'end' : 'start'}
        className="font-display fill-[#0A0A0A]"
        fontSize={10}
        fontWeight={600}
        letterSpacing={2}
      >
        {label.toUpperCase()}
      </text>
      {detail && (
        <text
          x={x2 + (align === 'left' ? -10 : 10)}
          y={y2 + 8}
          textAnchor={align === 'left' ? 'end' : 'start'}
          className="fill-[#666]"
          fontSize={8}
        >
          {detail}
        </text>
      )}
    </motion.g>
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

  // Headline animation — fades + slides up over the section
  const headlineY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.4]);

  // "Étape" indicator
  const stepOpacity1 = useTransform(scrollYProgress, [0, 0.15, 0.4, 0.5], [1, 1, 1, 0]);
  const stepOpacity2 = useTransform(scrollYProgress, [0.4, 0.5, 0.7, 0.78], [0, 1, 1, 0]);
  const stepOpacity3 = useTransform(scrollYProgress, [0.7, 0.78, 0.95, 1], [0, 1, 1, 1]);

  // Camera body slight rotation as it explodes
  const bodyRotate = useTransform(scrollYProgress, [0.15, 0.7], [0, -2]);
  const bodyScale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.85, 1, 1, 1.05]);

  // Progress bar
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAFAFA] noise-overlay"
      style={{ height: '380vh' }}
      aria-label="Vue éclatée d'une caméra"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background grid */}
        <div className="absolute inset-0 tech-grid opacity-40 pointer-events-none" />

        {/* Decorative orbs */}
        <div
          className="absolute -top-20 right-0 w-[420px] h-[420px] rounded-full opacity-50 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,166,107,0.35), transparent 60%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-0 -left-20 w-[420px] h-[420px] rounded-full opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(229,211,168,0.4), transparent 60%)', filter: 'blur(80px)' }}
        />

        {/* Top headline */}
        <motion.div
          style={{ y: headlineY, opacity: headlineOpacity }}
          className="absolute top-12 md:top-20 left-1/2 -translate-x-1/2 text-center z-10 px-6 max-w-3xl"
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
            <span className="italic text-[#C9A66B]">détail</span>{' '}
            qui compte.
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#666] max-w-xl mx-auto">
            Notre équipement broadcast, étudié au millimètre. Faites défiler pour explorer chaque
            module de notre caméra de référence.
          </p>
        </motion.div>

        {/* Step labels — bottom left */}
        <div className="absolute bottom-24 left-6 md:left-12 z-10 select-none">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#999] mb-3">Étape</p>
          <div className="relative h-7 overflow-hidden">
            <motion.div style={{ opacity: stepOpacity1 }} className="absolute inset-0 flex items-center gap-3">
              <span className="text-3xl font-display font-bold tabular-nums text-[#0A0A0A]">01</span>
              <span className="text-xs tracking-[0.2em] uppercase text-[#666]">Assemblé</span>
            </motion.div>
            <motion.div style={{ opacity: stepOpacity2 }} className="absolute inset-0 flex items-center gap-3">
              <span className="text-3xl font-display font-bold tabular-nums text-[#C9A66B]">02</span>
              <span className="text-xs tracking-[0.2em] uppercase text-[#666]">Déconstruction</span>
            </motion.div>
            <motion.div style={{ opacity: stepOpacity3 }} className="absolute inset-0 flex items-center gap-3">
              <span className="text-3xl font-display font-bold tabular-nums text-[#0A0A0A]">03</span>
              <span className="text-xs tracking-[0.2em] uppercase text-[#666]">Anatomie</span>
            </motion.div>
          </div>
        </div>

        {/* Progress bar — bottom */}
        <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 h-px bg-[#0A0A0A]/8 z-10 overflow-hidden">
          <motion.div
            style={{ scaleX: progressScaleX, transformOrigin: 'left' }}
            className="h-full w-full bg-gradient-to-r from-[#C9A66B] via-[#E5D3A8] to-[#B8956B]"
          />
        </div>

        {/* Bottom right indicator */}
        <div className="absolute bottom-24 right-6 md:right-12 z-10 select-none text-right">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#999]">Sony FX6 — référence</p>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A66B] mt-1 tabular-nums">
            04K · 120 FPS
          </p>
        </div>

        {/* CAMERA SVG — center */}
        <motion.div
          style={{ scale: bodyScale }}
          className="relative w-full max-w-[900px] h-full flex items-center justify-center"
        >
          <svg
            viewBox="0 0 800 800"
            className="w-full h-auto max-h-[80vh]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Lens glass radial gradient */}
              <radialGradient id="lensGlass" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#E5D3A8" stopOpacity={0.9} />
                <stop offset="35%" stopColor="#C9A66B" stopOpacity={0.6} />
                <stop offset="60%" stopColor="#0A0A0A" stopOpacity={0.95} />
                <stop offset="100%" stopColor="#000000" />
              </radialGradient>
              {/* Body gradient */}
              <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1c1c1c" />
                <stop offset="100%" stopColor="#0A0A0A" />
              </linearGradient>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="50%" stopColor="#2a2a2a" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
              <linearGradient id="goldRing" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#C9A66B" />
                <stop offset="50%" stopColor="#E5D3A8" />
                <stop offset="100%" stopColor="#B8956B" />
              </linearGradient>
            </defs>

            {/* === ANNOTATIONS (lines + labels) — appear at end === */}
            <Annotation
              scrollYProgress={scrollYProgress}
              x1={400}
              y1={185}
              x2={250}
              y2={70}
              label="Viseur OLED"
              detail="EVF 0.5″ · 3.69M dots"
              align="left"
              delay={0}
            />
            <Annotation
              scrollYProgress={scrollYProgress}
              x1={580}
              y1={210}
              x2={720}
              y2={70}
              label="Molette mode"
              detail="M · S · A · P"
              align="right"
              delay={0.04}
            />
            <Annotation
              scrollYProgress={scrollYProgress}
              x1={655}
              y1={250}
              x2={780}
              y2={210}
              label="Déclencheur"
              detail="Course 2 paliers"
              align="right"
              delay={0.08}
            />
            <Annotation
              scrollYProgress={scrollYProgress}
              x1={400}
              y1={500}
              x2={140}
              y2={460}
              label="Bague monture"
              detail="E-mount · 18 mm"
              align="left"
              delay={0.12}
            />
            <Annotation
              scrollYProgress={scrollYProgress}
              x1={400}
              y1={580}
              x2={720}
              y2={560}
              label="Bague de zoom"
              detail="24–70 mm"
              align="right"
              delay={0.16}
            />
            <Annotation
              scrollYProgress={scrollYProgress}
              x1={400}
              y1={660}
              x2={140}
              y2={660}
              label="Bague d'ouverture"
              detail="f/2.8 constant"
              align="left"
              delay={0.2}
            />
            <Annotation
              scrollYProgress={scrollYProgress}
              x1={400}
              y1={740}
              x2={720}
              y2={740}
              label="Lentille frontale"
              detail="Verre ED · GM"
              align="right"
              delay={0.24}
            />

            {/* === CAMERA PARTS === */}

            {/* Viewfinder bump (top of body) */}
            <Part scrollYProgress={scrollYProgress} toY={-130} toX={-30}>
              <rect x={340} y={140} width={120} height={50} rx={6} fill="url(#bodyGrad)" />
              <rect x={350} y={148} width={100} height={34} rx={3} fill="#000" />
              <rect x={360} y={156} width={80} height={18} rx={2} fill="#0a0a0a" stroke="#C9A66B" strokeWidth={0.4} strokeOpacity={0.5} />
              <circle cx={400} cy={165} r={3} fill="#C9A66B" opacity={0.5} />
            </Part>

            {/* Hot shoe (top center small) */}
            <Part scrollYProgress={scrollYProgress} toY={-200}>
              <rect x={385} y={195} width={30} height={14} rx={2} fill="#0a0a0a" />
              <rect x={388} y={199} width={24} height={6} fill="#1a1a1a" />
              <line x1={392} y1={199} x2={392} y2={205} stroke="#333" strokeWidth={0.5} />
              <line x1={400} y1={199} x2={400} y2={205} stroke="#333" strokeWidth={0.5} />
              <line x1={408} y1={199} x2={408} y2={205} stroke="#333" strokeWidth={0.5} />
            </Part>

            {/* Mode dial (top right of body) */}
            <Part scrollYProgress={scrollYProgress} toX={140} toY={-90} toR={45}>
              <circle cx={580} cy={210} r={32} fill="url(#ringGrad)" />
              <circle cx={580} cy={210} r={28} fill="none" stroke="#C9A66B" strokeWidth={0.6} strokeDasharray="2 3" />
              <circle cx={580} cy={210} r={18} fill="#0a0a0a" />
              <text x={580} y={214} textAnchor="middle" fontSize={11} fontWeight={700} fill="#C9A66B" className="font-display">
                M
              </text>
              {/* tick marks */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <line
                  key={deg}
                  x1={580}
                  y1={184}
                  x2={580}
                  y2={188}
                  stroke="#666"
                  strokeWidth={0.6}
                  transform={`rotate(${deg} 580 210)`}
                />
              ))}
            </Part>

            {/* Top dial left */}
            <Part scrollYProgress={scrollYProgress} toX={-150} toY={-50} toR={-30}>
              <circle cx={250} cy={210} r={28} fill="url(#ringGrad)" />
              <circle cx={250} cy={210} r={22} fill="#0a0a0a" />
              <circle cx={250} cy={210} r={4} fill="#C9A66B" opacity={0.7} />
            </Part>

            {/* Shutter button (top right of grip) */}
            <Part scrollYProgress={scrollYProgress} toX={120} toY={-40}>
              <circle cx={655} cy={250} r={14} fill="url(#goldRing)" />
              <circle cx={655} cy={250} r={11} fill="#B8956B" />
              <circle cx={655} cy={250} r={6} fill="#9C7E4A" />
            </Part>

            {/* Body main */}
            <motion.g style={{ rotate: bodyRotate, transformOrigin: '400px 350px' }}>
              <rect x={180} y={210} width={440} height={230} rx={20} fill="url(#bodyGrad)" />
              {/* texture lines */}
              <g opacity={0.18}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <line
                    key={i}
                    x1={210}
                    y1={235 + i * 26}
                    x2={590}
                    y2={235 + i * 26}
                    stroke="#fff"
                    strokeWidth={0.3}
                  />
                ))}
              </g>
              {/* Screen on back (peek) */}
              <rect x={210} y={235} width={200} height={150} rx={6} fill="#0a0a0a" stroke="#222" strokeWidth={1} />
              <rect x={216} y={241} width={188} height={138} rx={4} fill="#000" />
              {/* tiny REC indicator */}
              <circle cx={228} cy={252} r={3} fill="#EF4444" />
              <text x={235} y={255} fontSize={7} fill="#EF4444" fontFamily="monospace" letterSpacing={1}>
                REC
              </text>
              <text x={395} y={255} textAnchor="end" fontSize={7} fill="#C9A66B" fontFamily="monospace" letterSpacing={1}>
                4K · 120
              </text>
              {/* histogram fake */}
              <g opacity={0.4}>
                {Array.from({ length: 28 }).map((_, i) => (
                  <rect key={i} x={220 + i * 6} y={355 - Math.random() * 18} width={3} height={14 + Math.random() * 12} fill="#C9A66B" />
                ))}
              </g>
              {/* MIS branding */}
              <text x={400} y={420} textAnchor="middle" fontSize={11} fontWeight={700} fill="#C9A66B" letterSpacing={4} className="font-display">
                M I S
              </text>
            </motion.g>

            {/* Grip (right side) */}
            <Part scrollYProgress={scrollYProgress} toX={130}>
              <path
                d="M 620,250 Q 670,290 670,360 Q 670,420 620,440 L 580,440 L 580,250 Z"
                fill="url(#bodyGrad)"
              />
              <path d="M 625,275 L 660,295" stroke="#333" strokeWidth={0.5} />
              <path d="M 625,295 L 663,315" stroke="#333" strokeWidth={0.5} />
              <path d="M 625,315 L 663,335" stroke="#333" strokeWidth={0.5} />
              <path d="M 625,335 L 663,355" stroke="#333" strokeWidth={0.5} />
            </Part>

            {/* === LENS STACK (below body) === */}

            {/* Lens mount ring */}
            <Part scrollYProgress={scrollYProgress} toX={-220} toY={70}>
              <circle cx={400} cy={500} r={92} fill="url(#ringGrad)" />
              <circle cx={400} cy={500} r={88} fill="none" stroke="#C9A66B" strokeWidth={1.2} />
              <circle cx={400} cy={500} r={70} fill="#0a0a0a" />
              <circle cx={400} cy={500} r={68} fill="none" stroke="#C9A66B" strokeWidth={0.4} strokeDasharray="3 5" />
              {/* contacts */}
              {Array.from({ length: 10 }).map((_, i) => (
                <rect
                  key={i}
                  x={400 - 1}
                  y={428}
                  width={2}
                  height={6}
                  fill="#C9A66B"
                  transform={`rotate(${(i - 4.5) * 8} 400 500)`}
                />
              ))}
            </Part>

            {/* Zoom ring */}
            <Part scrollYProgress={scrollYProgress} toX={220} toY={70}>
              <circle cx={400} cy={580} r={86} fill="url(#ringGrad)" />
              <circle cx={400} cy={580} r={86} fill="none" stroke="#C9A66B" strokeWidth={0.6} />
              {/* knurling */}
              {Array.from({ length: 32 }).map((_, i) => (
                <line
                  key={i}
                  x1={400}
                  y1={500}
                  x2={400}
                  y2={508}
                  stroke="#fff"
                  strokeOpacity={0.18}
                  strokeWidth={0.6}
                  transform={`rotate(${(i / 32) * 360} 400 580)`}
                />
              ))}
              <text x={400} y={585} textAnchor="middle" fontSize={9} fill="#C9A66B" letterSpacing={2}>
                ZOOM
              </text>
            </Part>

            {/* Aperture ring */}
            <Part scrollYProgress={scrollYProgress} toX={-220} toY={150}>
              <circle cx={400} cy={660} r={82} fill="url(#ringGrad)" />
              <circle cx={400} cy={660} r={82} fill="none" stroke="#C9A66B" strokeWidth={0.6} />
              <circle cx={400} cy={660} r={70} fill="#0a0a0a" />
              {/* aperture blades */}
              <g transform="translate(400 660)">
                {Array.from({ length: 9 }).map((_, i) => (
                  <path
                    key={i}
                    d="M 0,0 L 0,-58 L 36,-46 Z"
                    fill="#1a1a1a"
                    stroke="#333"
                    strokeWidth={0.4}
                    transform={`rotate(${(i / 9) * 360})`}
                  />
                ))}
              </g>
              <text x={400} y={730} textAnchor="middle" fontSize={9} fill="#C9A66B" letterSpacing={2}>
                f/2.8
              </text>
            </Part>

            {/* Front lens element (glass) */}
            <Part scrollYProgress={scrollYProgress} toX={220} toY={230}>
              <circle cx={400} cy={740} r={75} fill="url(#ringGrad)" />
              <circle cx={400} cy={740} r={70} fill="url(#lensGlass)" />
              <circle cx={400} cy={740} r={70} fill="none" stroke="url(#goldRing)" strokeWidth={1.2} />
              {/* highlights */}
              <ellipse cx={385} cy={720} rx={18} ry={8} fill="#fff" opacity={0.18} />
              <ellipse cx={415} cy={760} rx={6} ry={3} fill="#C9A66B" opacity={0.4} />
            </Part>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default CameraExploded;
