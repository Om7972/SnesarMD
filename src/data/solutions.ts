export interface Solution {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  industry: string;
  industrySlug: string;
  technologies: string[];
  features: string[];
  icon: string;
  color: string;
}

export const solutions: Solution[] = [
  {
    id: 'smartfactory-360',
    name: 'SmartFactory 360',
    slug: 'smartfactory-360',
    tagline: 'Smart Manufacturing Monitoring',
    description: 'An illustrative smart manufacturing monitoring platform that provides real-time visibility into production operations, equipment health, and quality metrics across the factory floor. This concept demonstrates how IoT sensors, edge computing, and cloud analytics can be combined to create a comprehensive manufacturing intelligence system.',
    industry: 'Industrial Automation',
    industrySlug: 'industrial-automation',
    technologies: ['Industrial IoT', 'Edge Computing', 'Cloud Analytics', 'Digital Twin', 'Machine Learning', 'SCADA Integration'],
    features: [
      'Real-time production line monitoring',
      'Equipment health scoring and predictive alerts',
      'Quality inspection dashboard with defect tracking',
      'OEE calculation and trend analysis',
      'Digital twin visualization of factory assets',
      'Automated reporting and shift handover',
    ],
    icon: '🏭',
    color: '#1264E8',
  },
  {
    id: 'medivision-ai',
    name: 'MediVision AI',
    slug: 'medivision-ai',
    tagline: 'Medical Imaging Assistance & Radiology Workflow Intelligence',
    description: 'An illustrative AI-assisted medical imaging platform designed to support radiologists with workflow prioritization, automated measurements, and pattern detection. This concept demonstrates how artificial intelligence can augment clinical decision-making while keeping healthcare professionals in control. Note: This is an assistive technology concept, not an autonomous diagnostic tool.',
    industry: 'Medical Technology',
    industrySlug: 'medical-technology',
    technologies: ['Computer Vision', 'Deep Learning', 'DICOM', 'HL7 FHIR', 'Cloud Computing', 'Medical Image Processing'],
    features: [
      'AI-assisted worklist prioritization',
      'Automated measurement tools for radiology',
      'Pattern detection to flag potential findings for review',
      'Integration with PACS and RIS systems',
      'Structured reporting templates',
      'Clinician-in-the-loop verification workflows',
    ],
    icon: '🏥',
    color: '#16C6D9',
  },
  {
    id: 'sportsense',
    name: 'SportSense',
    slug: 'sportsense',
    tagline: 'Athlete Performance & Motion Analytics',
    description: 'An illustrative athlete performance analytics platform that uses computer vision and sensor data to track, analyze, and visualize athletic movements and physiological metrics. This concept showcases how engineering and data science can be applied to optimize training programs and competitive performance.',
    industry: 'Sports Engineering',
    industrySlug: 'sports-engineering',
    technologies: ['Computer Vision', 'Motion Capture', 'Wearable Sensors', 'Real-time Analytics', 'Data Visualization', 'Machine Learning'],
    features: [
      'Markerless motion capture and pose estimation',
      'Biomechanical analysis and technique scoring',
      'Training load monitoring and recovery tracking',
      'Performance comparison and benchmarking',
      'Interactive video analysis with annotations',
      'Customizable performance dashboards',
    ],
    icon: '🏆',
    color: '#1264E8',
  },
  {
    id: 'autodrive-intelligence',
    name: 'AutoDrive Intelligence',
    slug: 'autodrive-intelligence',
    tagline: 'Connected Mobility & Automotive Engineering',
    description: 'An illustrative connected vehicle intelligence platform that demonstrates how automotive engineering, IoT connectivity, and AI analytics can be combined to create smarter, safer, and more efficient mobility experiences. This concept covers telematics, diagnostics, and driver assistance features.',
    industry: 'Automotive Engineering',
    industrySlug: 'automotive-engineering',
    technologies: ['Automotive IoT', 'Edge Computing', 'Sensor Fusion', 'V2X Communication', 'Machine Learning', 'Cloud Telematics'],
    features: [
      'Real-time vehicle health monitoring',
      'Predictive maintenance alerts',
      'Driver behavior analysis and coaching',
      'Over-the-air software update management',
      'Fleet analytics and route optimization',
      'Connected infotainment integration',
    ],
    icon: '🚗',
    color: '#16C6D9',
  },
  {
    id: 'flowautomate',
    name: 'FlowAutomate',
    slug: 'flowautomate',
    tagline: 'Intelligent Enterprise Workflow Automation',
    description: 'An illustrative intelligent process automation platform that demonstrates how RPA, AI, and workflow orchestration can transform manual business operations into efficient, scalable, automated processes. This concept shows the journey from manual tasks to intelligent automation with human-in-the-loop governance.',
    industry: 'RPA & Intelligent Automation',
    industrySlug: 'rpa-intelligent-automation',
    technologies: ['RPA', 'Natural Language Processing', 'OCR', 'Workflow Orchestration', 'API Integration', 'Process Mining'],
    features: [
      'Drag-and-drop workflow designer',
      'AI-powered document extraction and classification',
      'Multi-system integration via APIs and connectors',
      'Exception handling with human review queues',
      'Process analytics and bottleneck identification',
      'Automated compliance and audit trail',
    ],
    icon: '⚡',
    color: '#1264E8',
  },
  {
    id: 'factory-digital-twin',
    name: 'Factory Digital Twin',
    slug: 'factory-digital-twin',
    tagline: 'Virtual Factory Simulation & Optimization',
    description: 'An illustrative digital twin platform that creates virtual replicas of manufacturing facilities for simulation, optimization, and predictive analysis. This concept demonstrates how digital twins enable scenario planning and process improvement without disrupting physical operations.',
    industry: 'Industrial Automation',
    industrySlug: 'industrial-automation',
    technologies: ['Digital Twin', '3D Visualization', 'Simulation', 'IoT', 'Cloud Computing', 'AI/ML'],
    features: [
      '3D virtual model of factory floor',
      'Real-time synchronization with physical assets',
      'What-if scenario simulation',
      'Layout optimization tools',
      'Energy consumption modeling',
      'Production bottleneck prediction',
    ],
    icon: '🔧',
    color: '#1264E8',
  },
  {
    id: 'patient-connect',
    name: 'PatientConnect',
    slug: 'patient-connect',
    tagline: 'Remote Patient Monitoring Platform',
    description: 'An illustrative connected health platform concept for continuous remote patient monitoring. This demonstrates how IoT-enabled medical devices, cloud infrastructure, and real-time analytics can support clinicians in monitoring patient health outside traditional clinical settings.',
    industry: 'Medical Technology',
    industrySlug: 'medical-technology',
    technologies: ['Healthcare IoT', 'Wearable Devices', 'Cloud Healthcare', 'HL7 FHIR', 'Real-time Analytics', 'Mobile Apps'],
    features: [
      'Continuous vital sign monitoring',
      'Configurable clinical alert thresholds',
      'Patient mobile app for self-reporting',
      'Clinician dashboard with patient timelines',
      'EHR integration via FHIR APIs',
      'Secure video consultation integration',
    ],
    icon: '💊',
    color: '#16C6D9',
  },
  {
    id: 'ev-battery-suite',
    name: 'EV Battery Suite',
    slug: 'ev-battery-suite',
    tagline: 'Electric Vehicle Battery Intelligence',
    description: 'An illustrative battery management and intelligence platform for electric vehicles. This concept demonstrates comprehensive battery monitoring, health prediction, and charging optimization capabilities for EV manufacturers and fleet operators.',
    industry: 'Automotive Engineering',
    industrySlug: 'automotive-engineering',
    technologies: ['Battery Management', 'Edge Computing', 'Machine Learning', 'Automotive IoT', 'Cloud Analytics', 'Thermal Modeling'],
    features: [
      'Cell-level health monitoring',
      'State of charge and health estimation',
      'Thermal management optimization',
      'Charging profile optimization',
      'Battery degradation prediction',
      'Fleet battery analytics dashboard',
    ],
    icon: '🔋',
    color: '#16C6D9',
  },
];

export const getSolutionBySlug = (slug: string): Solution | undefined => {
  return solutions.find(s => s.slug === slug);
};

export const getSolutionsByIndustry = (industrySlug: string): Solution[] => {
  return solutions.filter(s => s.industrySlug === industrySlug);
};

export const getIndustryCategories = (): string[] => {
  return [...new Set(solutions.map(s => s.industry))];
};

