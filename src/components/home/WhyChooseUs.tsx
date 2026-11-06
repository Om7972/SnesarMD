import { motion } from 'framer-motion';
import {
  Globe, Lightbulb, Scaling, FlaskConical,
  PackageCheck, ShieldCheck, Users, ArrowRight
} from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Globe,
    title: 'Cross-Industry Engineering Expertise',
    description: 'Our teams bring deep domain knowledge spanning industrial automation, medical technology, sports engineering, automotive systems, and intelligent automation.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-Driven Approach',
    description: 'We stay at the forefront of emerging technologies, integrating AI, IoT, computer vision, and advanced analytics into practical, production-ready solutions.',
  },
  {
    icon: Scaling,
    title: 'Scalable Technology Solutions',
    description: 'Our architectures are designed to scale — from proof-of-concept to enterprise-grade deployments — growing with your business needs.',
  },
  {
    icon: FlaskConical,
    title: 'Research & Development Capabilities',
    description: 'We invest in continuous R&D to explore new engineering methods, evaluate emerging platforms, and develop proprietary technology concepts.',
  },
  {
    icon: PackageCheck,
    title: 'End-to-End Project Delivery',
    description: 'From requirement analysis and architecture design through development, testing, and deployment, we manage the complete engineering lifecycle.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Reliability',
    description: 'Rigorous testing, validation, and quality assurance processes ensure every solution meets the highest standards of performance and reliability.',
  },
  {
    icon: Users,
    title: 'Customer-Centric Engineering',
    description: 'We build collaborative partnerships with our clients, aligning our engineering efforts with your strategic objectives and operational priorities.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Engineering Credibility"
          title="Why Choose Snesar.MD?"
          subtitle="Enterprise engineering excellence backed by domain expertise, innovation, and an uncompromising commitment to technical precision."
          align="center"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const indexNumber = String(i + 1).padStart(2, '0');

            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group p-7 rounded-2xl bg-section border border-navy/5 hover:border-electric/30 hover:bg-white hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-electric/10 text-electric flex items-center justify-center group-hover:bg-electric group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-navy-300 group-hover:text-electric transition-colors">
                      #{indexNumber}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-navy mb-2.5 group-hover:text-electric transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-navy-500 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-navy/5 flex items-center gap-1.5 text-xs font-bold text-electric opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Core Pillar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}

          {/* 8th Card: Direct Partnership Callout */}
          <motion.div
            variants={cardVariants}
            className="p-7 rounded-2xl bg-navy text-white border border-navy/20 shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-electric/25 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block mb-3 font-semibold">
                DIRECT CONSULTATION
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Have a Complex Engineering Specification?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 font-normal">
                Our Principal Architects will conduct a preliminary feasibility review and architecture recommendation for your team.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10">
              <Link
                to="/contact"
                className="w-full py-3.5 px-4 rounded-xl bg-electric hover:bg-electric-600 text-white font-bold text-xs uppercase tracking-wider text-center block transition-all shadow-md shadow-electric/25"
              >
                Schedule Technical Review
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
