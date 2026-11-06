import {
  Factory, HeartPulse, Trophy, Car, Bot,
  Cpu, Code, Wifi, TestTube, Cog,
  Brain, Eye, Boxes, CloudCog, BarChart3,
  Zap, Radio, Server, Microscope, Workflow,
} from 'lucide-react';

export interface Industry {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  heroHeading: string;
  heroSubheading: string;
  description: string;
  icon: typeof Factory;
  image: string;
  color: string;
  capabilities: string[];
  services: {
    title: string;
    description: string;
    icon: typeof Factory;
  }[];
  technologies: string[];
  useCases: {
    title: string;
    description: string;
  }[];
}

export const industries: Industry[] = [
  {
    id: 'industrial-automation',
    title: 'Industrial Automation',
    slug: 'industrial-automation',
    shortDescription: 'Building next-generation intelligent factories with advanced automation, robotics, and Industry 4.0 technologies for operational excellence.',
    heroHeading: 'Building the Next Generation of Intelligent Industries.',
    heroSubheading: 'We engineer comprehensive industrial automation solutions that transform manufacturing floors into intelligent, connected, and self-optimizing ecosystems.',
    description: 'Our Industrial Automation practice combines deep domain expertise in control systems, robotics, and smart manufacturing with cutting-edge technologies like AI, IoT, and digital twins. We help manufacturers modernize operations, improve productivity, ensure quality, and build resilient supply chains.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
    color: '#1264E8',
    capabilities: [
      'PLC & SCADA Engineering',
      'Robotics Integration',
      'Smart Manufacturing',
      'Industry 4.0 Solutions',
      'Digital Twin Technology',
    ],
    services: [
      {
        title: 'PLC, SCADA & HMI Engineering',
        description: 'Design and development of programmable logic controller systems, supervisory control architectures, and intuitive human-machine interfaces for industrial process automation.',
        icon: Cpu,
      },
      {
        title: 'Robotics & Industrial Control',
        description: 'Integration and programming of industrial robots, collaborative robots (cobots), and advanced motion control systems for manufacturing automation.',
        icon: Bot,
      },
      {
        title: 'Smart Manufacturing & Industry 4.0',
        description: 'End-to-end smart factory solutions connecting machines, systems, and people through IoT sensors, edge computing, and cloud analytics platforms.',
        icon: Factory,
      },
      {
        title: 'Industrial IoT & Connectivity',
        description: 'Designing and deploying Industrial IoT architectures for real-time equipment monitoring, data collection, and enterprise system integration.',
        icon: Wifi,
      },
      {
        title: 'Predictive Maintenance',
        description: 'AI-powered predictive maintenance systems that analyze equipment data to forecast failures, optimize maintenance schedules, and reduce unplanned downtime.',
        icon: Cog,
      },
      {
        title: 'Digital Twin Technology',
        description: 'Creating virtual replicas of physical manufacturing assets and processes for simulation, optimization, and real-time performance monitoring.',
        icon: Boxes,
      },
      {
        title: 'Factory Monitoring Dashboards',
        description: 'Real-time production monitoring dashboards with KPI tracking, alert systems, and analytics for operational visibility across the plant floor.',
        icon: BarChart3,
      },
      {
        title: 'Machine Vision & Quality Inspection',
        description: 'Computer vision-based quality inspection systems for automated defect detection, dimensional measurement, and compliance verification.',
        icon: Eye,
      },
    ],
    technologies: ['Siemens S7', 'Allen-Bradley', 'ABB Robotics', 'FANUC', 'OPC-UA', 'MQTT', 'Azure IoT', 'AWS IoT Greengrass', 'TensorFlow', 'OpenCV', 'Node-RED', 'InfluxDB', 'Grafana', 'Docker', 'Kubernetes'],
    useCases: [
      {
        title: 'Smart Factory Floor Monitoring',
        description: 'A comprehensive IoT-based system that monitors production lines in real-time, tracks OEE metrics, and provides predictive insights for proactive maintenance.',
      },
      {
        title: 'Automated Quality Inspection',
        description: 'Machine vision system integrated with production lines to perform real-time defect detection, reducing manual inspection time and improving quality consistency.',
      },
      {
        title: 'Digital Twin for Production Optimization',
        description: 'A virtual replica of a manufacturing facility used to simulate process changes, optimize production schedules, and predict bottlenecks before they occur.',
      },
    ],
  },
  {
    id: 'medical-technology',
    title: 'Medical Technology',
    slug: 'medical-technology',
    shortDescription: 'Engineering smarter healthcare experiences through innovative medical device development, imaging technology, and connected health solutions.',
    heroHeading: 'Engineering Smarter Healthcare Experiences.',
    heroSubheading: 'We develop advanced medical technology solutions that enhance clinical workflows, improve patient outcomes, and accelerate healthcare innovation.',
    description: 'Our Medical Technology practice delivers comprehensive engineering services for medical device development, healthcare software, and connected health ecosystems. From concept to commercialization, we help healthcare organizations build innovative solutions that improve care delivery while maintaining regulatory compliance.',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    color: '#16C6D9',
    capabilities: [
      'Medical Device Engineering',
      'Medical Imaging Technology',
      'Healthcare Software',
      'Connected Medical Devices',
      'AI-Assisted Clinical Tools',
    ],
    services: [
      {
        title: 'Medical Device Engineering',
        description: 'End-to-end engineering services for medical device development, from concept design and prototyping to verification, validation, and manufacturing support.',
        icon: HeartPulse,
      },
      {
        title: 'Medical Imaging Technology',
        description: 'Development of advanced medical imaging solutions including image processing algorithms, 3D reconstruction, and visualization tools for radiology workflows.',
        icon: Microscope,
      },
      {
        title: 'AI-Assisted Image Analysis',
        description: 'AI-powered assistive tools for X-ray, CT, and MRI image analysis to support radiologists with pattern detection, measurement automation, and workflow prioritization. These are assistive technology concepts designed to aid clinical professionals.',
        icon: Brain,
      },
      {
        title: 'Healthcare Software Development',
        description: 'Custom healthcare application development including EHR integrations, clinical decision support tools, telemedicine platforms, and patient management systems.',
        icon: Code,
      },
      {
        title: 'Remote Patient Monitoring',
        description: 'Connected health solutions for continuous patient monitoring, vital sign tracking, and care coordination through wearable devices and mobile applications.',
        icon: Radio,
      },
      {
        title: 'Healthcare IoT & Connectivity',
        description: 'IoT-enabled connected medical device ecosystems for real-time patient data collection, device management, and clinical workflow automation.',
        icon: Wifi,
      },
      {
        title: 'Medical Software Testing',
        description: 'Comprehensive testing and validation services for medical software, including functional testing, security testing, and regulatory compliance verification.',
        icon: TestTube,
      },
      {
        title: 'Data Interoperability',
        description: 'Healthcare data integration services supporting HL7 FHIR, DICOM, and other interoperability standards for seamless data exchange across clinical systems.',
        icon: Server,
      },
    ],
    technologies: ['HL7 FHIR', 'DICOM', 'Python', 'TensorFlow', 'PyTorch', 'React', 'Node.js', 'Azure Health', 'AWS HealthLake', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'MATLAB', 'OpenCV'],
    useCases: [
      {
        title: 'Radiology Workflow Intelligence',
        description: 'An AI-assisted system concept that helps radiologists prioritize worklists, automate measurements, and flag potential findings for review, designed to augment clinical decision-making.',
      },
      {
        title: 'Connected Patient Monitoring Platform',
        description: 'A comprehensive remote monitoring platform that collects data from wearable medical devices and provides clinicians with real-time dashboards and configurable alerts.',
      },
      {
        title: 'Medical Image Processing Pipeline',
        description: 'An advanced image processing system for medical imaging that performs automated preprocessing, enhancement, and 3D visualization to support clinical review.',
      },
    ],
  },
  {
    id: 'sports-engineering',
    title: 'Sports Engineering',
    slug: 'sports-engineering',
    shortDescription: 'Where engineering meets human performance — leveraging advanced analytics, computer vision, and biomechanics to transform athletic potential.',
    heroHeading: 'Where Engineering Meets Human Performance.',
    heroSubheading: 'We apply advanced engineering, data science, and computer vision to help athletes, teams, and sports organizations unlock peak performance.',
    description: 'Our Sports Engineering practice combines biomechanics, sensor technology, computer vision, and data analytics to create innovative solutions for athletic performance optimization. We help sports organizations harness technology to gain competitive advantages while protecting athlete health and well-being.',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1461896836934-bd45ba8a0936?w=800&q=80',
    color: '#1264E8',
    capabilities: [
      'Performance Analytics',
      'Computer Vision & Motion Tracking',
      'Biomechanics Analysis',
      'Wearable Technology',
      'Sports Data Visualization',
    ],
    services: [
      {
        title: 'Athlete Performance Analytics',
        description: 'Comprehensive data-driven performance analysis platforms that track, measure, and visualize athletic metrics to optimize training and competition strategies.',
        icon: BarChart3,
      },
      {
        title: 'Computer Vision & Motion Tracking',
        description: 'Advanced computer vision systems for markerless motion capture, pose estimation, and real-time movement analysis during training and competition.',
        icon: Eye,
      },
      {
        title: 'Biomechanics Analysis',
        description: 'Engineering-grade biomechanical analysis solutions that measure forces, joint angles, and movement patterns to optimize technique and prevent injuries.',
        icon: Workflow,
      },
      {
        title: 'Wearable Sensor Technology',
        description: 'Custom wearable device engineering for real-time physiological and kinematic data collection during athletic activities.',
        icon: Radio,
      },
      {
        title: 'Smart Equipment Engineering',
        description: 'Sensor-integrated smart sports equipment design for performance measurement, impact detection, and technique feedback.',
        icon: Zap,
      },
      {
        title: 'Real-Time Sports Analytics',
        description: 'Live analytics platforms for in-game performance monitoring, tactical analysis, and real-time decision support for coaches and teams.',
        icon: Cpu,
      },
      {
        title: 'Performance Monitoring Dashboards',
        description: 'Interactive dashboards for tracking athlete development, training loads, recovery metrics, and long-term performance trends.',
        icon: BarChart3,
      },
      {
        title: 'Sports Data Visualization',
        description: 'Advanced data visualization tools that transform complex sports data into actionable insights through interactive charts, heat maps, and 3D replays.',
        icon: Boxes,
      },
    ],
    technologies: ['Python', 'TensorFlow', 'MediaPipe', 'OpenCV', 'React', 'D3.js', 'Three.js', 'AWS', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Bluetooth LE', 'IMU Sensors', 'MATLAB', 'Tableau'],
    useCases: [
      {
        title: 'Athlete Motion Analysis Platform',
        description: 'A computer vision-based system that captures and analyzes athlete movements in real-time, providing coaches with detailed biomechanical insights and technique comparisons.',
      },
      {
        title: 'Team Performance Dashboard',
        description: 'A comprehensive analytics dashboard that aggregates data from multiple sources to provide coaches and management with holistic views of team and individual performance.',
      },
      {
        title: 'Wearable Training Monitor',
        description: 'A custom wearable device solution that tracks training intensity, physiological metrics, and recovery indicators to optimize training programs and minimize injury risk.',
      },
    ],
  },
  {
    id: 'automotive-engineering',
    title: 'Automotive Engineering',
    slug: 'automotive-engineering',
    shortDescription: 'Engineering the future of intelligent mobility through electric vehicle technology, ADAS, connected systems, and automotive software solutions.',
    heroHeading: 'Engineering the Future of Intelligent Mobility.',
    heroSubheading: 'We deliver comprehensive automotive engineering solutions that accelerate the transition to electric, connected, and autonomous mobility.',
    description: 'Our Automotive Engineering practice provides end-to-end engineering services across the automotive value chain. From embedded systems and ADAS to electric vehicle platforms and connected car solutions, we help automotive companies innovate faster and bring next-generation mobility solutions to market.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
    color: '#16C6D9',
    capabilities: [
      'Electric Vehicle Engineering',
      'ADAS & Autonomous Systems',
      'Automotive Embedded Systems',
      'Connected Vehicle Technology',
      'Automotive Software Testing',
    ],
    services: [
      {
        title: 'Electric Vehicle Engineering',
        description: 'Comprehensive EV engineering services including powertrain design, battery management systems, charging infrastructure, and thermal management solutions.',
        icon: Zap,
      },
      {
        title: 'Automotive Embedded Systems',
        description: 'Embedded software and hardware engineering for automotive ECUs, infotainment systems, instrument clusters, and body electronics.',
        icon: Cpu,
      },
      {
        title: 'ADAS Technology',
        description: 'Advanced Driver Assistance System development including sensor fusion, object detection, lane keeping, and adaptive cruise control engineering.',
        icon: Eye,
      },
      {
        title: 'Vehicle Diagnostics',
        description: 'Automotive diagnostic solutions for fault detection, error code analysis, and predictive vehicle health monitoring across automotive systems.',
        icon: TestTube,
      },
      {
        title: 'Battery Management Systems',
        description: 'BMS engineering for battery cell monitoring, state estimation, thermal management, and battery lifecycle optimization in electric vehicles.',
        icon: Zap,
      },
      {
        title: 'Automotive IoT & Connectivity',
        description: 'Connected vehicle platform engineering including V2X communication, telematics, over-the-air updates, and fleet management systems.',
        icon: Wifi,
      },
      {
        title: 'Autonomous Mobility Research',
        description: 'Research and development in autonomous driving technologies including perception, planning, control, and simulation for self-driving systems.',
        icon: Brain,
      },
      {
        title: 'Automotive Software Testing',
        description: 'Comprehensive testing and validation services for automotive software including AUTOSAR compliance, functional safety, and HIL/SIL testing.',
        icon: TestTube,
      },
    ],
    technologies: ['AUTOSAR', 'CAN Bus', 'LIN', 'Ethernet', 'MATLAB/Simulink', 'C/C++', 'Python', 'ROS', 'CARLA', 'TensorFlow', 'CUDA', 'dSPACE', 'Vector CANoe', 'Jenkins', 'ISO 26262'],
    useCases: [
      {
        title: 'EV Battery Management Platform',
        description: 'A comprehensive battery management system that monitors cell health, optimizes charging profiles, and predicts battery lifecycle for electric vehicle applications.',
      },
      {
        title: 'Connected Vehicle Telematics',
        description: 'A cloud-connected vehicle platform that enables real-time diagnostics, over-the-air updates, predictive maintenance, and enhanced driver experience features.',
      },
      {
        title: 'ADAS Perception System',
        description: 'A sensor fusion system combining camera, radar, and LiDAR data for robust object detection, classification, and tracking in advanced driver assistance applications.',
      },
    ],
  },
  {
    id: 'rpa-intelligent-automation',
    title: 'RPA & Intelligent Automation',
    slug: 'rpa-intelligent-automation',
    shortDescription: 'Transforming business processes through intelligent automation — combining RPA, AI, and workflow orchestration to drive operational efficiency.',
    heroHeading: 'Transforming Business Processes Through Intelligent Automation.',
    heroSubheading: 'We combine Robotic Process Automation with AI and machine learning to create intelligent automation solutions that transform how enterprises operate.',
    description: 'Our RPA & Intelligent Automation practice helps organizations automate repetitive processes, extract intelligence from unstructured data, and orchestrate complex workflows. We go beyond simple task automation to deliver end-to-end intelligent process transformation that drives measurable business outcomes.',
    icon: Bot,
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80',
    color: '#1264E8',
    capabilities: [
      'Robotic Process Automation',
      'AI-Powered Workflows',
      'Document Intelligence',
      'Process Optimization',
      'Enterprise Integration',
    ],
    services: [
      {
        title: 'Robotic Process Automation',
        description: 'Design, development, and deployment of RPA solutions for automating repetitive, rule-based business processes across finance, HR, operations, and customer service.',
        icon: Bot,
      },
      {
        title: 'AI-Powered Workflow Automation',
        description: 'Intelligent automation solutions that combine RPA with AI and machine learning for handling complex, decision-intensive processes.',
        icon: Brain,
      },
      {
        title: 'Document Processing & Intelligence',
        description: 'AI-powered document processing solutions for automated data extraction, classification, and validation from invoices, forms, contracts, and correspondence.',
        icon: Code,
      },
      {
        title: 'Intelligent Data Extraction',
        description: 'Machine learning-based data extraction from structured and unstructured sources including OCR, NLP, and computer vision techniques.',
        icon: Eye,
      },
      {
        title: 'Enterprise Workflow Integration',
        description: 'Connecting automated workflows with enterprise systems including ERP, CRM, ITSM, and custom applications through API and middleware integration.',
        icon: Server,
      },
      {
        title: 'Automated Reporting & Analytics',
        description: 'Automated data collection, report generation, and dashboard creation for real-time business intelligence and operational visibility.',
        icon: BarChart3,
      },
      {
        title: 'Process Mining & Optimization',
        description: 'Analysis of existing business processes to identify automation opportunities, optimize workflows, and measure automation ROI.',
        icon: Workflow,
      },
      {
        title: 'Human-in-the-Loop Automation',
        description: 'Designing automation workflows with intelligent human intervention points for exception handling, approvals, and quality assurance.',
        icon: Cog,
      },
    ],
    technologies: ['UiPath', 'Power Automate', 'Python', 'TensorFlow', 'spaCy', 'Tesseract OCR', 'Apache Airflow', 'REST APIs', 'GraphQL', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Azure', 'AWS Lambda'],
    useCases: [
      {
        title: 'Invoice Processing Automation',
        description: 'An end-to-end automated invoice processing pipeline that extracts data from invoices, validates against purchase orders, and posts to the accounting system with minimal human intervention.',
      },
      {
        title: 'Employee Onboarding Automation',
        description: 'An intelligent workflow that automates the employee onboarding process including account provisioning, document collection, training assignments, and equipment requests.',
      },
      {
        title: 'Customer Service Automation',
        description: 'An AI-powered customer service automation platform that handles routine inquiries, routes complex issues, and provides agents with contextual information for faster resolution.',
      },
    ],
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find(i => i.slug === slug);
};

