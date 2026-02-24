export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  liveLink: string;
  githubLink: string;
  caption: string;
  improvements: string[];
  tools: string[];
  duration: string;
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  {
    id: "css-frameworks",
    title: "A full-stack web application: News Platform",
    shortDescription: "A full-stack news platform built with HTML5, CSS3, JS, and Supabase.",
    fullDescription: "This project is a comprehensive news platform that utilizes a modern frontend stack paired with Supabase's backend-as-a-service. It features secure user authentication, a robust PostgreSQL database, and fine-grained access control.",
    thumbnail: "https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    liveLink: "https://supabasenewsplatform.netlify.app/",
    githubLink: "https://github.com/snezanakg/development-platforms-ca",
    caption: "Responsive news platform with optimized CSS framework layouts.",
    improvements: [
      "Frontend: HTML5, CSS3, JavaScript (ES Modules), Supabase JS Client Library",
      "Backend (PaaS): Supabase for Authentication (email/password), Database (PostgreSQL), and Row Level Security (RLS)"
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "Supabase"],
    duration: "2nd Year, Semester 2",
    challenge: "My biggest challenge with this project was figuring out how to set up the authentication and user data with Supabase while keeping the frontend simple and fast.",
    solution: "I spent a lot of time reading the documentation and eventually implemented Row Level Security (RLS) to ensure that only the right users could edit their own content."
  },
  {
    id: "javascript-frameworks",
    title: "Holidaze – Project Exam 2",
    shortDescription: "A modern accommodation booking platform built using the official Noroff Holidaze API.",
    fullDescription: "Holidaze is a comprehensive accommodation booking platform that supports two distinct user roles. Customers can browse venues, check real-time availability via a calendar, and manage their bookings. Venue Managers have administrative control to create, edit, and delete venues, as well as monitor bookings for their managed properties.",
    thumbnail: "https://images.unsplash.com/photo-1680946496238-5272d3c407fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    liveLink: "https://accommodationbookingsite.netlify.app/",
    githubLink: "https://github.com/snezanakg/SNEZANA_KRAGUJEVAC_PE2_MAR24FT",
    caption: "Interactive booking platform with role-based dashboards.",
    improvements: [
      "Role-based functionality for Customers (booking) and Venue Managers (listing management).",
      "Interactive venue availability calendar and real-time search filtering.",
      "Profile management system allowing users to update their personal avatars.",
      "Comprehensive venue management with full CRUD (Create, Read, Update, Delete) capabilities."
    ],
    tools: ["React", "TypeScript", "Vite", "React Router", "TailwindCSS", "Lucide Icons"],
    duration: "2nd Year, Semester 4",
    challenge: "Managing the complex state for two different user roles (Customer and Manager) while keeping the UI intuitive was quite difficult.",
    solution: "I used React Router for clear navigation and state management to handle the user's role and data across the app."
  },
  {
    id: "semester-project-2",
    title: "Auction House (Vanilla JS)",
    shortDescription: "Frontend web application for the Noroff Auction API. Built with Vanilla JS + Bootstrap (no frameworks).",
    fullDescription: "This project is a comprehensive frontend auction platform interacting with the Noroff Auction API. It features a custom-built authentication system, full listing management, and a real-time bidding interface, all delivered via a responsive UI that strictly follows professional Figma designs.",
    thumbnail: "https://images.unsplash.com/photo-1696711531548-904ecc18d2df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    liveLink: "https://semesterproject2auctionhouse.netlify.app/",
    githubLink: "https://github.com/snezanakg/Semester-Project-2---Auction-House",
    caption: "Auction House: Real-time bidding interface and item management.",
    improvements: [
      "Authentication: Secure Register & Login using @stud.noroff.no accounts.",
      "Profile Management: View avatars, credit balance, personal listings, and active bids.",
      "Listing Lifecycle: Create, edit, and delete listings with full search and filtering capabilities.",
      "Dynamic Bidding: Real-time bidding on unique items for logged-in users.",
      "UI/UX: Responsive desktop and mobile layouts with a credits pill in the header."
    ],
    tools: ["Vanilla JS", "Bootstrap", "Noroff Auction API"],
    duration: "2nd Year, Semester 3",
    challenge: "Since I couldn't use a framework like React, managing the DOM and state manually with Vanilla JS was a real learning experience.",
    solution: "I organized my code into modules and used event listeners to handle user interactions without needing a massive, messy main file."
  }
];