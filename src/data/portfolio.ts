export const portfolioData = {
  personal: {
    firstName: "Yukash",
    lastName: "Sivaraj",
    role: "Software Developer",
    description: "Building digital experiences with code and creativity",
    about: "I'm a passionate software developer with expertise in building modern web applications. I specialize in creating seamless user experiences using cutting-edge technologies. With a strong foundation in both frontend and backend development, I bring ideas to life through clean, efficient, and scalable code.",
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
    { name: "Next.js", level: 85 },
    { name: "UI/UX Design", level: 75 },
    { name: "Database Design", level: 80 }
  ],
  projects: [
    {
      title: "Lume Health",
      description: "Developed a comprehensive healthcare platform for NDIS providers, featuring appointment scheduling, client management, and service tracking for occupational and physiotherapists. Implemented a modern, accessible interface with dynamic content management.",
      technologies: ["Next.js", "Framer Motion", "Payload CMS", "shadcn/ui"],
      image: "/projects/lume-health.png?height=300&width=400",
      link: "https://lumehealth.com.au",
      github: null
    },
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
      description: "Created a free alternative to ChatGPT Plus by building a custom chatbot using Next.js and the OpenAI API. Features include streaming responses, conversation memory, and a sleek UI - because why pay for ChatGPT when you can build your own? Saved myself $20/month and learned a ton about AI integration in the process.",
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
    },
    {
      title: "Eco Living Insulations SEO Optimization",
      description: "Implemented comprehensive SEO improvements for a local insulation business, including WordPress site optimization and Google Business Profile enhancement. Resulted in improved local search visibility and increased customer engagement.",
      technologies: ["WordPress", "SEO", "Google Business Profile", "Local SEO"],
      image: "/projects/ecolivinsulations.png?height=300&width=400",
      link: "https://ecolivinsulations.com.au",
      github: null
    },
    {
      title: "Portfolio Website 2024",
      description: "Modern portfolio website built with Next.js 14, featuring server components, animations with Framer Motion, and a dark theme UI. Includes project showcases, blog integration, and contact form functionality.",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "shadcn/ui"],
      image: "/projects/portfolio-2024.png?height=300&width=400",
      link: "https://yongsheng.au",
      github: "https://github.com/YSPlop/portfolio"
    },
    {
      title: "Portfolio Website 2019",
      description: "My first portfolio website built during university, showcasing early web development projects and skills. Created with vanilla JavaScript and CSS animations.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
      image: "/projects/portfolio-2019.png?height=300&width=400",
      link: null,
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