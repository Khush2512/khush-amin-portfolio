export interface TechnicalDeepDive {
  clientLayer: string;
  apiLayer: string;
  databaseLayer: string;
  securityStrategy: string;
  normalization: string;
  acidCompliance: string;
}

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
  deepDive: TechnicalDeepDive;
  featured: boolean;
  links?: {
    demo?: string;
    github?: string;
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
  type: "Commercial IT" | "UK Operations";
  description: string;
  responsibilities: string[];
  technologies: string[];
  badge: string;
  uptimeMetric?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: "Oracle University" | "De Montfort University";
  date: string;
  badgeText: string;
  description: string;
  skillsVerified: string[];
  verificationUrl: string;
  gradient: string;
}
