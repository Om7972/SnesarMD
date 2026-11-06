import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Lock, Clock, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-navy overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-pattern-dark opacity-35 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern-dense opacity-15 pointer-events-none" />

      {/* Ambient gradient glows */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-electric/15 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-cyan/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-cyan/10 text-cyan border border-cyan/30 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span>Project Inquiries & Technical Partnerships</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.12] tracking-tight">
            Have an Engineering Challenge?{' '}
            <span className="block mt-2 text-gradient">
              Let's Build the Solution.
            </span>
          </h2>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you're developing autonomous robotics, certifying a medical device, or deploying high-throughput automation — our specialized engineering practices are ready to partner with you.
          </p>

          {/* Dual CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-electric hover:bg-electric-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-glow hover:scale-102"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 hover:border-white text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              <span>Contact Our Experts</span>
            </Link>
          </div>

          {/* Enterprise NDA & Security Assurance */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-white/50">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-cyan" />
              <span>STRICT MUTUAL NDA PROTECTED</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-cyan" />
              <span>1 BUSINESS DAY TECHNICAL RESPONSE</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
              <span>IP RETENTION ASSURED</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
