export interface Experience {
  employer: string;
  jobTitle: string;
  description: string;
  accomplishments: string[];
  image: string;
  link: string;
  backgroundColor: string;
  workTerm: string;
  slug: string;
}

export const experiences: Experience[] = [
  {
    employer: "MannLab",
    jobTitle: "Systems Engineer (XR Assistive Technology)",
    description:
      "Discover creative websites and developers. A portal for you to share your projects.",
    accomplishments: [
      "Leading a 4-person team under the supervision of Professor Steve Mann to build augmented reality glasses that provide obstacle detection and navigation support with haptic, audio, and visual feedback for visually impaired users",
      "Developing a machine learning model to predict collisions, detect and track obstacles, and deliver directional feedback within 200ms to guide users safely and efficiently through their environment",
      "Coordinating with accessibility service organizations and experts to align system features with real-world user needs",
      "Designing a system to provide real-time conversational assistance by using facial recognition to identify the conversation partner and retrieving their previous interactions",
    ],
    image: "/experience/mannlab/mannlab-logo.png",
    link: "https://mannlab.com",
    backgroundColor: "#f8e3cdff",
    workTerm: "May 2025 - Present",
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
    backgroundColor: "#afe9b3ff",
    workTerm: "Aug 2023 - Present",
    slug: "newcollege",
  },
];
