import type { ImageMetadata } from "astro";

import profile from "../assets/profile.jpg";
import letthebadguysrollImage from "../assets/letthebadguys.png";
import lanzarImage from "../assets/lanzar.png";
import endOfDegreeImage from "../assets/endOfDegreeProject.png";
import VoNG from "../assets/VoNG.png";
import afterSchoolImage from "../assets/afterSchool.png";
import tiaguaMadreTierraImage from "../assets/tiaguaMadreTierra.png";

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface MetricItem {
  value: string;
  label: string;
  sinceDate?: string;
}

const CAREER_START_DATE = "2019-09-01";

function getYearsSince(isoDate: string): number {
  const start = new Date(isoDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const hasReachedAnniversary =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());
  if (!hasReachedAnniversary) years -= 1;
  return Math.max(0, years);
}

export interface AvailabilityInfo {
  available: boolean;
  location: string;
  region: string;
  timezone: string;
  timezoneLabel: string;
  coordinates: string;
  image: string;
  imageAlt: string;
}

export interface ProfileData {
  name: string;
  fullName: string;
  role: string;
  headline: string;
  avatar: ImageMetadata;
  avatarAlt: string;
  metrics: MetricItem[];
  socialLinks: SocialLink[];
  availability: AvailabilityInfo;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  date: string;
  kind: "certification" | "degree";
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: "github" | "demo" | "article";
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  architecture: string[];
  image?: ImageMetadata;
  imageAlt?: string;
  featured?: boolean;
  links: ProjectLink[];
}

export interface VolunteerRole {
  role: string;
  organization: string;
  period: string;
  current?: boolean;
  description?: string;
}

export interface CommunityInitiative {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: ImageMetadata;
  imageAlt: string;
  link: string;
  linkLabel: string;
}

export interface VolunteeringData {
  summary: string;
  roles: VolunteerRole[];
  initiatives: CommunityInitiative[];
}

export const portfolioData: {
  profile: ProfileData;
  experience: ExperienceItem[];
  education: EducationItem[];
  skillGroups: SkillGroup[];
  projects: ProjectItem[];
  volunteering: VolunteeringData;
} = {
  profile: {
    name: "Marcial F Parrilla Socas",
    fullName: "Marcial F Parrilla Socas",
    role: "Full-Stack & Cloud Engineer",
    headline:
      "Computer Engineer crafting resilient cloud architectures, serverless APIs, and accessible UIs.",
    avatar: profile,
    avatarAlt: "Portrait of Marcial",
    metrics: [
      {
        value: `${getYearsSince(CAREER_START_DATE)}+ yrs`,
        label: "Cloud & Full-Stack",
        sinceDate: CAREER_START_DATE,
      },
      { value: "AWS ×2", label: "Certified Cloud" },
      { value: "+45%", label: "EYP Organic Traffic" },
    ],
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com/marcialfps",
        handle: "@marcialfps",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/marcialfps/",
        handle: "in/marcialfps",
      },
      {
        label: "Email",
        href: "mailto:marcialfco@live.com",
        handle: "marcialfco@live.com",
      },
    ],
    availability: {
      available: true,
      location: "Lanzarote",
      region: "Canary Islands, ES",
      timezone: "Atlantic/Canary",
      timezoneLabel: "WET · UTC+0",
      coordinates: "29.056316° N, 13.633732° W",
      image: "/images/lanzarote.jpg",
      imageAlt: "Volcanic landscape of Lanzarote, Canary Islands",
    },
  },

  experience: [
    {
      role: "Full-Stack & Automation Lead",
      company: "DXC Technology",
      location: "Remote (Spain)",
      period: "Mar 2020 — Present",
      current: true,
      summary:
        "Architecting and maintaining accessible frontend libraries and serverless cloud platforms for international enterprise SaaS products.",
      highlights: [
        "Contributed to the open-source Halstack Design System (accessible React & Angular components, Storybook docs, and automated Jest/RTL/Cypress testing).",
        "Built full-stack web applications and serverless REST APIs using React, Node.js/Express, AWS, and Infrastructure as Code with Terraform.",
        "Automated CI/CD delivery pipelines with Jenkins and GitHub Actions while optimizing NoSQL data models and cloud workflows.",
      ],
      stack: ["TypeScript", "React", "Node.js", "AWS", "Terraform", "DynamoDB"],
    },
    {
      role: "IT Lead & Executive Board Member (Voluntary)",
      company: "European Youth Press",
      location: "Remote (Spain)",
      period: "Nov 2024 — Present",
      current: true,
      summary:
        "Directed strategic IT decision-making and managed multicultural teams within an international European institutional environment.",
      highlights: [
        "Administered and optimized Google Workspace, Webflow, and domain infrastructure for 50+ active members and 40+ national member organizations, enforcing security policies and access control.",
        "Spearheaded technical restructuring and SEO optimization of the main institutional website using JavaScript, Webflow, and CSS, increasing organic traffic by 45% (1,000+ monthly visits) and driving 10+ new European partnerships.",
      ],
      stack: ["JavaScript", "Webflow", "CSS", "SEO", "Google Workspace"],
    },
    {
      role: "Software Engineer",
      company: "Capgemini",
      location: "Asturias (Spain)",
      period: "Sep 2019 — Mar 2020",
      summary:
        "Engineered high-throughput backend services and database optimizations for banking and national logistics clients.",
      highlights: [
        "Optimized 15+ overnight Oracle PL/SQL batch queries, cutting execution times by 40%.",
        "Implemented multithreaded Java (Spring Boot) parallel processing for 5,000+ daily smart-locker packages, reducing runtime by 65%.",
      ],
      stack: ["Java", "Spring Boot", "Oracle PL/SQL", "Multithreading"],
    },
  ],

  education: [
    {
      title: "AWS Certified AI Practitioner",
      institution: "Amazon Web Services",
      date: "2026",
      kind: "certification",
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      institution: "Amazon Web Services",
      date: "2023",
      kind: "certification",
    },
    {
      title: "Oxford Test of English · B2 CEFR",
      institution: "University of Oxford",
      date: "2023",
      kind: "certification",
    },
    {
      title: "M.Sc. in Web Engineering",
      institution: "University of Oviedo",
      date: "2019 — 2021",
      kind: "degree",
    },
    {
      title: "B.Sc. in Software Engineering",
      institution: "University of Oviedo",
      date: "2015 — 2019",
      kind: "degree",
    },
  ],

  skillGroups: [
    {
      category: "Languages & Frontend",
      items: [
        { name: "TypeScript", icon: "https://api.iconify.design/logos/typescript-icon.svg" },
        { name: "JavaScript", icon: "https://api.iconify.design/logos/javascript.svg" },
        { name: "React", icon: "https://api.iconify.design/logos/react.svg" },
        { name: "Next.js", icon: "https://api.iconify.design/simple-icons/nextdotjs.svg?color=%23ffffff" },
        { name: "Astro", icon: "https://api.iconify.design/simple-icons/astro.svg?color=%23ff5d01" },
        { name: "Tailwind CSS", icon: "https://api.iconify.design/logos/tailwindcss-icon.svg" },
        { name: "Angular", icon: "https://api.iconify.design/logos/angular-icon.svg" },
        { name: "Figma", icon: "https://api.iconify.design/logos/figma.svg" },
      ],
    },
    {
      category: "Backend, Cloud & IaC",
      items: [
        { name: "Node.js", icon: "https://api.iconify.design/logos/nodejs-icon.svg" },
        { name: "Express.js", icon: "https://api.iconify.design/simple-icons/express.svg?color=%23ffffff" },
        { name: "AWS", icon: "https://api.iconify.design/mdi/aws.svg?color=%23FF9900" },
        { name: "Terraform", icon: "https://api.iconify.design/logos/terraform-icon.svg" },
        { name: "DynamoDB", icon: "https://api.iconify.design/logos/aws-dynamodb.svg" },
        { name: "Java", icon: "https://api.iconify.design/logos/java.svg" },
        { name: "Spring Boot", icon: "https://api.iconify.design/simple-icons/springboot.svg?color=%236DB33F" },
        { name: "Python", icon: "https://api.iconify.design/logos/python.svg" },
        { name: "Oracle PL/SQL", icon: "https://api.iconify.design/simple-icons/oracle.svg?color=%23F80000" },
      ],
    },
    {
      category: "Quality, CI/CD & Tooling",
      items: [
        { name: "Jest", icon: "https://api.iconify.design/logos/jest.svg" },
        { name: "Testing Library", icon: "https://api.iconify.design/logos/testing-library.svg" },
        { name: "Cypress", icon: "https://api.iconify.design/simple-icons/cypress.svg?color=%2369D3A7" },
        { name: "Storybook", icon: "https://api.iconify.design/logos/storybook-icon.svg" },
        { name: "GitHub Actions", icon: "https://api.iconify.design/logos/github-actions.svg" },
        { name: "Jenkins", icon: "https://api.iconify.design/logos/jenkins.svg" },
        { name: "Git", icon: "https://api.iconify.design/logos/git-icon.svg" },
        { name: "Claude Code", icon: "https://api.iconify.design/simple-icons/anthropic.svg?color=%23D97757" },
        { name: "GitHub Copilot", icon: "https://api.iconify.design/simple-icons/githubcopilot.svg?color=%23ffffff" },
        { name: "Scrum / Kanban", icon: "https://api.iconify.design/lucide/kanban.svg?color=%23C6AE59" },
      ],
    },
  ],

  projects: [
    {
      id: "halstack",
      title: "Halstack Design System",
      description:
        "Accessible open-source React & Angular component library with hypermedia API (HAL) integration, interactive Storybook docs, and automated unit/E2E testing adopted across 20+ enterprise teams.",
      architecture: ["Design System", "React", "TypeScript", "Storybook", "Cypress"],
      featured: true,
      links: [
        {
          label: "GitHub",
          href: "https://github.com/dxc-technology/halstack-react",
          kind: "github",
        },
      ],
    },
    {
      id: "eyp-web",
      title: "European Youth Press Platform",
      description:
        "Technical restructuring and comprehensive SEO optimization of the main institutional platform, increasing organic traffic by 45% (1,000+ monthly visits) and driving 10+ new European partnerships.",
      architecture: ["Web Architecture", "JavaScript", "Webflow", "Technical SEO"],
      featured: true,
      links: [
        {
          label: "Live Site",
          href: "https://www.youthpress.org/",
          kind: "demo",
        },
      ],
    },
    {
      id: "vong",
      title: "Voices of the Next Generation",
      description:
        "Design and development of the institutional hub for a European youth-led civic initiative reinforcing cooperation and democratic participation across member organizations.",
      architecture: ["UI Architecture", "Webflow", "SEO"],
      image: VoNG,
      imageAlt: "Voices of the Next Generation website",
      links: [
        {
          label: "Live Site",
          href: "https://www.voicesofthenextgeneration.eu/",
          kind: "demo",
        },
      ],
    },
    {
      id: "lanzar",
      title: "LanzAR · Lanzarote in Augmented Reality",
      description:
        "Location-based AR experience overlaying historical performances across Lanzarote landmarks, built as a Software Engineering End-of-Degree project.",
      architecture: ["Augmented Reality", "Unity", "Geolocation", "TFG"],
      image: lanzarImage,
      imageAlt: "Preview of LanzAR project",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/marcialfps/HistoricalRep_TFG",
          kind: "github",
        },
      ],
    },
    {
      id: "vr-nursing-paper",
      title: "VR Preclinical Learning Research",
      description:
        "Peer-reviewed case study evaluating Virtual Reality environments for teaching clinical healthcare procedures to first-year nursing students.",
      architecture: ["Research Paper", "Virtual Reality", "Unity"],
      image: endOfDegreeImage,
      imageAlt: "Capture of the Augmented Reality app",
      links: [
        {
          label: "Read Paper",
          href: "https://www.tandfonline.com/doi/full/10.1080/09523987.2023.2324597",
          kind: "article",
        },
      ],
    },
    {
      id: "let-the-bad-guys-roll",
      title: "Let the Bad Guys Roll",
      description:
        "Fast-paced defense prototype built in 48 hours for the GMTK 2022 Game Jam.",
      architecture: ["Game Jam", "Unity", "C#"],
      image: letthebadguysrollImage,
      imageAlt: "Let the bad guys roll icon",
      links: [
        {
          label: "Play Demo",
          href: "https://ulitol97.itch.io/let-the-bad-guys-roll",
          kind: "demo",
        },
      ],
    },
  ],

  volunteering: {
    summary:
      "Active in Canarian Youth Press since 2014 and European Youth Press, combining civic leadership with IT infrastructure and local cultural initiatives in Lanzarote.",
    roles: [
      {
        role: "Representative & Coordinator",
        organization: "Canarian Youth Press · European Youth Press",
        period: "2022 — 2024",
      },
      {
        role: "Technical Secretary",
        organization: "Canarian Youth Press NGO",
        period: "2015 — Present",
        current: true,
      },
      {
        role: "Jury Member · Galardón Joven Canarias",
        organization: "Gobierno de Canarias",
        period: "Dec 2020",
      },
      {
        role: "Structured Dialogue Ambassador",
        organization: "Spanish Youth Council",
        period: "2017",
      },
      {
        role: "Coordinator",
        organization: "Tiagua Joven Youth Group",
        period: "2014",
      },
    ],
    initiatives: [
      {
        id: "after-school",
        title: "After School",
        description:
          "Cultural, sports, and educational program created for young people in Lanzarote after the school term.",
        tags: ["Youth", "Lanzarote", "Community"],
        image: afterSchoolImage,
        imageAlt: "After School logo",
        link: "https://www.instagram.com/afterschoolcanarias/",
        linkLabel: "Instagram",
      },
      {
        id: "tiagua-madre-tierra",
        title: "Tiagua Madre Tierra",
        description:
          "Documentary preserving oral histories of Tiagua, a historic commercial and cultural hub in Lanzarote.",
        tags: ["Documentary", "History", "Local"],
        image: tiaguaMadreTierraImage,
        imageAlt: "Tiagua Madre Tierra documentary",
        link: "https://www.youtube.com/watch?v=lUrMK5plLtc",
        linkLabel: "YouTube",
      },
    ],
  },
};
