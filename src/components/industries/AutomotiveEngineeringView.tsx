import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Car, BatteryCharging, Cpu, ShieldCheck, Zap, Activity,
  Radio, Gauge, ArrowRight, CheckCircle2, Play, Pause,
  Layers, Settings, RefreshCw, Eye, AlertCircle, HardDrive
} from 'lucide-react';
import { Industry } from '@/data/industries';
import SectionHeading from '@/components/common/SectionHeading';

interface Props {
  industry: Industry;
}

export default function AutomotiveEngineeringView({ industry }: Props) {
  // Interactive EV Skateboard & Powertrain Subsystem State
  const [activeSubsystem, setActiveSubsystem] = useState<'bms' | 'inverter' | 'adas' | 'telematics'>('bms');
  const [isSimulating, setIsSimulating] = useState(true);

  const subsystems = {
    bms: {
      name: '800V High-Voltage Battery Pack & BMS',
      category: 'Energy Storage & Thermal Management',
      specs: {
        nominalVoltage: '812.4 V DC',
        stateOfCharge: '88.5%',
        stateOfHealth: '99.4%',
        packTempAvg: '28.4°C (Liquid Loop Active)',
        cellBalancing: 'Active Active Balancing (<5mV delta)',
        safetyRating: 'ISO 26262 ASIL-D Lockstep MCU',
      },
      image: 'https://images.unsplash.com/photo-1558441719-8b489c63f732?w=900&q=80',
      description: 'Custom dual-core lockstep battery management system with real-time electrochemical impedance spectroscopy, pyrofuse isolation triggering under 2ms, and multi-channel liquid glycol cooling.',
      highlights: [
        'Deterministic cell voltage monitoring across 192 series cells',
        'Model-based thermal runaway predictive early warning algorithms',
        'Direct CAN-FD bus communication at 5 Mbit/s with vehicle supervisory ECU',
      ],
    },
    inverter: {
      name: 'Dual Silicon Carbide (SiC) Inverter & E-Axle',
      category: 'Traction Inversion & Torque Vectoring',
      specs: {
        inverterEfficiency: '98.9% peak',
        continuousPower: '320 kW (Front + Rear)',
        peakTorque: '720 Nm',
        switchingFreq: '20 kHz Variable PWM',
        junctionTemp: '64.2°C (Direct Cold Plate)',
        torqueResponse: '< 8ms Closed-Loop Control',
      },
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?w=900&q=80',
      description: 'High-power density SiC MOSFET power stage engineered for high-RPM permanent magnet synchronous motors (PMSM) with continuous field-oriented control (FOC) and regenerative dynamic braking.',
      highlights: [
        'Space Vector PWM modulation minimizing harmonic copper losses',
        'Integrated resolver-to-digital converter with 16-bit angle resolution',
        'Overcurrent and short-circuit de-saturation protection within 1.2 microseconds',
      ],
    },
    adas: {
      name: '360° ADAS Perception & Sensor Fusion Engine',
      category: 'Autonomous Driving & Active Safety',
      specs: {
        fusionPipeline: '4D Radar + Solid-State LiDAR + 8MP Tri-Cam',
        perceptionLatency: '24.8ms End-to-End',
        detectionRange: 'Up to 300m Forward / 120m Surround',
        computePlatform: 'Dual Heterogeneous SoC (254 TOPS)',
        asilClassification: 'ISO 26262 ASIL-D System Architecture',
        targetTracking: '64 Concurrent Dynamic Tracklets',
      },
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=900&q=80',
      description: 'Unified occupancy grid and Kalman-filtered vector tracking pipeline combining 77GHz millimeter-wave radar point clouds with 8-megapixel automotive-grade camera semantic segmentation.',
      highlights: [
        'Autonomous Emergency Braking (AEB) & Adaptive Cruise Control (ACC) logic',
        'Adverse weather edge compensation for rain, dense fog, and low sun glare',
        'Hardware-in-the-Loop (HIL) validated across 1.4 million simulated virtual test miles',
      ],
    },
    telematics: {
      name: 'AUTOSAR Adaptive Gateway & C-V2X Telematics',
      category: 'Connected Vehicle & Over-the-Air Architecture',
      specs: {
        backboneBus: '1000BASE-T1 Automotive Ethernet',
        cellularRadio: '5G Dual SIM Dual Active + C-V2X PC5',
        hsmSecurity: 'Hardware Security Module with EVITA Full',
        otaProtocol: 'Dual-Bank A/B Fail-Safe Rollback',
        cloudTelemetry: 'MQTT over TLS 1.3 with Edge Buffering',
        diagnosticProt: 'UDS on CAN / DoIP (ISO 13400)',
      },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80',
      description: 'High-throughput vehicle central compute gateway bridging internal legacy CAN-FD/LIN networks to gigabit automotive Ethernet backbones and cloud fleet telemetry with zero-downtime OTA flashes.',
      highlights: [
        'AUTOSAR Adaptive platform enabling dynamic service-oriented architecture (SOA)',
        'Cryptographic firmware signature verification with secure boot chain',
        'Direct Vehicle-to-Everything (V2X) low-latency peer messaging for intersection alerts',
      ],
    },
  };

  const activeData = subsystems[activeSubsystem];

  return (
    <div className="bg-white">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-navy text-white overflow-hidden pt-28 pb-20">
        {/* Background Image with Automotive Technical Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558441719-8b489c63f732?w=1800&q=80&auto=format&fit=crop"
            alt="Automotive Engineering &amp; Connected Mobility by Snesar.MD"
            width="1800"
            height="1000"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-30 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric/25 via-transparent to-transparent" />
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
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-electric/20 border border-electric/40 text-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-6">
                <Car className="w-3.5 h-3.5 text-cyan" />
                <span>Next-Generation Mobility & E-Powertrain Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.1] mb-6">
                Engineering the Future of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-cyan to-white">
                  Intelligent Mobility.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal mb-8 max-w-2xl">
                From high-voltage 800V battery architectures and ASIL-D functional safety firmware to multi-sensor ADAS perception and AUTOSAR telematics gateways—we empower leading mobility OEMs and Tier-1 suppliers to pioneer software-defined vehicles.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#ev-architecture-sandbox"
                  className="px-7 py-3.5 rounded-xl bg-electric hover:bg-electric-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-glow flex items-center gap-2"
                >
                  <span>Explore 800V Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all duration-300"
                >
                  Schedule Engineering Briefing
                </Link>
              </div>

              {/* Functional Safety Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
                <div>
                  <span className="block text-2xl font-bold font-mono text-cyan">ISO 26262</span>
                  <span className="text-xs text-white/60 uppercase tracking-wider font-mono">ASIL-D Certified Logic</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-mono text-cyan">800V DC</span>
                  <span className="text-xs text-white/60 uppercase tracking-wider font-mono">High-Voltage Battery BMS</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-mono text-cyan">&lt; 35ms</span>
                  <span className="text-xs text-white/60 uppercase tracking-wider font-mono">ADAS Perception Loop</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Live In-Vehicle Telemetry HUD */}
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
                      CAN-FD Vehicle Bus Monitor
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-cyan/15 text-cyan px-2.5 py-0.5 rounded border border-cyan/30">
                    5.0 Mbit/s TSN
                  </span>
                </div>

                {/* Subsystem Live Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                      <span>HV Pack Bus</span>
                      <BatteryCharging className="w-3.5 h-3.5 text-cyan" />
                    </div>
                    <div className="text-xl font-bold font-mono text-white">812.4 V</div>
                    <div className="text-[10px] font-mono text-cyan">SoC: 88.5% | SoH: 99.4%</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                      <span>E-Axle Inverter</span>
                      <Zap className="w-3.5 h-3.5 text-electric" />
                    </div>
                    <div className="text-xl font-bold font-mono text-white">98.9% Eff</div>
                    <div className="text-[10px] font-mono text-emerald-400">SiC Temp: 64.2°C</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                      <span>ADAS Latency</span>
                      <Eye className="w-3.5 h-3.5 text-cyan" />
                    </div>
                    <div className="text-xl font-bold font-mono text-white">24.8 ms</div>
                    <div className="text-[10px] font-mono text-cyan">64 Active Tracklets</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/60 mb-1">
                      <span>AUTOSAR Stack</span>
                      <Cpu className="w-3.5 h-3.5 text-electric" />
                    </div>
                    <div className="text-xl font-bold font-mono text-white">ASIL-D</div>
                    <div className="text-[10px] font-mono text-emerald-400">Lockstep Active</div>
                  </div>
                </div>

                {/* Live Diagnostic Console Feed */}
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] leading-relaxed text-white/80 space-y-1">
                  <div className="text-cyan/90 flex items-center justify-between">
                    <span>&gt; CAN_ID: 0x18F00503 [BMS_PackTelemetry]</span>
                    <span className="text-[9px] text-white/40">CRC PASS</span>
                  </div>
                  <div className="text-white/60">&gt; Cell #078 delta: 1.8mV | Cooling valve duty: 34%</div>
                  <div className="text-emerald-400">&gt; AUTOSAR SOA: Diagnostic over IP (DoIP) ready</div>
                  <div className="text-cyan/80">&gt; Perception: 4D Radar cluster synchronized with Cam01</div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan" />
                    ISO 14229 UDS Session Active
                  </span>
                  <span className="font-mono text-cyan">1000BASE-T1</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE EV SKATEBOARD & POWERTRAIN ARCHITECTURE SANDBOX */}
      <section id="ev-architecture-sandbox" className="py-24 bg-section border-b border-navy/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Interactive System Architecture"
            title="Software-Defined EV Skateboard Architecture"
            subtitle="Explore our modular, ASIL-D functional-safety compliant sub-systems engineered for next-generation electric and autonomous vehicles."
            align="center"
          />

          {/* Subsystem Switcher Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10 mb-12">
            {[
              { id: 'bms', label: '800V High-Voltage BMS', icon: BatteryCharging },
              { id: 'inverter', label: 'Dual SiC Traction Inverter', icon: Zap },
              { id: 'adas', label: '360° ADAS Perception Array', icon: Eye },
              { id: 'telematics', label: 'AUTOSAR & C-V2X Gateway', icon: Radio },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSubsystem === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubsystem(tab.id as any)}
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

          {/* Subsystem Interactive Inspector Card */}
          <div className="bg-white rounded-3xl border border-navy/10 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Photographic and Subsystem Schematic View */}
              <div className="lg:col-span-5 relative bg-navy overflow-hidden min-h-[380px] lg:min-h-full">
                <img
                  src={activeData.image}
                  alt={activeData.name}
                  className="w-full h-full object-cover opacity-60 filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-navy/80 backdrop-blur-md text-[10px] font-mono text-cyan uppercase tracking-wider border border-white/10 font-semibold">
                    {activeData.category}
                  </span>
                  <div className="flex items-center gap-2 bg-black/60 px-2.5 py-1 rounded-md text-[10px] font-mono text-emerald-400 border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>HIL SIM ACTIVE</span>
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl font-bold font-display text-white mb-1">
                    {activeData.name}
                  </h4>
                  <p className="text-xs text-white/70 line-clamp-2">
                    {activeData.description}
                  </p>
                </div>
              </div>

              {/* Right Column: Detailed Telemetry and Engineering Highlights */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-navy/10 mb-6">
                    <div>
                      <span className="text-xs font-mono font-bold text-electric uppercase tracking-wider block">
                        Subsystem Telemetry
                      </span>
                      <h3 className="text-2xl font-bold font-display text-navy mt-0.5">
                        {activeData.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => setIsSimulating(!isSimulating)}
                      className="px-3 py-1.5 rounded-lg bg-navy/5 hover:bg-navy/10 text-navy text-xs font-mono flex items-center gap-1.5 border border-navy/10 cursor-pointer"
                    >
                      {isSimulating ? <Pause className="w-3.5 h-3.5 text-electric" /> : <Play className="w-3.5 h-3.5 text-cyan" />}
                      <span>{isSimulating ? 'Pause Stream' : 'Resume'}</span>
                    </button>
                  </div>

                  {/* Telemetry Registers Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                    {Object.entries(activeData.specs).map(([key, val]) => (
                      <div key={key} className="p-3.5 rounded-xl bg-section border border-navy/5">
                        <span className="text-[10px] font-mono text-navy/50 uppercase tracking-wider block mb-1">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </span>
                        <span className="text-sm font-bold font-mono text-navy block truncate">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Architectural Description & Highlights */}
                  <div className="space-y-4 mb-6">
                    <h5 className="text-xs font-mono font-bold text-navy uppercase tracking-wider">
                      Firmware & Systems Implementation Details
                    </h5>
                    <p className="text-sm text-navy/70 leading-relaxed">
                      {activeData.description}
                    </p>
                    <ul className="space-y-2 pt-2">
                      {activeData.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-navy/80">
                          <CheckCircle2 className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 border-t border-navy/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-navy/60">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>ISO 26262 ASIL-D Compliant Architecture</span>
                  </div>
                  <Link
                    to="/solutions/autodrive-intelligence"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-electric hover:text-navy uppercase tracking-wider"
                  >
                    <span>View Connected Mobility Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MULTI-LAYER IN-VEHICLE SOFTWARE & AUTOSAR STACK */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Full-Stack In-Vehicle Software"
            title="End-to-End Automotive Systems Architecture"
            subtitle="From hardware abstraction layers to cloud edge synchronization, our engineering services deliver dependable, high-assurance software."
            dark
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-14">
            {[
              {
                layer: 'Layer 01',
                title: 'Sensor & Actuator Interface',
                desc: 'Millimeter-wave radar, optical sensors, resolver feedback, and current shunt transceivers connected via high-speed SPI and CAN-FD buses.',
                tech: 'CAN-FD / LIN / FlexRay / SPI',
              },
              {
                layer: 'Layer 02',
                title: 'AUTOSAR Classic & Adaptive BSW',
                desc: 'Microcontroller abstraction layer (MCAL), memory stack, and communication management running on dual lockstep Cortex-R52 cores.',
                tech: 'Vector DaVinci / Elektrobit / MCAL',
              },
              {
                layer: 'Layer 03',
                title: 'Vehicle Supervisory & ADAS Logic',
                desc: 'ISO 26262 ASIL-D control loops governing torque vectoring, thermal loops, regenerative braking, and trajectory planning.',
                tech: 'Simulink Embedded Coder / C++20',
              },
              {
                layer: 'Layer 04',
                title: 'Connected Cloud Telematics & OTA',
                desc: 'Secure edge telematics bridging vehicle bus data with cloud digital twins, fleet analytics, and differential A/B over-the-air updates.',
                tech: 'C-V2X / MQTT / DoIP / TLS 1.3',
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

      {/* 4. REAL AUTOMOTIVE TEST & SIMULATION GALLERY */}
      <section className="py-24 bg-white border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono font-bold text-electric uppercase tracking-wider block mb-2">
                Verification & Proving Grounds
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
                Rigorous Automotive Test & Validation Environments
              </h2>
            </div>
            <p className="text-sm text-navy/60 max-w-md mt-4 md:mt-0 font-normal">
              From hardware-in-the-loop (HIL) dynamometer benches to electromagnetic compatibility chambers, we ensure zero-defect automotive deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group rounded-3xl overflow-hidden border border-navy/10 bg-section shadow-sm hover:shadow-card transition-all">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1558441719-8b489c63f732?w=800&q=80"
                  alt="High-Voltage EV Battery Pack Validation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-mono text-cyan font-semibold">
                  EV Battery Thermal Testing
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold font-display text-navy mb-2">
                  High-Voltage Pack Climatic Stress Bench
                </h4>
                <p className="text-xs text-navy/70 leading-relaxed font-normal">
                  Chambers cycling packs from -40°C to +85°C while executing continuous 4C fast-charging protocols to validate thermal stability and cell longevity.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden border border-navy/10 bg-section shadow-sm hover:shadow-card transition-all">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80"
                  alt="ADAS Hardware-in-the-Loop Simulation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-mono text-cyan font-semibold">
                  HIL ADAS Test Rig
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold font-display text-navy mb-2">
                  Full-Loop ADAS Radar & Camera Injection
                </h4>
                <p className="text-xs text-navy/70 leading-relaxed font-normal">
                  Real-time physics engines feeding synthetic raw CSI-2 video and millimeter-wave RF echoes into automotive ECUs for edge-case safety validation.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden border border-navy/10 bg-section shadow-sm hover:shadow-card transition-all">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
                  alt="Connected Cockpit & IVI Ergonomics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-mono text-cyan font-semibold">
                  IVI & Cockpit Integration
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold font-display text-navy mb-2">
                  Multi-Display Software Cockpit Workbench
                </h4>
                <p className="text-xs text-navy/70 leading-relaxed font-normal">
                  Android Automotive OS virtualization alongside safety-critical real-time cluster OS running on hypervisors with zero screen freeze tolerance.
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
            title="Automotive Engineering Capabilities"
            subtitle="Tailored engineering services supporting Tier-1 suppliers and mobility disruptors across the entire V-Model development cycle."
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
                    <span>V-Model Verified</span>
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
            Accelerate Your Automotive & Mobility Engineering Initiatives
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 font-normal">
            Partner with Snesar.MD to integrate high-voltage battery management systems, ISO 26262 ASIL-D software, and multi-sensor ADAS perception into your next vehicle platform.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-electric text-white font-bold text-xs uppercase tracking-wider hover:bg-electric-600 shadow-glow transition-all"
            >
              Consult with Automotive Practice Experts
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-3.5 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 border border-white/15 transition-all"
            >
              Review Automotive Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
