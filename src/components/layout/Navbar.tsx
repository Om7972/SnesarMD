import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Factory,
  HeartPulse,
  Trophy,
  Car,
  Bot,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/hooks/useScrollAnimation';
import { industries } from '@/data/industries';
import { solutions } from '@/data/solutions';

/* ------------------------------------------------------------------ */
/*  Icon Map & Navigation Data                                        */
/* ------------------------------------------------------------------ */

const industryIcons: Record<string, typeof Factory> = {
  'industrial-automation': Factory,
  'medical-technology': HeartPulse,
  'sports-engineering': Trophy,
  'automotive-engineering': Car,
  'rpa-intelligent-automation': Bot,
};

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Industries', to: '/industries', hasMega: 'industries' as const },
  { label: 'Solutions', to: '/solutions', hasMega: 'solutions' as const },
  { label: 'Innovation', to: '/innovation' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

/* ------------------------------------------------------------------ */
/*  Logo Component                                                     */
/* ------------------------------------------------------------------ */

function SnesarLogo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="Snesar.MD Home">
      {/* Precision Engineering Mark */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-electric via-navy-700 to-navy-900 p-[1.5px] shadow-md shadow-electric/20 group-hover:shadow-glow/40 transition-all duration-300">
        <div className="w-full h-full bg-navy rounded-[10px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 to-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform group-hover:scale-110 transition-transform duration-300"
          >
            <path
              d="M7 11.5C7 9.01472 9.01472 7 11.5 7H19C21.7614 7 24 9.23858 24 12C24 14.7614 21.7614 17 19 17H13C10.2386 17 8 19.2386 8 22C8 24.7614 10.2386 27 13 27H20.5C22.9853 27 25 24.9853 25 22.5"
              stroke="url(#s-mark-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="24" cy="12" r="2" fill="#16C6D9" />
            <circle cx="8" cy="22" r="2" fill="#1264E8" />
            <defs>
              <linearGradient id="s-mark-grad" x1="7" y1="7" x2="25" y2="27" gradientUnits="userSpaceOnUse">
                <stop stopColor="#16C6D9" />
                <stop offset="0.5" stopColor="#1264E8" />
                <stop offset="1" stopColor="#80E6EF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1.5">
          <span className={cn(
            'font-display font-bold text-xl tracking-tight transition-colors',
            isScrolled ? 'text-navy' : 'text-white'
          )}>
            Snesar<span className="text-electric">.MD</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
        </div>
        <span className={cn(
          'font-mono text-[9px] tracking-[0.22em] uppercase font-semibold transition-colors',
          isScrolled ? 'text-navy-400' : 'text-cyan/80'
        )}>
          Engineering &middot; Technology
        </span>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Mega Menu: Industries                                              */
/* ------------------------------------------------------------------ */

function IndustriesMega({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50 w-[840px]"
      onMouseLeave={onClose}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-navy/10 overflow-hidden backdrop-blur-2xl">
        <div className="grid grid-cols-12 divide-x divide-navy/5">
          {/* Main Grid: 5 Verticals */}
          <div className="col-span-8 p-6">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-navy/5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-navy-400 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-electric" />
                Sector Practice Areas
              </span>
              <span className="text-xs text-navy-400 font-medium">5 Core Practices</span>
            </div>

            <div className="space-y-1.5">
              {industries.map((ind) => {
                const Icon = industryIcons[ind.slug] || Factory;
                return (
                  <Link
                    key={ind.slug}
                    to={`/industries/${ind.slug}`}
                    onClick={onClose}
                    className="group/item flex items-start gap-3.5 rounded-xl p-3 transition-all duration-200 hover:bg-section hover:translate-x-1"
                  >
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 mt-0.5 border border-navy/5 shadow-sm transition-transform duration-300 group-hover/item:scale-105"
                      style={{ backgroundColor: `${ind.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: ind.color }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-navy group-hover/item:text-electric transition-colors">
                          {ind.title}
                        </p>
                        <ArrowUpRight className="w-3.5 h-3.5 text-navy-300 opacity-0 group-hover/item:opacity-100 group-hover/item:text-electric transition-all" />
                      </div>
                      <p className="text-xs text-navy-400 line-clamp-1 mt-0.5">
                        {ind.shortDescription}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Highlight Box */}
          <div className="col-span-4 p-6 bg-gradient-to-b from-section/80 to-section/30 flex flex-col justify-between">
            <div>
              <div className="relative rounded-xl overflow-hidden h-36 mb-4 shadow-sm border border-navy/10">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
                  alt="Industrial Engineering"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan font-semibold block">
                    Enterprise Capability
                  </span>
                  <span className="text-xs font-bold font-display">
                    Mission-Critical Systems
                  </span>
                </div>
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-2">
                Cross-Domain Engineering
              </h4>
              <p className="text-xs text-navy-500 leading-relaxed mb-4">
                Scalable architectures tested against stringent safety, timing, and security standards.
              </p>
            </div>

            <div className="pt-3 border-t border-navy/10">
              <Link
                to="/case-studies"
                onClick={onClose}
                className="text-xs font-bold text-electric hover:text-navy transition-colors inline-flex items-center gap-1.5"
              >
                <span>Explore Technical Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-section px-6 py-3 border-t border-navy/5 flex items-center justify-between text-xs">
          <span className="text-navy-400 font-medium">
            Core Engineering Practices &amp; Domain Expertise
          </span>
          <Link
            to="/industries"
            onClick={onClose}
            className="font-bold text-electric hover:text-navy transition-colors flex items-center gap-1"
          >
            All Industry Overview <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mega Menu: Solutions                                               */
/* ------------------------------------------------------------------ */

function SolutionsMega({ onClose }: { onClose: () => void }) {
  const topSolutions = solutions.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50 w-[840px]"
      onMouseLeave={onClose}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-navy/10 overflow-hidden backdrop-blur-2xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-5 pb-2.5 border-b border-navy/5">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-navy-400 font-semibold block">
                Engineering Solution Frameworks
              </span>
              <p className="text-xs text-navy-500 mt-0.5">
                Validated reference architectures and modular systems
              </p>
            </div>
            <Link
              to="/solutions"
              onClick={onClose}
              className="text-xs font-bold text-electric hover:text-navy transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-electric/5 border border-electric/15"
            >
              <span>View Full Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3.5">
            {topSolutions.map((sol) => (
              <Link
                key={sol.slug}
                to={`/solutions/${sol.slug}`}
                onClick={onClose}
                className="group/sol p-3.5 rounded-xl border border-navy/5 bg-section/40 hover:bg-white hover:border-electric/30 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{sol.icon}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-navy-500 border border-navy/10 font-semibold">
                      {sol.industry.split(' ')[0]}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-navy group-hover/sol:text-electric transition-colors mb-1">
                    {sol.name}
                  </h4>
                  <p className="text-[11px] text-navy-400 line-clamp-2 leading-relaxed">
                    {sol.tagline}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-navy/5 flex items-center justify-between text-[11px] text-electric font-semibold">
                  <span>Architecture</span>
                  <ArrowRight className="w-3 h-3 group-hover/sol:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer info bar */}
        <div className="bg-section px-6 py-3 border-t border-navy/5 flex items-center justify-between text-xs">
          <span className="text-navy-400 font-mono flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-electric" />
            Illustrative engineering concepts and system blueprints
          </span>
          <Link
            to="/contact"
            onClick={onClose}
            className="font-bold text-navy hover:text-electric transition-colors"
          >
            Custom Architecture Enquiry &rarr;
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Menu Component with Sub-menu Accordions                    */
/* ------------------------------------------------------------------ */

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const location = useLocation();
  const [expandedSubmenu, setExpandedSubmenu] = useState<'industries' | 'solutions' | null>(null);

  useEffect(() => {
    onClose();
    setExpandedSubmenu(null);
  }, [location.pathname]);

  const toggleSubmenu = (menu: 'industries' | 'solutions') => {
    setExpandedSubmenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/85 backdrop-blur-md z-50 lg:hidden"
            onClick={onClose}
          />
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-navy text-white z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden border-l border-white/10"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <SnesarLogo isScrolled={false} />
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isIndustries = link.hasMega === 'industries';
                  const isSolutions = link.hasMega === 'solutions';
                  const hasSubmenu = isIndustries || isSolutions;
                  const isExpanded =
                    (isIndustries && expandedSubmenu === 'industries') ||
                    (isSolutions && expandedSubmenu === 'solutions');

                  return (
                    <div key={link.to} className="rounded-xl overflow-hidden">
                      <div className="flex items-center justify-between hover:bg-white/10 transition-colors">
                        <Link
                          to={link.to}
                          onClick={onClose}
                          className="flex-1 px-4 py-3 text-base font-semibold text-white/90 hover:text-white"
                        >
                          {link.label}
                        </Link>

                        {hasSubmenu && (
                          <button
                            type="button"
                            onClick={() => toggleSubmenu(isIndustries ? 'industries' : 'solutions')}
                            className="p-3 text-cyan hover:bg-white/10 transition-colors"
                            aria-label={`Toggle ${link.label} submenu`}
                          >
                            <ChevronDown
                              className={cn(
                                'w-4 h-4 transition-transform duration-200',
                                isExpanded && 'rotate-180'
                              )}
                            />
                          </button>
                        )}
                      </div>

                      {/* Accordion Submenu: Industries */}
                      {isIndustries && isExpanded && (
                        <div className="pl-4 pr-2 py-2 space-y-1 bg-white/5 border-l-2 border-cyan/40 my-1 rounded-r-xl">
                          <Link
                            to="/industries"
                            onClick={onClose}
                            className="block px-3 py-2 text-xs font-mono font-bold text-cyan uppercase tracking-wider hover:bg-white/10 rounded-lg"
                          >
                            &rarr; All Practices Overview
                          </Link>
                          {industries.map((ind) => {
                            const Icon = industryIcons[ind.slug] || Factory;
                            return (
                              <Link
                                key={ind.slug}
                                to={`/industries/${ind.slug}`}
                                onClick={onClose}
                                className="flex items-center gap-2.5 px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                              >
                                <Icon className="w-3.5 h-3.5 text-cyan" />
                                <span className="font-semibold">{ind.title}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}

                      {/* Accordion Submenu: Solutions */}
                      {isSolutions && isExpanded && (
                        <div className="pl-4 pr-2 py-2 space-y-1 bg-white/5 border-l-2 border-electric my-1 rounded-r-xl">
                          <Link
                            to="/solutions"
                            onClick={onClose}
                            className="block px-3 py-2 text-xs font-mono font-bold text-cyan uppercase tracking-wider hover:bg-white/10 rounded-lg"
                          >
                            &rarr; All Solution Frameworks
                          </Link>
                          {solutions.map((sol) => (
                            <Link
                              key={sol.slug}
                              to={`/solutions/${sol.slug}`}
                              onClick={onClose}
                              className="flex items-center justify-between px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                              <span className="font-semibold">{sol.name}</span>
                              <span className="text-[10px] font-mono text-cyan/70">{sol.industry.split(' ')[0]}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
                <div className="text-cyan font-mono font-semibold uppercase mb-1">
                  Global Engineering Desk
                </div>
                <div className="text-white/70 font-mono">
                  Direct: solutions@snesar.md
                </div>
              </div>
              <Link
                to="/contact"
                onClick={onClose}
                className="w-full py-3.5 rounded-xl bg-electric text-white font-bold text-center text-xs uppercase tracking-wider block shadow-lg shadow-electric/30 hover:bg-electric-600 transition-all"
              >
                Discuss Your Project
              </Link>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Navbar Component                                              */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const { scrollY } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isScrolled = scrollY > 40;

  useEffect(() => {
    setActiveMega(null);
  }, [location.pathname]);

  const openMega = useCallback((key: string) => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setActiveMega(key);
  }, []);

  const closeMega = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => setActiveMega(null), 180);
  }, []);

  const cancelClose = useCallback(() => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-nav border-b border-navy/10 py-3'
            : 'bg-navy/85 backdrop-blur-xl border-b border-white/10 py-4.5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <SnesarLogo isScrolled={isScrolled} />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.to === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.to);

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => link.hasMega && openMega(link.hasMega)}
                    onMouseLeave={() => link.hasMega && closeMega()}
                  >
                    <Link
                      to={link.to}
                      className={cn(
                        'relative px-3.5 py-2 text-[13.5px] font-semibold transition-all duration-200 flex items-center gap-1 rounded-lg',
                        isScrolled
                          ? isActive
                            ? 'text-electric bg-electric/5'
                            : 'text-navy-700 hover:text-electric hover:bg-navy/5'
                          : isActive
                            ? 'text-cyan bg-white/10'
                            : 'text-white/90 hover:text-white hover:bg-white/5'
                      )}
                    >
                      <span>{link.label}</span>
                      {link.hasMega && (
                        <ChevronDown
                          className={cn(
                            'w-3.5 h-3.5 transition-transform duration-200 opacity-60',
                            activeMega === link.hasMega && 'rotate-180 opacity-100'
                          )}
                        />
                      )}
                    </Link>

                    {/* Mega Menus */}
                    <AnimatePresence>
                      {link.hasMega === 'industries' && activeMega === 'industries' && (
                        <div onMouseEnter={cancelClose} onMouseLeave={closeMega}>
                          <IndustriesMega onClose={() => setActiveMega(null)} />
                        </div>
                      )}
                      {link.hasMega === 'solutions' && activeMega === 'solutions' && (
                        <div onMouseEnter={cancelClose} onMouseLeave={closeMega}>
                          <SolutionsMega onClose={() => setActiveMega(null)} />
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Action: Let's Talk CTA & Mobile Trigger */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className={cn(
                  'hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md',
                  'bg-electric hover:bg-electric-600 text-white shadow-electric/25 hover:shadow-glow hover:scale-102'
                )}
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  'lg:hidden p-2 rounded-xl border transition-colors',
                  isScrolled
                    ? 'border-navy/15 text-navy hover:bg-navy/5'
                    : 'border-white/15 text-white hover:bg-white/10'
                )}
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
