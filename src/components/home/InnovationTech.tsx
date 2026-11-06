import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technologies } from '@/data/capabilities';
import SectionHeading from '@/components/common/SectionHeading';
import { ArrowRight, Cpu, Layers, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Intelligence', 'Simulation', 'Connectivity', 'Infrastructure', 'Automation'];

const categoryColors: Record<string, string> = {
  Intelligence: 'bg-electric/10 text-electric border-electric/25',
  Simulation: 'bg-cyan/15 text-cyan-800 border-cyan/30',
  Connectivity: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/25',
  Infrastructure: 'bg-violet-500/10 text-violet-700 border-violet-500/25',
  Automation: 'bg-amber-500/10 text-amber-700 border-amber-500/25',
};

export default function InnovationTech() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTechnologies = activeCategory === 'All'
    ? technologies
    : technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Emerging Toolchain"
          title="Innovation That Moves Industries Forward."
          subtitle="We harness cutting-edge technologies and deep research to architect solutions that push the boundaries of industrial precision and autonomy."
          align="center"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-electric text-white shadow-md shadow-electric/25 scale-102'
                  : 'bg-section text-navy-600 hover:bg-navy/5 hover:text-navy border border-navy/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technology Showcase Cards */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredTechnologies.map((tech) => (
              <motion.div
                layout
                key={tech.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-2xl border border-navy/10 bg-white hover:border-electric/40 p-5 sm:p-6 transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border ${
                        categoryColors[tech.category] ?? 'bg-navy/5 text-navy'
                      }`}
                    >
                      {tech.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-electric/40 group-hover:bg-electric group-hover:animate-ping" />
                  </div>

                  <h3 className="font-display text-base font-bold text-navy mb-2 group-hover:text-electric transition-colors">
                    {tech.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-navy-400 leading-relaxed font-normal">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-navy/5 flex items-center justify-between text-[11px] font-mono text-navy-400 group-hover:text-electric transition-colors">
                  <span>ID: {tech.id.toUpperCase()}_ENG</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Card to Innovation Page */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-section border border-navy/5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-navy font-display mb-1">
              Want to see our interactive technology ecosystem mapping?
            </h4>
            <p className="text-xs sm:text-sm text-navy-400">
              Explore how our R&D labs combine machine learning, digital twins, and industrial IoT in live testbeds.
            </p>
          </div>
          <Link
            to="/innovation"
            className="px-6 py-3 rounded-xl bg-navy hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md inline-flex items-center gap-2 shrink-0"
          >
            <span>Explore Innovation Labs</span>
            <ArrowRight className="w-4 h-4 text-cyan" />
          </Link>
        </div>
      </div>
    </section>
  );
}
