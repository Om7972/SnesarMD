import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, HeartPulse, Trophy, Car, Bot, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { industries } from '@/data/industries';
import SectionHeading from '@/components/common/SectionHeading';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function IndustryVerticals() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Split into 2 top flagship verticals and 3 complementary domain verticals
  const topTwo = industries.slice(0, 2);
  const bottomThree = industries.slice(2, 5);

  return (
    <section className="py-20 md:py-28 bg-section relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Sector Practices"
          title="Our Industry Verticals"
          subtitle="Deep domain engineering practices delivering specialized architectures and compliant systems across five high-impact global industries."
          align="center"
        />

        {/* Vertical Cards Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6"
        >
          {/* Top Row: 2 Large Flagship Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {topTwo.map((industry) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.id}
                  variants={cardVariants}
                  onMouseEnter={() => setHoveredCard(industry.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="group relative block h-[420px] rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-navy/10"
                  >
                    {/* Background photo with zoom */}
                    <div className="absolute inset-0">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20 opacity-90 group-hover:opacity-95 transition-opacity" />
                    <div className="absolute inset-0 grid-pattern-dense opacity-10 pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-7 sm:p-9 text-white">
                      {/* Top Header */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-navy transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 border border-white/15 backdrop-blur-md text-cyan">
                          Flagship Practice
                        </span>
                      </div>

                      {/* Bottom Info */}
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                          {industry.title}
                        </h3>

                        <p className="text-sm text-white/80 line-clamp-2 leading-relaxed mb-5">
                          {industry.shortDescription}
                        </p>

                        {/* Capabilities */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {industry.capabilities.slice(0, 3).map((cap) => (
                            <span
                              key={cap}
                              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/10 border border-white/10 text-white/90 backdrop-blur-sm"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>

                        {/* Button Action */}
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan group-hover:text-white transition-colors">
                          <span>Explore Solutions</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Row: 3 Specialized Domain Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bottomThree.map((industry) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.id}
                  variants={cardVariants}
                  onMouseEnter={() => setHoveredCard(industry.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="group relative block h-[390px] rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-navy/10"
                  >
                    {/* Background photo with zoom */}
                    <div className="absolute inset-0">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/25 opacity-90 group-hover:opacity-95 transition-opacity" />
                    <div className="absolute inset-0 grid-pattern-dense opacity-10 pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-7 text-white">
                      {/* Top Header */}
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-navy transition-all duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-white/60">
                          SPECIALIZED
                        </span>
                      </div>

                      {/* Bottom Info */}
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                          {industry.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-white/75 line-clamp-2 leading-relaxed mb-4">
                          {industry.shortDescription}
                        </p>

                        {/* Capabilities */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {industry.capabilities.slice(0, 2).map((cap) => (
                            <span
                              key={cap}
                              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/10 text-white/80 backdrop-blur-sm"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>

                        {/* Button Action */}
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan group-hover:text-white transition-colors">
                          <span>Explore Solutions</span>
                          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
