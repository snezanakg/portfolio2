import holidazeThumb from "../../assets/projects/holidaze-thumb.webp";
import holidazeArticle from "../../assets/projects/holidaze-article.webp";

import semesterThumb from "../../assets/projects/semester2-auction-thumb.webp";
import semesterArticle from "../../assets/projects/semester2-auction-article.webp";

import newsThumb from "../../assets/projects/supabase-news-thumb.webp";
import newsArticle from "../../assets/projects/supabase-news-article.webp";

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
];
