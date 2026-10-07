import { Project, SkillCategory, ExperienceItem, Certification } from "@/types";

export const PERSONAL_INFO = {
  name: "Khush Amin",
  title: "Software Engineer | Cloud & Infrastructure Specialist | Junior .NET Developer",
  degree: "BSc (Hons) Computer Science — First Class Honours (70% Average)",
  university: "De Montfort University, Leicester, UK",
  email: "khushpatel0344@gmail.com",
  phone: "+44 7733908167",
  location: "Leicester, United Kingdom",
  github: "https://github.com/khush-amin",
  linkedin: "https://linkedin.com/in/khush-amin",
  bio: "First-Class Honours Computer Science graduate combining commercial enterprise system administration expertise with robust full-stack software development skills. Certified in Oracle Cloud Infrastructure with proven expertise in C#, ASP.NET Core, relational database normalization, and secure RESTful API architectures.",
};

export const PROJECTS: Project[] = [
  {
    id: "enterprise-ecommerce",
    title: "Enterprise E-Commerce & Staff Management Platform",
    subtitle: "Agile Group Software Engineering Project",
    category: "Enterprise",
    badges: ["C#", "ASP.NET", "SQL Server", "RBAC", "Agile Scrum"],
    stat: "82%",
    statLabel: "Module Mark (1st Class)",
    description:
      "Architected and developed the Staff Management Subsystem within a 5-engineer Agile team. Engineered full CRUD operations, multi-tiered Role-Based Access Control (RBAC), and normalized SQL Server database schemas using strictly parameterized queries to eradicate SQL injection vulnerabilities.",
    keyHighlights: [
      "Designed & normalized 3NF SQL Server relational database schemas for staff security & audit logs",
      "Built custom ASP.NET C# controllers & view models with server-side validation logic",
      "Participated in daily Scrum standups, sprint planning, and GitHub pull request reviews",
      "Achieved 82% top module score for code quality and software engineering documentation",
    ],
    architectureNotes: "3-Tier Enterprise Architecture: Presentation Layer (Razor Views) -> Business Logic Layer (C# Services) -> Data Access Layer (ADO.NET / SQL Server Stored Procedures)",
    featured: true,
  },
  {
    id: "capstone-development",
    title: "Full-Stack Capstone Development Project",
    subtitle: "Individual Honours Computer Science Project",
    category: "Full-Stack",
    badges: ["Full-Stack Architecture", "RESTful APIs", "Database Design", "Automated Testing"],
    stat: "78%",
    statLabel: "Capstone Mark (100% Specs)",
    description:
      "Engineered a decoupled multi-tier data platform handling complex user workflows, relational data persistence, robust input validation, and automated unit/integration testing suites.",
    keyHighlights: [
      "Achieved 100% Phase 1 functional specification compliance and 78% First-Class mark",
      "Implemented RESTful API endpoints for seamless JSON data exchange with structured error handling",
      "Constructed comprehensive automated unit testing suites ensuring 90%+ code path coverage",
      "Designed clean ERDs and normalized schema configurations for ACID-compliant transactions",
    ],
    architectureNotes: "Decoupled Architecture with REST API interfaces, dependency injection, and automated unit testing harnesses.",
    featured: true,
  },
  {
    id: "student-course-hub",
    title: "Student Course Hub Web Application",
    subtitle: "Web Application & Database System",
    category: "Web Application",
    badges: ["PHP (PDO)", "MySQL", "JavaScript", "WCAG Accessibility"],
    stat: "1st Class",
    statLabel: "Coursework Distinction",
    description:
      "Dynamic administrative portal for module and student enrollment management featuring parameterized PDO database transactions, dynamic search filtering, and CSRF token defenses.",
    keyHighlights: [
      "Built dynamic frontend interface with vanilla JavaScript for asynchronous DOM updates",
      "Engineered secure backend persistence using PHP PDO and MySQL relational databases",
      "Enforced WCAG AA accessibility standards and responsive UI/UX design components",
      "Integrated CSRF mitigation, session token validation, and sanitized input controls",
    ],
    architectureNotes: "MVC Web Pattern: Object-Oriented PHP controllers, PDO prepared statements, and MySQL database layer.",
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend & Languages",
    description: "Core programming languages, framework architecture, and server-side runtime design.",
    iconName: "Code2",
    skills: [
      { name: "C#", level: "Advanced", highlight: true },
      { name: "ASP.NET / .NET Core", level: "Advanced", highlight: true },
      { name: "Java", level: "Proficient" },
      { name: "Python", level: "Proficient" },
      { name: "PHP (PDO)", level: "Proficient" },
      { name: "SQL & PL/SQL", level: "Advanced", highlight: true },
    ],
  },
  {
    id: "database",
    title: "Database & Architecture",
    description: "Relational database modeling, schema optimization, and ACID transactional integrity.",
    iconName: "Database",
    skills: [
      { name: "Microsoft SQL Server", level: "Advanced", highlight: true },
      { name: "MySQL", level: "Advanced" },
      { name: "Entity Relationship Diagrams (ERDs)", level: "Advanced" },
      { name: "3NF Normalization", level: "Advanced", highlight: true },
      { name: "ACID Transactions", level: "Proficient" },
      { name: "Parameterized Queries & Security", level: "Advanced" },
    ],
  },
  {
    id: "cloud-sysadmin",
    title: "Cloud & Systems Administration",
    description: "Enterprise cloud deployment, Active Directory identity management, and hardware infrastructure.",
    iconName: "Cloud",
    skills: [
      { name: "Oracle Cloud Infrastructure (OCI)", level: "Certified", highlight: true },
      { name: "Active Directory (AD)", level: "Proficient", highlight: true },
      { name: "Windows Server Management", level: "Proficient" },
      { name: "Workstation Support (50+ Nodes)", level: "Proficient" },
      { name: "LAN Uptime Monitoring", level: "Proficient" },
      { name: "Patch & Security Deployment", level: "Proficient" },
    ],
  },
  {
    id: "devops-engineering",
    title: "Software Engineering & DevOps",
    description: "Agile methodologies, version control pipelines, automated testing, and web standards.",
    iconName: "GitBranch",
    skills: [
      { name: "Agile Scrum Methodologies", level: "Core", highlight: true },
      { name: "Git & GitHub Workflow", level: "Advanced", highlight: true },
      { name: "CI/CD Concepts", level: "Core" },
      { name: "Automated Unit & Integration Testing", level: "Proficient" },
      { name: "RESTful API Integration", level: "Advanced" },
      { name: "WCAG Accessibility Standards", level: "Proficient" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "truskills-sysadmin",
    period: "Commercial Experience",
    title: "Junior System Administrator",
    company: "TruSkills Solutions Pvt. Ltd.",
    location: "Commercial Enterprise Environment",
    type: "Commercial",
    badge: "Enterprise IT Operations",
    description:
      "Managed active IT infrastructure operations supporting 50+ enterprise workstations, ensuring maximum system uptime, network security, and user access control.",
    responsibilities: [
      "Provisioned, configured, and managed user accounts and security policies in Active Directory",
      "Provided Tier-1 & Tier-2 IT support for 50+ enterprise desktop workstations and hardware devices",
      "Monitored local area network (LAN) performance, resolving bandwidth bottlenecks and patch updates",
      "Implemented standardized software deployment protocols and system backup procedures",
    ],
    technologies: ["Active Directory", "Windows Server", "LAN Troubleshooting", "Enterprise Patching", "Hardware Support"],
  },
  {
    id: "uk-retail-ops",
    period: "UK Commercial Operations",
    title: "Retail Operational Specialist & Customer Relations",
    company: "UK Retail Sector",
    location: "Leicester, UK",
    type: "Retail & Operations",
    badge: "Operations & Communication",
    description:
      "Delivered high-volume operational excellence, managing electronic point-of-sale (EPOS) systems, fast customer resolution, and high-pressure team communication.",
    responsibilities: [
      "Operated EPOS transactions with 100% balancing accuracy under high peak-hour volume",
      "Demonstrated calm de-escalation skills in resolving customer technical and service inquiries",
      "Collaborated in fast-paced shifts, maintaining strict compliance and stock accountability",
    ],
    technologies: ["EPOS Systems", "Conflict De-escalation", "Inventory Control", "High-Volume Operations"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "oci-gen-ai-2024",
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle Cloud",
    date: "2024",
    badgeText: "OCI AI Certified",
    description: "Certified professional credential validating advanced knowledge in Oracle Cloud Infrastructure AI services, LLM integration, prompt engineering, and enterprise AI deployment models.",
    skillsVerified: ["OCI AI Services", "Generative AI Architectures", "LLM Fine-tuning", "Cloud AI Integration"],
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    id: "oci-data-mgmt-2023",
    title: "Oracle Cloud Data Management 2023 Foundations Associate",
    issuer: "Oracle Cloud",
    date: "2023",
    badgeText: "OCI Data Certified",
    description: "Foundational cloud certification demonstrating core competency in cloud database administration, Autonomous Database, cloud security, and data warehousing.",
    skillsVerified: ["Oracle Autonomous Database", "Cloud Security", "SQL & PL/SQL Cloud Operations", "Data Warehousing"],
    gradient: "from-emerald-500 to-teal-600",
  },
];
