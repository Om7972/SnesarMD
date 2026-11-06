import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Info, ShieldCheck, Layers, ChevronRight } from 'lucide-react';
import { getCaseStudyBySlug, caseStudies } from '@/data/caseStudies';

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  useEffect(() => {
    if (study) {
      document.title = `${study.title} | Technical Case File | Snesar.MD`;
    }
  }, [study]);

  if (!study) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-white text-center px-4">
        <div>
          <h2 className="text-3xl font-bold font-display text-navy mb-4">Case File Not Found</h2>
          <p className="text-navy-400 mb-8 max-w-md mx-auto text-sm">
            The technical study you are looking for does not exist or has been archived.
          </p>
          <Link
            to="/case-studies"
            className="px-6 py-3 bg-electric text-white rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Case Studies</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedStudies = caseStudies
    .filter((cs) => cs.id !== study.id && (cs.industrySlug === study.industrySlug || cs.industry === study.industry))
    .slice(0, 2);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Top Banner Breadcrumbs */}
      <div className="bg-section border-b border-navy/5 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-navy-400 font-medium">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-navy-300" />
            <Link to="/case-studies" className="hover:text-navy transition-colors">Case Studies</Link>
            <ChevronRight className="w-3.5 h-3.5 text-navy-300" />
            <span className="text-electric font-semibold truncate max-w-[200px] sm:max-w-none">{study.title}</span>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-navy-600 hover:text-electric transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Case Studies</span>
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-electric/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 text-cyan border border-white/10 uppercase tracking-wider">
                Engineering Case File: #{study.id.toUpperCase()}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white text-navy shadow-sm">
                {study.industry}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-6 leading-[1.15]">
              {study.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl font-normal">
              An engineering deep-dive on solving critical performance bottlenecks through modular system design, hardware-software integration, and real-time data pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Project Notice Banner */}
      {study.isDemo && (
        <div className="bg-cyan-50 border-y border-cyan/20 py-3.5 px-4 text-center">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-cyan-900 font-medium">
            <Info className="w-4 h-4 text-cyan-700 shrink-0" />
            <span>
              This project is an illustrative engineering demonstration showcasing Snesar.MD's system architecture methodologies.
            </span>
          </div>
        </div>
      )}

      {/* Detail Content Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Main Article */}
            <div className="lg:col-span-8 space-y-12">
              {/* Featured Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-navy/10 relative h-72 sm:h-96">
                <img
                  src={study.image}
                  alt={study.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Challenge */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold font-mono text-sm border border-red-100">
                    01
                  </div>
                  <h2 className="text-2xl font-bold font-display text-navy">
                    The Business &amp; Engineering Challenge
                  </h2>
                </div>
                <p className="text-navy-600 leading-relaxed text-base sm:text-lg pl-12 font-normal">
                  {study.challenge}
                </p>
              </div>

              {/* Engineering Approach */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-electric/10 text-electric flex items-center justify-center font-bold font-mono text-sm border border-electric/20">
                    02
                  </div>
                  <h2 className="text-2xl font-bold font-display text-navy">
                    Our Engineering Approach
                  </h2>
                </div>
                <p className="text-navy-600 leading-relaxed text-base sm:text-lg pl-12 font-normal">
                  {study.approach}
                </p>
              </div>

              {/* Implemented Solution */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold font-mono text-sm border border-cyan/20">
                    03
                  </div>
                  <h2 className="text-2xl font-bold font-display text-navy">
                    The Implemented Solution Architecture
                  </h2>
                </div>
                <p className="text-navy-600 leading-relaxed text-base sm:text-lg pl-12 font-normal">
                  {study.solution}
                </p>
              </div>

              {/* Measurable Outcomes */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold font-mono text-sm border border-emerald-100">
                    04
                  </div>
                  <h2 className="text-2xl font-bold font-display text-navy">
                    Verified Engineering Outcomes
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-12">
                  {study.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-section border border-navy/5 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-electric shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-navy leading-snug">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Meta Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Tech Stack Card */}
              <div className="bg-section rounded-3xl p-7 border border-navy/10 shadow-sm">
                <h3 className="text-xs font-mono font-bold text-navy-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-electric" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-white text-navy font-mono font-semibold text-xs border border-navy/10 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-navy/10 space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-navy-400">Sector:</span>
                    <span className="font-semibold text-navy">{study.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-400">Classification:</span>
                    <span className="font-semibold text-navy">Demonstration Spec</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-400">Verification:</span>
                    <span className="font-mono font-semibold text-emerald-600">Lab Validated</span>
                  </div>
                </div>
              </div>

              {/* Consultation CTA Card */}
              <div className="bg-navy rounded-3xl p-7 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric/30 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-lg font-bold font-display mb-2">
                  Facing a similar engineering bottleneck?
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  Connect directly with our specialized engineering architects to review your technical requirements.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-electric hover:bg-electric-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-electric/25"
                >
                  <span>Request Technical Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-16 bg-section border-t border-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold font-display text-navy mb-8">
              Related Engineering Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedStudies.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-3xl p-7 border border-navy/10 shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-semibold text-electric uppercase tracking-wider">
                      {rel.industry}
                    </span>
                    <h4 className="text-lg font-bold font-display text-navy mt-1 mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-navy-400 line-clamp-2 mb-4 font-normal">
                      {rel.challenge}
                    </p>
                  </div>
                  <Link
                    to={`/case-studies/${rel.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-electric hover:text-navy uppercase tracking-wider transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
