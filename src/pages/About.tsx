import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Award, Lightbulb, Handshake, Shield, BookOpen, Globe,
  User, Cpu, Code, Brain, CloudCog, Factory, Wifi,
  Microscope, Boxes, CheckCircle2, ArrowRight, Activity, Terminal
} from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionHeading from '@/components/common/SectionHeading';
import { Link } from 'react-router-dom';

const coreValues = [
  {
    title: 'Engineering Excellence',
    description: 'Uncompromising commitment to quality, precision, and technical rigor in every architecture we deliver.',
    icon: Award,
  },
  {
    title: 'Innovation First',
    description: 'Continuous pursuit of breakthrough technologies that push the boundaries of industrial feasibility.',
    icon: Lightbulb,
  },
  {
    title: 'Customer Partnership',
    description: 'Deep, collaborative integration with client teams, treating mission-critical challenges as our own.',
    icon: Handshake,
  },
  {
    title: 'Integrity & Transparency',
    description: 'Ethical governance, rigorous intellectual property protections, and transparent engineering reporting.',
    icon: Shield,
  },
  {
    title: 'Continuous Mastery',
    description: 'Evolving domain expertise through internal laboratory research, prototyping, and cross-functional learning.',
    icon: BookOpen,
  },
  {
    title: 'Global Perspective',
    description: 'Multidisciplinary thinking for worldwide impact, adhering to international safety and engineering standards.',
    icon: Globe,
  },
];

const leadershipTeam = [
  {
    name: 'Placeholder Profile',
    title: 'Chief Executive Officer',
    department: 'Executive Leadership',
    bio: 'Guiding global corporate strategy and international engineering delivery with a focus on sustainable technological transformation.',
  },
  {
    name: 'Placeholder Profile',
    title: 'Chief Technology Officer',
    department: 'R&D & System Architecture',
    bio: 'Overseeing core systems engineering, embedded hardware laboratories, and cognitive computing innovation roadmaps.',
  },
  {
    name: 'Placeholder Profile',
    title: 'VP of Engineering Practices',
    department: 'Cross-Domain Operations',
    bio: 'Leading multi-disciplinary delivery across industrial automation, automotive robotics, and medical technologies.',
  },
  {
    name: 'Placeholder Profile',
    title: 'VP of Technology Solutions',
    department: 'Enterprise Architecture',
    bio: 'Directing scalable digital twin frameworks, cloud telemetry infrastructure, and client solution integrations.',
  },
];

const techExpertise = [
  { title: 'Artificial Intelligence & ML', icon: Brain, domain: 'Cognitive Computing' },
  { title: 'Cloud & Edge Telemetry', icon: CloudCog, domain: 'Distributed Systems' },
  { title: 'Industrial Automation', icon: Factory, domain: 'Deterministic Control' },
  { title: 'IoT & Connected Devices', icon: Wifi, domain: 'Sensor Networks' },
  { title: 'Embedded Systems & BMS', icon: Cpu, domain: 'Firmware & ASIL-D' },
  { title: 'Enterprise Software', icon: Code, domain: 'Full-Stack Architecture' },
  { title: 'Medical Instrumentation', icon: Microscope, domain: 'Healthcare Systems' },
  { title: 'Digital Twin & Simulation', icon: Boxes, domain: 'Physics Simulation' },
];

const innovationApproach = [
  {
    step: '01',
    title: 'Feasibility & Physics-Based Modeling',
    description: 'Rigorous technical requirements discovery, constraints identification, and mathematical simulation before committing hardware resources.',
  },
  {
    step: '02',
    title: 'Modular System Architecture',
    description: 'Partitioning subsystems into clean, decoupled interfaces ensuring high maintainability, deterministic latency, and compliance alignment.',
  },
  {
    step: '03',
    title: 'HIL / SIL Prototyping & Stress Testing',
    description: 'Deploying Hardware-in-the-Loop (HIL) and Software-in-the-Loop (SIL) simulation rigs to identify edge-case anomalies early in development.',
  },
  {
    step: '04',
    title: 'Verification, Validation & Deployment',
    description: 'Comprehensive automated test suites, functional safety signoffs, and synchronized production deployment with continuous telemetry.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  useEffect(() => {
    document.title = 'About Snesar.MD | Global Engineering & Technology Solutions';
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-35 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-electric/20 blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 text-cyan border border-white/10 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              Corporate Dossier
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Engineering Innovation Across Every Dimension
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed font-normal">
              A global engineering and technology solutions company dedicated to solving mission-critical real-world challenges through deep domain expertise and scientific rigor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview & Identity */}
      <section className="py-20 md:py-28 bg-white border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-electric block mb-3">
              Corporate Mission
            </span>
            <p className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-navy leading-relaxed mb-8">
              We are <span className="text-electric">Snesar.MD</span> — a global engineering and technology solutions company delivering innovative engineering services across{' '}
              <span className="text-navy-900 border-b-2 border-cyan">Industrial Automation</span>,{' '}
              <span className="text-navy-900 border-b-2 border-electric">Medical Technology</span>,{' '}
              <span className="text-navy-900 border-b-2 border-cyan">Sports Engineering</span>,{' '}
              <span className="text-navy-900 border-b-2 border-electric">Automotive Engineering</span>, and{' '}
              <span className="text-navy-900 border-b-2 border-cyan">RPA &amp; Intelligent Automation</span>.
            </p>
            <p className="text-base text-navy-500 leading-relaxed max-w-3xl mx-auto font-normal">
              Our multidisciplinary engineering teams combine computational prowess with deep industrial domain knowledge. We design, prototype, validate, and scale high-reliability systems built to thrive in extreme operating conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-navy/10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-electric/10 text-electric flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-electric block mb-1">
                  Strategic Horizon
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-4">Our Vision</h3>
                <p className="text-navy-600 leading-relaxed text-base sm:text-lg font-normal">
                  To be a global leader in engineering innovation, transforming industries through technology, scientific precision, and human ingenuity.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-navy/5 flex items-center gap-2 text-xs font-mono text-navy-400">
                <CheckCircle2 className="w-4 h-4 text-electric" />
                <span>Pioneering Sustainable & Resilient Engineering</span>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-navy/10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-800 block mb-1">
                  Core Purpose
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-4">Our Mission</h3>
                <p className="text-navy-600 leading-relaxed text-base sm:text-lg font-normal">
                  To deliver exceptional engineering solutions that help our clients solve complex challenges, accelerate technical innovation, and build intelligent systems for the future.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-navy/5 flex items-center gap-2 text-xs font-mono text-navy-400">
                <CheckCircle2 className="w-4 h-4 text-cyan" />
                <span>End-to-End Multidisciplinary Delivery</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Guiding Principles"
            title="Our Core Engineering Values"
            subtitle="The non-negotiable standards and technical ethos governing every line of code, firmware routine, and mechanical blueprint we produce."
            align="center"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="group bg-white border border-navy/10 rounded-3xl p-7 hover:border-electric/30 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-electric/10 text-electric flex items-center justify-center mb-5 group-hover:bg-electric group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-display text-xl font-bold text-navy mb-2.5 group-hover:text-electric transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-navy-400 leading-relaxed text-xs sm:text-sm font-normal">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Engineering Philosophy Manifesto */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-electric/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan block mb-4">
            Technical Manifesto
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Our Engineering Philosophy
          </h2>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-6 font-normal">
            At Snesar.MD, engineering is more than solving isolated problems — it is about fundamentally rethinking how physical and digital systems interact. We approach every engagement with a rigorous systems-thinking mindset, combining cross-domain insights with deep deterministic reliability.
          </p>
          <p className="text-white/60 leading-relaxed text-sm sm:text-base font-normal max-w-2xl mx-auto">
            Our engineers operate where silicon meets software, where mechanical kinematics meet machine intelligence. By upholding uncompromising standards in testing, simulation, and verification, we ensure that every solution deployed performs reliably under real-world stress.
          </p>
        </div>
      </section>

      {/* Our Approach to Engineering Innovation */}
      <section className="py-20 md:py-28 bg-white border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Methodology"
            title="Our Approach to Engineering Innovation"
            subtitle="A systematic, hypothesis-driven lifecycle ensuring predictable project velocity and rock-solid system reliability."
            align="left"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovationApproach.map((item) => (
              <div
                key={item.step}
                className="p-7 rounded-3xl bg-section border border-navy/10 flex flex-col justify-between hover:shadow-card transition-all"
              >
                <div>
                  <span className="text-2xl font-display font-bold text-electric block mb-4">
                    {item.step}
                  </span>
                  <h4 className="text-lg font-bold text-navy mb-2 font-display">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-navy-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-navy/5 text-[11px] font-mono text-navy-400">
                  PHASE COMPLETE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-28 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Corporate Governance"
            title="Leadership Team"
            subtitle="Engineering executives steering technology roadmaps and strategic practice delivery."
            align="center"
          />

          <div className="max-w-2xl mx-auto bg-amber-50 border border-amber-200/80 rounded-2xl p-4 mb-12 text-center">
            <p className="text-amber-800 text-xs sm:text-sm font-medium">
              Note: The leadership profiles below represent placeholder role structures for demonstration purposes. Genuine executive personnel profiles will be integrated upon confirmation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-card border border-navy/10 text-center flex flex-col justify-between hover:shadow-card-hover transition-all group"
              >
                <div>
                  <div className="w-full aspect-square bg-gradient-to-b from-navy-50 to-navy-100 flex items-center justify-center relative overflow-hidden">
                    <div className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center text-navy-400 group-hover:scale-110 transition-transform">
                      <User className="w-10 h-10" />
                    </div>
                    <div className="absolute top-3 right-3 text-[10px] font-mono text-navy-400">
                      EXEC_0{idx + 1}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                      {member.department}
                    </span>
                    <h4 className="font-display text-lg font-bold text-navy">{member.name}</h4>
                    <p className="text-electric text-xs font-semibold mt-1">{member.title}</p>
                    <p className="text-navy-400 text-xs mt-3 leading-relaxed font-normal">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Domains of Mastery"
            title="Comprehensive Technology Expertise"
            subtitle="Deep cross-disciplinary competencies leveraged across our solutions and laboratory initiatives."
            align="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {techExpertise.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.title}
                  className="flex flex-col items-center text-center p-6 rounded-3xl bg-section border border-navy/10 hover:border-electric/30 hover:shadow-card transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-electric/10 text-electric flex items-center justify-center mb-4 group-hover:bg-electric group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-800 uppercase tracking-wider mb-1 font-semibold">
                    {tech.domain}
                  </span>
                  <h4 className="font-display text-sm sm:text-base font-bold text-navy">{tech.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
