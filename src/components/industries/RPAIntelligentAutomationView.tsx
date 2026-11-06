import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Bot, Workflow, FileText, CheckCircle2, ArrowRight, ShieldCheck,
  Cpu, Database, Sparkles, Activity, Layers, Server, Play, Pause,
  Terminal, BarChart3, AlertCircle, RefreshCw
} from 'lucide-react';
import { Industry } from '@/data/industries';
import SectionHeading from '@/components/common/SectionHeading';

interface Props {
  industry: Industry;
}

export default function RPAIntelligentAutomationView({ industry }: Props) {
  // Interactive IDP & Agent Swarm Workflow State
  const [activeWorkflow, setActiveWorkflow] = useState<'invoice' | 'clinical' | 'logistics'>('invoice');
  const [isProcessing, setIsProcessing] = useState(true);

  const workflows = {
    invoice: {
      name: 'Multi-National Commercial Invoice & 3-Way Match',
      type: 'Financial Operations & ERP Reconciliation',
      throughput: '1,450 invoices/hr',
      avgCycleTime: '1.2s per document',
      confidence: '99.8%',
      erpTarget: 'SAP S/4HANA (BAPI_INCOMINGINVOICE_CREATE)',
      extractedFields: [
        { label: 'Vendor Identification', value: 'Siemens AG (VND-849201)', confidence: '99.9%' },
        { label: 'Purchase Order Reference', value: 'PO-2026-9941-EUR', confidence: '100%' },
        { label: 'Total Gross Amount', value: '€ 148,250.00 EUR', confidence: '99.8%' },
        { label: 'VAT / Tax Identifier', value: 'DE 129 274 202 (19.0%)', confidence: '99.7%' },
        { label: 'Line Item Extraction', value: '14 Line Items (100% matched)', confidence: '99.6%' },
        { label: 'Remittance IBAN', value: 'DE89 3704 0044 0532 0130 00', confidence: '99.9%' },
      ],
      systemDecision: 'Automated 3-Way Match Verified. Zero Variance. Direct Post to SAP General Ledger without human intervention.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    },
    clinical: {
      name: 'Clinical Trial Patient Enrollment & Consent Packets',
      type: 'Healthcare & Regulatory Compliance Automation',
      throughput: '820 packets/hr',
      avgCycleTime: '2.4s per packet',
      confidence: '99.4%',
      erpTarget: 'Veeva Vault CTMS / FHIR REST API',
      extractedFields: [
        { label: 'De-Identified Subject ID', value: 'SUBJ-CLIN-4089', confidence: '100%' },
        { label: 'IRB Study Code', value: 'ONCO-PHASE3-2026-B', confidence: '99.9%' },
        { label: 'Signed Consent Timestamp', value: '2026-10-18T14:32:00Z', confidence: '99.2%' },
        { label: 'Inclusion Criteria Verified', value: 'All 8 Parameters Met', confidence: '99.5%' },
        { label: 'Biomarker Stratification', value: 'HER2+ Amplified (Validated)', confidence: '99.1%' },
        { label: 'Regulatory Jurisdiction', value: 'EMA / FDA 21 CFR Part 11', confidence: '99.8%' },
      ],
      systemDecision: 'Consent signatures cryptographically verified. HIPAA/GDPR de-identification validated. Synced with Veeva eTMF.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80',
    },
    logistics: {
      name: 'Global Ocean Bill of Lading & Customs Declaration',
      type: 'Supply Chain & Multi-Modal Freight Automation',
      throughput: '2,100 bills/hr',
      avgCycleTime: '0.9s per document',
      confidence: '99.1%',
      erpTarget: 'CargoWise One & Customs Port Authority EDI',
      extractedFields: [
        { label: 'Master B/L Reference', value: 'MAEU-938201948', confidence: '99.9%' },
        { label: 'Consignee Enterprise', value: 'Nordic Precision Logistics BV', confidence: '99.6%' },
        { label: 'Port of Loading / Discharge', value: 'Rotterdam (NLRTM) -> Singapore (SGSIN)', confidence: '99.8%' },
        { label: 'Harmonized HS Code', value: '8479.50.00 (Industrial Robots)', confidence: '98.9%' },
        { label: 'Gross Metric Tonnage', value: '18,420 kg (2x 40ft High Cube)', confidence: '99.4%' },
        { label: 'Customs Duty Auto-Calc', value: 'Tariff Rate 2.7% Verified', confidence: '99.2%' },
      ],
      systemDecision: 'Electronic Manifest EDI 310 dispatched to Singapore Customs. Automated clearance token received in 420ms.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80',
    },
  };

  const activeData = workflows[activeWorkflow];

  return (
    <div className="bg-white">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-navy text-white overflow-hidden pt-28 pb-20">
        {/* Background Image with Neural Network & Enterprise Mesh Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80&auto=format&fit=crop"
            alt="Intelligent Automation &amp; AI Swarms by Snesar.MD"
            width="1800"
            height="1000"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-25 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan/25 via-transparent to-transparent" />
          <div className="absolute inset-0 grid-pattern-dark opacity-20 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading and Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan/15 border border-cyan/40 text-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-6">
                <Bot className="w-3.5 h-3.5 text-cyan" />
                <span>Autonomous AI Agents & Enterprise Process Robotics</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.1] mb-6">
                Accelerating Enterprise Velocity with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-electric to-white">
                  Intelligent Automation.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal mb-8 max-w-2xl">
                We engineer cognitive RPA bot swarms, computer-vision powered document intelligence (IDP), and autonomous multi-agent systems that connect legacy ERPs with modern cloud APIs—eliminating friction and operating 24/7 with zero human touch.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#idp-pipeline-sandbox"
                  className="px-7 py-3.5 rounded-xl bg-electric hover:bg-electric-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-glow flex items-center gap-2"
                >
                  <span>Explore Agentic Sandbox</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all duration-300"
                >
                  Schedule Solution Architect Call
                </Link>
              </div>

              {/* Bot Swarm Key Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
                <div>
                  <span className="block text-2xl font-bold font-mono text-cyan">99.8%</span>
                  <span className="text-xs text-white/60 uppercase tracking-wider font-mono">Cognitive IDP Accuracy</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-mono text-cyan">&lt; 1.2s</span>
                  <span className="text-xs text-white/60 uppercase tracking-wider font-mono">End-to-End Extraction</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-mono text-cyan">SOC 2 / ISO</span>
                  <span className="text-xs text-white/60 uppercase tracking-wider font-mono">Encrypted Data Fabric</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Live Bot Swarm Mission Control HUD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-navy-900/90 rounded-3xl p-6 sm:p-7 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan" />
                    </span>
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      Enterprise RPA Swarm Controller
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-500/15 text-emerald-400 px-2.5 py-0.5 rounded border border-emerald-500/30">
                    24 ACTIVE BOTS
                  </span>
                </div>

                {/* Swarm Live Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                      <span>Queue Throughput</span>
                      <Workflow className="w-3.5 h-3.5 text-cyan" />
                    </div>
                    <div className="text-xl font-bold font-mono text-white">4,820 / hr</div>
                    <div className="text-[10px] font-mono text-emerald-400">Peak Load Nominal</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                      <span>Straight-Through Post</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-electric" />
                    </div>
                    <div className="text-xl font-bold font-mono text-white">96.4% STP</div>
                    <div className="text-[10px] font-mono text-cyan">Zero Human Intervention</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                      <span>ERP Connector Response Time</span>
                      <Database className="w-3.5 h-3.5 text-cyan" />
                    </div>
                    <div className="text-xl font-bold font-mono text-white">48 ms</div>
                    <div className="text-[10px] font-mono text-emerald-400">SAP S/4HANA OData v4</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                      <span>Security & Encryption</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-electric" />
                    </div>
                    <div className="text-xl font-bold font-mono text-white">AES-256</div>
                    <div className="text-[10px] font-mono text-cyan">Zero Data Ingress Retention</div>
                  </div>
                </div>

                {/* Live Swarm Event Log */}
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] leading-relaxed text-white/80 space-y-1">
                  <div className="text-cyan/90 flex items-center justify-between">
                    <span>&gt; Bot #14: Extracted PO-2026-9941 (100% confidence)</span>
                    <span className="text-[9px] text-emerald-400">SUCCESS</span>
                  </div>
                  <div className="text-white/60">&gt; Bot #08: Dispatched EDI 310 to Port Authority</div>
                  <div className="text-emerald-400">&gt; Bot #21: Reconciled €148,250 against Goods Receipt</div>
                  <div className="text-cyan/80">&gt; Swarm Health: 0 pending human-in-the-loop flags</div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan" />
                    Distributed Orchestrator Synchronized
                  </span>
                  <span className="font-mono text-cyan">REST / Webhooks</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE INTELLIGENT DOCUMENT PROCESSING & AGENT SWARM PIPELINE */}
      <section id="idp-pipeline-sandbox" className="py-24 bg-section border-b border-navy/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Interactive Cognitive Pipeline"
            title="Intelligent Document Processing & Agentic Execution"
            subtitle="Test how our multi-modal neural models parse complex unstructured documents, extract schema fields with high precision, and trigger automated enterprise ERP postings."
            align="center"
          />

          {/* Workflow Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10 mb-12">
            {[
              { id: 'invoice', label: 'Commercial Invoice & 3-Way Match', icon: FileText },
              { id: 'clinical', label: 'Clinical Trial Patient Consent', icon: Sparkles },
              { id: 'logistics', label: 'Ocean Bill of Lading & Customs EDI', icon: Workflow },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeWorkflow === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveWorkflow(tab.id as any)}
                  className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2.5 cursor-pointer ${
                    isActive
                      ? 'bg-navy text-white shadow-md border-b-2 border-cyan'
                      : 'bg-white text-navy/70 hover:bg-navy/5 border border-navy/10'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan' : 'text-electric'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Document Processing Simulator Card */}
          <div className="bg-white rounded-3xl border border-navy/10 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Visual Representation & OCR Highlighting */}
              <div className="lg:col-span-5 relative bg-navy overflow-hidden min-h-[380px] lg:min-h-full">
                <img
                  src={activeData.image}
                  alt={activeData.name}
                  className="w-full h-full object-cover opacity-50 filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-navy/80 backdrop-blur-md text-[10px] font-mono text-cyan uppercase tracking-wider border border-white/10 font-semibold">
                    {activeData.type}
                  </span>
                  <div className="flex items-center gap-2 bg-black/60 px-2.5 py-1 rounded-md text-[10px] font-mono text-cyan border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                    <span>OCR INGEST ACTIVE</span>
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan mb-1">
                    <span>Target ERP:</span>
                    <span className="text-white font-bold">{activeData.erpTarget}</span>
                  </div>
                  <h4 className="text-xl font-bold font-display text-white mb-2">
                    {activeData.name}
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-black/50 p-2.5 rounded-lg border border-white/10 text-white/80">
                    <div>Throughput: {activeData.throughput}</div>
                    <div>Cycle Time: {activeData.avgCycleTime}</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Extracted Entities & Automated ERP Execution */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-navy/10 mb-6">
                    <div>
                      <span className="text-xs font-mono font-bold text-electric uppercase tracking-wider block">
                        Cognitive Extraction Results
                      </span>
                      <h3 className="text-2xl font-bold font-display text-navy mt-0.5">
                        Structured Schema Payload
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-navy/50 block">Composite Confidence</span>
                      <span className="text-xl font-bold font-mono text-emerald-600">{activeData.confidence}</span>
                    </div>
                  </div>

                  {/* Schema Entities Table */}
                  <div className="space-y-2.5 mb-6">
                    {activeData.extractedFields.map((field, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-section border border-navy/5 hover:border-cyan/40 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <div>
                            <span className="text-[10px] font-mono text-navy/50 uppercase tracking-wider block">
                              {field.label}
                            </span>
                            <span className="text-xs font-bold text-navy font-mono">
                              {field.value}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                          {field.confidence}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* System Action Callout */}
                  <div className="p-4 rounded-xl bg-navy/5 border border-navy/10 mb-6">
                    <span className="text-[10px] font-mono text-electric font-bold uppercase tracking-wider block mb-1">
                      Automated Decision Engine Execution
                    </span>
                    <p className="text-xs text-navy/80 font-normal leading-relaxed">
                      {activeData.systemDecision}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 border-t border-navy/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-navy/60">
                    <ShieldCheck className="w-4 h-4 text-cyan" />
                    <span>ISO 27001 & SOC 2 Type II End-to-End Encryption</span>
                  </div>
                  <Link
                    to="/solutions/flowautomate"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-electric hover:text-navy uppercase tracking-wider"
                  >
                    <span>View FlowAutomate Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MULTI-LAYER ENTERPRISE AUTOMATION FABRIC */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Full-Stack Automation Fabric"
            title="Enterprise Intelligent Automation Architecture"
            subtitle="From multi-modal document intake to headless execution swarms and enterprise API connectors, our architecture scales with deterministic governance."
            dark
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-14">
            {[
              {
                layer: 'Layer 01',
                title: 'Multi-Modal Ingestion & OCR',
                desc: 'Intake scanned PDFs, high-res TIFFs, digital emails, and EDI streams with advanced computer vision layout parsing and font classification.',
                tech: 'Tesseract / PaddleOCR / Vision-LLM',
              },
              {
                layer: 'Layer 02',
                title: 'Cognitive Reasoning Agents',
                desc: 'Specialized agentic workers performing cross-system cross-referencing, semantic discrepancy detection, and policy validation.',
                tech: 'LangGraph / LlamaIndex / Agent Swarms',
              },
              {
                layer: 'Layer 03',
                title: 'Unattended Headless Bot Swarms',
                desc: 'Kubernetes auto-scaled headless workers executing high-concurrency desktop and browser automation with zero user intervention.',
                tech: 'Playwright / Selenium / Custom C# Daemons',
              },
              {
                layer: 'Layer 04',
                title: 'Enterprise Integration & Audit Mesh',
                desc: 'Resilient bi-directional connectors for SAP, Salesforce, and Oracle with full tamper-proof cryptographic audit logs and SOC 2 telemetry.',
                tech: 'OData v4 / RFC BAPI / MuleSoft / Kafka',
              },
            ].map((stack, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 relative hover:border-cyan/40 hover:bg-white/[0.08] transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-cyan bg-cyan/15 px-2.5 py-1 rounded border border-cyan/30 uppercase font-semibold">
                    {stack.layer}
                  </span>
                  <span className="text-xs font-mono text-white/30 font-bold">0{idx + 1}</span>
                </div>
                <h4 className="text-lg font-bold font-display text-white mb-2 group-hover:text-cyan transition-colors">
                  {stack.title}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-normal mb-5">
                  {stack.desc}
                </p>
                <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-cyan/90">
                  {stack.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REAL RPA ENTERPRISE CONTROL TOWER & WORKFLOW GALLERY */}
      <section className="py-24 bg-white border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono font-bold text-electric uppercase tracking-wider block mb-2">
                Operations & Governance
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
                Enterprise Automation Control & Scalability
              </h2>
            </div>
            <p className="text-sm text-navy/60 max-w-md mt-4 md:mt-0 font-normal">
              From centralized 24/7 mission control towers to human-in-the-loop exception cockpits, we build architectures that ensure zero operational downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group rounded-3xl overflow-hidden border border-navy/10 bg-section shadow-sm hover:shadow-card transition-all">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Enterprise RPA Mission Control"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-mono text-cyan font-semibold">
                  24/7 Mission Control Tower
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold font-display text-navy mb-2">
                  Centralized Orchestrator & Live Queue Analytics
                </h4>
                <p className="text-xs text-navy/70 leading-relaxed font-normal">
                  Real-time telemetry tracking bot utilization, queue velocities, API SLA adherence, and immediate failover load re-balancing.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden border border-navy/10 bg-section shadow-sm hover:shadow-card transition-all">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
                  alt="High-Throughput Bot Farm"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-mono text-cyan font-semibold">
                  Serverless Swarm Architecture
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold font-display text-navy mb-2">
                  Elastic Worker Container Clusters
                </h4>
                <p className="text-xs text-navy/70 leading-relaxed font-normal">
                  Containerized headless bot workers scaling horizontally from 5 to 500 instances during month-end financial closing bursts.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden border border-navy/10 bg-section shadow-sm hover:shadow-card transition-all">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Human-in-the-Loop Cockpit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-mono text-cyan font-semibold">
                  Exception Management
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold font-display text-navy mb-2">
                  Active Human-in-the-Loop Resolution Cockpit
                </h4>
                <p className="text-xs text-navy/70 leading-relaxed font-normal">
                  Intuitive web console for operational reviewers to handle edge-case ambiguities, with continuous reinforcement learning training the model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DELIVERABLES & CORE COMPETENCIES */}
      <section className="py-24 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering Deliverables"
            title="Intelligent Automation Capabilities"
            subtitle="Comprehensive enterprise automation services delivering measurable labor reduction, error minimization, and accelerated process throughput."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {industry.services.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-white border border-navy/10 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center text-electric mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold font-display text-navy mb-2">
                      {srv.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-navy/70 leading-relaxed font-normal mb-6">
                      {srv.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-navy/10 flex items-center justify-between text-xs font-bold text-electric">
                    <span>Enterprise Ready</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION */}
      <section className="py-24 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Accelerate Your Enterprise Automation Strategy
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 font-normal">
            Partner with Snesar.MD to integrate autonomous AI agents, straight-through invoice processing, and resilient ERP integration into your organization.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-electric text-white font-bold text-xs uppercase tracking-wider hover:bg-electric-600 shadow-glow transition-all"
            >
              Consult with Automation Practice Experts
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-3.5 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 border border-white/15 transition-all"
            >
              Review Automation Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
