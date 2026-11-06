import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Layers, Sparkles, ExternalLink, Info } from 'lucide-react';
import { solutions } from '@/data/solutions';
import SectionHeading from '@/components/common/SectionHeading';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const featured = solutions.slice(0, 5);

export default function FeaturedSolutions() {
  return (
    <section className="py-20 md:py-28 bg-section relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Concept Blueprints"
          title="Featured Engineering Solutions"
          subtitle="Illustrative reference architectures demonstrating our multi-disciplinary engineering approach across industrial, medical, mobility, and automation frontiers."
          align="center"
        />

        {/* Disclaimer Note */}
        <div className="max-w-3xl mx-auto mb-10 p-3.5 rounded-xl bg-cyan-50 border border-cyan/20 flex items-center justify-center gap-2 text-xs text-cyan-900 font-medium text-center">
          <Info className="w-4 h-4 text-cyan-700 shrink-0" />
          <span>These represent illustrative engineering solution concepts and reference architectures, not commercial off-the-shelf products.</span>
        </div>

        {/* Solution Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {featured.map((sol, index) => (
            <motion.div
              key={sol.id}
              variants={cardVariants}
              className={`group bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover border border-navy/10 hover:border-electric/40 transition-all duration-300 flex flex-col justify-between ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Header: Icon, Tag & Industry */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-section flex items-center justify-center text-3xl border border-navy/5 group-hover:scale-105 group-hover:bg-electric/10 transition-all duration-300 shadow-sm">
                    {sol.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-navy/5 text-navy-600 border border-navy/5">
                    {sol.industry}
                  </span>
                </div>

                {/* Titles */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy group-hover:text-electric transition-colors mb-1.5">
                  {sol.name}
                </h3>
                <p className="text-xs font-semibold text-cyan-700 uppercase tracking-wide mb-3">
                  {sol.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-navy-400 line-clamp-3 leading-relaxed mb-6 font-normal">
                  {sol.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {sol.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-section rounded-lg text-[11px] font-medium text-navy-500 border border-navy/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {sol.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-section rounded-lg text-[11px] font-medium text-navy-400">
                      +{sol.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-navy/5 flex items-center justify-between">
                <Link
                  to={`/solutions/${sol.slug}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-electric group-hover:text-navy transition-colors uppercase tracking-wider"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to={`/industries/${sol.industrySlug}`}
                  className="text-xs text-navy-400 hover:text-navy transition-colors font-medium"
                >
                  Vertical &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-electric hover:bg-electric-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-electric/25 hover:shadow-glow"
          >
            <span>View All Engineering Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
