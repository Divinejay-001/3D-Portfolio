

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 70, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Committed to excellence, ensuring every project is crafted with precision and care.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Effective Communication",
    desc: "Clear, consistent updates at every stage to keep you fully informed and confident.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Respecting deadlines by delivering projects promptly without compromising quality.",
  },
];

const techStackImgs = [
  // Frontend
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Next.js",
    imgPath: "/Mine/nextjs.webp",
  },
  {
    name: "TailwindCSS",
    imgPath: "/Mine/tailwind.webp",
  },

  // Backend
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "MongoDB",
    imgPath: "https://www.svgrepo.com/show/439231/mongodb.svg",
  },

 

  // Tools
  {
    name: "Git & GitHub",
    imgPath: "/Mine/github.webp",
  },
  {
    name: "Figma",
    imgPath: "/Mine/figma.webp",
  },
];



const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
 {
  review: "Divinegift showed exceptional frontend skills, especially with his Shophere e-commerce project. His focus on clean design, user-friendly interfaces, and smooth interactions brought the project to life and impressed everyone who used it.",
  imgPath: "/images/exp1.png", // screenshot of your Shophere project
  logoPath: "/images/logos/shop.png", // optional logo/placeholder
  title: "Frontend Developer",
  date: "February 2025",
  responsibilities: [
    "Designed and developed **Shophere**, a responsive e-commerce platform with a sleek and intuitive UI.",
    "Implemented **dark and light mode themes**, ensuring accessibility and personalization for users.",
    "Created **dedicated Men’s and Women’s sections** with seamless navigation and product organization.",
    "Added engaging **animations and sliders** to enhance the shopping experience.",
    "Focused on building a **modern, scalable frontend** with React for smooth performance."
  ],
},

 {
  review: "Building Collabora gave me hands-on SaaS experience, from frontend to backend. I designed and built a full-stack task management system that helps teams collaborate and stay organized.",
  imgPath: "/images/exp2.png", // replace with your project screenshot
  logoPath: "/images/logos/collabora.webp", // replace with your logo or Collabora brand mark
  title: "Full Stack Developer (MERN)",
  date: "Jan 2025 – Present", // adjust timeline if needed
  responsibilities: [
    "Developed Collabora, a SaaS task management system, using the MERN stack (MongoDB, Express, React, Node.js).",
    "Implemented role-based auth (admin & team members) using JWT.",
    "Built RESTful APIs to handle task creation, assignments, and real-time collaboration features.",
    "Designed a responsive React UI with reusable components.",
    "Deployed the application with version control and CI/CD workflows for a production-ready SaaS experience.",
  ],
},

  {
  review: "Divine’s work on BlocMeet’s backend laid the foundation for a smooth and scalable event management system. His Node.js expertise ensured reliable performance and efficient API design for our users.",
  imgPath: "/images/exp3.png", // (replace with your own image)
  logoPath: "/images/logos/node.png", // (replace with BlocMeet/Concave logo)
  title: "Backend Developer (Node.js)",
  date: "June 2025 – Present", // adjust the timeline
  responsibilities: [
    "Developing the backend logic for BlocMeet, an event management system built for Concave.",
    "Designing and implementing RESTful APIs with Node.js and Express to handle authentication, event creation, and user management.",
    "Integrating MongoDB for scalable data storage and efficient queries.",
    "Ensuring secure authentication and authorization using JWT and Google OAuth.",
    "Collaborating with the frontend team to deliver seamless event search and booking features.",
  ],
}

];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
