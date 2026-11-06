import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Activity, Cpu, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const telemetryStats = [
  { label: 'Core Industry Verticals', value: '5 Global Domains', detail: 'Industrial, Medical, Sports, Auto, RPA' },
  { label: 'Deterministic Edge Latency', value: '< 15 ms', detail: 'Real-time TSN & CAN-FD sync' },
  { label: 'Engineering Architecture', value: 'End-to-End Delivery', detail: 'Hardware, Firmware, Cloud & AI' },
  { label: 'Standards Compliance', value: 'Safety & Industrial', detail: 'ISA-95, HL7 FHIR, ISO 26262' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-hero-gradient pt-28 pb-12">
      {/* Background Cinematic Composite Imagery with Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80&auto=format&fit=crop"
          alt="Advanced Industrial Robotics &amp; Engineering by Snesar.MD"
          width="1920"
          height="1080"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover object-center opacity-20 filter contrast-125 saturate-50"
        />
        {/* Dark cinematic vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/70" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-navy/60 to-navy" />
      </div>

      {/* Engineering Coordinate Grid Pattern */}
      <div className="absolute inset-0 grid-pattern-dark opacity-35 z-0 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern-dense opacity-15 z-0 pointer-events-none" />

      {/* Ambient Radial Energy Glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-electric/20 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] rounded-full bg-cyan/15 blur-[120px] pointer-events-none z-0" />

      {/* Engineering HUD Coordinate Overlays */}
      <div className="hidden lg:flex absolute top-32 left-8 z-10 flex-col gap-1 text-[10px] font-mono text-cyan/50 tracking-wider">
        <span>SYS_STATUS: OPTIMAL</span>
        <span>NODE: SNESAR_GLOBAL_ENGINEERING</span>
        <span>LATENCY: 4.8MS</span>
      </div>
      <div className="hidden lg:flex absolute top-32 right-8 z-10 flex-col gap-1 text-[10px] font-mono text-white/40 tracking-wider text-right">
        <span>LOC: MULTI-REGION LABS</span>
        <span>PROTOCOLS: SECURE TLS 1.3</span>
        <span>BUILD: v2.6.4_ENTERPRISE</span>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Eyebrow Pill */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-cyan border border-cyan/30 bg-cyan/10 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span>Next-Generation Engineering &middot; Technology Solutions</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white leading-[1.08] tracking-tight max-w-4xl"
          >
            Engineering Tomorrow.{' '}
            <span className="block mt-1 sm:mt-2 text-gradient">
              Transforming Industries Today.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-normal"
          >
            We engineer intelligent solutions that connect technology, innovation, and human potential to solve complex real-world challenges.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link
              to="/solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-electric hover:bg-electric-600 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-glow hover:scale-102"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/25 hover:border-white text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              <span>Partner With Us</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Live Telemetry Strip at Hero Bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          {telemetryStats.map((item, i) => (
            <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan/30 transition-colors">
              <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block font-semibold">
                {item.label}
              </span>
              <span className="text-sm sm:text-base font-bold text-white font-display mt-0.5 block">
                {item.value}
              </span>
              <span className="text-[11px] text-white/50 block truncate mt-0.5">
                {item.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6 text-white/50 hover:text-cyan transition-colors cursor-pointer"
             onClick={() => {
               window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
             }}
        >
          <span className="text-[10px] font-mono tracking-widest uppercase font-semibold">
            SCROLL TO EXPLORE ARCHITECTURE
          </span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
