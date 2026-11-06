import { motion } from 'framer-motion';
import { capabilities } from '@/data/capabilities';
import SectionHeading from '@/components/common/SectionHeading';
import { Cpu, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function EngineeringCapabilities() {
  return (
    <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
      {/* Background patterns and glowing accents */}
      <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern-dense opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-electric/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-cyan/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Full-Lifecycle Delivery"
          title="End-to-End Engineering Capabilities"
          subtitle="From concept to deployment, our comprehensive engineering disciplines cover every layer of modern industrial and digital architectures."
          light
          align="center"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const indexFormatted = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={cap.id}
                variants={cardVariants}
                className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan/40 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-glow/30 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Icon and Index */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-electric/20 border border-electric/30 flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-navy transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">
                      CAP-{indexFormatted}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-base font-bold text-white mb-2 leading-snug group-hover:text-cyan transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 group-hover:text-cyan font-mono transition-colors">
                  <span>DISCIPLINE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Global Architecture Integration Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse" />
            <p className="text-xs sm:text-sm text-white/80">
              Need a bespoke cross-domain engineering engagement combining hardware, firmware, and cloud intelligence?
            </p>
          </div>
          <Link
            to="/contact"
            className="text-xs font-bold font-mono uppercase tracking-wider text-cyan hover:text-white transition-colors whitespace-nowrap"
          >
            Review Technical Architecture &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
