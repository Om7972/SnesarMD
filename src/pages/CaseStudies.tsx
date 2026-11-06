import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, CheckCircle2, Filter, Cpu, Layers } from 'lucide-react';
import { caseStudies, CaseStudy } from '@/data/caseStudies';
import SectionHeading from '@/components/common/SectionHeading';

const industriesList = [
  'All',
  'Industrial Automation',
  'Medical Technology',
  'Sports Engineering',
  'Automotive Engineering',
  'RPA & Intelligent Automation',
];

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  useEffect(() => {
    document.title = 'Case Studies & Technical Delivery | Snesar.MD';
  }, []);

  const filteredCaseStudies = useMemo(() => {
    if (selectedIndustry === 'All') return caseStudies;
    return caseStudies.filter((cs) => cs.industry === selectedIndustry);
  }, [selectedIndustry]);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-electric/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 text-cyan border border-white/10 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              Engineering Delivery &amp; Case Studies
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-display tracking-tight text-white mb-6 leading-[1.14]">
              Proven Engineering Approaches to High-Stakes Challenges
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 font-normal">
              Review our architectural implementations, engineering problem-solving methodologies, and verified outcomes delivered across diversified technical verticals.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950/60 border border-cyan/30 text-cyan text-xs font-medium">
              <Info className="w-4 h-4 shrink-0 text-cyan" />
              <span>Note: The following projects represent illustrative technical demonstration case studies.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Portfolio Grid */}
      <section className="py-16 md:py-24 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Industry Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            <Filter className="w-4 h-4 text-navy-400 shrink-0 ml-1 hidden sm:block" />
            {industriesList.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedIndustry === ind
                    ? 'bg-electric text-white shadow-md shadow-electric/25'
                    : 'bg-white text-navy-600 border border-navy/10 hover:bg-navy/5 hover:text-navy'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden border border-navy/10 hover:border-electric/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-52 overflow-hidden bg-navy">
                    <img
                      src={study.image}
                      alt={study.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/95 text-navy backdrop-blur-md shadow-sm">
                        {study.industry}
                      </span>
                      {study.isDemo && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-cyan text-navy backdrop-blur-md">
                          DEMO
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-bold font-display text-navy group-hover:text-electric transition-colors mb-2.5 leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-navy-400 uppercase tracking-wider mb-2">
                      Problem Statement
                    </p>
                    <p className="text-sm text-navy-500 line-clamp-3 leading-relaxed mb-6 font-normal">
                      {study.challenge}
                    </p>

                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-mono font-semibold text-navy-400 uppercase tracking-wider">
                        Measurable Outcomes
                      </p>
                      {study.outcomes.slice(0, 2).map((outcome, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-navy-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-electric shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{outcome}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-navy/5">
                      {study.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-section rounded-md text-[11px] font-mono text-navy-500 border border-navy/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-section rounded-md text-[11px] font-mono text-navy-400">
                          +{study.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-section hover:bg-electric text-navy hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200"
                  >
                    <span>Read Technical Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
