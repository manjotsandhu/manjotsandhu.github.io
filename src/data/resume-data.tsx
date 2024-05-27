import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Manjot Singh Sandhu",
  initials: "MSS",
  location: "Brampton, Ontario, Canada",
  locationLink: "https://www.google.com/maps/place/brampton",
  about:
    "DevOps Engineer - building & automating all of the things.",
  summary:
    "Accomplished DevOps Engineer with over 6+ years of experience in designing and implementing CI/CD pipelines, creating developer tools/portals, and enhancing system reliability. Working primarily with Jenkins, Docker, Kubernetes, and Terraform.",
  avatarUrl: "https://avatars.githubusercontent.com/u/72101910?v=4",
  personalWebsiteUrl: "https://manjots.com",
  contact: {
    email: "manjotsingh15@gmail.com",
    tel: "647-785-9170",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sandhma",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manjot-sandhu/",
        icon: LinkedInIcon,
      }
    ],
  },
  tools: [
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Helm",
    "Flux",
    "Terraform",
    "Artifactory",
    "Sonarqube",
    "Snyk",
    "Git",
    "GitGuardian",
    "Selenium",
    "Appium",
    "Webdriver.IO"
  ],
  languages: [
    "Java",
    "Groovy",
    "JavaScript",
    "TypeScript",
    "Python",
    "Bash"
  ],
  certifications: [
    {
      name: "AZ-900 - Azure Fundamentals",
      date: "March 2024",
      link: ""
    },
    {
      name: "Hashicorp Terraform Associate",
      date: "November 2024",
      link: ""
    },
  ],
  education: [
    {
      school: "Seneca College",
      degree: "Worked towards a Bachelor's Degree in Software Development",
      start: "2013",
      end: "2018",
    },
    {
      school: "North Park Secondary School",
      degree: "High School Diploma - International Business & Technology Diploma",
      start: "2008",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Manulife Financial",
      link: "https://www.manulife.ca/",
      badges: ["Remote"],
      title: "Intermediate Full Stack Developer - DevOps Engineer",
      logo: ParabolLogo,
      start: "2020",
      end: "Present",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Manulife Financial",
      link: "https://www.manulife.ca/",
      badges: ["Remote"],
      title: "Associate Full Stack Developer - DevOps Engineer",
      logo: ParabolLogo,
      start: "2019",
      end: "2020",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Manulife Financial",
      link: "https://www.manulife.ca/",
      badges: ["Remote"],
      title: "Associate Quality Engineer",
      logo: ParabolLogo,
      start: "2018",
      end: "2019",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
