import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Trophy, Eye, Workflow, Radio, Zap, Cpu, BarChart3, Boxes,
  CheckCircle2, ArrowRight, Activity, ShieldCheck, Play, Pause,
  Target, TrendingUp, Sliders
} from 'lucide-react';
import { Industry } from '@/data/industries';
import SectionHeading from '@/components/common/SectionHeading';

interface Props {
  industry: Industry;
}

export default function SportsEngineeringView({ industry }: Props) {
  // Interactive Motion Tracking State
  const [selectedMovement, setSelectedMovement] = useState<'sprint' | 'jump' | 'cutting'>('sprint');
  const [showVectors, setShowVectors] = useState(true);

  const movementData = {
    sprint: {
      title: 'Maximum Velocity Sprint Kinematics (60m Split)',
      metrics: {
        strideFrequency: '4.68 Hz',
        strideLength: '2.34 m',
        groundContactTime: '88 ms',
        horizontalForce: '1,240 N',
        trunkAngle: '6.4 deg Forward',
        asymmetryDelta: '1.2% (Elite Balance)',
      },
      image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=900&q=80',
      description: 'Computer vision tracking 33 skeletal keypoints calculating hip extension velocity and foot strike braking vectors at 240 frames per second.',
      jointAngle: 'Knee Angle at Strike: 142&deg; &middot; Pelvic Tilt: 12&deg;',
    },
    jump: {
      title: 'Countermovement Jump (CMJ) & Force Plate Telemetry',
      metrics: {
        jumpHeight: '68.4 cm',
        peakPower: '5,820 W',
        rateOfForce: '14,200 N/s',
        eccentricDuration: '280 ms',
        concentricDuration: '210 ms',
        rsiModified: '0.48 (Explosive)',
      },
      image: 'https://images.unsplash.com/photo-1461896836934-bd45ba8a0936?w=900&q=80',
      description: 'Dual piezoelectric force platform acquisition paired with synchronized high-speed video analyzing reactive strength index and landing deceleration.',
      jointAngle: 'Lowest Squat Depth: 84&deg; &middot; Takeoff Velocity: 3.66 m/s',
    },
    cutting: {
      title: 'Multi-Directional Change of Direction (COD 90&deg; Cut)',
      metrics: {
        entrySpeed: '6.4 m/s',
        exitSpeed: '4.8 m/s',
        kneeValgusMoment: '42 Nm (Safe Zone)',
        plantContactTime: '185 ms',
        decelerationPeak: '-7.2 m/s²',
        limbSymmetry: '97.8% (Left / Right)',
      },
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=80',
      description: 'Markerless biomechanical screening quantifying dynamic knee valgus angles during rapid lateral deceleration to minimize non-contact ACL injury risk.',
      jointAngle: 'Max Dynamic Valgus: 4.8&deg; (Within Tolerance)',
    },
  };

  const currentMovement = movementData[selectedMovement];

  return (
    <div className="space-y-0">
      {/* 1. CINEMATIC KINETIC & ATHLETE TRACKING HERO */}
      <section className="relative min-h-[90vh] bg-navy text-white flex items-center overflow-hidden pt-20 pb-16">
        {/* Real Track Athlete / Biomechanics Motion Tracking Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1920&q=80&auto=format&fit=crop"
            alt="Sports Engineering Athlete Tracking &amp; Biomechanics by Snesar.MD"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-30 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/70" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-navy/60 to-navy" />
        </div>

        {/* Kinetic Grid & Electric Glow */}
        <div className="absolute inset-0 grid-pattern-dark opacity-35 z-0 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-electric/25 blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-emerald-500/15 blur-[130px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-electric/15 text-cyan border border-cyan/30 backdrop-blur-md mb-6">
                <Trophy className="w-4 h-4 text-cyan" />
                <span>Practice Area &middot; Sports Engineering &amp; Human Performance</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                Where Engineering Meets{' '}
                <span className="text-gradient">Human Performance.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl font-normal">
                {industry.heroSubheading}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#motion-tracking"
                  className="px-8 py-4 rounded-xl bg-electric hover:bg-electric-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-glow"
                >
                  Inspect Motion Tracking Sandbox
                </a>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 backdrop-blur-sm"
                >
                  Consult Sports Tech Engineers
                </Link>
              </div>

              {/* Protocol Badges */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-white/60">
                <span className="text-cyan font-semibold">SENSOR STACK:</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/90">200 Hz 9-DOF IMU</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/90">240 FPS Optical Vision</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/90">Force Plates 1000 Hz</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/90">BLE 5.3 Low-Latency</span>
              </div>
            </div>

            {/* Right: Live Biomechanics Telemetry HUD Widget */}
            <div className="lg:col-span-5">
              <div className="bg-navy/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 border border-white/15 shadow-2xl relative">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold uppercase text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    MOTION STREAM ACTIVE: 60 FPS
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-cyan">
                    33 KEYPOINTS TRACKED
                  </span>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-white/50 block">GROUND REACTION FORCE (PEAK)</span>
                      <span className="text-2xl font-bold font-display text-white">2,840 <span className="text-sm font-mono text-cyan">Newtons (Fz)</span></span>
                    </div>
                    <Activity className="w-7 h-7 text-cyan" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] font-mono text-white/50 block">ANGULAR VELOCITY</span>
                      <span className="text-base font-bold text-white font-mono">640 deg/s</span>
                      <span className="text-[10px] text-cyan block mt-0.5">Knee Flexion Velocity</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] font-mono text-white/50 block">LIMB SYMMETRY</span>
                      <span className="text-base font-bold text-emerald-400 font-mono">98.4%</span>
                      <span className="text-[10px] text-white/50 block mt-0.5">Left vs Right Delta</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-white/70 flex items-center justify-between font-mono">
                  <span>MARKERLESS LATENCY</span>
                  <span className="text-cyan font-bold">&lt; 12ms On-Device</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE MOTION CAPTURE & BIOMECHANICS SANDBOX */}
      <section id="motion-tracking" className="py-20 md:py-28 bg-white border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Biomechanical Analytics"
            title="Interactive Markerless Motion Tracking Sandbox"
            subtitle="Select an athletic movement pattern to inspect skeletal joint angles, force plate impulse vectors, and dynamic symmetry indices."
            align="left"
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Movement Pattern Selectors */}
            <div className="lg:col-span-4 space-y-3">
              <button
                onClick={() => setSelectedMovement('sprint')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  selectedMovement === 'sprint'
                    ? 'bg-navy text-white border-electric shadow-xl translate-x-1'
                    : 'bg-section text-navy border-navy/5 hover:border-navy/20 hover:bg-white'
                }`}
              >
                <Zap className={`w-6 h-6 mt-1 shrink-0 ${selectedMovement === 'sprint' ? 'text-cyan' : 'text-electric'}`} />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-70">
                    PATTERN 01
                  </span>
                  <h4 className="text-base font-bold font-display">Sprint Kinematics (60m Split)</h4>
                  <p className="text-xs opacity-75 mt-1">Stride frequency, contact time, and ground reaction vector analysis</p>
                </div>
              </button>

              <button
                onClick={() => setSelectedMovement('jump')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  selectedMovement === 'jump'
                    ? 'bg-navy text-white border-electric shadow-xl translate-x-1'
                    : 'bg-section text-navy border-navy/5 hover:border-navy/20 hover:bg-white'
                }`}
              >
                <TrendingUp className={`w-6 h-6 mt-1 shrink-0 ${selectedMovement === 'jump' ? 'text-cyan' : 'text-electric'}`} />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-70">
                    PATTERN 02
                  </span>
                  <h4 className="text-base font-bold font-display">Countermovement Jump (CMJ)</h4>
                  <p className="text-xs opacity-75 mt-1">Force-velocity profiling, reactive strength, and peak mechanical power</p>
                </div>
              </button>

              <button
                onClick={() => setSelectedMovement('cutting')}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  selectedMovement === 'cutting'
                    ? 'bg-navy text-white border-electric shadow-xl translate-x-1'
                    : 'bg-section text-navy border-navy/5 hover:border-navy/20 hover:bg-white'
                }`}
              >
                <Target className={`w-6 h-6 mt-1 shrink-0 ${selectedMovement === 'cutting' ? 'text-cyan' : 'text-electric'}`} />
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-70">
                    PATTERN 03
                  </span>
                  <h4 className="text-base font-bold font-display">90&deg; Change of Direction Cut</h4>
                  <p className="text-xs opacity-75 mt-1">Dynamic knee valgus angle and deceleration force distribution</p>
                </div>
              </button>

              <div className="p-4 rounded-2xl bg-section border border-navy/10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-navy">Vector HUD Lines:</span>
                <button
                  onClick={() => setShowVectors(!showVectors)}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-colors ${
                    showVectors ? 'bg-cyan text-navy' : 'bg-navy/10 text-navy-400'
                  }`}
                >
                  {showVectors ? 'VISIBLE' : 'HIDDEN'}
                </button>
              </div>
            </div>

            {/* Live Movement Telemetry Screen */}
            <div className="lg:col-span-8 bg-navy rounded-3xl overflow-hidden border border-navy/20 shadow-2xl text-white">
              <div className="relative h-72 sm:h-80 overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={currentMovement.image}
                  alt={currentMovement.title}
                  className="w-full h-full object-cover filter contrast-125 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80" />

                {/* HUD Overlay */}
                <div className="absolute top-4 left-4 text-[10px] font-mono text-cyan/90 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                  FRAME RATE: 240 FPS &middot; CALIBRATED
                </div>
                <div className="absolute top-4 right-4 text-[10px] font-mono text-emerald-400 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                  SYNC: FORCE PLATES + 9-DOF IMU
                </div>

                {showVectors && (
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy/90 border border-cyan/40 backdrop-blur-md flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse" />
                      <span className="font-mono text-cyan font-bold">{currentMovement.jointAngle}</span>
                    </div>
                    <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/80">
                      LIVE INFERENCE
                    </span>
                  </div>
                )}
              </div>

              {/* Movement Telemetry Metrics */}
              <div className="p-6 sm:p-8 bg-navy/95">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold font-display text-white">{currentMovement.title}</h4>
                  <span className="text-xs font-mono text-cyan">BIOMECHANICS DATASET</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {Object.entries(currentMovement.metrics).map(([key, val]) => (
                    <div key={key} className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[10px] font-mono text-white/40 uppercase block">{key}</span>
                      <span className="text-xs font-mono font-bold text-white mt-0.5 block truncate">{val}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-white/70 leading-relaxed font-normal mb-6">
                  {currentMovement.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-white/60">
                  <span className="font-mono flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan" />
                    Validated Against Vicon Optical Motion Benchmark
                  </span>
                  <Link
                    to="/solutions/sportsense"
                    className="text-cyan hover:text-white font-mono font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <span>Inspect SportSense Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SENSOR FUSION & WEARABLE PIPELINE */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Sensor Architecture"
            title="Athlete Wearable &amp; Computer Vision Architecture"
            subtitle="How our high-throughput sensor fusion engines capture, filter, and stream physiological data in competitive arenas."
            align="left"
          />

          <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-navy/10 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-section border border-navy/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-electric uppercase block mb-2">STAGE 01</span>
                  <h4 className="text-base font-bold font-display text-navy mb-2">9-DOF Wearable Node</h4>
                  <p className="text-xs text-navy-500 leading-relaxed">Micro-IMU sensor nodes embedded in footwear and apparel capturing triaxial acceleration, angular rate, and magnetic heading at 200 Hz.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-navy/5 text-[11px] font-mono text-navy-400">Micro-IMU Array</div>
              </div>

              <div className="p-6 rounded-2xl bg-section border border-navy/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-800 uppercase block mb-2">STAGE 02</span>
                  <h4 className="text-base font-bold font-display text-navy mb-2">Kalman Orientation Filter</h4>
                  <p className="text-xs text-navy-500 leading-relaxed">Embedded extended Kalman filtering (EKF) translating raw accelerometer drift into true quaternion orientation representations.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-navy/5 text-[11px] font-mono text-navy-400">Zero Gyroscope Drift</div>
              </div>

              <div className="p-6 rounded-2xl bg-section border border-navy/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-electric uppercase block mb-2">STAGE 03</span>
                  <h4 className="text-base font-bold font-display text-navy mb-2">Markerless Vision Fusion</h4>
                  <p className="text-xs text-navy-500 leading-relaxed">Synchronizing optical video streams with IMU telemetry using time-stamped PTP network triggers for comprehensive 3D pose reconstruction.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-navy/5 text-[11px] font-mono text-navy-400">Optical + Inertial Sync</div>
              </div>

              <div className="p-6 rounded-2xl bg-section border border-navy/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-800 uppercase block mb-2">STAGE 04</span>
                  <h4 className="text-base font-bold font-display text-navy mb-2">Tactical Coaching Portal</h4>
                  <p className="text-xs text-navy-500 leading-relaxed">Real-time sideline analytics on iPad and desktop dashboards alerting coaching staff to asymmetric mechanical loads and fatigue thresholds.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-navy/5 text-[11px] font-mono text-navy-400">Sub-second Latency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL SPORTS ENGINEERING PHOTOGRAPHY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Laboratory & Track"
            title="Sports Engineering in the Field"
            subtitle="High-performance laboratory testing, wind tunnel aerodynamics, and on-field optical telemetry developed by Snesar.MD."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-3xl overflow-hidden shadow-card border border-navy/10 relative h-80">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&q=80"
                alt="Track Sprint Biomechanics Telemetry"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block font-semibold">TRACK TELEMETRY</span>
                <h4 className="text-lg font-bold font-display">Sprint Velocity &amp; Horizontal Impulse</h4>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden shadow-card border border-navy/10 relative h-80">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
                alt="Sports Performance Motion Analytics"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block font-semibold">TACTICAL KINEMATICS</span>
                <h4 className="text-lg font-bold font-display">Multi-Directional Change of Direction</h4>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden shadow-card border border-navy/10 relative h-80">
              <img
                src="https://images.unsplash.com/photo-1461896836934-bd45ba8a0936?w=800&q=80"
                alt="Force Platform Jump Mechanics"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block font-semibold">FORCE PLATFORMS</span>
                <h4 className="text-lg font-bold font-display">Explosive Power &amp; Mechanical Load</h4>
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
            title="Sports Engineering Services"
            subtitle="Engineered systems for professional sports teams, equipment manufacturers, and athlete federations."
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
                    FIELD_VERIFIED &rarr;
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
            Transform Athletic Performance Through Engineering
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 font-normal">
            Partner with Snesar.MD to integrate high-speed computer vision, wearable sensors, and biomechanical analytics into your sports tech programs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-electric text-white font-bold text-xs uppercase tracking-wider hover:bg-electric-600 shadow-glow transition-all"
            >
              Consult Sports Engineering Specialists
            </Link>
            <Link
              to="/solutions/sportsense"
              className="px-8 py-3.5 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 border border-white/15 transition-all"
            >
              Review SportSense Platform Architecture
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

