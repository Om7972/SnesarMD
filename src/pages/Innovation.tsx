import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain, Cpu, ShieldCheck, Atom, Network,
  Layers, Compass, Sparkles, ArrowRight,
  Database, RefreshCw, Terminal, CheckCircle2,
  Workflow, Zap, Lightbulb, Activity, Server, Radio
} from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { technologies } from '@/data/capabilities';
import { Link } from 'react-router-dom';

const rdInitiatives = [
  {
    title: 'Autonomous Robotics & Edge Perception',
    category: 'Industrial Systems',
    description: 'Investigating real-time computer vision algorithms executed directly on edge micro-controllers to enable sub-millisecond obstacle evasion and precision alignment in industrial cobots.',
    status: 'Active Lab Research',
    milestone: 'Phase 3: Silicon Verification',
    progress: 75,
  },
  {
    title: 'Assistive Bio-Signal Decoding',
    category: 'Medical Technology',
    description: 'Exploring machine learning architectures that decode multi-channel EMG and inertial telemetry to enhance assistive robotic prosthetics and physical rehabilitation monitoring frameworks.',
    status: 'Proof-of-Concept',
    milestone: 'Phase 2: Validation Testing',
    progress: 45,
  },
  {
    title: 'Digital Twin Synchronous Telemetry (DT-ST)',
    category: 'Smart Manufacturing',
    description: 'Architecting bidirectional distributed event streams that sync physical factory state machines with physics-based 3D simulation engines with zero telemetry drop under packet jitter.',
    status: 'Architecture Validation',
    milestone: 'Phase 4: Field Testing',
    progress: 90,
  },
  {
    title: 'Next-Gen BMS State-of-Health Neural Estimators',
    category: 'Automotive Engineering',
    description: 'Developing continuous electrochemical impedance spectroscopy prediction models that forecast lithium dendrite formation in EV battery arrays during rapid charging cycles.',
    status: 'Active R&D',
    milestone: 'Phase 2: Model Training',
    progress: 60,
  },
];

const labs = [
  {
    name: 'Industrial Robotics & Motion Lab',
    focus: 'Kinematics, PLC-to-Cloud gateways, real-time deterministic Ethernet (TSN), cobot safety validation.',
    icon: Workflow,
    tag: 'Hardware & Automation',
    telemetry: 'Deterministic TSN Multi-Axis Synchronization',
  },
  {
    name: 'Healthcare Imaging & Bio-Computing Lab',
    focus: 'DICOM streaming pipelines, radiological ML assistive tools, HIPAA compliant micro-architectures.',
    icon: Atom,
    tag: 'Medical AI & Systems',
    telemetry: 'PACS Ingestion: 10 Gbps | DICOM-RT',
  },
  {
    name: 'Connected Mobility & Telematics Testbed',
    focus: 'CAN-FD, AUTOSAR compliant software stacks, vehicle-to-cloud telemetry, simulated HIL environments.',
    icon: Zap,
    tag: 'Automotive & IoT',
    telemetry: 'ISO 26262 ASIL-D Rig | HIL Simulation',
  },
  {
    name: 'Intelligent Process Automation Incubator',
    focus: 'High-throughput document parsers, cognitive RPA decision engines, human-in-the-loop audit fabrics.',
    icon: Network,
    tag: 'Cognitive Computing',
    telemetry: 'Throughput: 1,200 docs/min | Zero Data Leakage',
  },
];

export default function Innovation() {
  const [selectedTech, setSelectedTech] = useState(technologies[0]);

  useEffect(() => {
    document.title = 'Innovation & R&D | Snesar.MD Global Engineering';
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-electric/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-1/4 w-80 h-80 bg-cyan/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 text-cyan border border-white/10 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              Applied Engineering &middot; Research &amp; Development
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold font-display tracking-tight text-white mb-6 leading-[1.12]">
              Pioneering Technologies That Reshape Modern Industry
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-normal">
              At Snesar.MD, engineering innovation isn't an afterthought — it's the core methodology driving our research laboratories, proprietary frameworks, and client transformations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Technology Ecosystem Visualizer */}
      <section className="py-20 md:py-28 bg-white border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="System Topology"
            title="Interactive Technology Ecosystem"
            subtitle="Explore how our core engineering capabilities interlock to power enterprise-scale systems across disciplines."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tech Selector Sidebar */}
            <div className="lg:col-span-5 space-y-2">
              <div className="flex items-center justify-between px-3 mb-3">
                <h3 className="text-xs font-mono font-bold text-navy-400 uppercase tracking-wider">
                  Technology Domains
                </h3>
                <span className="text-[11px] font-mono text-electric">SELECT STACK</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {technologies.map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTech(tech)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                      selectedTech.id === tech.id
                        ? 'bg-electric text-white border-electric shadow-md shadow-electric/25 translate-x-1'
                        : 'bg-section text-navy border-navy/5 hover:border-navy/20 hover:bg-white'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold font-display">{tech.name}</div>
                      <div
                        className={`text-xs font-mono mt-0.5 ${
                          selectedTech.id === tech.id ? 'text-white/80' : 'text-navy-400'
                        }`}
                      >
                        {tech.category}
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        selectedTech.id === tech.id ? 'text-white translate-x-1' : 'text-navy-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Visualizer Canvas */}
            <div className="lg:col-span-7 bg-navy rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden border border-white/10 min-h-[500px] flex flex-col justify-between shadow-2xl">
              <div className="absolute inset-0 grid-pattern-dark opacity-25 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-white/10">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 text-cyan uppercase tracking-wider">
                    {selectedTech.category} Architecture
                  </span>
                  <span className="text-xs font-mono text-cyan-300">
                    SPECIFICATION: {selectedTech.name.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                  {selectedTech.name}
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                  {selectedTech.description}
                </p>

                {/* Architecture Ecosystem Mapping Visual */}
                <div className="border border-white/10 bg-white/5 rounded-2xl p-6 backdrop-blur-md mb-8">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan mb-4 flex items-center gap-2">
                    <Network className="w-4 h-4" />
                    Cross-Functional Intersections
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-white/50 uppercase font-mono">Domain Ingestion</div>
                      <div className="text-sm font-semibold text-white mt-1">Multi-Sensor Telemetry</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-white/50 uppercase font-mono">Execution Speed</div>
                      <div className="text-sm font-bold text-cyan mt-1 font-mono">Sub-15ms Real-Time</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-[10px] text-white/50 uppercase font-mono">Target Deployment</div>
                      <div className="text-sm font-semibold text-white mt-1">Edge Hardware / Hybrid</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <ShieldCheck className="w-4 h-4 text-cyan" />
                  <span>Verified across Industrial, Medical & Automotive benchmarks</span>
                </div>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan hover:text-white uppercase tracking-wider transition-colors"
                >
                  <span>Solutions Index</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Laboratories */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Facilities & Testing"
            title="Engineering Laboratories & Testing Centers"
            subtitle="Dedicated physical and virtual testing grounds where our systems engineers push software, firmware, and electromechanical assemblies through stringent stress regimes."
            align="left"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {labs.map((lab, i) => {
              const Icon = lab.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 border border-navy/5 shadow-card hover:shadow-card-hover transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-electric/10 text-electric flex items-center justify-center group-hover:scale-105 group-hover:bg-electric group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-section text-navy-500 border border-navy/5">
                        {lab.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-display text-navy group-hover:text-electric transition-colors mb-2">
                      {lab.name}
                    </h3>
                    <p className="text-navy-500 text-sm leading-relaxed mb-6 font-normal">
                      {lab.focus}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-navy/5 flex items-center justify-between text-xs font-mono text-cyan-800">
                    <span className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-electric animate-pulse" />
                      {lab.telemetry}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active R&D Initiatives */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-electric uppercase tracking-wider block mb-2">
                Active Research Tracks
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-navy">
                Current Applied R&amp;D Programs
              </h2>
            </div>
            <p className="text-sm text-navy-400 max-w-md font-normal">
              A transparent view of our exploratory engineering roadmap addressing next-decade challenges in autonomy, mobility, and bio-computing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rdInitiatives.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-navy/10 p-8 bg-section hover:bg-white hover:border-electric/30 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-electric/10 text-electric uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan/20">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-navy mb-3">{item.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-navy/10">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-navy-400 font-mono">Stage Progress:</span>
                    <span className="font-mono font-bold text-navy">{item.milestone}</span>
                  </div>
                  <div className="h-1.5 w-full bg-navy/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-electric to-cyan rounded-full" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Commitment Banner */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Sparkles className="w-10 h-10 text-cyan mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Collaborative Research with Global Technology Partners
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            We partner with silicon manufacturers, robotics OEMs, cloud computing providers, and academic laboratories to continuously validate our applied research against real-world production environments.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-electric text-white font-bold text-xs uppercase tracking-wider hover:bg-electric-600 shadow-glow transition-all"
            >
              Propose an R&amp;D Partnership
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 border border-white/15 transition-all"
            >
              Review Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
