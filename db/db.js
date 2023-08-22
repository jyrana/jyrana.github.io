export const bio = [
  "Hello there &#128075;",
  "I'm Jay Rana, equipped with a background encompassing Machine Learning, Deep Learning, Data Science, and Computer Vision. My current exploration involves venturing into the world of Reinforcement Learning through various projects. Other than academics, I find joy in traveling and actively participating in sports like Tennis, Football, and Swimming.",
  "I have a strong desire to discover fresh challenges and openings that allow me to utilize my skills and knowledge in creative projects. Whether it's in the fields of machine learning, computer vision, NLP, Data Science, or computer engineering, I'm open to collaborating and assisting with any inquiries that come my way.",
  "Thanks for taking the time to learn a little about me!",
];

export const skills = [
  {
    title: "Languages",
    skillName: "Python, Java, C++",
    color: "1",
    percentage: "90",
  },
  {
    title: "Frameworks",
    skillName: "Pytorch, Tensorflow",
    color: "7",
    percentage: "80",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "Pandas, Numpy, Scikit-learn, OpenCV",
    color: "6",
    percentage: "80",
  },
  {
    title: "Design",
    skillName: "HTML, Bootstrap, Figma",
    color: "4",
    percentage: "80",
  },
  
  {
    title: "Data Visualization",
    skillName: "Tableau, Power BI",
    color: "5",
    percentage: "80",
  },
  {
    title: "Front-End",
    skillName: "Flask, Django, Jinja2",
    color: "8",
    percentage: "70",
  },
  {
    title: "DataBase",
    skillName: "MySQL, SQLite",
    color: "2",
    percentage: "70",
  },
  {
    title: "Tools",
    skillName: "Pyspark, Hadoop, Docker",
    color: "10",
    percentage: "70",
  },
  {
    title: "Cloud",
    skillName: "Google Cloud, AWS",
    color: "10",
    percentage: "80",
  },
];

export const projects = {
   MLProjects: [
    {
      projectName: "ASL Sign Language",
      image: "images/ASL.png",
      summary:
        "Developed An application that detects and predicts ASL Numbers, Alphabets, and a few words using Computer Vision. Achieved a Training Accuracy of 99.3% and a Testing Accuracy of 98.6%.",
      preview: "https://github.com/jyrana/ASLSignLanguage",
      techStack: ["Tensorflow", "OpenCV", "Flask", "SQlite", "NLTK"],
    },
    {
      projectName: "LayoutGAN",
      image: "images/Layout.png",
      summary:
        "Build a model based on DCGAN for generating visually appealing 2D graphic layouts. Generate random graphic elements, followed by refinement through a self-attention module to ensure accurate alignment.",
      preview: "https://github.com/Meet1903/ECE-GY-6953-Final-Project/tree/main",
      techStack: ["Pytorch", "GAN", "Numpy", "Residual Block"],
    },
    {
      projectName: "Keyboard Gesture",
      image: "images/gesture.png",
      summary:
        "Build an Application to use keyboard shortcut functions like Volume Up-Down, PrtSCreen, Open Task Manager, Refresh, ShutDown Using Computer Vision Library.",
      preview: "https://github.com/jyrana/KeyboardGesture",
      techStack: ["OpenCV", "Keyboard", "Numpy"],
    },
  ],
  personalProjects: [
    {
      projectName: "ProviderDrop",
      image: "images/pd.png",
      summary:
        "Build Web Application using figma, PHP, HTML and Bootstrap where one can Add items to sell and buy with an option for inquiry.",
      preview: "https://github.com/jyrana/Provider-Drop",
      techStack: ["Figma", "PHP", "HTML", "Bootstrap"],
    },
    {
      projectName: "Tic-Tac-Toe",
      image: "images/TicTacToe.png",
      summary:
        "Build Tic-Tac Toe in Pygame",
      preview: "https://github.com/jyrana/TicTacToe",
      techStack: ["Pygame", "Python", "AI"],
    },
  ],
  DataProjects: [
    {
      projectName: "Online Shopping Intention Prediction",
      image: "images/OSPD.png",
      summary:
        "Conducted in-depth analysis of returning customer data for an online shopping application and Identified significant features influencing customer behavior and purchase intentions. We recommended ways to enhance the likelihood of customer purchase intentions and boost overall business revenue over a dataset comprising 13,000 entries.",
      preview: "",
      techStack: ["Data Analytics", "Data Visualization", "DataRobot", "Business Analytics"],
    },
    {
      projectName: "HomeDepot ChatBot",
      image: "images/HomeDepot.png",
      summary:
        "Build a scraper to scrap product description page information like brand, price, product description, images, and URL from the homeDepot sitemap and store it in CSV format.I Developed an interactive chatbot using OpenAI API and langchain that leverages the CSV file to respond to basic product-related inquiries.",
      preview: "",
      techStack: ["Web Scraping", "Data Preprocessing", "Langchain", "OpenAi API"],
    },
  ],
};

export const experience = [
  {
    title: "NYU Multimedia and Visualization Lab",
    duration: "March 2023 - Present",
    subtitle: "Research Assistant",
    details: [
      "Working towards improving the quadrupedal robot’s movement in a dynamic environment.", 
      "Focusing on Utilizing reinforcement learning and imitation learning algorithms like Behavior cloning, Inverse reinforcement learning, and DQN under the guidance of Professor Yi. Fang.",
    ],
    tags: ["Imitation Learning","Reinforcement Learning", "PyBullet", "Deep Learning", "Behavior Cloning", "Autonomous Navigation"],
    icon: "search",
  },
  {
    title: "The BIT Lab",
    duration: "June 2023 - Present",
    subtitle: "Research Assistant",
    details: [
      "Analyzing Generative AI capabilities to generate innovative Art Samples and building a model to differentiate P-creativity and H-creativity art samples.",
    ],
    preview:"https://www.leedokyun.com/bitlab.html",
    tags: ["MultiModal Models", "LLMs", "Generative AI", "Prompt Engineering", "Diffusion Models"],
    icon: "tags",
  },
  
];

export const education = [
  {
    title: "Masters of Science in Computer Engineering",
    duration: "Sep 2022 - May 2024 (Expected)",
    subtitle: "New York University, Tandon School of Engineering",
    details: [
      "CGPA: 3.9/4.0",
      "I am currently pursuing my second-year majoring in computer Enginnering",
      "Member of NYU Machine Learning Club, working towards developing Machine Learning curiosity in undergrad students"
    ],
    tags: ["Applied Machine Learning", "Deep Learning", "Computer Vision", "Business Analytics", "Data Science"],
    icon: "graduation-cap",
  },
  {
    title: "Bachelors in Computer Engineering",
    duration: "Aug 2018-May 2022",
    subtitle: "Gujarat Technological University, G H Patel College of Enginnering and Technology",
    details: [
      "CGPA: 8.9/10",
      "Elected As Logistics Chairperson for International Society of Automation GCET Student Branch",
      "Hosted a 2-day workshop on Intro to Machine Learning with 50 participants during my senior year of undergraduate.",
    ],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Machine Learning",
      "Data Science",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "GitHub",
        link: "https://github.com/jyrana",
      },
      {
        text: "LeetCode",
        link: "https://leetcode.com/Jyrana/",
      },
    ],
  },
  
  {
    label: "Social Media",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/jay-rana01/",
      },
      {
        text: "Twitter",
        link: "https://twitter.com/ranajay2001",
      },
      
    ],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
    ],
  },
];

const gitUserName = "jyrana";