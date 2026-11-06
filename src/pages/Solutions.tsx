import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, CheckCircle2, Cpu, ExternalLink, Filter, Layers, Info, ShieldCheck } from 'lucide-react';
import { solutions, Solution, getIndustryCategories, getSolutionBySlug } from '@/data/solutions';
import SectionHeading from '@/components/common/SectionHeading';
import { Link, useParams } from 'react-router-dom';

export default function Solutions() {
  const { slug } = useParams<{ slug?: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [modalTab, setModalTab] = useState<'overview' | 'features' | 'tech'>('overview');
  const [activeSolution, setActiveSolution] = useState<Solution | null>(() => {
    return slug ? getSolutionBySlug(slug) || null : null;
  });

  useEffect(() => {
    if (slug) {
      const found = getSolutionBySlug(slug);
      if (found) setActiveSolution(found);
    }
  }, [slug]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveSolution(null);
      }
    };

    if (activeSolution) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSolution]);

  useEffect(() => {
    document.title = 'Solutions Directory | Snesar.MD Engineering Solutions';
  }, []);

  const categories = useMemo(() => ['All', ...getIndustryCategories()], []);

  const filteredSolutions = useMemo(() => {
    return solutions.filter((sol) => {
      const matchesCategory =
        selectedCategory === 'All' || sol.industry === selectedCategory;
      const matchesSearch =
        sol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sol.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sol.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sol.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-electric/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 text-cyan border border-white/10 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              Engineering Solutions Directory
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-display tracking-tight text-white mb-6 leading-[1.14]">
              Intelligent Solutions for Complex Industry Challenges
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-normal">
              Explore our architectural concepts and engineering solution frameworks built across industrial automation, healthcare, mobility, performance analytics, and autonomous operations.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Controls & Listing */}
      <section className="py-16 md:py-24 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-card border border-navy/5 mb-10 flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
              <input
                type="text"
                placeholder="Search solutions, technologies, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 bg-section rounded-xl border border-navy/10 text-navy placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent transition-all text-xs sm:text-sm font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <Filter className="w-4 h-4 text-navy-400 shrink-0 ml-1 hidden lg:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-electric text-white shadow-md shadow-electric/25'
                      : 'bg-section text-navy-600 hover:bg-navy/5 hover:text-navy'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between mb-8 px-2 text-xs font-mono text-navy-400">
            <span>
              SHOWING <strong className="text-navy">{filteredSolutions.length}</strong> OF {solutions.length} SOLUTIONS
            </span>
            {(searchQuery || selectedCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-electric hover:underline font-semibold"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Solution Cards Grid */}
          {filteredSolutions.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-navy/5 shadow-card">
              <div className="w-16 h-16 mx-auto mb-4 bg-section rounded-2xl flex items-center justify-center text-navy-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display text-navy mb-2">No solutions found</h3>
              <p className="text-navy-400 text-sm max-w-md mx-auto mb-6">
                We couldn't find any architectural solutions matching your search query. Try adjusting your search term.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-2.5 rounded-xl bg-electric text-white font-bold text-xs uppercase tracking-wider hover:bg-electric-600 transition-all shadow-md"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((sol, index) => (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-navy/10 hover:border-electric/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-section flex items-center justify-center text-3xl group-hover:scale-105 group-hover:bg-electric/10 transition-all duration-300 border border-navy/5 shadow-sm">
                        {sol.icon}
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-navy/5 text-navy-600 border border-navy/5">
                        {sol.industry}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-navy group-hover:text-electric transition-colors mb-1.5">
                      {sol.name}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-700 tracking-wide uppercase mb-3 font-mono">
                      {sol.tagline}
                    </p>
                    <p className="text-sm text-navy-400 line-clamp-3 leading-relaxed mb-6 font-normal">
                      {sol.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {sol.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-section rounded-lg text-[11px] font-mono text-navy-500 border border-navy/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {sol.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-section rounded-lg text-[11px] font-mono text-navy-400">
                          +{sol.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-navy/5 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setActiveSolution(sol);
                        setModalTab('overview');
                      }}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-electric group-hover:text-navy transition-colors uppercase tracking-wider"
                    >
                      <span>Explore Architecture</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link
                      to={`/industries/${sol.industrySlug}`}
                      className="text-xs text-navy-400 hover:text-navy transition-colors font-medium"
                    >
                      Vertical &rarr;
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Solution Detail Modal */}
      <AnimatePresence>
        {activeSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSolution(null)}
              className="fixed inset-0 bg-navy/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-navy/10 overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 bg-navy text-white relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric/20 rounded-full blur-3xl pointer-events-none" />
                <button
                  onClick={() => setActiveSolution(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl border border-white/10">
                    {activeSolution.icon}
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 text-cyan uppercase tracking-wider">
                      {activeSolution.industry}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                      {activeSolution.name}
                    </h2>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-cyan font-mono font-medium">
                  {activeSolution.tagline}
                </p>

                {/* Modal Navigation Tabs */}
                <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setModalTab('overview')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      modalTab === 'overview' ? 'bg-cyan text-navy' : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    System Overview
                  </button>
                  <button
                    onClick={() => setModalTab('features')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      modalTab === 'features' ? 'bg-cyan text-navy' : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    Key Capabilities ({activeSolution.features.length})
                  </button>
                  <button
                    onClick={() => setModalTab('tech')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      modalTab === 'tech' ? 'bg-cyan text-navy' : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    Toolchain ({activeSolution.technologies.length})
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                {modalTab === 'overview' && (
                  <div>
                    <h4 className="text-xs font-mono font-bold text-navy-400 uppercase tracking-wider mb-2">
                      Architectural Summary
                    </h4>
                    <p className="text-navy-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {activeSolution.description}
                    </p>
                    <div className="p-4 rounded-2xl bg-section border border-navy/5 flex items-center justify-between text-xs text-navy-500">
                      <span className="font-mono">DOMAIN: {activeSolution.industry}</span>
                      <span className="font-mono text-electric">STATUS: VERIFIED SPEC</span>
                    </div>
                  </div>
                )}

                {modalTab === 'features' && (
                  <div>
                    <h4 className="text-xs font-mono font-bold text-navy-400 uppercase tracking-wider mb-3">
                      Architectural Features & Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeSolution.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-section border border-navy/5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-semibold text-navy">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {modalTab === 'tech' && (
                  <div>
                    <h4 className="text-xs font-mono font-bold text-navy-400 uppercase tracking-wider mb-3">
                      Technology Stack & Protocols
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {activeSolution.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-xl bg-electric/10 text-electric font-mono font-semibold text-xs border border-electric/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-navy-400 font-normal">
                      Integrated and stress-tested with enterprise API protocols, edge controllers, and high-availability cloud frameworks.
                    </p>
                  </div>
                )}

                <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan/20">
                  <p className="text-xs text-navy-600">
                    <strong className="text-navy font-semibold">Governance Note:</strong> Solution frameworks represented above illustrate system architecture methodologies developed by Snesar.MD.
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-section border-t border-navy/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <Link
                  to={`/industries/${activeSolution.industrySlug}`}
                  onClick={() => setActiveSolution(null)}
                  className="text-xs font-bold text-navy hover:text-electric transition-colors uppercase tracking-wider"
                >
                  View Sector Practice &rarr;
                </Link>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveSolution(null)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border border-navy/20 text-navy font-semibold text-xs uppercase tracking-wider hover:bg-navy/5 transition-colors"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    onClick={() => setActiveSolution(null)}
                    className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-electric text-white font-bold text-xs uppercase tracking-wider hover:bg-electric-600 shadow-md shadow-electric/20 transition-all text-center"
                  >
                    Discuss Architecture
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
