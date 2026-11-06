import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, GraduationCap, Users, HeartHandshake,
  CheckCircle2, ArrowRight, Upload, Send, Sparkles, MapPin, Clock, Filter,
  FileText, X, AlertCircle, Check, Copy, RefreshCw, ShieldCheck, Lock
} from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

const departments = [
  'All',
  'Industrial Automation',
  'Medical Technology',
  'Automotive Engineering',
  'RPA & Intelligent Automation',
  'Sports Engineering',
];

const openPositions = [
  {
    id: 'job-1',
    title: 'Senior Software Engineer — Industrial IoT',
    department: 'Industrial Automation',
    location: 'Global Engineering Hub / Hybrid',
    type: 'Full-time',
    description: 'Lead the architecture of real-time edge telemetry pipelines, OPC-UA gateways, and cloud ingestion clusters for smart factory deployments.',
    reqs: ['OPC-UA / MQTT', 'C++ / Rust / Go', 'Time-Series DBs', 'Kubernetes'],
  },
  {
    id: 'job-2',
    title: 'Machine Learning Engineer — Medical Imaging',
    department: 'Medical Technology',
    location: 'Innovation Lab / On-site',
    type: 'Full-time',
    description: 'Design deep learning models for radiological assistive workflows, 3D anatomical volume segmentation, and clinical decision support telemetry.',
    reqs: ['DICOM / HL7', 'PyTorch / MONAI', 'CUDA Optimization', 'ISO 13485'],
  },
  {
    id: 'job-3',
    title: 'Embedded Systems Engineer — Automotive BMS',
    department: 'Automotive Engineering',
    location: 'Automotive Test Facility',
    type: 'Full-time',
    description: 'Develop MISRA-C / AUTOSAR compliant firmware for high-voltage battery management systems, CAN-FD buses, and functional safety (ISO 26262).',
    reqs: ['AUTOSAR Classic', 'ISO 26262 ASIL-D', 'Embedded C', 'CANoe / dSPACE'],
  },
  {
    id: 'job-4',
    title: 'RPA Architect — Intelligent Automation',
    department: 'RPA & Intelligent Automation',
    location: 'Remote / Flexible',
    type: 'Full-time',
    description: 'Architect enterprise-grade cognitive automation pipelines incorporating computer vision, OCR, and human-in-the-loop exception handling systems.',
    reqs: ['UiPath / Power Automate', 'Python OCR', 'REST / GraphQL', 'Process Mining'],
  },
  {
    id: 'job-5',
    title: 'Biomechanical Data Analyst — Sports Performance',
    department: 'Sports Engineering',
    location: 'Sports Science Center / Hybrid',
    type: 'Full-time',
    description: 'Analyze kinematic telemetry, markerless computer vision pose estimation, and wearable IMU data to produce actionable performance algorithms.',
    reqs: ['OpenCV / MediaPipe', 'Biomechanics', 'Signal Processing', 'Python / D3.js'],
  },
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  portfolioUrl?: string;
  coverLetter?: string;
  resume?: string;
  consent?: string;
}

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Senior Software Engineer — Industrial IoT',
    experienceLevel: 'Senior Engineer (5-8 yrs)',
    portfolioUrl: '',
    coverLetter: '',
    fileName: '',
    fileSize: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionProgress, setSubmissionProgress] = useState(0);
  const [appReference, setAppReference] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = 'Careers & Culture | Snesar.MD Global Engineering';
  }, []);

  const handleApplyClick = (jobTitle: string) => {
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validateField = (field: string, value: any): string | undefined => {
    switch (field) {
      case 'name':
        if (!value || value.trim().length < 2) {
          return 'Full name must be at least 2 characters.';
        }
        break;
      case 'email': {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value || !emailRegex.test(value.trim())) {
          return 'Please enter a valid email address.';
        }
        break;
      }
      case 'phone': {
        const phoneRegex = /^(\+?\d{1,4}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
        if (!value || !phoneRegex.test(value.trim())) {
          return 'Please enter a valid phone number with country code.';
        }
        break;
      }
      case 'portfolioUrl':
        if (value && value.trim()) {
          try {
            new URL(value.startsWith('http') ? value : `https://${value}`);
          } catch {
            return 'Please enter a valid URL (e.g. linkedin.com/in/username or github.com/username).';
          }
        }
        break;
      case 'coverLetter':
        if (!value || value.trim().length < 25) {
          return 'Please provide at least 25 characters outlining your technical focus.';
        }
        break;
      case 'consent':
        if (!value) {
          return 'You must accept the candidate confidentiality and data processing agreement.';
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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size <= 10MB
    const maxBytes = 10 * 1024 * 1024;
    if (file.size > maxBytes) {
      setErrors((prev) => ({ ...prev, resume: 'File size exceeds maximum limit of 10MB.' }));
      return;
    }

    // Format size
    const sizeStr = file.size > 1024 * 1024
      ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
      : `${Math.round(file.size / 1024)} KB`;

    setFormData((prev) => ({
      ...prev,
      fileName: file.name,
      fileSize: sizeStr,
    }));
    setErrors((prev) => ({ ...prev, resume: undefined }));
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, fileName: '', fileSize: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched = {
      name: true,
      email: true,
      phone: true,
      portfolioUrl: true,
      coverLetter: true,
      consent: true,
    };
    setTouched(allTouched);

    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      portfolioUrl: validateField('portfolioUrl', formData.portfolioUrl),
      coverLetter: validateField('coverLetter', formData.coverLetter),
      consent: validateField('consent', formData.consent),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionProgress(30);

    const timer1 = setTimeout(() => setSubmissionProgress(75), 450);
    const timer2 = setTimeout(() => {
      setSubmissionProgress(100);
      const generatedCode = `SN-TALENT-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      setAppReference(generatedCode);

      try {
        const apps = JSON.parse(localStorage.getItem('snesarmd_applications') || '[]');
        apps.push({
          id: generatedCode,
          timestamp: new Date().toISOString(),
          ...formData,
        });
        localStorage.setItem('snesarmd_applications', JSON.stringify(apps));
      } catch (err) {
        console.warn('LocalStorage unavailable for talent applications');
      }

      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  };

  const copyCode = () => {
    if (appReference) {
      navigator.clipboard.writeText(appReference);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: 'Senior Software Engineer — Industrial IoT',
      experienceLevel: 'Senior Engineer (5-8 yrs)',
      portfolioUrl: '',
      coverLetter: '',
      fileName: '',
      fileSize: '',
      consent: false,
    });
    setErrors({});
    setTouched({});
    setSubmissionProgress(0);
  };

  const filteredJobs = selectedDept === 'All'
    ? openPositions
    : openPositions.filter((j) => j.department === selectedDept);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative bg-navy text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-electric/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 text-cyan border border-white/10 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              Engineering Careers &amp; Technical Culture
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-display tracking-tight text-white mb-6 leading-[1.14]">
              Build Systems That Define the Future of Engineering
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 font-normal">
              At Snesar.MD, you will collaborate with world-class engineers, computer scientists, and domain specialists solving tough industrial, medical, and mobility challenges.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#open-roles"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-electric text-white font-bold text-xs uppercase tracking-wider hover:bg-electric-600 shadow-glow transition-all"
              >
                <span>Explore Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#application-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
              >
                <span>Direct Application Dossier</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Engineering Culture Pillars */}
      <section className="py-20 md:py-28 bg-white border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Values in Practice"
            title="Life & Engineering Culture at Snesar.MD"
            subtitle="We cultivate an environment rooted in intellectual rigor, cross-disciplinary collaboration, and relentless engineering craft."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-section border border-navy/5 hover:border-electric/30 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-electric/10 text-electric flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-navy mb-3">Autonomy &amp; Deep Focus</h3>
                <p className="text-sm text-navy/70 leading-relaxed font-normal">
                  We minimize bureaucratic overhead so our teams can focus on what matters: pristine software architectures, robust firmware, and rigorous mechanical design.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy/5 text-xs font-mono text-electric font-semibold">
                MINIMAL BUREAUCRACY
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-section border border-navy/5 hover:border-electric/30 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-navy mb-3">Cross-Domain Fusion</h3>
                <p className="text-sm text-navy/70 leading-relaxed font-normal">
                  Work at the intersection of disciplines: robotics engineers consult with computer vision researchers, while automotive embedded specialists exchange paradigms with medical teams.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy/5 text-xs font-mono text-cyan-800 font-semibold">
                INTERDISCIPLINARY LABS
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-section border border-navy/5 hover:border-electric/30 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-electric/10 text-electric flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-navy mb-3">Continuous Mastery</h3>
                <p className="text-sm text-navy/70 leading-relaxed font-normal">
                  We support continuous learning with dedicated R&amp;D lab time, conference stipends, patent incentives, and access to state-of-the-art testing equipment.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy/5 text-xs font-mono text-electric font-semibold">
                PATENTS &amp; R&amp;D STIPENDS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Graduate & Fellowship Programs Banner */}
      <section className="py-20 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute right-0 top-0 w-96 h-96 bg-cyan/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan mb-2 block">
                Early Career Pipelines
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
                Graduate &amp; Internship Fellowships
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Are you an emerging engineer or researcher passionate about industrial systems, computer vision, or embedded electronics? Our cohort fellowships pair you with senior architects on live engineering challenges.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-cyan shrink-0" />
                  <span>Direct mentorship with Principal Architects and Practice Directors</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-cyan shrink-0" />
                  <span>Hands-on lab access for robotics, BMS, and HIL simulation rigs</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-cyan shrink-0" />
                  <span>Accelerated full-time placement pathways upon graduation</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleApplyClick('Graduate Fellowship / Internship Program')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan text-navy font-bold text-xs uppercase tracking-wider hover:bg-cyan-200 transition-colors shadow-sm cursor-pointer"
              >
                <span>Apply for Graduate Fellowship</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Open Positions Directory */}
      <section id="open-roles" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Opportunities"
            title="Current Open Engineering Missions"
            subtitle="Explore high-impact positions across our global innovation practices."
            align="left"
          />

          {/* Department Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none mt-10">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-navy text-white shadow-sm font-bold'
                    : 'bg-section text-navy/70 hover:bg-navy/5 hover:text-navy border border-navy/10'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-8 rounded-3xl border border-navy/10 bg-white hover:border-electric/40 hover:shadow-card transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-electric/10 text-electric">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-navy/50">
                      <MapPin className="w-3.5 h-3.5 text-cyan" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-navy/50">
                      <Clock className="w-3.5 h-3.5 text-cyan" />
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-navy mb-2">{job.title}</h3>
                  <p className="text-sm text-navy/70 leading-relaxed mb-4 font-normal">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {job.reqs.map((req) => (
                      <span key={req} className="px-2 py-0.5 rounded bg-section text-[11px] font-mono text-navy/60 border border-navy/5">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleApplyClick(job.title)}
                  className="px-6 py-3 rounded-xl bg-section hover:bg-electric text-navy hover:text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap self-start md:self-center flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Application Form Section */}
      <section id="application-form" className="py-20 bg-section border-t border-navy/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-navy/5">
            <div className="mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-electric block mb-1">
                TALENT INTAKE PORTAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy mb-2">
                Submit Your Engineering Candidacy
              </h2>
              <p className="text-sm text-navy/60 font-normal">
                Join our engineering practice. Submit your professional credentials and target discipline.
              </p>
            </div>

            {formSubmitted ? (
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
                  Application Verified
                </span>

                <h3 className="text-2xl font-bold font-display text-navy mb-3">
                  Candidate Dossier Registered
                </h3>

                <p className="text-sm text-navy/70 mb-6 max-w-lg mx-auto leading-relaxed font-normal">
                  Thank you, <strong className="text-navy">{formData.name}</strong>. Your profile for{' '}
                  <strong className="text-electric">{formData.position}</strong> has been cataloged in our engineering recruitment pipeline. Our technical talent team reviews applications within 48 hours.
                </p>

                {/* Application Reference Card */}
                <div className="bg-white p-5 rounded-2xl border border-navy/10 shadow-sm max-w-md mx-auto mb-8 text-left">
                  <div className="flex items-center justify-between pb-3 border-b border-navy/5 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-navy/50 font-bold">
                      Application Tracking Code
                    </span>
                    <button
                      onClick={copyCode}
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
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-lg font-mono font-bold text-navy tracking-wider mb-2">
                    {appReference}
                  </div>

                  <div className="space-y-1 text-xs text-navy/60 font-mono">
                    <div>Position: {formData.position}</div>
                    <div>Experience: {formData.experienceLevel}</div>
                    <div>Resume: {formData.fileName || 'Online Profile Dossier'}</div>
                    <div>Status: Under Review by Talent Committee</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 rounded-xl bg-electric text-white text-xs font-bold uppercase tracking-wider hover:bg-electric-600 shadow-md transition-all cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                  <a
                    href="#open-roles"
                    className="px-6 py-3 rounded-xl bg-white border border-navy/15 text-navy text-xs font-bold uppercase tracking-wider hover:bg-navy/5 transition-all"
                  >
                    Browse Other Roles
                  </a>
                </div>
              </motion.div>
            ) : (
              /* APPLICATION FORM */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Form-level validation summary */}
                {Object.keys(errors).length > 0 && Object.values(errors).some(Boolean) && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                    <div>
                      <span className="font-bold block">Please address the required candidate fields:</span>
                      <ul className="list-disc list-inside mt-1 space-y-0.5">
                        {Object.entries(errors).map(([field, err]) => err && (
                          <li key={field}>{err}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    placeholder="e.g. Dr. Jane Doe"
                    className={`w-full px-4 py-3 bg-section rounded-xl border text-navy text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.name && touched.name
                        ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                        : 'border-navy/10 focus:ring-electric'
                    }`}
                  />
                  {errors.name && touched.name && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.name}</p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="jane.doe@example.com"
                      className={`w-full px-4 py-3 bg-section rounded-xl border text-navy text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.email && touched.email
                          ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                          : 'border-navy/10 focus:ring-electric'
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
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

                {/* Target Position & Experience Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                      Target Position / Practice *
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) => handleChange('position', e.target.value)}
                      className="w-full px-4 py-3 bg-section rounded-xl border border-navy/10 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-electric cursor-pointer"
                    >
                      {openPositions.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                      <option value="Graduate Fellowship / Internship Program">
                        Graduate Fellowship / Internship Program
                      </option>
                      <option value="General Engineering Inquiry (Other)">
                        General Engineering Inquiry (Other)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                      Experience Band *
                    </label>
                    <select
                      value={formData.experienceLevel}
                      onChange={(e) => handleChange('experienceLevel', e.target.value)}
                      className="w-full px-4 py-3 bg-section rounded-xl border border-navy/10 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-electric cursor-pointer"
                    >
                      <option value="Graduate / Early Career (0-2 yrs)">Graduate / Early Career (0-2 yrs)</option>
                      <option value="Mid-Level Engineer (3-5 yrs)">Mid-Level Engineer (3-5 yrs)</option>
                      <option value="Senior Engineer (5-8 yrs)">Senior Engineer (5-8 yrs)</option>
                      <option value="Staff / Principal Architect (8+ yrs)">Staff / Principal Architect (8+ yrs)</option>
                      <option value="Practice Director / Research Fellow">Practice Director / Research Fellow</option>
                    </select>
                  </div>
                </div>

                {/* Portfolio / LinkedIn Link */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                    LinkedIn / GitHub / Technical Portfolio URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) => handleChange('portfolioUrl', e.target.value)}
                    onBlur={() => handleBlur('portfolioUrl')}
                    placeholder="https://linkedin.com/in/username or https://github.com/username"
                    className={`w-full px-4 py-3 bg-section rounded-xl border text-navy text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.portfolioUrl && touched.portfolioUrl
                        ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                        : 'border-navy/10 focus:ring-electric'
                    }`}
                  />
                  {errors.portfolioUrl && touched.portfolioUrl && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.portfolioUrl}</p>
                  )}
                </div>

                {/* Resume / CV Attachment */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                    Resume / CV Attachment (PDF, DOCX up to 10MB)
                  </label>
                  <div className="border-2 border-dashed border-navy/20 rounded-2xl p-6 text-center hover:border-electric transition-colors bg-section/50 relative">
                    {formData.fileName ? (
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-navy/10 max-w-md mx-auto">
                        <div className="flex items-center gap-3 truncate">
                          <FileText className="w-5 h-5 text-electric shrink-0" />
                          <div className="truncate text-left">
                            <span className="text-xs font-bold text-navy block truncate">{formData.fileName}</span>
                            <span className="text-[10px] font-mono text-navy/40">{formData.fileSize}</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="p-1 rounded-lg text-navy/40 hover:text-red-600 hover:bg-red-50 transition-colors"
                          aria-label="Remove file"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-8 h-8 text-navy/40 mx-auto mb-2" />
                        <p className="text-xs text-navy/70 mb-1">
                          Drag and drop your resume file or browse from your device
                        </p>
                        <input
                          type="file"
                          id="resume-file-input"
                          accept=".pdf,.docx,.doc"
                          className="hidden"
                          onChange={handleFileUpload}
                        />
                        <label
                          htmlFor="resume-file-input"
                          className="inline-block mt-2 px-4 py-2 rounded-xl bg-white border border-navy/15 text-xs font-bold text-navy hover:bg-navy/5 cursor-pointer shadow-xs transition-all"
                        >
                          Browse Files
                        </label>
                      </>
                    )}
                  </div>
                  {errors.resume && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.resume}</p>
                  )}
                </div>

                {/* Statement of Engineering Focus */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-navy mb-2">
                    Statement of Engineering Focus *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.coverLetter}
                    onChange={(e) => handleChange('coverLetter', e.target.value)}
                    onBlur={() => handleBlur('coverLetter')}
                    placeholder="Highlight your domain strengths, primary languages/frameworks, and notable engineering achievements (min 25 characters)..."
                    className={`w-full px-4 py-3 bg-section rounded-xl border text-navy text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.coverLetter && touched.coverLetter
                        ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                        : 'border-navy/10 focus:ring-electric'
                    }`}
                  />
                  <div className="flex items-center justify-between mt-1 text-xs">
                    {errors.coverLetter && touched.coverLetter ? (
                      <span className="text-red-600 font-medium">{errors.coverLetter}</span>
                    ) : (
                      <span className="text-navy/40">Minimum 25 characters</span>
                    )}
                    <span className="font-mono text-navy/40">{formData.coverLetter.length} chars</span>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="space-y-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => handleChange('consent', e.target.checked)}
                      className="w-4 h-4 rounded text-electric focus:ring-electric mt-0.5"
                    />
                    <span className="text-xs text-navy/80">
                      I consent to Snesar.MD reviewing and archiving my technical application dossier in compliance with global talent privacy regulations. *
                    </span>
                  </label>
                  {errors.consent && touched.consent && (
                    <p className="text-xs text-red-600 font-medium pl-7">{errors.consent}</p>
                  )}
                </div>

                {/* Progress bar during submission */}
                {isSubmitting && (
                  <div className="space-y-2 py-2">
                    <div className="flex items-center justify-between text-xs font-mono text-electric">
                      <span>Uploading Application: {submissionProgress}%</span>
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

                {/* Submit button */}
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
                      <span>Encrypting &amp; Submitting Dossier...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Application Dossier</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
