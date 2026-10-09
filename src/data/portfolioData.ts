export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Generative AI' | 'Healthcare & Bio-Signals' | 'Computer Vision & Deep Learning' | 'Research & Explainable AI';
  description: string;
  longDescription: string;
  techStack: string[];
  keyFeatures: string[];
  architecture: string;
  impact: string;
  image?: string;
  hasDemo?: boolean;
  demoType?: 'sheetflow' | 'nexstate' | 'xai';
  paperTitle?: string;
  conference?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  credentialId?: string;
  focus: string;
  badgeType: string;
}

export interface Achievement {
  title: string;
  event: string;
  year: string;
  description: string;
  significance: string;
  category: 'Conference Research' | 'Hackathon Finalist' | 'Competition Winner' | 'Leadership';
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'ABIJIN SUVEDHA A',
    title: 'Artificial Intelligence & Data Science Engineer',
    headline: 'Engineering scalable LLMs, explainable deep learning, and intelligent automation systems.',
    location: 'Tamil Nadu, India',
    phone: '+91 8130828187',
    email: 'a.abijin.suvedha@gmail.com',
    academicEmail: '2317024@nec.edu.in',
    linkedin: 'https://www.linkedin.com/in/abijin-suvedha-a',
    github: 'https://github.com/abijin-suvedha-a',
    objective:
      'I work with Python, Machine Learning, Generative AI, and full-stack technologies to develop practical intelligent applications. My interests include LLMs, intelligent automation, and cloud-based AI systems, with an emphasis on scalability and production-oriented development.',
    avatar: '/src/assets/images/hero_portrait_abijin_1791535851163.jpg',
  },
  metrics: [
    { label: 'Academic Standing', value: '8.76 CGPA', detail: 'National Engineering College (up to Sem V)' },
    { label: 'Conference Paper', value: 'ICODSES 2026', detail: 'Explainable Deep Learning in Neuroimaging' },
    { label: 'Hackathon & Competitions', value: '1st Place & Finalist', detail: 'Winner at Tech Triad · KONE Elevate Finalist' },
    { label: 'Linguistic Mastery', value: 'JLPT N4 Certified', detail: 'English, Tamil, Hindi & Japanese' },
  ],
  education: [
    {
      degree: 'B.Tech - Artificial Intelligence and Data Science',
      institution: 'National Engineering College',
      location: 'Tamil Nadu, India',
      duration: 'Aug 2023 – Jun 2027',
      score: 'CGPA: 8.76 (up to V Semester)',
      highlights: [
        'Core specialization in Deep Learning, NLP, Big Data Analytics, and Distributed Systems',
        'Serving as Executive Member of the Department AI Club',
        'Represented college at international conference ICODSES 2026',
      ],
    },
    {
      degree: 'Higher Secondary School Certificate',
      institution: 'Zion Matriculation Hr. Sec. School',
      location: 'Tamil Nadu, India',
      duration: 'April 2022 – March 2023',
      score: '89.16%',
      highlights: [
        'Distinction in Mathematics, Physics, and Computer Science',
        'Active participant in regional science & mathematics olympiads',
      ],
    },
  ],
  projects: [
    {
      id: 'sheetflow-ai',
      title: 'SheetFlow AI',
      subtitle: 'Intelligent Workspace with Multilingual Speech Recognition',
      category: 'AI & Generative AI',
      description:
        'A React-based intelligent workspace enabling multi-source dataset analysis with multilingual speech recognition for automated analytical synthesis.',
      longDescription:
        'SheetFlow AI reimagines tabular intelligence for global enterprise workflows. By combining speech-to-text models across regional languages with context-augmented LLM reasoning, users can query multi-source datasets (CSV, Excel, relational tables) conversationally, ask for statistical trend breakdowns, and receive automated visualization cards without writing complex SQL or formulas.',
      techStack: ['React', 'Python', 'LLM Query Engine', 'Speech Recognition', 'FastAPI', 'Data Analytics', 'Tailwind CSS'],
      keyFeatures: [
        'Multilingual speech recognition allowing voice-driven analytical requests',
        'Multi-source ingestion pipeline reconciling heterogeneous schema formats',
        'Real-time automated formula synthesis, anomaly detection, and KPI summaries',
        'Interactive visualization rendering dynamic charts from natural language questions',
      ],
      architecture:
        'Audio Stream -> Multilingual STT -> Token Normalization -> LLM Reasoning & Schema Map -> Pandas/NumPy Pipeline -> Dynamic React Visualization',
      impact:
        'Reduced ad-hoc dataset synthesis turnaround by 70% in benchmark tests; enabled zero-code queries for non-technical domain stakeholders.',
      image: '/src/assets/images/sheetflow_ai_workspace_1791535889194.jpg',
      hasDemo: true,
      demoType: 'sheetflow',
    },
    {
      id: 'medical-xai-icodses',
      title: 'Explainable Deep Learning for Medical Imaging',
      subtitle: 'ICODSES 2026 International Conference Research Presentation',
      category: 'Research & Explainable AI',
      description:
        'Presented at ICODSES 2026: An Explainable AI (XAI) deep neural framework combining adaptive medical image enhancement with interpretable tumor localization.',
      longDescription:
        'In clinical neuroimaging, black-box deep learning models hinder diagnostic adoption. This research project, presented at the ICODSES 2026 International Conference, introduces an Explainable Deep Learning architecture. It couples adaptive contrast enhancement for low-SNR MRI scans with CNN feature extraction and Grad-CAM saliency mapping, providing clinicians with exact visual heatmap justifications for tumor predictions.',
      techStack: ['Deep Learning', 'PyTorch', 'Grad-CAM (XAI)', 'CNNs', 'Medical Imaging', 'Python', 'OpenCV'],
      keyFeatures: [
        'Adaptive contrast enhancement filtering to clarify micro-structures in low-contrast T1/T2 MRI scans',
        'Deep convolutional backbone optimized for multi-class lesion classification with high sensitivity',
        'Grad-CAM attention heatmaps verifying neural activations directly over pathological tissue',
        'Rigorous quantitative validation demonstrating interpretability without sacrificing diagnostic accuracy',
      ],
      architecture:
        'Raw MRI Scan -> Contrast Adaptive Enhancement -> Deep CNN Feature Backbone -> Classifier -> Gradient-Weighted Class Activation Mapping (Grad-CAM) -> Clinical Overlay Heatmap',
      impact:
        'Successfully published and presented at ICODSES 2026; recognized for bridging the gap between algorithmic accuracy and clinician interpretability.',
      image: '/src/assets/images/medical_ai_research_xai_1791535903180.jpg',
      hasDemo: true,
      demoType: 'xai',
      paperTitle: 'Explainable Deep Learning Model for Medical Image Enhancement and Tumor Detection',
      conference: 'ICODSES 2026 (International Conference on Data Science and Engineering Systems)',
    },
    {
      id: 'nexstate-ai',
      title: 'NexState AI',
      subtitle: 'Personalized Healthcare Monitoring & Real-Time Stress Detection',
      category: 'Healthcare & Bio-Signals',
      description:
        'An AI-driven wearable solution detecting real-time physiological stress patterns using multi-modal bio-signal streams and lightweight edge anomaly models.',
      longDescription:
        'NexState AI translates raw physiological signals into actionable health intelligence. By processing real-time Photoplethysmography (PPG), Galvanic Skin Response (GSR), and Heart Rate Variability (HRV) metrics, the system detects autonomic nervous system arousal, identifies stress spikes before physical discomfort manifests, and delivers targeted restorative interventions.',
      techStack: ['Python', 'Bio-Signal Processing', 'HRV & GSR Analysis', 'Edge ML', 'Time-Series Modeling', 'IoT Wearables'],
      keyFeatures: [
        'Continuous time-domain & frequency-domain HRV feature extraction (RMSSD, SDNN, LF/HF ratio)',
        'Multi-modal sensor fusion synchronizing skin conductance with pulse intervals',
        'Lightweight ML inference designed for low-power microcontroller deployment',
        'Personalized baseline calibration adapting to individual circadian patterns',
      ],
      architecture:
        'Wearable Bio-Sensors -> Hardware Filtering -> Time-Series Feature Extraction -> Lightweight Stress Classifier -> Edge Alert Engine',
      impact:
        'Achieved sub-50ms inference latency for continuous edge monitoring with 91%+ classification concordance against benchmark stress protocols.',
      hasDemo: true,
      demoType: 'nexstate',
    },
    {
      id: 'vehicle-monitoring-ai',
      title: 'AI-Based Vehicle Monitoring System',
      subtitle: 'Real-Time Deep Learning Detection, Tracking & Traffic Analytics',
      category: 'Computer Vision & Deep Learning',
      description:
        'A high-performance deep learning pipeline engineered for multi-lane vehicle detection, persistent ID tracking, velocity calculation, and lane occupancy analytics.',
      longDescription:
        'Designed to modernize urban traffic infrastructure, this deep learning system processes continuous video feeds. It identifies diverse vehicle classes under varying illumination, tracks trajectories with Kalman-assisted appearance features, and generates automated alerts for congestion and lane violations in real time.',
      techStack: ['Python', 'YOLOv8', 'DeepSORT', 'OpenCV', 'PyTorch', 'Computer Vision', 'Video Analytics'],
      keyFeatures: [
        'Real-time object detection robust to low-light and adverse weather conditions',
        'Persistent identity tracking with occlusion recovery using DeepSORT',
        'Automated spatial calibration for instantaneous velocity estimation',
        'Traffic density heatmaps and automated congestion reporting dashboards',
      ],
      architecture:
        'High-FPS Video Ingestion -> Frame Preprocessing -> YOLOv8 Detection -> DeepSORT Multi-Object Tracking -> Trajectory & Velocity Calculator -> Analytics Output',
      impact:
        'Maintained 30+ FPS processing on edge GPU hardware with 94.2% detection precision across multi-lane highways.',
      hasDemo: false,
    },
  ] as Project[],
  internships: [
    {
      company: 'Hostwire Systems',
      role: 'AI Developer Intern',
      period: 'Jan 2026 – Apr 2026',
      location: 'Chennai, India',
      type: 'On-site / Industrial Internship',
      summary:
        'Architected an intelligent automation system leveraging AI models to generate, refine & optimize digital content for enterprise workflows.',
      highlights: [
        'Engineered scalable prompt pipelines and semantic evaluation guardrails to automate digital content production',
        'Integrated cloud-based AI inference endpoints with internal asset pipelines, cutting production cycle times by 40%',
        'Developed automated validation routines ensuring factual consistency and tone alignment in generated assets',
      ],
      technologies: ['Python', 'Generative AI', 'LLMs', 'Prompt Engineering', 'Cloud Workflows', 'API Integration'],
    },
    {
      company: 'Webstack Academy',
      role: 'Full Stack Web Developer Intern',
      period: 'Dec 2025 – Jan 2026',
      location: 'Bengaluru, India',
      type: 'Hybrid Internship',
      summary:
        'Developed a dynamic web application using the MERN stack, integrating robust backend APIs with responsive frontend interfaces.',
      highlights: [
        'Designed modular RESTful endpoints in Node.js/Express with schema validation and authentication middleware',
        'Engineered stateful React components with reusable design systems and clean responsive UX patterns',
        'Implemented database querying and indexing in MongoDB for high-throughput user interaction logging',
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'JavaScript/TypeScript', 'Tailwind CSS'],
    },
  ] as Experience[],
  achievements: [
    {
      title: 'Research Paper Presenter at ICODSES 2026',
      event: 'International Conference on Data Science and Engineering Systems (ICODSES 2026)',
      year: '2026',
      description:
        'Contributed to research and presented paper on "Explainable Deep Learning Model for Medical Image Enhancement and Tumor Detection".',
      significance:
        'International academic validation of novel Explainable AI methods applied to medical diagnosis and neuroimaging.',
      category: 'Conference Research',
    },
    {
      title: 'Winner at Tech Triad',
      event: 'Tech Triad Technical Competition',
      year: '2025',
      description:
        'Secured first place by solving a series of high-complexity technical and algorithmic challenges through logical thinking, rapid prototyping, and collaborative teamwork.',
      significance:
        'Ranked #1 among participating engineering teams across algorithmic problem solving and system execution.',
      category: 'Competition Winner',
    },
    {
      title: 'Finalist at KONE Elevate Hackathon',
      event: 'KONE Elevate Hackathon',
      year: '2025',
      description:
        'Formulated and pitched an AI technology-oriented intelligent solution tackling urban mobility and vertical transport logistics.',
      significance:
        'Selected into the top finalist circle from hundreds of engineering innovators nationwide.',
      category: 'Hackathon Finalist',
    },
    {
      title: 'Executive Member at AI Club',
      event: 'Department of AI & DS, National Engineering College',
      year: '2024 – Present',
      description:
        'Organized and contributed to campus-wide AI-driven technical events, hands-on workshops, bootcamps, and collaborative student learning initiatives.',
      significance:
        'Mentored junior students in Python, deep learning fundamentals, and competitive coding.',
      category: 'Leadership',
    },
  ] as Achievement[],
  certifications: [
    {
      title: 'SnowPro Associate Certification',
      issuer: 'Snowflake',
      focus: 'Cloud Data Warehousing, Virtual Warehouses, Data Sharing & SQL Analytics',
      badgeType: 'Cloud Data Architecture',
    },
    {
      title: 'Cloud Computing Certification',
      issuer: 'NPTEL (IIT Kharagpur / IISc)',
      focus: 'Distributed Systems, Virtualization, Cloud Service Models (IaaS/PaaS/SaaS) & Scalability',
      badgeType: 'Systems & Infrastructure',
    },
    {
      title: 'Career Essentials in Generative AI',
      issuer: 'Microsoft & LinkedIn Learning',
      focus: 'Foundational LLMs, Semantic Search, Generative Workflows & AI Ethics',
      badgeType: 'Generative AI',
    },
    {
      title: 'Java Training Certification',
      issuer: 'Spoken Tutorial Project, IIT Bombay',
      focus: 'Object-Oriented Programming, Data Structures, Concurrency & JVM Internals',
      badgeType: 'Core Software Engineering',
    },
  ] as Certification[],
  skills: {
    programming: [
      { name: 'Python', level: 'Advanced', context: 'Primary language for ML, PyTorch, FastAPIs, Data Pipelines' },
      { name: 'Java', level: 'Proficient', context: 'OOP Architecture, IIT Bombay Certified, Algorithms' },
      { name: 'SQL', level: 'Proficient', context: 'Complex Queries, Indexing, Analytics, Snowflake & MySQL' },
      { name: 'TypeScript / JavaScript', level: 'Proficient', context: 'Modern Full-Stack Web Development & React' },
    ],
    aiAndDataScience: [
      { name: 'Generative AI & LLMs', context: 'Prompt Engineering, RAG, Text-to-Insight, Context Windows' },
      { name: 'Explainable AI (XAI)', context: 'Grad-CAM, Saliency Mapping, Interpretability for Neural Nets' },
      { name: 'Deep Learning & CNNs', context: 'PyTorch, Image Classification, Feature Maps, Object Detection' },
      { name: 'Computer Vision', context: 'YOLOv8, DeepSORT, OpenCV, Video Tracking & Analytics' },
      { name: 'Signal & Time-Series Processing', context: 'HRV, GSR, Physiological Bio-Signals, Filtering' },
      { name: 'Microsoft Power BI', context: 'Interactive Dashboards, Business Intelligence, Data Modeling' },
      { name: 'Snowflake Cloud Data', context: 'SnowPro Associate, Warehousing, Elastic Scaling' },
    ],
    webAndTools: [
      { name: 'React', context: 'Hooks, Component Architecture, Tailwind CSS, State Management' },
      { name: 'Node.js & Express', context: 'RESTful API Services, Middleware, MERN Stack' },
      { name: 'MySQL & MongoDB', context: 'Relational & Document Database Schema Design' },
      { name: 'GitHub & Git', context: 'Version Control, Collaborative Branching, CI/CD' },
      { name: 'Cloud Computing', context: 'NPTEL Certified, Virtual Compute, Cloud AI Endpoints' },
    ],
    languages: [
      { language: 'English', proficiency: 'Professional / Fluent', note: 'Primary Medium of Technical Communication' },
      { language: 'Tamil', proficiency: 'Native', note: 'Mother Tongue' },
      { language: 'Hindi', proficiency: 'Professional Working', note: 'Spoken & Written' },
      { language: 'Japanese', proficiency: 'JLPT N4 Certified 🇯🇵', note: 'Certified by Japan Foundation & JEES' },
    ],
  },
};
