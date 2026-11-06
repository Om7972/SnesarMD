import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HeartPulse, Microscope, Brain, Code, Radio, Wifi, TestTube, Server,
  CheckCircle2, ArrowRight, Activity, ShieldCheck, Eye, Info, Layers,
  Sliders, FileText, Lock
} from 'lucide-react';
import { Industry } from '@/data/industries';
import SectionHeading from '@/components/common/SectionHeading';

interface Props {
  industry: Industry;
}

export default function MedicalTechnologyView({ industry }: Props) {
  // Interactive DICOM Viewer Simulator State
  const [activeScan, setActiveScan] = useState<'thorax' | 'brain' | 'cardiac'>('thorax');
  const [showAiOverlay, setShowAiOverlay] = useState(true);
  const [windowPreset, setWindowPreset] = useState<'mediastinum' | 'lung' | 'bone'>('mediastinum');

  const scanData = {
    thorax: {
      title: 'High-Resolution Chest CT (Axial Reconstructed)',
      dicomTags: {
        Modality: 'CT (Multi-Slice 64)',
        SliceThickness: '0.625 mm',
        WindowCenter: '40 HU',
        WindowWidth: '350 HU',
        ReconstructionAlgorithm: 'Iterative Model-Based',
        Anonymization: 'HIPAA Safe Harbor Hash #892',
      },
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80',
      findings: 'Assistive algorithmic detection highlights a 4.2mm non-calcified nodule in right lower lobe. Clinician verification required.',
      annotation: 'Target: RLL Nodule (4.2mm &middot; HU: -680)',
    },
    brain: {
      title: '3T Structural Brain MRI (T1-Weighted Contrast)',
      dicomTags: {
        Modality: 'MR (3.0 Tesla Magnet)',
        SliceThickness: '1.0 mm Isotropic',
        TE_TR: 'TE: 2.8ms / TR: 2100ms',
        FlipAngle: '9 degrees',
        Coil: '32-Channel Phased Array Head',
        Anonymization: 'HIPAA Safe Harbor Hash #104',
      },
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&q=80',
      findings: 'Automated hippocampal volumetric segmentation executed. Volumetric percentile indexed at 78th percentile for age-matched norm.',
      annotation: 'Bilateral Hippocampal Volume: 7.82 cm³',
    },
    cardiac: {
      title: 'Cardiac CT Angiography (Coronary Tree)',
      dicomTags: {
        Modality: 'Dual-Source Cardiac CT',
        HeartRate: '58 BPM (Beta-Blocker Verified)',
        Phase: '75% End-Diastolic Phase',
        ContrastFlow: '5.0 mL/s Iso-Osmolar',
        RadiationDose: '1.8 mSv Low-Dose Protocol',
        Anonymization: 'HIPAA Safe Harbor Hash #441',
      },
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=900&q=80',
      findings: 'LAD coronary artery centerline extracted with lumen cross-sectional diameter calculation. No hemodynamically significant stenosis.',
      annotation: 'LAD Centerline: Zero Calcification',
    },
  };

  const currentScan = scanData[activeScan];

  return (
    <div className="space-y-0">
      {/* 1. CINEMATIC CLINICAL & RADIOLOGY HERO */}
      <section className="relative min-h-[90vh] bg-navy text-white flex items-center overflow-hidden pt-20 pb-16">
        {/* Real Radiology Suite High-Resolution Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&q=80&auto=format&fit=crop"
            alt="Medical Technology Radiology MRI Diagnostic Suite by Snesar.MD"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-25 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/70" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-navy/60 to-navy" />
        </div>

        {/* Clinical Grid & Ambient Cyan Glow */}
        <div className="absolute inset-0 grid-pattern-dark opacity-35 z-0 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan/20 blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan/15 text-cyan border border-cyan/30 backdrop-blur-md mb-6">
                <HeartPulse className="w-4 h-4 text-cyan" />
                <span>Practice Area &middot; Medical Technology &amp; Healthcare Systems</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                Engineering Smarter{' '}
                <span className="text-gradient-cyan">Healthcare Experiences.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl font-normal">
                {industry.heroSubheading}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#dicom-simulator"
                  className="px-8 py-4 rounded-xl bg-cyan text-navy font-bold text-xs uppercase tracking-wider hover:bg-cyan-200 transition-all duration-300 shadow-glow-cyan"
                >
                  Inspect Radiological Viewer
                </a>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 backdrop-blur-sm"
                >
                  Consult Medical Device Engineers
                </Link>
              </div>

              {/* Regulatory Notice Banner */}
              <div className="mt-10 p-4 rounded-2xl bg-cyan-950/60 border border-cyan/30 text-xs text-cyan-200 flex items-start gap-3">
                <Info className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                <span>
                  <strong>Clinical AI Governance:</strong> All assistive algorithms developed by Snesar.MD are engineered strictly as decision-support tooling. Final clinical diagnosis remains exclusively with licensed healthcare practitioners.
                </span>
              </div>
            </div>

            {/* Right: DICOM Viewport Telemetry Box */}
            <div className="lg:col-span-5">
              <div className="bg-navy/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 border border-white/15 shadow-2xl relative">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold uppercase text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse" />
                    PACS WORKSTATION NODE: ACTIVE
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-cyan">
                    DICOM 3.0 / HL7 FHIR
                  </span>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-white/50 block">INTEROPERABILITY PROTOCOL</span>
                      <span className="text-base font-bold font-display text-white">HL7 FHIR v4.0.1</span>
                    </div>
                    <Server className="w-6 h-6 text-cyan" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] font-mono text-white/50 block">ENCRYPTION</span>
                      <span className="text-sm font-bold text-white font-mono">TLS 1.3 / AES-256</span>
                      <span className="text-[10px] text-emerald-400 block mt-0.5">HIPAA Compliant</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] font-mono text-white/50 block">DEVICE STANDARD</span>
                      <span className="text-sm font-bold text-cyan font-mono">ISO 13485</span>
                      <span className="text-[10px] text-white/50 block mt-0.5">IEC 62304 Class II/III</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-white/70 flex items-center justify-between font-mono">
                  <span>BIO-SIGNAL LATENCY</span>
                  <span className="text-cyan font-bold">&lt; 8ms Stream Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE RADIOLOGICAL VIEWER & DICOM SIMULATOR */}
      <section id="dicom-simulator" className="py-20 md:py-28 bg-white border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Clinical Imaging Console"
            title="Interactive Radiological Diagnostic Simulator"
            subtitle="Explore how our medical software engineering interfaces with multi-slice DICOM datasets, assistive segmentation masks, and clinical verification pipelines."
            align="left"
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Scan Selector Column */}
            <div className="lg:col-span-4 space-y-3">
              <button
                onClick={() => setActiveScan('thorax')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  activeScan === 'thorax'
                    ? 'bg-navy text-white border-cyan shadow-xl translate-x-1'
                    : 'bg-section text-navy border-navy/5 hover:border-navy/20 hover:bg-white'
                }`}
              >
                <Microscope className={`w-6 h-6 mt-1 shrink-0 ${activeScan === 'thorax' ? 'text-cyan' : 'text-electric'}`} />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-70">
                    SCAN DATASET 01
                  </span>
                  <h4 className="text-base font-bold font-display">High-Res Chest CT</h4>
                  <p className="text-xs opacity-75 mt-1">Multi-slice lung nodule segmentation &amp; HU density analysis</p>
                </div>
              </button>

              <button
                onClick={() => setActiveScan('brain')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  activeScan === 'brain'
                    ? 'bg-navy text-white border-cyan shadow-xl translate-x-1'
                    : 'bg-section text-navy border-navy/5 hover:border-navy/20 hover:bg-white'
                }`}
              >
                <Brain className={`w-6 h-6 mt-1 shrink-0 ${activeScan === 'brain' ? 'text-cyan' : 'text-electric'}`} />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-70">
                    SCAN DATASET 02
                  </span>
                  <h4 className="text-base font-bold font-display">3.0T Brain MRI (T1-W)</h4>
                  <p className="text-xs opacity-75 mt-1">Automated volumetric segmentation of anatomical regions</p>
                </div>
              </button>

              <button
                onClick={() => setActiveScan('cardiac')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  activeScan === 'cardiac'
                    ? 'bg-navy text-white border-cyan shadow-xl translate-x-1'
                    : 'bg-section text-navy border-navy/5 hover:border-navy/20 hover:bg-white'
                }`}
              >
                <HeartPulse className={`w-6 h-6 mt-1 shrink-0 ${activeScan === 'cardiac' ? 'text-cyan' : 'text-electric'}`} />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-70">
                    SCAN DATASET 03
                  </span>
                  <h4 className="text-base font-bold font-display">Cardiac CT Angiography</h4>
                  <p className="text-xs opacity-75 mt-1">Coronary centerline extraction &amp; lumen patency index</p>
                </div>
              </button>

              {/* Controls Toggle */}
              <div className="p-4 rounded-2xl bg-section border border-navy/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-navy">Assistive AI Heatmap:</span>
                  <button
                    onClick={() => setShowAiOverlay(!showAiOverlay)}
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-colors ${
                      showAiOverlay ? 'bg-cyan text-navy' : 'bg-navy/10 text-navy-400'
                    }`}
                  >
                    {showAiOverlay ? 'ON (VISIBLE)' : 'OFF (RAW)'}
                  </button>
                </div>
              </div>
            </div>

            {/* Medical Imaging Display Viewport */}
            <div className="lg:col-span-8 bg-navy rounded-3xl overflow-hidden border border-navy/20 shadow-2xl text-white">
              {/* Scan Screen */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={currentScan.image}
                  alt={currentScan.title}
                  className="w-full h-full object-cover filter contrast-125 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80" />

                {/* DICOM HUD Crosshair Overlays */}
                <div className="absolute top-4 left-4 text-[10px] font-mono text-cyan/90 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                  WINDOW: {currentScan.dicomTags.WindowCenter} / {currentScan.dicomTags.WindowWidth}
                </div>
                <div className="absolute top-4 right-4 text-[10px] font-mono text-cyan/90 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                  ZOOM: 100% &middot; SMOOTH INTERPOLATION
                </div>

                {/* Assistive AI Annotation Overlay */}
                {showAiOverlay && (
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-cyan-950/80 border border-cyan/40 backdrop-blur-md flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse" />
                      <span className="font-mono text-cyan font-bold">{currentScan.annotation}</span>
                    </div>
                    <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/80">
                      CONFIDENCE: 98.4%
                    </span>
                  </div>
                )}
              </div>

              {/* DICOM Header Tags Grid */}
              <div className="p-6 sm:p-8 bg-navy/95">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold font-display text-white">{currentScan.title}</h4>
                  <span className="text-xs font-mono text-cyan">DICOM HEADER EXTRACT</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {Object.entries(currentScan.dicomTags).map(([tag, val]) => (
                    <div key={tag} className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] font-mono text-white/40 uppercase block">{tag}</span>
                      <span className="text-xs font-mono font-semibold text-white mt-0.5 block truncate">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-white/70 leading-relaxed font-normal mb-4">
                  <strong className="text-cyan font-semibold">Assistive Output Summary: </strong>
                  {currentScan.findings}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-white/60">
                  <span className="font-mono flex items-center gap-2">
                    <Lock className="w-4 h-4 text-cyan" />
                    HIPAA / GDPR De-Identified Telemetry
                  </span>
                  <Link
                    to="/solutions/medivision-ai"
                    className="text-cyan hover:text-white font-mono font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <span>Inspect MediVision AI Framework</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEDICAL DEVICE & CONNECTED HEALTH PIPELINE */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Engineering Lifecycle"
            title="Connected Medical Device Architecture"
            subtitle="From ultra-low power biosensor acquisition through firmware verification and cloud interoperability."
            align="left"
          />

          <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-section border border-navy/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-800 uppercase block mb-2">PHASE 01</span>
                  <h4 className="text-base font-bold font-display text-navy mb-2">Biosensor Front-End</h4>
                  <p className="text-xs text-navy-500 leading-relaxed">Precision analog front-ends (AFE), microvolt signal filtering, and noise suppression for biopotential signals.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-navy/5 text-[11px] font-mono text-navy-400">Low-Noise OpAmps</div>
              </div>

              <div className="p-6 rounded-2xl bg-section border border-navy/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-electric uppercase block mb-2">PHASE 02</span>
                  <h4 className="text-base font-bold font-display text-navy mb-2">Secure Embedded MCU</h4>
                  <p className="text-xs text-navy-500 leading-relaxed">ARM Cortex-M33 with TrustZone, hardware cryptographic acceleration, and low-power BLE 5.3 transmission.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-navy/5 text-[11px] font-mono text-navy-400">IEC 62304 Compliant</div>
              </div>

              <div className="p-6 rounded-2xl bg-section border border-navy/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-800 uppercase block mb-2">PHASE 03</span>
                  <h4 className="text-base font-bold font-display text-navy mb-2">Clinical Edge Gateway</h4>
                  <p className="text-xs text-navy-500 leading-relaxed">Local buffering, patient identification verification, and protocol translation into JSON FHIR resources.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-navy/5 text-[11px] font-mono text-navy-400">Sub-second Buffering</div>
              </div>

              <div className="p-6 rounded-2xl bg-section border border-navy/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-electric uppercase block mb-2">PHASE 04</span>
                  <h4 className="text-base font-bold font-display text-navy mb-2">Hospital EHR Ingestion</h4>
                  <p className="text-xs text-navy-500 leading-relaxed">Authenticated REST FHIR delivery to Epic, Cerner, or cloud data lakes with comprehensive audit trails.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-navy/5 text-[11px] font-mono text-navy-400">HL7 FHIR v4 API</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL MEDICAL TECHNOLOGY PHOTOGRAPHY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Clinical Environments"
            title="Healthcare Systems & Instrumentation"
            subtitle="Photographic record of diagnostic imaging suites, laboratory equipment, and medical devices supported by our engineering teams."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-3xl overflow-hidden shadow-card border border-navy/10 relative h-80">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80"
                alt="Radiology Diagnostic Imaging Console"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block font-semibold">DIAGNOSTIC SUITE</span>
                <h4 className="text-lg font-bold font-display">Advanced CT &amp; MRI Diagnostic Console</h4>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden shadow-card border border-navy/10 relative h-80">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
                alt="Laboratory Biomedical Instrumentation"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block font-semibold">LABORATORY SYSTEMS</span>
                <h4 className="text-lg font-bold font-display">Automated In-Vitro Diagnostics (IVD)</h4>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden shadow-card border border-navy/10 relative h-80">
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
                alt="Connected Patient Monitoring"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block font-semibold">CONNECTED HEALTH</span>
                <h4 className="text-lg font-bold font-display">Continuous Remote Patient Telemetry</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES & DELIVERABLES */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Capabilities"
            title="Medical Technology Engineering Services"
            subtitle="Verified deliverables across ISO 13485, IEC 62304, and clinical software development lifecycles."
            align="left"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-navy/5 hover:border-cyan/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold font-display text-navy mb-2">{srv.title}</h4>
                    <p className="text-xs sm:text-sm text-navy-400 leading-relaxed font-normal">{srv.description}</p>
                  </div>
                  <div className="pt-4 border-t border-navy/5 mt-4 text-xs font-mono font-bold text-cyan-800">
                    CLINICAL_VERIFIED &rarr;
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-24 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Accelerate Your Healthcare Engineering Programs
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 font-normal">
            Partner with Snesar.MD for certified medical device firmware, DICOM image processing pipelines, and connected healthcare ecosystems.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-cyan text-navy font-bold text-xs uppercase tracking-wider hover:bg-cyan-200 shadow-glow-cyan transition-all"
            >
              Consult Medical Technology Engineers
            </Link>
            <Link
              to="/solutions/medivision-ai"
              className="px-8 py-3.5 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 border border-white/15 transition-all"
            >
              Review MediVision AI Blueprint
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

