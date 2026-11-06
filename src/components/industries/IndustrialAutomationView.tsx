import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Factory, Cpu, Bot, Wifi, Cog, Boxes, BarChart3, Eye,
  CheckCircle2, ArrowRight, Activity, ShieldCheck, Play, Pause,
  Layers, RefreshCw, AlertTriangle, Terminal, Zap
} from 'lucide-react';
import { Industry } from '@/data/industries';
import SectionHeading from '@/components/common/SectionHeading';

interface Props {
  industry: Industry;
}

export default function IndustrialAutomationView({ industry }: Props) {
  // Interactive Smart Factory Cell State
  const [activeCell, setActiveCell] = useState<'welding' | 'machining' | 'inspection'>('welding');
  const [isSimulating, setIsSimulating] = useState(true);

  const cellData = {
    welding: {
      name: 'Robotic Arc Welding Cell (Robot #04)',
      telemetry: {
        oee: '94.6%',
        cycleTime: '42.8s',
        weldTorque: '185 Nm',
        vibration: '0.42 mm/s (Normal)',
        status: 'Continuous Arc Active',
        plcCycle: '2.4ms (Siemens S7-1500)',
      },
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80',
      description: 'Synchronized dual 6-axis articulated robots executing precise path seams with real-time laser seam tracking and wire-feed torque feedback.',
    },
    machining: {
      name: '5-Axis CNC Precision Machining Cell',
      telemetry: {
        oee: '91.2%',
        cycleTime: '118.4s',
        spindleSpeed: '18,500 RPM',
        vibration: '0.68 mm/s (Optimal)',
        status: 'Adaptive Feedrate Active',
        plcCycle: '1.8ms (Beckhoff TwinCAT)',
      },
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=80',
      description: 'High-speed multi-axis milling unit with acoustic emission sensors predicting tool wear 45 minutes prior to micro-fracture.',
    },
    inspection: {
      name: 'Automated Optical Quality Inspection (AOI)',
      telemetry: {
        oee: '99.1%',
        cycleTime: '3.1s',
        defectRate: '0.008%',
        vibration: '0.12 mm/s (Isolated)',
        status: 'Vision AI Inference (99.9%)',
        plcCycle: '3.2ms (EtherCAT Sync)',
      },
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=900&q=80',
      description: 'Multi-camera 4K machine vision array with telecentric lenses executing dimensional verification at 120 parts per minute.',
    },
  };

  const selectedCell = cellData[activeCell];

  return (
    <div className="space-y-0">
      {/* 1. CINEMATIC INDUSTRIAL HERO */}
      <section className="relative min-h-[90vh] bg-navy text-white flex items-center overflow-hidden pt-20 pb-16">
        {/* Real Industrial High-Resolution Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80&auto=format&fit=crop"
            alt="Industrial Automation Smart Factory Robotics by Snesar.MD"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-30 filter contrast-125 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/70" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-navy/60 to-navy" />
        </div>

        {/* Industrial Engineering Coordinate Grid Overlay */}
        <div className="absolute inset-0 grid-pattern-dark opacity-35 z-0 pointer-events-none" />
        <div className="absolute -top-32 right-10 w-[600px] h-[600px] bg-electric/25 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-electric/15 text-cyan border border-cyan/30 backdrop-blur-md mb-6">
                <Factory className="w-4 h-4 text-cyan" />
                <span>Industry Practice &middot; Industrial Automation &amp; Robotics</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                Building the Next Generation of{' '}
                <span className="text-gradient">Intelligent Industries.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl font-normal">
                {industry.heroSubheading}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#factory-simulator"
                  className="px-8 py-4 rounded-xl bg-electric hover:bg-electric-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-glow"
                >
                  Inspect Factory Simulator
                </a>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 backdrop-blur-sm"
                >
                  Discuss Plant Modernization
                </Link>
              </div>

              {/* Protocol Badges */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-white/60">
                <span className="text-cyan font-semibold">PROTOCOLS:</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/90">OPC-UA TSN</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/90">PROFINET</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/90">EtherCAT</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/90">IO-Link</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/90">MQTT Sparkplug B</span>
              </div>
            </div>

            {/* Hero Right: Live Industrial SCADA HUD Widget */}
            <div className="lg:col-span-5">
              <div className="bg-navy/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 border border-white/15 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                      PLANT SCADA CONTROLLER: ONLINE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-cyan">
                    HOST: 192.168.10.45
                  </span>
                </div>

                <div className="space-y-3.5 mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-white/50 block">OVERALL EQUIPMENT EFFECTIVENESS</span>
                      <span className="text-2xl font-bold font-display text-white">94.8% <span className="text-xs font-mono text-emerald-400 font-normal">+2.3% OEE</span></span>
                    </div>
                    <Activity className="w-8 h-8 text-cyan opacity-80" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] font-mono text-white/50 block">PLC LOGIC CYCLE</span>
                      <span className="text-base font-bold text-white font-mono">2.14 ms</span>
                      <span className="text-[10px] text-cyan block mt-0.5">Deterministic TSN</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] font-mono text-white/50 block">DIGITAL TWIN SYNC</span>
                      <span className="text-base font-bold text-emerald-400 font-mono">Real-Time</span>
                      <span className="text-[10px] text-white/50 block mt-0.5">&lt; 15ms Delta</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan/30 text-xs text-cyan-200 flex items-center justify-between font-mono">
                  <span>SAFETY ZONE: ASIL-D / SIL-3</span>
                  <span className="text-emerald-400 font-bold">ALL SENSORS NOMINAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE SMART FACTORY DIGITAL TWIN SIMULATOR */}
      <section id="factory-simulator" className="py-20 md:py-28 bg-white border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Live Testbed Simulation"
            title="Interactive Smart Factory Workcell Simulator"
            subtitle="Select a manufacturing workcell to inspect real-time sensor streams, PLC scan loop timings, vibration harmonics, and predictive maintenance telemetry."
            align="left"
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Workcell Selector Buttons */}
            <div className="lg:col-span-4 space-y-3">
              <button
                onClick={() => setActiveCell('welding')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  activeCell === 'welding'
                    ? 'bg-navy text-white border-electric shadow-xl translate-x-1'
                    : 'bg-section text-navy border-navy/5 hover:border-navy/20 hover:bg-white'
                }`}
              >
                <Bot className={`w-6 h-6 mt-1 shrink-0 ${activeCell === 'welding' ? 'text-cyan' : 'text-electric'}`} />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-70">
                    WORKCELL 01
                  </span>
                  <h4 className="text-base font-bold font-display">Robotic Arc Welding Cell</h4>
                  <p className="text-xs opacity-75 mt-1">Multi-axis articulated robot with real-time seam tracking</p>
                </div>
              </button>

              <button
                onClick={() => setActiveCell('machining')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  activeCell === 'machining'
                    ? 'bg-navy text-white border-electric shadow-xl translate-x-1'
                    : 'bg-section text-navy border-navy/5 hover:border-navy/20 hover:bg-white'
                }`}
              >
                <Cog className={`w-6 h-6 mt-1 shrink-0 ${activeCell === 'machining' ? 'text-cyan' : 'text-electric'}`} />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-70">
                    WORKCELL 02
                  </span>
                  <h4 className="text-base font-bold font-display">5-Axis Precision CNC Cell</h4>
                  <p className="text-xs opacity-75 mt-1">Acoustic vibration analytics &amp; adaptive spindle control</p>
                </div>
              </button>

              <button
                onClick={() => setActiveCell('inspection')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  activeCell === 'inspection'
                    ? 'bg-navy text-white border-electric shadow-xl translate-x-1'
                    : 'bg-section text-navy border-navy/5 hover:border-navy/20 hover:bg-white'
                }`}
              >
                <Eye className={`w-6 h-6 mt-1 shrink-0 ${activeCell === 'inspection' ? 'text-cyan' : 'text-electric'}`} />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-70">
                    WORKCELL 03
                  </span>
                  <h4 className="text-base font-bold font-display">Automated Vision Quality (AOI)</h4>
                  <p className="text-xs opacity-75 mt-1">Sub-pixel defect segmentation at 120 parts/minute</p>
                </div>
              </button>
            </div>

            {/* Live Cell Telemetry Display Screen */}
            <div className="lg:col-span-8 bg-navy rounded-3xl overflow-hidden border border-navy/15 shadow-2xl text-white">
              {/* Image banner of the specific cell */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-navy">
                <img
                  src={selectedCell.image}
                  alt={selectedCell.name}
                  className="w-full h-full object-cover filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-navy/90 text-cyan border border-cyan/30 backdrop-blur-md">
                    LIVE TWIN SYNC ACTIVE
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/90 text-navy font-bold">
                    OEE: {selectedCell.telemetry.oee}
                  </span>
                </div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl font-bold font-display text-white">{selectedCell.name}</h3>
                  <p className="text-xs sm:text-sm text-white/80 mt-1 font-normal">{selectedCell.description}</p>
                </div>
              </div>

              {/* Live Telemetry Grid */}
              <div className="p-6 sm:p-8 bg-navy/95">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan" />
                  Live Sensor Stream &amp; Controller Registers
                </h5>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mb-6">
                  {Object.entries(selectedCell.telemetry).map(([key, val]) => (
                    <div key={key} className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] font-mono text-white/45 uppercase block">{key}</span>
                      <span className="text-sm font-bold text-white font-mono mt-0.5 block truncate">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-white/60">
                  <span className="font-mono flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan" />
                    ISA-95 Level 2 Edge Inference: Verified
                  </span>
                  <Link
                    to="/solutions/smartfactory-360"
                    className="text-cyan hover:text-white font-mono font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <span>View SmartFactory 360 Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ISA-95 ARCHITECTURAL STACK VISUALIZER */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Industrial Topology"
            title="ISA-95 Architecture & Automation Hierarchy"
            subtitle="From microsecond sub-bus I/O transactions to enterprise resource planning, our systems engineering spans the full automation pyramid."
            align="left"
          />

          <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-card">
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-section border-l-4 border-amber-500 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-600 block">LEVEL 4 &middot; ENTERPRISE SYSTEMS</span>
                  <h4 className="text-lg font-bold text-navy font-display">ERP, MES &amp; Supply Chain Analytics</h4>
                  <p className="text-xs text-navy-500 mt-1">SAP / Oracle ERP integration, automated shift reporting, production schedule optimization.</p>
                </div>
                <span className="px-3 py-1 rounded bg-white text-navy font-mono text-xs border border-navy/10 shrink-0 font-semibold">REST / GraphQL</span>
              </div>

              <div className="p-5 rounded-2xl bg-section border-l-4 border-cyan flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-800 block">LEVEL 3 &middot; MANUFACTURING OPERATIONS</span>
                  <h4 className="text-lg font-bold text-navy font-display">SCADA &amp; Digital Twin Synchronization</h4>
                  <p className="text-xs text-navy-500 mt-1">Supervisory control, historical time-series database (InfluxDB), 3D digital twin rendering.</p>
                </div>
                <span className="px-3 py-1 rounded bg-white text-navy font-mono text-xs border border-navy/10 shrink-0 font-semibold">OPC-UA / MQTT</span>
              </div>

              <div className="p-5 rounded-2xl bg-section border-l-4 border-electric flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-electric block">LEVEL 1-2 &middot; DIRECT CONTROL</span>
                  <h4 className="text-lg font-bold text-navy font-display">PLC, PAC &amp; Distributed Edge Controllers</h4>
                  <p className="text-xs text-navy-500 mt-1">Siemens S7-1500, Allen-Bradley GuardLogix, Beckhoff TwinCAT real-time deterministic scan loops.</p>
                </div>
                <span className="px-3 py-1 rounded bg-white text-navy font-mono text-xs border border-navy/10 shrink-0 font-semibold">PROFINET / EtherCAT</span>
              </div>

              <div className="p-5 rounded-2xl bg-section border-l-4 border-navy flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-navy-400 block">LEVEL 0 &middot; PHYSICAL PROCESS</span>
                  <h4 className="text-lg font-bold text-navy font-display">Industrial Robotics, Servo Actuators &amp; IO-Link Sensors</h4>
                  <p className="text-xs text-navy-500 mt-1">ABB/FANUC 6-axis arms, pneumatic valves, laser distance meters, vibration transducers.</p>
                </div>
                <span className="px-3 py-1 rounded bg-white text-navy font-mono text-xs border border-navy/10 shrink-0 font-semibold">IO-Link / 24V DC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL GALLERY: REAL INDUSTRIAL PHOTOGRAPHY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Field Systems"
            title="Industrial Engineering in Production"
            subtitle="Photographic record of industrial robotics cells, factory control suites, and autonomous manufacturing infrastructure engineered by Snesar.MD."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-3xl overflow-hidden shadow-card border border-navy/10 relative h-80">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Automated Robotic Welding Cell"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block font-semibold">ROBOTICS INTEGRATION</span>
                <h4 className="text-lg font-bold font-display">Multi-Axis Cobot Assembly Line</h4>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden shadow-card border border-navy/10 relative h-80">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&q=80"
                alt="Automated Optical Inspection System"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block font-semibold">QUALITY INSPECTION</span>
                <h4 className="text-lg font-bold font-display">Telecentric Optical Inspection Bay</h4>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden shadow-card border border-navy/10 relative h-80">
              <img
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80"
                alt="Smart Factory Manufacturing Floor"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block font-semibold">SMART MANUFACTURING</span>
                <h4 className="text-lg font-bold font-display">Connected Production Operations</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES & DELIVERABLES GRID */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Capabilities"
            title="Industrial Automation Deliverables"
            subtitle="Engineered systems built to stringent functional safety, timing determinism, and uptime specifications."
            align="left"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-navy/5 hover:border-electric/30 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-electric/10 text-electric flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold font-display text-navy mb-2">{srv.title}</h4>
                    <p className="text-xs sm:text-sm text-navy-400 leading-relaxed font-normal">{srv.description}</p>
                  </div>
                  <div className="pt-4 border-t border-navy/5 mt-4 text-xs font-mono font-bold text-electric">
                    SPEC_VERIFIED &rarr;
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
            Accelerate Your Industrial Modernization
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 font-normal">
            Partner with Snesar.MD to integrate deterministic automation, robotics, and Industry 4.0 IoT into your production ecosystem.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-electric text-white font-bold text-xs uppercase tracking-wider hover:bg-electric-600 shadow-glow transition-all"
            >
              Consult Industrial Automation Engineers
            </Link>
            <Link
              to="/case-studies/smart-factory-monitoring"
              className="px-8 py-3.5 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 border border-white/15 transition-all"
            >
              Review Factory Monitoring Case File
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

