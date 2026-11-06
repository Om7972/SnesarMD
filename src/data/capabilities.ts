import {
  Cpu, Code, Factory, CircuitBoard, Brain,
  Wifi, Monitor, TestTube, Bot, Workflow,
} from 'lucide-react';

export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: typeof Cpu;
}

export const capabilities: Capability[] = [
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    description: 'End-to-end product design, development, and lifecycle management from concept to manufacturing.',
    icon: Cpu,
  },
  {
    id: 'digital-engineering',
    title: 'Digital Engineering',
    description: 'Digital transformation solutions leveraging cloud, data, and modern software architectures.',
    icon: Monitor,
  },
  {
    id: 'industrial-automation',
    title: 'Industrial Automation',
    description: 'PLC, SCADA, robotics, and smart manufacturing solutions for operational excellence.',
    icon: Factory,
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Systems',
    description: 'Embedded hardware and software engineering for IoT, automotive, and industrial applications.',
    icon: CircuitBoard,
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by machine learning, computer vision, and predictive analytics.',
    icon: Brain,
  },
  {
    id: 'iot-connected',
    title: 'IoT & Connected Systems',
    description: 'Connected device ecosystems with edge computing, cloud integration, and real-time analytics.',
    icon: Wifi,
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Enterprise software, web applications, mobile apps, and cloud-native solutions.',
    icon: Code,
  },
  {
    id: 'testing-validation',
    title: 'Testing & Validation',
    description: 'Comprehensive testing services including functional, performance, security, and compliance testing.',
    icon: TestTube,
  },
  {
    id: 'robotics',
    title: 'Robotics & Intelligent Systems',
    description: 'Robotics integration, autonomous systems, and intelligent machine development.',
    icon: Bot,
  },
  {
    id: 'rpa',
    title: 'RPA & Process Automation',
    description: 'Robotic process automation and intelligent workflow solutions for business operations.',
    icon: Workflow,
  },
];

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
}

export const technologies: Technology[] = [
  { id: 'ai', name: 'Artificial Intelligence', category: 'Intelligence', description: 'Machine intelligence for pattern recognition, decision making, and process optimization.' },
  { id: 'ml', name: 'Machine Learning', category: 'Intelligence', description: 'Statistical learning models for prediction, classification, and anomaly detection.' },
  { id: 'cv', name: 'Computer Vision', category: 'Intelligence', description: 'Visual perception systems for object detection, image analysis, and quality inspection.' },
  { id: 'dt', name: 'Digital Twins', category: 'Simulation', description: 'Virtual replicas of physical systems for real-time monitoring and simulation.' },
  { id: 'iiot', name: 'Industrial IoT', category: 'Connectivity', description: 'Connected sensor networks for industrial monitoring, data collection, and control.' },
  { id: 'cloud', name: 'Cloud Computing', category: 'Infrastructure', description: 'Scalable cloud infrastructure for data processing, storage, and application hosting.' },
  { id: 'edge', name: 'Edge Computing', category: 'Infrastructure', description: 'Distributed computing at the edge for low-latency processing and real-time decision making.' },
  { id: 'robotics', name: 'Robotics', category: 'Automation', description: 'Robotic systems for industrial automation, precision manufacturing, and autonomous operations.' },
  { id: 'pa', name: 'Predictive Analytics', category: 'Intelligence', description: 'Data-driven forecasting for maintenance, demand, quality, and performance optimization.' },
  { id: 'ia', name: 'Intelligent Automation', category: 'Automation', description: 'AI-powered process automation combining RPA, NLP, and machine learning for smart workflows.' },
];

