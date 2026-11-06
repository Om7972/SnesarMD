import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layers, Lightbulb, Settings, ArrowRight, Target, CheckCircle2, ShieldCheck, Activity, Cpu } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from '@/components/common/SectionHeading';

const capabilityHighlights = [
  {
    title: 'Multi-Disciplinary Lifecycle',
    desc: 'From foundational R&D and rapid prototyping to verification, production deployment, and lifecycle maintenance.',
    icon: Settings,
  },
  {
    title: 'Cross-Domain Technology Fusion',
    desc: 'Harmonizing mechanical systems, embedded firmware, high-speed telemetry, and cognitive machine learning algorithms.',
    icon: Cpu,
  },
  {
    title: 'Industrial Rigor & Safety',
    desc: 'Engineering to the highest industrial and medical compliance benchmarks, ensuring resilience and mission uptime.',
    icon: ShieldCheck,
  },
  {
    title: 'Global Delivery Excellence',
    desc: 'Distributed engineering centers providing continuous development, integration testing, and client enablement.',
    icon: Target,
  },
];

export default function CompanyIntro() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-electric/10 text-electric border border-electric/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              <span>Company Overview</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-navy leading-[1.18] tracking-tight mb-6">
              Engineering Innovation Across Every Dimension.
            </h2>

            <p className="text-lg text-navy-600 leading-relaxed font-medium mb-4">
              We combine engineering expertise, advanced technologies, and industry knowledge to help businesses accelerate innovation, optimize operations, and build intelligent solutions for the future.
            </p>

            <p className="text-sm sm:text-base text-navy-400 leading-relaxed mb-8">
              At Snesar.MD, our cross-functional teams bridge the gap between theoretical digital concepts and physical industrial realities. Operating across Industrial Automation, Medical Technology, Sports Engineering, Automotive Mobility, and RPA, we provide the technical depth required to engineer systems that withstand demanding real-world environments.
            </p>

            {/* Engineering Capability Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {capabilityHighlights.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <div key={i} className="p-4 rounded-xl bg-section border border-navy/5 hover:border-electric/30 transition-all">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-electric/10 text-electric flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-navy">{cap.title}</h4>
                    </div>
                    <p className="text-xs text-navy-500 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2.5 bg-electric hover:bg-electric-600 text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-electric/20 hover:shadow-glow"
            >
              <span>Explore About Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Column: Supporting Industrial Engineering Imagery & HUD Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group">
              {/* Main Supporting High-Resolution Industrial Photo */}
              <div className="h-[460px] sm:h-[500px] w-full overflow-hidden bg-navy">
                <img
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1000&q=85"
                  alt="Industrial Robotics Engineering by Snesar.MD"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute inset-0 grid-pattern-dense opacity-15 pointer-events-none" />
              </div>

              {/* Floating Blueprint Telemetry Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-navy/90 backdrop-blur-xl border border-white/15 text-white shadow-xl">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan animate-pulse" />
                    <span className="text-[11px] font-mono uppercase text-cyan font-semibold">
                      Engineering Telemetry Live
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
                    VERIFIED
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-white/50 block font-mono">LIFECYCLE COVERAGE</span>
                    <span className="font-bold font-display text-white text-sm">Concept &rarr; Scale</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 block font-mono">ARCHITECTURE</span>
                    <span className="font-bold font-display text-cyan text-sm">Deterministic Zero-Loss</span>
                  </div>
                </div>
              </div>

              {/* Corner HUD accent */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/90">
                LAB: FACILITY_01
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
