import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, CheckCircle2, Cpu } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import SectionHeading from '@/components/common/SectionHeading';

const featured = caseStudies.slice(0, 3);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 md:py-28 bg-section relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Applied Engineering"
          title="Engineering Impact in Action"
          subtitle="Explore our technical delivery methodologies, architectural implementations, and verified outcomes across critical industries."
          align="center"
        />

        {/* Demo Notice Banner */}
        <div className="max-w-3xl mx-auto mb-12 p-3.5 rounded-xl bg-cyan-50 border border-cyan/20 flex items-center justify-center gap-2 text-xs text-cyan-900 font-medium text-center">
          <Info className="w-4 h-4 text-cyan-700 shrink-0" />
          <span>Note: The following projects represent illustrative technical demonstration case studies.</span>
        </div>

        {/* Case Studies Cards */}
        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {featured.map((cs) => (
            <motion.div
              key={cs.id}
              variants={cardVariants}
              className="group bg-white rounded-3xl shadow-card hover:shadow-card-hover border border-navy/10 hover:border-electric/30 transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Photo Banner with Zoom */}
                <div className="relative lg:w-96 flex-shrink-0 h-64 lg:h-auto overflow-hidden bg-navy">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy/60" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/95 text-navy shadow-sm backdrop-blur-md">
                      {cs.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan/20 px-2.5 py-0.5 rounded-md font-semibold">
                        DEMO PROJECT FILE
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-navy group-hover:text-electric transition-colors mb-3">
                      {cs.title}
                    </h3>

                    <p className="text-sm text-navy-500 leading-relaxed mb-6 font-normal">
                      {cs.challenge}
                    </p>

                    {/* Verified Outcomes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      {cs.outcomes.slice(0, 2).map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-navy-600 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-navy/5">
                      {cs.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-section rounded-lg text-[11px] font-mono text-navy-600 border border-navy/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy/5 flex items-center justify-between">
                    <Link
                      to={`/case-studies/${cs.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-electric group-hover:text-navy transition-colors uppercase tracking-wider"
                    >
                      <span>Read Technical Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Case Studies CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-navy hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
          >
            <span>Explore All Engineering Case Files</span>
            <ArrowRight className="w-4 h-4 text-cyan" />
          </Link>
        </div>
      </div>
    </section>
  );
}
