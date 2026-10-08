import { Project, SkillCategory, ExperienceItem, Certification } from "@/types";

export const PERSONAL_INFO = {
  name: "Khush Amin",
  title: "Graduate Software Engineer | Junior .NET Developer | Cloud & Infrastructure Specialist",
  degree: "BSc (Hons) Computer Science — First Class Honours (70% Overall Average)",
  university: "De Montfort University, Leicester, UK",
  email: "khushpatel0344@gmail.com",
  phone: "+44 7733908167",
  location: "Leicester, UK",
  github: "https://github.com/Khush2512",
  linkedin: "https://linkedin.com/in/khush-amin",
  livePortfolio: "https://khush-amin-portfolio3d.vercel.app",
  cvSoftwareEngineer: "/Khush_Amin_CV_new.pdf",
  cvCloudInfrastructure: "/Khush_Amin_Cloud_Infrastructure_CV.pdf",
  bio: "First-Class Honours Computer Science Graduate (70% average) from De Montfort University with dual Oracle Cloud certifications and 2 years of commercial IT infrastructure & sysadmin experience. Specialized in C#, ASP.NET Core, relational database normalization (3NF), secure RESTful APIs, and enterprise Active Directory administration.",
};

export const PROJECTS: Project[] = [
  {
    id: "enterprise-ecommerce",
    title: "Enterprise E-Commerce & Staff Management Platform",
    subtitle: "Agile Software Engineering Project",
    category: "Enterprise",
    badges: ["C#", "ASP.NET Core", "SQL Server", "RBAC Security", "Agile Scrum"],
    stat: "82%",
    statLabel: "First Class Mark (Top Score)",
    description:
      "Architected and developed the Staff Management Subsystem within a 5-engineer Agile team. Engineered full CRUD operations, multi-tiered Role-Based Access Control (RBAC), and normalized SQL Server database schemas using strictly parameterized queries to eradicate SQL injection vulnerabilities.",
    keyHighlights: [
      "Achieved 82% top module score for software architecture, code quality, and Scrum documentation",
      "Designed normalized 3NF SQL Server relational database schemas for staff security & audit logs",
      "Built custom ASP.NET C# controllers & view models with robust server-side validation logic",
      "Enforced Role-Based Access Control (RBAC) preventing unauthorized privilege escalation",
    ],
    deepDive: {
      clientLayer: "Razor Views rendered with server-side validation models, responsive Tailwind CSS layouts, and dynamic DOM interaction handlers.",
      apiLayer: "C# ASP.NET Core MVC controllers executing business rules, input sanitization, and dependency-injected service interfaces.",
      databaseLayer: "Microsoft SQL Server database normalized to Third Normal Form (3NF) with stored procedures and indexed primary/foreign key relationships.",
      securityStrategy: "100% Parameterized queries preventing SQL Injection (SQLi), Anti-Forgery Tokens against CSRF, and hashed RBAC credentials.",
      normalization: "Third Normal Form (3NF) eliminating transitive dependencies and data redundancy across staff, role, and audit tables.",
      acidCompliance: "Atomic SQL Server transactions ensuring complete rollbacks on execution failures during staff privilege updates.",
    },
    featured: true,
  },
  {
    id: "capstone-development",
    title: "Full-Stack Capstone Development Project",
    subtitle: "Individual Honours Computer Science Project",
    category: "Full-Stack",
    badges: ["Full-Stack Architecture", "RESTful APIs", "Database Design", "Automated Testing"],
    stat: "78%",
    statLabel: "100% Phase 1 Specs Score",
    description:
      "Engineered a decoupled multi-tier data platform handling user workflows, relational data persistence, robust input validation, and automated unit/integration testing suites.",
    keyHighlights: [
      "Achieved 78% First-Class mark and 100% Phase 1 functional specification compliance score",
      "Implemented decoupled RESTful API endpoints for structured JSON exchange with explicit HTTP status codes",
      "Constructed automated integration & unit testing suites achieving 90%+ critical path coverage",
      "Designed clean ERDs and normalized schema configurations for ACID-compliant transactions",
    ],
    deepDive: {
      clientLayer: "Decoupled Single Page Application architecture communicating asynchronously with backend REST API endpoints.",
      apiLayer: "RESTful API middleware handling request routing, custom exception filters, JSON serialization, and status code standardization.",
      databaseLayer: "Relational storage engine optimized with composite indexes and strict foreign key integrity constraints.",
      securityStrategy: "Token-based authentication, request rate limiting, input sanitization, and parameterized database access layers.",
      normalization: "Fully normalized schema structure enforcing 1NF through 3NF rules to guarantee data integrity across complex user workflows.",
      acidCompliance: "Strict ACID transaction boundaries handling concurrent multi-step record insertions safely.",
    },
    featured: true,
  },
  {
    id: "student-course-hub",
    title: "Student Course Hub Web Application",
    subtitle: "Web Application & Database System",
    category: "Web Application",
    badges: ["PHP (PDO)", "MySQL", "JavaScript", "WCAG Accessibility", "CSRF Protection"],
    stat: "1st Class",
    statLabel: "Coursework Distinction",
    description:
      "Dynamic administrative portal for module and student enrollment management featuring parameterized PDO database transactions, dynamic search filtering, and CSRF token defenses.",
    keyHighlights: [
      "Built dynamic frontend interface with vanilla JavaScript for asynchronous DOM updates",
      "Engineered secure backend persistence using PHP PDO prepared statements and MySQL database layer",
      "Enforced WCAG AA accessibility standards with keyboard navigation and ARIA attributes",
      "Integrated CSRF mitigation tokens, session security validation, and sanitized input controls",
    ],
    deepDive: {
      clientLayer: "WCAG AA accessible HTML5/CSS3 frontend with asynchronous JavaScript fetch calls for instant module filtering.",
      apiLayer: "Object-Oriented PHP backend executing prepared PDO statements and routing administrative actions.",
      databaseLayer: "MySQL relational database housing module, student, and enrollment tables linked with foreign keys.",
      securityStrategy: "PHP PDO prepared statements preventing SQLi, htmlspecialchars input sanitization, and cryptographic CSRF session tokens.",
      normalization: "Normalized relational schemas up to 3NF avoiding duplicate enrollment records.",
      acidCompliance: "MySQL InnoDB engine utilizing ACID transactions for multi-row enrollment updates.",
    },
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
      { name: "ASP.NET Core", level: "Advanced", highlight: true },
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
      { name: "3NF Normalization", level: "Advanced", highlight: true },
      { name: "Parameterized Queries", level: "Advanced", highlight: true },
      { name: "ACID Transactions", level: "Proficient" },
      { name: "ERD Modeling", level: "Advanced" },
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
      { name: "Windows Server Admin", level: "Proficient" },
      { name: "50+ Workstations Support", level: "Proficient", highlight: true },
      { name: "LAN Diagnostics & Uptime", level: "Proficient" },
      { name: "Group Policy (GPO)", level: "Proficient" },
    ],
  },
  {
    id: "devops-engineering",
    title: "Software Engineering & DevOps",
    description: "Agile Scrum methodologies, version control pipelines, automated testing, and web standards.",
    iconName: "GitBranch",
    skills: [
      { name: "Agile Scrum", level: "Core", highlight: true },
      { name: "Git & GitHub Workflow", level: "Advanced", highlight: true },
      { name: "Automated Integration Testing", level: "Proficient" },
      { name: "RESTful API Integration", level: "Advanced", highlight: true },
      { name: "WCAG Accessibility", level: "Proficient" },
      { name: "CI/CD Concepts", level: "Core" },
    ],
  },
];

export const COMMERCIAL_EXPERIENCES: ExperienceItem[] = [
  {
    id: "truskills-sysadmin",
    period: "2021 – 2023 (2 Years)",
    title: "Junior System Administrator",
    company: "TruSkills Solutions Pvt. Ltd.",
    location: "Commercial IT Enterprise",
    type: "Commercial IT",
    badge: "Enterprise IT Operations",
    uptimeMetric: "99%+ Uptime",
    description:
      "Administered enterprise IT infrastructure for 50+ desktop workstations and network devices, ensuring 99%+ operational uptime, network diagnostics, and Active Directory user access control.",
    responsibilities: [
      "Provisioned, configured, and maintained user accounts, security groups, and Group Policies (GPO) in Active Directory",
      "Delivered Tier-1 & Tier-2 IT support across 50+ enterprise workstations, resolving hardware, software, and OS issues",
      "Diagnosed local area network (LAN) bottlenecks, executed patch deployments, and maintained 99%+ system availability",
      "Enforced standardized data backup protocols and cybersecurity compliance across all network endpoints",
    ],
    technologies: ["Active Directory", "Windows Server", "Group Policy (GPO)", "50+ Workstations Support", "LAN Diagnostics", "System Patching"],
  },
  {
    id: "uk-customer-ops",
    period: "Commercial Operations",
    title: "Customer Operational Specialist & Service Logistics",
    company: "One Stop & Tesco Stores",
    location: "Leicester, UK",
    type: "UK Operations",
    badge: "UK Retail Operations",
    description:
      "Delivered high-volume retail operational performance, operating EPOS transaction infrastructure, executing swift customer problem resolution, and maintaining teamwork under peak pressure.",
    responsibilities: [
      "Operated EPOS register terminals with 100% balancing precision during high peak-hour customer traffic",
      "Demonstrated calm de-escalation skills when handling customer technical and service escalations",
      "Collaborated in fast-paced retail teams maintaining compliance, inventory control, and operational safety",
    ],
    technologies: ["EPOS Infrastructure", "Conflict Resolution", "Inventory Logistics", "High-Volume Operations"],
  },
];

export const EXPERIENCES = COMMERCIAL_EXPERIENCES;

export const CERTIFICATIONS: Certification[] = [
  {
    id: "oci-gen-ai-2024",
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle University",
    date: "2024",
    badgeText: "OCI AI Certified",
    description: "Certified professional credential from Oracle University validating expertise in Oracle Cloud Infrastructure AI services, Large Language Model (LLM) fine-tuning, prompt engineering, and enterprise cloud AI deployment.",
    skillsVerified: ["OCI AI Services", "Generative AI Architectures", "LLM Integration", "Cloud Security"],
    verificationUrl: "https://education.oracle.com/oracle-cloud-infrastructure-2024-generative-ai-professional/pexam_1Z0-1127-24",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    id: "oci-data-mgmt-2023",
    title: "Oracle Cloud Data Management 2023 Certified Foundations Associate",
    issuer: "Oracle University",
    date: "2023",
    badgeText: "OCI Data Certified",
    description: "Certified cloud credential from Oracle University demonstrating core competency in Oracle Autonomous Database, cloud data warehousing, SQL/PLSQL cloud operations, and enterprise data security.",
    skillsVerified: ["Oracle Autonomous Database", "Cloud Security", "SQL & PL/SQL Cloud Operations", "Data Warehousing"],
    verificationUrl: "https://education.oracle.com/oracle-cloud-data-management-2023-foundations-associate/pexam_1Z0-1105-23",
    gradient: "from-emerald-500 to-teal-600",
  },
];
