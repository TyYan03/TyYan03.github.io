export interface Experience {
  employer: string;
  jobTitle: string;
  description: string;
  accomplishments: string[];
  image: string;
  link: string;
  projectpage: null | string;
  backgroundColor: string;
  workTerm: string;
  slug: string;
}

export const experiences: Experience[] = [
  {
    employer: "MannLab",
    jobTitle: "Systems Engineer (XR Technology)",
    description:
      "Discover creative websites and developers. A portal for you to share your projects.",
    accomplishments: [
      "Led a 4-person team under the supervision of Professor Steve Mann to develop a real-time XR navigation system for visually impaired users using C# and Unity on Meta Quest 3, earning a Certificate of Recognition as a top research project",
      "Achieved a 91.7% collision avoidance rate by developing on-device machine learning models for real-time obstacle detection (80 classes, 12.5 m range) and safe path segmentation (10 surface types)",
      "Delivered ≤200 ms end-to-end latency across perception, processing, and feedback by designing a fully on-device pipeline with no cloud dependency",
      "Engineered a multimodal feedback system (visual overlays, spatial audio, and directional haptics) to convey obstacle distance, position, and navigable paths in real time",
      "Built a hands-free navigation system integrating voice input, GPS, and Google Maps API to provide accurate turn-by-turn directions with automatic rerouting (100% instruction accuracy)",
      "Validated system performance through real-world indoor and outdoor testing with static and dynamic obstacles, achieving 91% detection accuracy and 86% segmentation accuracy",
      "Collaborated with accessibility experts and service organizations to align system design with real-world needs of visually impaired users",
    ],
    image: "/experience/mannlab/mannlab-logo.png",
    link: "https://mannlab.com",
    projectpage: "https://github.com/TyYan03/XR-Seeing-Aid",
    backgroundColor: "#f8e3cdff",
    workTerm: "May 2025 - April 2026",
    slug: "mannlab",
  },
  {
    employer: "ePIC Blockchain Technologies",
    jobTitle: "Software Engineer Intern",
    description:
      "Discover creative websites and developers. A portal for you to share your projects.",
    accomplishments: [
      "Achieved a 100% reduction in firmware validation test setup errors and inconsistent results by developing Autotest, a Rust/Python/YAML reliable testing framework to automate quality assurance and standardize pre-release verification",
      "Reduced MCU board debug time by 60% by creating a hardware validation application in Rust with automated boot-time tests and detailed failure diagnostics, improving clarity and reducing false positives for manufacturing technicians",
      "Improved system startup stability and mining efficiency by 35% through researching optimal temperature thresholds to prevent initialization in suboptimal conditions that caused dead chips, reduced hashrates, and startup failures",
      "Built a full-stack miner performance tracker using TypeScript, HTML/CSS, and Python with a FastAPI backend and SQL database, enabling users to monitor, visualize, export, and compare real-time data via a user-friendly interface",
      "Redesigned the Webdash UI using TypeScript, HTML, and CSS based on customer feedback, significantly improving miner management efficiency and monitoring transparency, resulting in high user satisfaction",
      "Mentored an intern for 4 months, providing structured onboarding, pair programming sessions, and code review support",
    ],
    image: "/experience/epic/epic-logo.png",
    link: "https://epicblockchain.io",
    projectpage: null,
    backgroundColor: "#b6eaf0ff",
    workTerm: "May 2024 - Aug 2025",
    slug: "epicblockchaintechnologies",
  },
  {
    employer: "New College - University of Toronto",
    jobTitle: "Residence Don/Assistant",
    description:
      "Discover creative websites and developers. A portal for you to share your projects.",
    accomplishments: [
      "Responsible for a community of 100+ students, ensuring their safety, well-being, and social development",
      "Increased engagement in academic and social initiatives by 25% YoY by creating monthly programming strategies focused on mental health awareness and social connection",
      "Fostered a safe, respectful, and inclusive residence community by maintaining daily visibility, mediating interpersonal conflicts, upholding university policies, and serving as a positive role model",
      "Managed community issues and behavioral concerns through direct intervention, referral to appropriate services, and consistent enforcement of conduct codes, including regular Don-on-Duty rounds and incident reporting",
      "Provided individualized student support through 1:1 check-ins and mentorship each semester, responding to wellness and academic concerns, and connecting residents with campus and community resources",
      "Maintained administrative responsibilities including report writing (StarRez), communications (Teams, SharePoint, Email), and event planning, while ensuring compliance with health & safety protocols (CPR-C & First Aid certified)",
    ],
    image: "/experience/newcollege/newcollege-logo.webp",
    link: "https://www.newcollege.utoronto.ca",
    projectpage: null,
    backgroundColor: "#afe9b3ff",
    workTerm: "Aug 2023 - Present",
    slug: "newcollege",
  },
];
