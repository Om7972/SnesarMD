import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Terminal, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Industries', to: '/industries' },
  { label: 'Solutions Directory', to: '/solutions' },
  { label: 'Innovation & R&D', to: '/innovation' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Careers & Culture', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
];

const industryLinks = [
  { label: 'Industrial Automation', to: '/industries/industrial-automation' },
  { label: 'Medical Technology', to: '/industries/medical-technology' },
  { label: 'Sports Engineering', to: '/industries/sports-engineering' },
  { label: 'Automotive Engineering', to: '/industries/automotive-engineering' },
  { label: 'RPA & Intelligent Automation', to: '/industries/rpa-intelligent-automation' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/snesarmd', icon: LinkedinIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@snesarmd', icon: YoutubeIcon },
  { label: 'GitHub', href: 'https://github.com/snesarmd', icon: GithubIcon },
];

export default function Footer() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'governance' | null>(null);

  const legalContent = {
    privacy: {
      title: 'Global Privacy & Data Confidentiality Policy',
      badge: 'ISO 27001 / GDPR COMPLIANT',
      content: [
        'Snesar.MD operates under strict international data privacy standards. All client engineering specifications, schematics, source code, and telemetry disclosures are protected with enterprise-grade encryption in transit and at rest adhering to global security standards.',
        'We enforce strict zero-data-retention parameters for demonstration testbeds and never sell, lease, or share client project dossiers with third parties.',
        'Direct requests for dossier deletion or audit logs can be dispatched directly to privacy@snesar.md.',
      ],
    },
    terms: {
      title: 'Engineering Terms & Engagement Conditions',
      badge: 'ENTERPRISE PRACTICE TERMS',
      content: [
        'All engineering services, proofs-of-concept, and deliverables are provided pursuant to executed Statements of Work (SOW) governed by mutual intellectual property covenants.',
        'Reference architectures, benchmark simulators, and illustrative solution concepts displayed on this website represent demonstration frameworks developed by Snesar.MD and do not constitute warranties of merchantability for off-the-shelf commercial goods.',
        'Client engagements proceed under bilateral non-disclosure agreements with clearly delineated IP assignment schedules upon phase sign-off.',
      ],
    },
    governance: {
      title: 'Engineering Ethics & Governance Framework',
      badge: 'SAFETY & COMPLIANCE STANDARD',
      content: [
        'Snesar.MD maintains formal engineering compliance across functional safety standards including ISO 26262 (ASIL-D) for automotive systems, IEC 62304 / ISO 13485 for medical device software, and ISA-95 for industrial automation.',
        'Medical AI algorithms developed by Snesar.MD operate solely as clinical decision-support assistive tooling; clinical determinations remain the sole legal responsibility of licensed medical practitioners.',
        'We enforce continuous static analysis, MISRA compliance, and Hardware-in-the-Loop (HIL) stress-testing across every embedded release candidate.',
      ],
    },
  };

  const activeDoc = legalModal ? legalContent[legalModal] : null;

  return (
    <footer className="bg-navy text-white relative overflow-hidden border-t border-white/10">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern-dark opacity-15 pointer-events-none" />

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group" aria-label="Snesar.MD Home">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric via-navy-700 to-navy-900 p-[1.5px] shadow-md shadow-electric/20">
                <div className="w-full h-full bg-navy rounded-[10px] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 11.5C7 9.01472 9.01472 7 11.5 7H19C21.7614 7 24 9.23858 24 12C24 14.7614 21.7614 17 19 17H13C10.2386 17 8 19.2386 8 22C8 24.7614 10.2386 27 13 27H20.5C22.9853 27 25 24.9853 25 22.5"
                      stroke="#16C6D9"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Snesar<span className="text-electric">.MD</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
              A global engineering and technology solutions company delivering innovative engineering services across Industrial Automation, Medical Technology, Sports Engineering, Automotive Systems, and Intelligent Automation.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Snesar.MD on ${s.label}`}
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-electric text-white/70 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-200 shadow-sm"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-cyan mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs text-white/70 hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industry Practices */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-cyan mb-4">
              Industry Verticals
            </h4>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-xs text-white/70 hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Global Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-cyan mb-4">
              Engineering Desk
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                <span>Global R&D Headquarters, Innovation Corridor, Tech Hub</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan shrink-0" />
                <a href="mailto:solutions@snesar.md" className="hover:text-cyan transition-colors font-mono">
                  solutions@snesar.md
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan shrink-0" />
                <span className="font-mono">+1 (555) 019-2830 (Direct Desk)</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-cyan">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
                <span>ISO 27001 & ISA-95 COMPLIANT</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {new Date().getFullYear()} Snesar.MD. All rights reserved. Original Brand &amp; Engineering System.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer text-xs"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer text-xs"
            >
              Terms &amp; Conditions
            </button>
            <button
              onClick={() => setLegalModal('governance')}
              className="hover:text-white transition-colors cursor-pointer text-xs"
            >
              Engineering Governance
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Legal Policy Modal */}
      <AnimatePresence>
        {activeDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegalModal(null)}
              className="fixed inset-0 bg-navy/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white text-navy rounded-3xl shadow-2xl border border-navy/10 overflow-hidden z-10"
            >
              <div className="p-6 sm:p-8 bg-navy text-white relative">
                <button
                  onClick={() => setLegalModal(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block font-bold mb-1">
                  {activeDoc.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {activeDoc.title}
                </h3>
              </div>

              <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-navy/70 leading-relaxed font-normal">
                {activeDoc.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="p-6 bg-section border-t border-navy/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-navy/40 uppercase tracking-wider">
                  Legal &amp; Compliance Policy
                </span>
                <button
                  onClick={() => setLegalModal(null)}
                  className="px-6 py-2.5 rounded-xl bg-electric text-white font-bold text-xs uppercase tracking-wider hover:bg-electric-600 transition-colors cursor-pointer"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
