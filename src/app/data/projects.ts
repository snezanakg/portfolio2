import holidazeThumb from "../../assets/projects/holidaze-thumb.webp";
import holidazeArticle from "../../assets/projects/holidaze-article.webp";

import semesterThumb from "../../assets/projects/semester2-auction-thumb.webp";
import semesterArticle from "../../assets/projects/semester2-auction-article.webp";

import newsThumb from "../../assets/projects/supabase-news-thumb.webp";
import newsArticle from "../../assets/projects/supabase-news-article.webp";
import wiresVisual from "../../assets/projects/wires-visual.svg";
import norEstateVisual from "../../assets/projects/norestate-visual.svg";

export const projects = [
  {
    id: "holidaze",
    title: "Holidaze",
    duration: "4th Semester (2026)",
    shortDescription:
      "Accommodation booking platform built with React, authentication and venue management.",
    thumbnail: holidazeThumb,
    articleImage: holidazeArticle,
    liveLink: "https://accommodationbookingsite.netlify.app/",
    githubLink: "https://github.com/snezanakg/holidaze",
    caption: "Main interface and booking system",
    tools: ["React", "TypeScript", "Tailwind", "API"],
    fullDescription:
      "Holidaze is a React-based accommodation booking platform where users can browse venues, register, and manage bookings. Venue managers can create and update listings.",
    challenge:
      "Handling authentication, API integration, and dynamic venue management while keeping the UI clean and responsive.",
    solution:
      "Implemented structured component architecture, reusable UI elements, and improved state management for better maintainability.",
    improvements: [
      "Improved layout consistency",
      "Enhanced responsiveness",
      "Refactored component structure",
      "Improved accessibility"
    ],
  },

  {
    id: "semester2-auction",
    title: "Semester Project 2 – Auction House",
    duration: "3rd Semester (2025)",
    shortDescription:
      "Modern auction platform with bidding system and dynamic listing management.",
    thumbnail: semesterThumb,
    articleImage: semesterArticle,
    liveLink: "https://semesterproject2auctionhouse.netlify.app/",
    githubLink: "https://github.com/snezanakg/Semester-Project-2---Auction-House",
    caption: "Auction listing overview interface",
    tools: ["React", "Tailwind", "Supabase", "REST API"],
    fullDescription:
      "Auction House allows users to create listings, place bids, and manage auctions in a responsive and structured interface.",
    challenge:
      "Implementing real-time bid updates and maintaining clear UI hierarchy for multiple listings.",
    solution:
      "Used structured components and improved UI spacing for better readability and usability.",
    improvements: [
      "Refactored layout structure",
      "Improved mobile responsiveness",
      "Optimized image handling",
      "Cleaner component hierarchy"
    ],
  },

  {
    id: "supabase-news",
    title: "Supabase News Platform",
    duration: "3rd Semester (2025)",
    shortDescription:
      "Content publishing platform with authentication and dynamic article management.",
    thumbnail: newsThumb,
    articleImage: newsArticle,
    liveLink: "https://supabasenewsplatform.netlify.app/",
    githubLink: "https://github.com/snezanakg/development-platforms-ca",
    caption: "Article overview and management system",
    tools: ["JavaScript", "Supabase", "HTML", "CSS"],
    fullDescription:
      "A news publishing platform using Supabase as backend service. Users can authenticate and manage articles dynamically.",
    challenge:
      "Managing authentication flow and structured content rendering.",
    solution:
      "Improved JavaScript structure and refined UI layout for better content readability.",
    improvements: [
      "Improved accessibility",
      "Refactored JavaScript logic",
      "Enhanced layout structure",
      "Improved loading behavior"
    ],
  },

  {
    id: "wires-social-platform",
    title: "WIRES – Social Platform",
    duration: "JavaScript 2 Course Assignment",
    shortDescription:
      "Social application with authentication, profiles, protected routes, and session handling.",
    thumbnail: wiresVisual,
    articleImage: wiresVisual,
    liveLink: "https://github.com/NoroffFEU/fed2-js2-ca-snezanakg",
    githubLink: "https://github.com/NoroffFEU/fed2-js2-ca-snezanakg",
    caption: "WIRES project overview",
    tools: ["JavaScript", "ES Modules", "Fetch API", "Noroff API"],
    fullDescription:
      "WIRES is a JavaScript social application supporting registration, login, profiles, navigation, and logout through the Noroff Social API v2.",
    challenge:
      "Coordinating authentication state, protected routes, form validation, and API-driven profile flows in a structured client-side application.",
    solution:
      "Implemented JavaScript ES Modules, token storage, LocalStorage-based session handling, automatic redirects, protected routes, and validated authentication forms.",
    improvements: [
      "Structured features with JavaScript ES Modules",
      "Implemented registration and login flows",
      "Protected authenticated routes",
      "Managed tokens and sessions with LocalStorage"
    ],
  },

  {
    id: "norestate-map-view",
    title: "NorEstate – Map View Page",
    duration: "Collaborative Project",
    shortDescription:
      "Map-view interface contribution completed through a collaborative GitHub branch workflow.",
    thumbnail: norEstateVisual,
    articleImage: norEstateVisual,
    liveLink: "https://github.com/NoroffFEU/NorEstate/tree/Map-View-Page-",
    githubLink: "https://github.com/NoroffFEU/NorEstate/tree/Map-View-Page-",
    caption: "NorEstate map-view contribution",
    tools: ["Git", "GitHub", "Branch Workflow", "Team Collaboration"],
    fullDescription:
      "NorEstate is a collaborative property application. My contribution focused on the map-view page in a dedicated project branch.",
    challenge:
      "Contributing a focused interface feature while keeping the work isolated and reviewable within a shared repository.",
    solution:
      "Worked through a dedicated GitHub branch and followed a branch-based collaboration workflow for the map-view page.",
    improvements: [
      "Contributed the map-view page",
      "Worked in a dedicated feature branch",
      "Applied Git and GitHub collaboration practices",
      "Kept the contribution scoped for team integration"
    ],
  },
];
