export const portfolioData = {
  personal: {
    firstName: "Yukash",
    lastName: "Sivaraj",
    role: "Software Developer",
    description: "Building digital experiences with code and creativity",
    location: "Melbourne, Australia",
    email: "sivarajyukash@gmail.com",
    socialLinks: {
      github: "https://github.com/YSPlop",
      linkedin: "https://www.linkedin.com/in/yukash-sivaraj/",
      twitter: "https://twitter.com/yukashsivaraj"
    }
  },
  skills: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    // Add more skills
  ],
  projects: [
    {
      title: "Rebecca Yeoh Music Website",
      description: "Designed and deployed a professional music website using Next.js, React.js in TypeScript with Framer Motion, and Next UI for a seamless, visually engaging user experience.",
      technologies: ["Next.js", "React", "TypeScript", "Framer Motion", "Next UI"],
      image: "/projects/rebeccayeohmusic.png?height=300&width=400",
      link: "https://www.rebeccayeohmusic.com.au/",
      github: "https://github.com/YSPlop/rebeccayeoh-music"
    },
    {
      title: "OpenAI Integrated Chatbot",
      description: "Interactive chatbot built with Next JS, React, and OpenAI.",
      technologies: ["Next.js", "React", "OpenAI API"],
      image: "/projects/AIChatBot-overlay.jpg?height=300&width=400",
      link: "#",
      github: null
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "Used CouchDB and MapReduce for large-scale sentiment data processing.",
      technologies: ["CouchDB", "MapReduce", "Data Analysis"],
      image: "/projects/SocialMediaAnalysis-overlay.svg?height=300&width=400",
      link: "#",
      github: null
    },
    {
      title: "Safe Circle Android App",
      description: "Mobile safety app with Firebase, Google Maps API, Kotlin, and Jetpack Compose.",
      technologies: ["Kotlin", "Firebase", "Google Maps API", "Jetpack Compose"],
      image: "/projects/Safecircle-overlay.png?height=300&width=400",
      link: "#",
      github: null
    },
    {
      title: "Tic Tac Toe",
      description: "Developed with React, Next JS and framer motion.",
      technologies: ["React", "Next.js", "Framer Motion"],
      image: "/projects/tictactoe-overlay.png?height=300&width=400",
      link: "#",
      github: null
    }
  ],
  experience: [
    {
      company: "Company Name",
      role: "Senior Developer",
      period: "2020 - Present",
      description: "Key responsibilities and achievements"
    },
    // Add more experiences
  ]
}; 