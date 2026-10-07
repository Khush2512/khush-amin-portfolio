export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Enterprise" | "Full-Stack" | "Web Application";
  badges: string[];
  stat?: string;
  statLabel?: string;
  description: string;
  keyHighlights: string[];
  architectureNotes?: string;
  featured: boolean;
  links?: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: Array<{
    name: string;
    level: "Advanced" | "Proficient" | "Certified" | "Core";
    highlight?: boolean;
  }>;
}

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  company: string;
  location: string;
  type: "Commercial" | "Retail & Operations" | "Education";
  description: string;
  responsibilities: string[];
  technologies: string[];
  badge?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: "Oracle Cloud" | "De Montfort University" | "Industry Standard";
  date: string;
  credentialId?: string;
  badgeText: string;
  description: string;
  skillsVerified: string[];
  gradient: string;
}
