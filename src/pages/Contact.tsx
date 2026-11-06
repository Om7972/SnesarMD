import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, MapPin, Send, CheckCircle2,
  Building, Globe, MessageSquare, ShieldCheck, Clock, Lock,
  ArrowRight, Copy, Check, AlertCircle, RefreshCw, Sparkles, FileText
} from 'lucide-react';

const officeLocations = [
  {
    city: 'Global Engineering Headquarters',
    region: 'North America Hub',
    address: '100 Innovation Way, Suite 400, Tech Corridor',
    email: 'contact.na@snesar.md',
    phone: '+1 (555) 019-2831',
    hours: '08:00 - 18:00 EST',
  },
  {
    city: 'European Innovation Center',
    region: 'Europe / UK Hub',
    address: '42 Silicon Avenue, Technology Park, Zurich / London',
    email: 'contact.eu@snesar.md',
    phone: '+44 20 7946 0912',
    hours: '08:30 - 17:30 CET',
  },
  {
    city: 'Asia-Pacific Delivery & Robotics Lab',
    region: 'APAC Engineering Center',
    address: 'Level 18, Enterprise Tower, Singapore / Tokyo',
    email: 'contact.apac@snesar.md',
    phone: '+65 6789 0123',
    hours: '09:00 - 18:00 SGT',
  },
];

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  company?: string;
  phone?: string;
  projectDescription?: string;
  consent?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    company: '',
    phone: '',
    industry: 'Industrial Automation',
    serviceRequired: 'Product Engineering',
    projectDescription: '',
    ndaRequested: true,
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionProgress, setSubmissionProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = 'Contact & Technical Enquiries | Snesar.MD Global Engineering';
  }, []);

  // Validation function
  const validateField = (name: string, value: any): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value || value.trim().length < 2) {
          return 'Full name must be at least 2 characters.';
        }
        break;
      case 'businessEmail': {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value || !emailRegex.test(value.trim())) {
          return 'Please enter a valid business email address.';
        }
        break;
      }
      case 'company':
        if (!value || value.trim().length < 2) {
          return 'Company or organization name is required.';
        }
        break;
      case 'phone':
        if (value && value.trim()) {
          const phoneRegex = /^(\+?\d{1,4}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
          if (!phoneRegex.test(value.trim())) {
            return 'Please enter a valid phone number (e.g. +1 555-019-2831).';
          }
        }
        break;
      case 'projectDescription':
        if (!value || value.trim().length < 20) {
          return 'Please provide at least 20 characters describing your technical requirements.';
        }
        break;
      case 'consent':
        if (!value) {
          return 'You must accept the confidentiality and data processing agreement.';
        }
        break;
      default:
        break;
    }
    return undefined;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, (formData as any)[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched = {
      fullName: true,
      businessEmail: true,
      company: true,
      phone: true,
      projectDescription: true,
      consent: true,
    };
    setTouched(allTouched);

    // Validate all
    const newErrors: FormErrors = {
      fullName: validateField('fullName', formData.fullName),
      businessEmail: validateField('businessEmail', formData.businessEmail),
      company: validateField('company', formData.company),
      phone: validateField('phone', formData.phone),
      projectDescription: validateField('projectDescription', formData.projectDescription),
      consent: validateField('consent', formData.consent),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== undefined);
    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionProgress(25);

    // Simulated multi-stage submission pipeline
    const timer1 = setTimeout(() => {
      setSubmissionProgress(65);
    }, 450);

    const timer2 = setTimeout(() => {
      setSubmissionProgress(100);
      const generatedId = `SN-ENG-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      setReferenceId(generatedId);

      // Secure persistence in client storage
      try {
        const existing = JSON.parse(localStorage.getItem('snesarmd_inquiries') || '[]');
        existing.push({
          id: generatedId,
          timestamp: new Date().toISOString(),
          ...formData,
        });
        localStorage.setItem('snesarmd_inquiries', JSON.stringify(existing));
      } catch (err) {
        console.warn('LocalStorage unavailable for inquiry cache');
      }

      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  };

  const copyRefToClipboard = () => {
    if (referenceId) {
      navigator.clipboard.writeText(referenceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      businessEmail: '',
      company: '',
      phone: '',
      industry: 'Industrial Automation',
      serviceRequired: 'Product Engineering',
      projectDescription: '',
      ndaRequested: true,
      consent: false,
    });
    setErrors({});
    setTouched({});
    setSubmissionProgress(0);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative bg-navy text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-35 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 text-cyan border border-white/10 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              Global Engineering Engagement Desk
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-display tracking-tight text-white mb-6 leading-[1.14]">
              Let's Discuss Your Next Engineering Breakthrough
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-normal mb-8">
              Whether you are architecting a smart factory, validating an assistive medical imaging device, or pioneering an 800V EV powertrain, our practice directors are ready to collaborate under mutual confidentiality.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-cyan/90">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan" />
                Mutual NDA Standard Protocol
              </span>
              <span className="text-white/40">&bull;</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan" />
                Response within 1 Business Day
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Form & Regional Hubs Section */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Intake Form / Success State */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-navy/5">
              <div className="mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-electric block mb-1">
                  TECHNICAL INTAKE DOSSIER
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy mb-2">
                  Initiate a Project Assessment
                </h2>
                <p className="text-sm text-navy/60 font-normal">
                  Submit your architectural scope and requirements. All disclosures are safeguarded by AES-256 encrypted protocols.
                </p>
              </div>

              {submitted ? (
                /* SUCCESS STATE */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 sm:p-10 rounded-3xl bg-cyan-50/70 border border-cyan/30 text-center"
                >
                  <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-electric">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-3 py-1 rounded-full border border-cyan/20 inline-block mb-3">
                    Inquiry Verified &amp; Routed
                  </span>

                  <h3 className="text-2xl font-bold font-display text-navy mb-3">
                    Engineering Dossier Transmitted
                  </h3>

                  <p className="text-sm text-navy/70 mb-6 max-w-lg mx-auto leading-relaxed font-normal">
                    Thank you, <strong className="text-navy">{formData.fullName}</strong>. Your inquiry for{' '}
                    <strong className="text-navy">{formData.company}</strong> has been assigned to the{' '}
                    <strong className="text-electric">{formData.industry}</strong> practice director.
                  </p>

                  {/* Reference Ticket Card */}
                  <div className="bg-white p-5 rounded-2xl border border-navy/10 shadow-sm max-w-md mx-auto mb-8 text-left">
                    <div className="flex items-center justify-between pb-3 border-b border-navy/5 mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-navy/50 font-bold">
                        Dossier Reference ID
                      </span>
                      <button
                        onClick={copyRefToClipboard}
                        className="flex items-center gap-1.5 text-xs font-mono font-bold text-electric hover:text-navy transition-colors cursor-pointer"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Ref</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-lg font-mono font-bold text-navy tracking-wider mb-2">
                      {referenceId}
                    </div>

                    <div className="space-y-1 text-xs text-navy/60 font-mono">
                      <div>Practice: {formData.industry}</div>
                      <div>Service: {formData.serviceRequired}</div>
                      <div>Status: In Review by Practice Lead</div>
                      <div>Mutual NDA: {formData.ndaRequested ? 'Requested (Standard)' : 'Standard IP Terms'}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleResetForm}
                      className="px-6 py-3 rounded-xl bg-electric text-white text-xs font-bold uppercase tracking-wider hover:bg-electric-600 shadow-md transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={`mailto:solutions@snesar.md?subject=Inquiry%20${referenceId}`}
                      className="px-6 py-3 rounded-xl bg-white border border-navy/15 text-navy text-xs font-bold uppercase tracking-wider hover:bg-navy/5 transition-all"
                    >
                      Email Practice Lead Directly
                    </a>
                  </div>
                </motion.div>
              ) : (
                /* INTAKE FORM */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Top Validation Alert if has any error */}
                  {Object.keys(errors).length > 0 && Object.values(errors).some(Boolean) && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                      <div>
                        <span className="font-bold block">Please resolve the indicated form fields:</span>
                        <ul className="list-disc list-inside mt-1 space-y-0.5">
                          {Object.entries(errors).map(([field, err]) => err && (
                            <li key={field}>{err}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        onBlur={() => handleBlur('fullName')}
                        placeholder="Dr. Alexander Wright"
                        className={`w-full px-4 py-3 bg-section rounded-xl border text-navy text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName && touched.fullName
                            ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                            : 'border-navy/10 focus:ring-electric'
                        }`}
                      />
                      {errors.fullName && touched.fullName && (
                        <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.businessEmail}
                        onChange={(e) => handleChange('businessEmail', e.target.value)}
                        onBlur={() => handleBlur('businessEmail')}
                        placeholder="alexander.w@enterprise.com"
                        className={`w-full px-4 py-3 bg-section rounded-xl border text-navy text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.businessEmail && touched.businessEmail
                            ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                            : 'border-navy/10 focus:ring-electric'
                        }`}
                      />
                      {errors.businessEmail && touched.businessEmail && (
                        <p className="mt-1 text-xs text-red-600 font-medium">{errors.businessEmail}</p>
                      )}
                    </div>
                  </div>

                  {/* Company & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        onBlur={() => handleBlur('company')}
                        placeholder="e.g. Apex Robotics & Mobility AG"
                        className={`w-full px-4 py-3 bg-section rounded-xl border text-navy text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.company && touched.company
                            ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                            : 'border-navy/10 focus:ring-electric'
                        }`}
                      />
                      {errors.company && touched.company && (
                        <p className="mt-1 text-xs text-red-600 font-medium">{errors.company}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                        Direct Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        placeholder="+1 (555) 019-2831"
                        className={`w-full px-4 py-3 bg-section rounded-xl border text-navy text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.phone && touched.phone
                            ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                            : 'border-navy/10 focus:ring-electric'
                        }`}
                      />
                      {errors.phone && touched.phone && (
                        <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Industry & Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                        Primary Industry Practice *
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => handleChange('industry', e.target.value)}
                        className="w-full px-4 py-3 bg-section rounded-xl border border-navy/10 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-electric cursor-pointer"
                      >
                        <option value="Industrial Automation">Industrial Automation</option>
                        <option value="Medical Technology">Medical Technology</option>
                        <option value="Sports Engineering">Sports Engineering</option>
                        <option value="Automotive Engineering">Automotive Engineering</option>
                        <option value="RPA & Intelligent Automation">RPA & Intelligent Automation</option>
                        <option value="Cross-Domain Systems">Cross-Domain Systems Architecture</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                        Required Service Capability *
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => handleChange('serviceRequired', e.target.value)}
                        className="w-full px-4 py-3 bg-section rounded-xl border border-navy/10 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-electric cursor-pointer"
                      >
                        <option value="Product Engineering">Product Engineering</option>
                        <option value="Digital Engineering">Digital Engineering</option>
                        <option value="Industrial Automation">Industrial Automation</option>
                        <option value="Embedded Systems & Firmware">Embedded Systems & Firmware</option>
                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                        <option value="IoT & Connected Systems">IoT & Connected Systems</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Testing & Validation (HIL/SIL)">Testing & Validation (HIL/SIL)</option>
                        <option value="Architecture Consulting">Strategic Architecture Consulting</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                      Technical Scope &amp; Project Description *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.projectDescription}
                      onChange={(e) => handleChange('projectDescription', e.target.value)}
                      onBlur={() => handleBlur('projectDescription')}
                      placeholder="Outline your engineering objectives, architectural constraints, target timeline, and specific technology requirements (min 20 characters)..."
                      className={`w-full px-4 py-3 bg-section rounded-xl border text-navy text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.projectDescription && touched.projectDescription
                          ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                          : 'border-navy/10 focus:ring-electric'
                      }`}
                    />
                    <div className="flex items-center justify-between mt-1 text-xs">
                      {errors.projectDescription && touched.projectDescription ? (
                        <span className="text-red-600 font-medium">{errors.projectDescription}</span>
                      ) : (
                        <span className="text-navy/40">Minimum 20 characters</span>
                      )}
                      <span className="font-mono text-navy/40">
                        {formData.projectDescription.length} chars
                      </span>
                    </div>
                  </div>

                  {/* Mutual NDA & Privacy Checkboxes */}
                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.ndaRequested}
                        onChange={(e) => handleChange('ndaRequested', e.target.checked)}
                        className="w-4 h-4 rounded text-electric focus:ring-electric mt-0.5"
                      />
                      <span className="text-xs text-navy/80">
                        <strong>Request Mutual Non-Disclosure Agreement (NDA):</strong> Issue our standard bilateral NDA prior to detailed technical discovery calls.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) => handleChange('consent', e.target.checked)}
                        className="w-4 h-4 rounded text-electric focus:ring-electric mt-0.5"
                      />
                      <span className="text-xs text-navy/80">
                        I acknowledge and consent that the information provided will be processed securely under Snesar.MD's confidentiality protocol and engineering governance policy. *
                      </span>
                    </label>
                    {errors.consent && touched.consent && (
                      <p className="text-xs text-red-600 font-medium pl-7">{errors.consent}</p>
                    )}
                  </div>

                  {/* Progress Indicator when Submitting */}
                  {isSubmitting && (
                    <div className="space-y-2 py-2">
                      <div className="flex items-center justify-between text-xs font-mono text-electric">
                        <span>Transmitting Dossier: {submissionProgress}%</span>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      </div>
                      <div className="h-1.5 w-full bg-navy/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-electric transition-all duration-300"
                          style={{ width: `${submissionProgress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md ${
                      isSubmitting
                        ? 'bg-electric/70 cursor-not-allowed'
                        : 'bg-electric hover:bg-electric-600 shadow-glow cursor-pointer'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Securing Channel &amp; Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Technical Inquiry Dossier</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Engineering Desks & Hubs */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Practice Contact Card */}
              <div className="bg-navy rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/20 rounded-full blur-3xl pointer-events-none" />
                <h3 className="text-xl font-bold font-display text-white mb-2">
                  Direct Engineering Desks
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed font-normal">
                  For immediate technical coordination or RFP dossiers, reach out directly to our practice coordinators.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-cyan shrink-0" />
                    <a
                      href="mailto:solutions@snesar.md?subject=Direct%20Technical%20Inquiry"
                      className="font-mono hover:text-cyan transition-colors"
                    >
                      solutions@snesar.md
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-cyan shrink-0" />
                    <span className="font-mono">+1 (555) 019-2830 (Direct Desk)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-cyan shrink-0" />
                    <span>Global Coverage: 24/7 Response Desk</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    Encrypted TLS 1.3
                  </span>
                  <span>ISO 27001 Protocol</span>
                </div>
              </div>

              {/* Regional Engineering Facilities */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-navy/50 px-2">
                  Regional Engineering Facilities
                </h4>
                {officeLocations.map((loc, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl p-6 border border-navy/10 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-bold font-display text-navy text-sm">{loc.city}</h5>
                      <span className="text-[10px] font-mono font-semibold text-electric bg-electric/10 px-2 py-0.5 rounded">
                        {loc.region}
                      </span>
                    </div>
                    <p className="text-xs text-navy/60 mb-3 flex items-center gap-1.5 font-normal">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-cyan" />
                      <span>{loc.address}</span>
                    </p>
                    <div className="pt-3 border-t border-navy/5 flex flex-wrap justify-between text-xs text-navy/70 gap-2">
                      <a
                        href={`mailto:${loc.email}`}
                        className="font-mono hover:text-electric transition-colors"
                      >
                        {loc.email}
                      </a>
                      <span className="font-mono text-navy/40">{loc.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
