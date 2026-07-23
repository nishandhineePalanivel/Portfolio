// All content sourced directly from Nishandhinee P's resume.
// Edit this file to update site content — no other file needs to change.

export const personal = {
  name: "Nishandhinee P",
  initials: "NP",
  title: "Electronics & Communication Engineering Student",
  tagline:
    "Building at the point where circuits meet code — from flame sensors to full-stack interfaces.",
  location: "Coimbatore, India",
  phone: "+91 7708603394",
  email: "nishandhineepalanivel13@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/nishandhineepalanivel13",
    github: "https://github.com/nishandhineepalanivel13",
    leetcode: "https://leetcode.com/nishandhineepalanivel13",
  },
  summary:
    "Dedicated Electronics and Communication Engineering student seeking an entry-level opportunity to leverage technical knowledge, practical project experience, and a strong willingness to learn. Committed to contributing effectively to team objectives while developing professionally in a dynamic work environment.",
  photo: "images/profile.png",
};

export const about = {
  objective:
    "I'm an ECE undergraduate who taught myself to build across the stack — from ESP32 firmware that steers a fire-fighting robot, to React interfaces, to AI-integrated web apps that classify support tickets in real time. I like problems that live at the boundary between hardware and software, and I learn fastest by shipping something end-to-end and deployed.",
  strengths: [
    "Frontend development with React, HTML & CSS",
    "Embedded systems & microcontroller programming (ESP32, Arduino)",
    "API integration & real-time data applications",
    "Sensor interfacing & hardware-software integration",
    "Version control & collaborative workflows (Git/GitHub)",
  ],
  softSkills: ["Problem Solving", "Teamwork", "Communication", "Adaptability", "Fast Learner"],
  academicHighlight: "CGPA 8.74 — Electronics & Communication Engineering, VSB College of Engineering Technical Campus",
};

export type EducationItem = {
  degree: string;
  institution: string;
  detail: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Engineering — Electronics and Communication Engineering",
    institution: "VSB College of Engineering Technical Campus, Coimbatore",
    detail: "CGPA: 8.74",
    period: "2023 — 2027",
  },
  {
    degree: "Higher Secondary Education (12th Grade)",
    institution: "Government Girls Higher Secondary School, Madukkur",
    detail: "Percentage: 83%",
    period: "2022 — 2023",
  },
];

export type SkillCategory = {
  category: string;
  items: { name: string; level: number }[]; // level 0-100, self-assessed relative proficiency
};

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: [{ name: "Java (Basic)", level: 45 }, { name: "JavaScript", level: 65 }],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React.js", level: 70 },
      { name: "HTML5", level: 85 },
      { name: "CSS3", level: 80 },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Visual Studio Code", level: 85 },
      { name: "Git", level: 70 },
      { name: "GitHub", level: 75 },
      { name: "Render", level: 65 },
      { name: "Canva", level: 70 },
      { name: "Discord", level: 90 },
    ],
  },
  {
    category: "Core Competencies",
    items: [
      { name: "Embedded Systems Basics", level: 65 },
      { name: "Problem Solving", level: 80 },
      { name: "Teamwork", level: 85 },
      { name: "Communication", level: 80 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  category: "AI/Web" | "Frontend" | "Embedded";
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "sentiment-urgency-detector",
    title: "Sentiment & Urgency Detector",
    description:
      "A real-time AI-based web application that analyzes customer support tickets and surfaces critical issues for faster resolution.",
    tech: ["FastAPI", "Python", "HTML", "CSS", "JavaScript", "Groq API (Llama 3.3 70B)", "GitHub", "Render"],
    features: [
      "Integrated Groq Cloud's Llama 3.3 70B model via API to predict sentiment, urgency, tone, and churn risk",
      "Auto-generates AI-powered draft replies to support tickets",
      "Deployed end-to-end using GitHub and Render, accessible through a live web interface",
    ],
    category: "AI/Web",
  },
  {
    id: "jewellery-website",
    title: "Jewellery Website — Frontend Development",
    description:
      "A responsive jewellery e-commerce front end with dynamic product listings, built to feel clean and reliable across devices.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    features: [
      "Dynamic product listings with reusable navigation and product-display components",
      "Structured CSS and component layout for a clean, maintainable codebase",
      "Ensured cross-device responsiveness end to end",
    ],
    category: "Frontend",
  },
  {
    id: "fire-fighting-robot",
    title: "Fire Fighting Robot",
    description:
      "An ESP32-based autonomous robot that detects fire via flame sensor input and navigates toward it to suppress the source.",
    tech: ["ESP32", "Arduino IDE (C)", "Flame Sensor", "L298N Motor Driver", "DC Motors", "Relay Module", "Water Pump"],
    features: [
      "Autonomous navigation toward detected flames using L298N-driven DC motors",
      "Relay-controlled water pump for automatic fire suppression on detection",
      "End-to-end hardware integration from sensor input to actuated output",
    ],
    category: "Embedded",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Web Development Intern",
    org: "Qbatzclay",
    points: [
      "Built responsive web pages using HTML, CSS, and JavaScript, translating designs into functional interfaces",
      "Developed structured, reusable front-end components that improved overall interface consistency and usability",
    ],
  },
  {
    role: "Embedded Systems Intern",
    org: "Emglitz Technologies",
    points: [
      "Implemented embedded applications using microcontrollers and sensor interfacing in guided mini-projects",
      "Applied hardware-software integration concepts to connect sensor input with real-time output control",
    ],
  },
];

export type Certification = {
  name: string;
  provider: string;
};

export const certifications: Certification[] = [
  { name: "Static Web Development", provider: "Qbatzclay" },
  { name: "Basics of Embedded Systems", provider: "Emglitz Technologies" },
  { name: "VLSI Digital Design: Chip Design and Verilog Programming", provider: "Infosys Springboard" },
  { name: "IoT Edge Computing and IoT Analytics", provider: "Infosys Springboard" },
];

export type ResearchItem = {
  title: string;
  description: string;
};

export const research: ResearchItem[] = [
  {
    title: "Development of Fire Safeguard Emergency Robot with GPS",
    description:
      "Designed a fire safety robot concept with GPS-based location tracking, integrating embedded control, mobility, and wireless communication for hazardous-environment emergency response.",
  },
  {
    title: "Wastewater Treatment using Electrocoagulation",
    description:
      "Proposed a low-cost electrocoagulation system to remove wastewater contaminants for industrial and domestic use.",
  },
];

// Technical timeline — technologies/skills in the rough order they were picked up,
// inferred from project & internship progression on the resume.
export const timeline = [
  { year: "Foundations", label: "HTML, CSS, JavaScript" },
  { year: "2023", label: "Embedded systems basics — microcontrollers & sensors" },
  { year: "2024", label: "React.js — component-based frontend development" },
  { year: "2024", label: "ESP32 & Arduino — autonomous hardware systems" },
  { year: "2025", label: "REST APIs, FastAPI & cloud deployment (Render)" },
  { year: "2025", label: "LLM API integration — Groq / Llama 3.3 70B" },
  { year: "2025 — Present", label: "VLSI digital design & IoT edge computing" },
];
