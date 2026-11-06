export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  industry: string;
  industrySlug: string;
  challenge: string;
  approach: string;
  solution: string;
  technologies: string[];
  outcomes: string[];
  image: string;
  isDemo: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Smart Factory Monitoring System',
    slug: 'smart-factory-monitoring',
    industry: 'Industrial Automation',
    industrySlug: 'industrial-automation',
    challenge: 'A manufacturing facility needed real-time visibility into production line performance, equipment health, and quality metrics to reduce unplanned downtime and improve overall equipment effectiveness.',
    approach: 'Designed and implemented an IoT-based monitoring architecture with edge gateways collecting data from PLCs and sensors, streaming to a cloud analytics platform with real-time dashboards and predictive maintenance models.',
    solution: 'Deployed a comprehensive factory monitoring platform with 200+ sensor endpoints, real-time OEE tracking, predictive maintenance alerts, and automated shift reports. The system includes a digital twin visualization for factory layout monitoring.',
    technologies: ['Industrial IoT', 'Azure IoT Hub', 'Time Series Database', 'Machine Learning', 'React Dashboard', 'OPC-UA'],
    outcomes: [
      'Real-time visibility across all production lines',
      'Predictive maintenance capabilities reducing unplanned stops',
      'Automated quality inspection integration',
      'Centralized dashboard for plant management',
    ],
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80',
    isDemo: true,
  },
  {
    id: 'cs-2',
    title: 'Radiology Workflow Intelligence Platform',
    slug: 'radiology-workflow-platform',
    industry: 'Medical Technology',
    industrySlug: 'medical-technology',
    challenge: 'A healthcare organization required a system to assist radiologists with high-volume imaging workloads by automating routine measurements and helping prioritize urgent cases in the reading worklist.',
    approach: 'Developed an AI-assisted imaging pipeline that integrates with the existing PACS infrastructure. Built deep learning models for automated measurement and prioritization, with a focus on clinician-in-the-loop verification.',
    solution: 'Delivered an assistive radiology platform that performs automated measurements on routine studies, flags potential urgent findings for priority review, and generates structured report templates. All AI outputs require clinician verification before clinical use.',
    technologies: ['Deep Learning', 'DICOM', 'HL7 FHIR', 'Python', 'TensorFlow', 'Cloud Computing'],
    outcomes: [
      'Streamlined radiology reading workflow',
      'Automated measurement capabilities for routine studies',
      'Intelligent worklist prioritization',
      'Structured reporting with reduced documentation time',
    ],
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
    isDemo: true,
  },
  {
    id: 'cs-3',
    title: 'Athlete Performance Analytics Platform',
    slug: 'athlete-performance-analytics',
    industry: 'Sports Engineering',
    industrySlug: 'sports-engineering',
    challenge: 'A sports organization wanted to implement data-driven training optimization using computer vision for movement analysis and wearable sensors for physiological monitoring to improve athlete performance.',
    approach: 'Built a comprehensive analytics platform combining markerless motion capture, wearable sensor data integration, and machine learning models for performance prediction and injury risk assessment.',
    solution: 'Delivered an integrated sports analytics platform with real-time motion analysis, training load monitoring, performance benchmarking, and interactive coaching dashboards with video annotation capabilities.',
    technologies: ['Computer Vision', 'MediaPipe', 'Python', 'React', 'D3.js', 'PostgreSQL', 'Wearable Integration'],
    outcomes: [
      'Real-time biomechanical analysis capabilities',
      'Integrated training load and recovery monitoring',
      'Interactive coaching dashboard with video analysis',
      'Historical performance trend tracking',
    ],
    image: 'https://images.unsplash.com/photo-1461896836934-bd45ba8a0936?w=600&q=80',
    isDemo: true,
  },
  {
    id: 'cs-4',
    title: 'Connected Vehicle Telematics Platform',
    slug: 'connected-vehicle-telematics',
    industry: 'Automotive Engineering',
    industrySlug: 'automotive-engineering',
    challenge: 'An automotive company needed a cloud-connected telematics platform to enable real-time vehicle diagnostics, over-the-air updates, and predictive maintenance for their fleet of electric vehicles.',
    approach: 'Designed a scalable cloud architecture for vehicle data ingestion, processing, and analytics. Built edge computing modules for the vehicle and a comprehensive fleet management dashboard.',
    solution: 'Deployed a connected vehicle platform handling real-time telemetry from vehicle sensors, with cloud-based analytics for predictive maintenance, battery health monitoring, and fleet-wide performance optimization.',
    technologies: ['Automotive IoT', 'AWS IoT Core', 'Edge Computing', 'React', 'Python', 'CAN Bus', 'MQTT'],
    outcomes: [
      'Real-time vehicle health monitoring',
      'Over-the-air update infrastructure',
      'Predictive maintenance model deployment',
      'Fleet-wide analytics dashboard',
    ],
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&q=80',
    isDemo: true,
  },
  {
    id: 'cs-5',
    title: 'Enterprise Invoice Processing Automation',
    slug: 'invoice-processing-automation',
    industry: 'RPA & Intelligent Automation',
    industrySlug: 'rpa-intelligent-automation',
    challenge: 'An enterprise organization processed thousands of invoices monthly across multiple formats and systems, requiring significant manual effort for data entry, validation, and approval routing.',
    approach: 'Implemented an intelligent automation pipeline combining OCR, NLP-based data extraction, RPA for system interactions, and workflow orchestration with human-in-the-loop exception handling.',
    solution: 'Delivered an end-to-end invoice automation platform that extracts data from multi-format invoices, validates against purchase orders, routes for approval, and posts to the accounting system with full audit trail.',
    technologies: ['UiPath', 'OCR', 'NLP', 'Python', 'REST APIs', 'Power Automate', 'SQL Server'],
    outcomes: [
      'Automated end-to-end invoice processing pipeline',
      'Intelligent data extraction from multiple formats',
      'Exception handling with human review workflow',
      'Complete audit trail and compliance reporting',
    ],
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=80',
    isDemo: true,
  },
  {
    id: 'cs-6',
    title: 'EV Battery Management System',
    slug: 'ev-battery-management',
    industry: 'Automotive Engineering',
    industrySlug: 'automotive-engineering',
    challenge: 'An electric vehicle manufacturer needed a comprehensive battery management system for monitoring cell-level health, optimizing charging profiles, and predicting battery degradation across their EV fleet.',
    approach: 'Developed an embedded BMS solution with cloud-connected analytics. Built machine learning models for state estimation and degradation prediction using historical battery cycling data.',
    solution: 'Delivered a battery intelligence platform combining embedded monitoring with cloud analytics for real-time cell health tracking, smart charging optimization, thermal management, and fleet-wide battery lifecycle prediction.',
    technologies: ['Embedded C', 'CAN Bus', 'Python', 'TensorFlow', 'AWS IoT', 'React Dashboard', 'Time Series DB'],
    outcomes: [
      'Cell-level health monitoring and diagnostics',
      'Adaptive charging profile optimization',
      'Battery degradation prediction models',
      'Fleet-wide battery analytics dashboard',
    ],
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80',
    isDemo: true,
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(cs => cs.slug === slug);
};

export const getCaseStudiesByIndustry = (industrySlug: string): CaseStudy[] => {
  return caseStudies.filter(cs => cs.industrySlug === industrySlug);
};

