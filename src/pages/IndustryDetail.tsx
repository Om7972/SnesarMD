import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, Layers, FileText } from 'lucide-react';
import { getIndustryBySlug, industries } from '@/data/industries';
import { getSolutionsByIndustry } from '@/data/solutions';
import { getCaseStudiesByIndustry } from '@/data/caseStudies';

// Dedicated Industry Views with Domain-Specific Visual Storytelling
import IndustrialAutomationView from '@/components/industries/IndustrialAutomationView';
import MedicalTechnologyView from '@/components/industries/MedicalTechnologyView';
import SportsEngineeringView from '@/components/industries/SportsEngineeringView';
import AutomotiveEngineeringView from '@/components/industries/AutomotiveEngineeringView';
import RPAIntelligentAutomationView from '@/components/industries/RPAIntelligentAutomationView';

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = slug || 'industrial-automation';
  const industry = getIndustryBySlug(activeSlug);

  useEffect(() => {
    if (industry) {
      document.title = `${industry.title} | Snesar.MD Global Engineering`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [industry]);

  if (!industry) {
    return <Navigate to="/404" replace />;
  }

  const relatedSolutions = getSolutionsByIndustry(industry.slug);
  const relatedCaseStudies = getCaseStudiesByIndustry(industry.slug);

  // Render dedicated visual storytelling component for the active industry
  const renderIndustryView = () => {
    switch (industry.slug) {
      case 'industrial-automation':
        return <IndustrialAutomationView industry={industry} />;
      case 'medical-technology':
        return <MedicalTechnologyView industry={industry} />;
      case 'sports-engineering':
        return <SportsEngineeringView industry={industry} />;
      case 'automotive-engineering':
        return <AutomotiveEngineeringView industry={industry} />;
      case 'rpa-intelligent-automation':
        return <RPAIntelligentAutomationView industry={industry} />;
      default:
        return <IndustrialAutomationView industry={industry} />;
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* 1. Breadcrumbs Navigation & Practice ID Bar */}
      <div className="bg-section border-b border-navy/5 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-navy/60 font-medium">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-navy/30" />
            <Link to="/industries" className="hover:text-navy transition-colors">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5 text-navy/30" />
            <span className="text-electric font-bold">{industry.title}</span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] text-navy/50 uppercase tracking-wider font-semibold">
            PRACTICE_ID: {industry.slug.toUpperCase()}
          </span>
        </div>
      </div>

      {/* 2. Quick Industry Sector Switcher Bar */}
      <div className="bg-white border-b border-navy/10 py-3 sticky top-20 z-40 shadow-xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-xs font-mono uppercase tracking-wider text-navy/50 font-bold mr-2 shrink-0">
              Sector Practices:
            </span>
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  ind.slug === industry.slug
                    ? 'bg-navy text-white shadow-sm font-bold'
                    : 'bg-section text-navy/70 hover:bg-navy/5 hover:text-navy'
                }`}
              >
                {ind.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Dedicated Distinct Industry Visual Storytelling Experience */}
      {renderIndustryView()}

      {/* 4. Applied Reference Implementations & Use Cases */}
      {industry.useCases && industry.useCases.length > 0 && (
        <section className="py-20 md:py-28 bg-white border-t border-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-xs font-mono font-bold text-electric uppercase tracking-wider block mb-2">
                Applied Reference Architectures
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-navy tracking-tight">
                Production Deployment Patterns for {industry.title}
              </h3>
              <p className="text-sm text-navy/60 max-w-2xl mt-2 font-normal">
                Concrete engineering paradigms designed and validated by our domain specialists to solve high-impact industrial bottlenecks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industry.useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-section border border-navy/10 flex flex-col justify-between hover:shadow-card transition-all"
                >
                  <div>
                    <div className="text-xs font-mono text-cyan-800 bg-cyan-50 px-3 py-1 rounded-md inline-block border border-cyan/20 mb-4 font-semibold">
                      Pattern #0{idx + 1}
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-3 font-display">{uc.title}</h4>
                    <p className="text-sm text-navy/70 leading-relaxed mb-6 font-normal">
                      {uc.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-navy/10 flex items-center justify-between text-xs font-bold text-electric">
                    <span>Architecture Validated</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Related Solutions Directory */}
      {relatedSolutions.length > 0 && (
        <section className="py-20 bg-section border-t border-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-electric uppercase tracking-wider block mb-1">
                  Solutions Directory
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy">
                  Architectural Solutions for {industry.title}
                </h3>
              </div>
              <Link
                to="/solutions"
                className="text-xs sm:text-sm font-bold text-electric hover:text-navy transition-colors inline-flex items-center gap-1.5 uppercase tracking-wider"
              >
                <span>All Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedSolutions.map((sol) => (
                <div
                  key={sol.id}
                  className="bg-white rounded-3xl p-8 border border-navy/10 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="text-3xl mb-3">{sol.icon}</div>
                    <h4 className="text-2xl font-bold text-navy mb-1 font-display">{sol.name}</h4>
                    <p className="text-xs font-semibold text-cyan-700 uppercase mb-3 font-mono">{sol.tagline}</p>
                    <p className="text-sm text-navy/70 leading-relaxed mb-6 font-normal">{sol.description}</p>
                  </div>
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-electric hover:text-navy transition-colors uppercase tracking-wider"
                  >
                    <span>View Solution Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Related Case Studies (if any for this industry) */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 bg-white border-t border-navy/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-electric uppercase tracking-wider block mb-1">
                  Proven Engagements
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy">
                  Case Studies in {industry.title}
                </h3>
              </div>
              <Link
                to="/case-studies"
                className="text-xs sm:text-sm font-bold text-electric hover:text-navy transition-colors inline-flex items-center gap-1.5 uppercase tracking-wider"
              >
                <span>All Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedCaseStudies.map((cs) => (
                <div
                  key={cs.id}
                  className="bg-section rounded-3xl p-8 border border-navy/10 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-800 bg-cyan-100/60 px-3 py-1 rounded-md inline-block mb-3">
                      {cs.industry}
                    </span>
                    <h4 className="text-xl font-bold text-navy mb-2 font-display">{cs.title}</h4>
                    <p className="text-sm text-navy/70 leading-relaxed mb-6 font-normal">{cs.challenge}</p>
                  </div>
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-electric hover:text-navy transition-colors uppercase tracking-wider"
                  >
                    <span>Read Engineering Case Study</span>
                    <ArrowRight className="w-4 h-4" />
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
