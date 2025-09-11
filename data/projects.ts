export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  detailImage: string;
  link: string | null;
  projectLink: string | null;
  paper: string | null;
  backgroundColor: string;
  projectDescription: string;
  motivation: string;
  howItWorks: string;
  technologies: {
    name: string;
    url: string;
  }[];
  slug: string;
}

export const projects: Project[] = [
  {
    title: "Pledgr",
    subtitle: "Decentralized Crowdfunding Platform",
    description: "Almost-zero transaction fees, and full transparency.",
    image: "/projects/pledgr/pledgr.png",
    detailImage: "/projects/pledgr/pledgr-details-page.png",
    link: "https://github.com/shichao-jiang/pledgr",
    projectLink: null,
    paper: null,
    backgroundColor: "#e26868ff",
    projectDescription:
      "Pledgr is a decentralized crowdfunding platform built on the Aptos blockchain, designed to significantly reduce transaction fees and eliminate middleman fraud by leveraging transparent and immutable smart contracts.",
    motivation:
      "Crowdfunding is increasingly popular for financing projects and supporting charitable causes. However, traditional centralized platforms like GoFundMe take substantial fees and pose risks related to fraud and lack of transparency. For instance, a $5 USD donation on GoFundMe typically loses nearly 9% to processing fees (2.9% + $0.30). Pledgr resolves these issues by deploying a smart contract on the Aptos blockchain. Contributions are made in AptosCoin, with extremely low gas fees—typically fractions of a cent. The transparency provided by blockchain ensures that escrow balances and transactions can be publicly verified, removing the necessity to trust centralized intermediaries.",
    howItWorks:
      "Pledgr utilizes Aptos' blockchain due to its performance, low fees, and fast transaction confirmations. We developed the frontend using Aptos’ TypeScript SDK, enabling direct, decentralized blockchain interaction without a backend. Smart contracts were created in the Aptos Move language and deployed using Aptos CLI tools. The smart contract is published once at a known Aptos address. Users can initiate crowdfunding campaigns by specifying a funding goal, recipient address, and type of fungible asset accepted. Contributors send their donations to the smart contract’s escrow, visible publicly on-chain. Once the funding goal is achieved, the smart contract automatically transfers the funds from escrow directly to the recipient’s wallet.",
    technologies: [
      {
        name: "JavaScript",
        url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      },
      {
        name: "TypeScript",
        url: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
      },
      {
        name: "React",
        url: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
      },
      {
        name: "Aptos Move",
        url: "https://img.shields.io/badge/Aptos%20Move-000000?style=for-the-badge&logo=aptos&logoColor=white",
      },
      {
        name: "CSS3",
        url: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      },
      {
        name: "HTML5",
        url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      },
    ],
    slug: "pledgr",
  },
  {
    title: "RoomMate",
    subtitle: "Full Stack Roommate Finder Application",
    description: "A new take on finding roommates for University students.",
    image: "/projects/roommate/roommate.png",
    detailImage: "/projects/roommate/roommate-details-page.png",
    link: "https://github.com/TyYan03/RoomMate",
    projectLink: "https://devpost.com/software/roommate-w51k46",
    paper: null,
    backgroundColor: "#40aaf6ff",
    projectDescription:
      "RoomMate was created as part of UofTHacks X 36-hour hackathon hosted in 2023. It was an open-ended hackathon with the general theme being 'exploration'. Since we were all second year students at the time and most of us had experience with finding roommates, we decided to make an app that would simplify the process and make the user experience for finding a roommate more enjoyable. In addition, we wanted to try front-end development and to incorporate machine learning or artificial intelligence if possible because it was one of our first hackathons and we wanted to learn as much as possible.",
    motivation:
      "Finding a compatible roommate can be a daunting task, especially for University students who are new to the area or unfamiliar with the housing market. Traditional methods of finding roommates, such as word-of-mouth, bulletin board postings, or University resources, can be unreliable and time-consuming. RoomMate aims to streamline this process by providing a user-friendly platform that connects students based on their preferences and lifestyles. RoomMate seeks to enhance the roommate search experience, making it more efficient and enjoyable for users.",
    howItWorks:
      "RoomMate is built using a modern tech stack that includes React for the frontend, Node.js and Flask for the backend, and MongoDB for the database. The application features a user-friendly interface where students can create profiles, specify their preferences (such as location, lifestyle habits, etc.), and browse potential roommates. The platform also incorporates a matching algorithm that suggests compatible roommates based on the provided preferences. Users can communicate through an integrated chat feature, allowing them to discuss arrangements and get to know each other before making a decision.",
    technologies: [
      {
        name: "Python",
        url: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
      },
      {
        name: "Pandas",
        url: "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
      },
      {
        name: "JavaScript",
        url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      },
      {
        name: "React",
        url: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
      },
      {
        name: "Flask",
        url: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
      },
      {
        name: "Node.js",
        url: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
      },
      {
        name: "MongoDB",
        url: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
      },
    ],
    slug: "roommate",
  },
  {
    title: "FlightGAN",
    subtitle: "Animating Still Images Using GANs",
    description:
      "A ML model that generates a flying bird animation from a single image.",
    image: "/projects/flightgan/flightgan.png",
    detailImage: "/projects/flightgan/flightgan.png",
    link: "https://github.com/TyYan03/FlightGAN",
    projectLink: null,
    paper: "/projects/flightgan/APS360_Final_Report.pdf",
    backgroundColor: "#f0fd9bff",
    projectDescription:
      "FlightGAN is a machine learning model that generates realistic flying bird animations from a single still image. By leveraging Generative Adversarial Networks (GANs), FlightGAN can create smooth and natural flight movements, bringing static images to life. The model is trained on a diverse dataset of bird images and videos, enabling it to understand various flight patterns and styles.",
    motivation:
      "Animating still images has always been a fascinating challenge in the field of computer vision and graphics. Traditional animation techniques often require extensive manual effort and expertise. With the advent of deep learning, particularly Generative Adversarial Networks (GANs), there is an opportunity to automate this process and create realistic animations from static images. FlightGAN was developed to explore this potential, focusing on the specific task of animating birds in flight. The motivation behind this project is to provide a tool that can easily transform still images into dynamic animations, making it accessible for various applications such as digital art, gaming, and reviving memories or historical images.",
    howItWorks:
      "We trained a custom GAN inspired by StyleGAN2-ADA, leveraging over 18,000 curated bird images extracted from YouTube videos and the CUB-200 dataset. The data was preprocessed using YOLOv8 to isolate individual birds, ensuring clean, high-quality training input. The animation is generated by mixing latent style vectors from our trained model, allowing us to smoothly transition a bird’s pose from stationary to mid-flight. This latent space interpolation produces over 300 high-resolution frames, creating a fluid video effect from just one image. To optimize performance on limited resources, we incorporated Adaptive Discriminator Augmentation (ADA), reducing overfitting and improving quality with fewer training samples. Our model achieved a Frechet Inception Distance (FID) score of 23.06 and an 85% realism rating in peer evaluations, indicating a high degree of realism in our generated animations.",
    technologies: [
      {
        name: "Python",
        url: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
      },
      {
        name: "PyTorch",
        url: "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white",
      },
      {
        name: "TensorFlow",
        url: "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white",
      },
      {
        name: "OpenCV",
        url: "https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white",
      },
      {
        name: "YOLOv8",
        url: "https://img.shields.io/badge/YOLOv8-8A2BE2?style=for-the-badge&logoColor=white",
      },

      {
        name: "NumPy",
        url: "https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white",
      },
    ],
    slug: "flightgan",
  },
  {
    title: "SafeStride",
    subtitle: "Safe Navigation For The Blind",
    description: "A multimodal obstacle detection feedback system.",
    image: "/projects/safestride/safestride.png",
    detailImage: "/projects/safestride/safestride-details-page.png",
    link: "https://github.com/TyYan03/safeStride",
    projectLink: "https://dorahacks.io/buidl/21643",
    paper: null,
    backgroundColor: "#83fb93ff",
    projectDescription:
      "SafeStride is a multimodal obstacle detection feedback system designed to assist visually impaired individuals in navigating their environments safely. By utilizing a combination of computer vision and haptic/audio feedback, SafeStride provides real-time information about obstacles and hazards, enabling users to make informed decisions while walking. The system aims to enhance mobility and independence for the visually impaired community.",
    motivation:
      "Navigating the world can be a significant challenge for visually impaired individuals, who often rely on canes or guide dogs to detect obstacles. However, these traditional methods have limitations, such as difficulty in identifying low-lying obstacles or hazards that are not in the direct path. SafeStride was developed to address these challenges by leveraging modern technology to provide enhanced obstacle detection and feedback. The motivation behind SafeStride is to improve the safety and confidence of visually impaired individuals as they navigate various environments, ultimately promoting greater independence and quality of life.",
    howItWorks:
      'SafeStride employs a camera mounted on the user\'s chest to capture real-time video of the surrounding environment. This video feed is processed using a YOLOv8 object detection model, which identifies and classifies obstacles such as pedestrians, vehicles, and static objects. The processed information is then received by a wearable two mobile device system, which contains a set of vibration motors and speakers. The motors provide haptic feedback to the user, indicating the presence and location of obstacles. For example, if an obstacle is detected on the left side, the left-side motors will vibrate, alerting the user to adjust their path accordingly. The closer the user is to an obstacle, the more intense the vibrations. The system also gives a short description of where the obstacle is located (ex. "There is a chair 0.8 metres slightly to your left"). The entire system is designed to be lightweight and non-intrusive, allowing users to wear it comfortably throughout their daily activities.',
    technologies: [
      {
        name: "Python",
        url: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
      },
      {
        name: "JavaScript",
        url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      },
      {
        name: "TypeScript",
        url: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
      },
      {
        name: "Flask",
        url: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
      },
      {
        name: "YOLOv8",
        url: "https://img.shields.io/badge/YOLOv8-8A2BE2?style=for-the-badge&logoColor=white",
      },
    ],
    slug: "safestride",
  },
  {
    title: "RoboCat",
    subtitle: "Autonomous Robotic Pet",
    description: "It's not your average pet...",
    image: "/projects/robocat/robocat.jpg",
    detailImage: "/projects/robocat/robocat-details-page.png",
    link: "https://github.com/reaahuja/MakeUofT",
    projectLink: "https://devpost.com/software/robo-cat",
    paper: null,
    backgroundColor: "#f2b3ffff",
    projectDescription:
      "RoboCat is an autonomous robotic pet designed to provide companionship and entertainment. RoboCat can perform a variety of tasks, making it a versatile addition to any household.",
    motivation:
      "The idea for RoboCat stemmed from the desire to create a pet that could offer the joys of companionship without the responsibilities and challenges associated with traditional pets, or act as a companion to an actual pet. Many people, especially those living in urban environments or with busy lifestyles, find it difficult to care for a live animal. RoboCat aims to fill this gap by providing a low-maintenance alternative that still offers emotional support and interaction. Additionally, the project serves as a platform for exploring advancements in robotics, pushing the boundaries of what autonomous machines can achieve in terms of social interaction.",
    howItWorks:
      "RoboCat is built on a robust hardware platform that includes ultrasonic sensors, TT motors, and servo motors to enable movement and interaction. The RoboCat was made up of a wheel base with sensors to perform autonomous movement on land (avoiding obstacles), a laser 'eye' that would move at random using the servo motors, a speaker that would emit 'meow'-like sounds, a wagging tail, and an LED display showing various messages. The entire system is powered by a rechargeable battery, allowing for extended periods of use without the need for constant recharging.",
    technologies: [
      {
        name: "C++",
        url: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
      },
      {
        name: "Arduino",
        url: "https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white",
      },
    ],
    slug: "robocat",
  },
  {
    title: "ASLingo",
    subtitle: "Interactive ASL Learning Application",
    description:
      "Learn through our testing modules with real-time feedback from our ML model.",
    image: "/projects/aslingo/aslingo.png",
    detailImage: "/projects/aslingo/aslingo-details-page.png",
    link: "https://github.com/TyYan03/ASLingo",
    projectLink:
      "https://devpost.com/software/aslingo-cf9h3q?_gl=1*11q2y5l*_gcl_au*MTE3Nzk1Njg4NS4xNzU2NDMxNzM0*_ga*NjkyMjkwNDkxLjE3NDc5NTQ3MzE.*_ga_0YHJK3Y10M*czE3NTc0NTEwNzUkbzEwJGcxJHQxNzU3NDUxMTcyJGo0NiRsMCRoMA..",
    paper: null,
    backgroundColor: "#ffb9b9ff",
    projectDescription:
      "ASLingo is an interactive application designed to facilitate the learning of American Sign Language (ASL). The app features various testing and learning modules that provide real-time feedback using a machine learning model to assess the accuracy of users' sign language gestures. ASLingo aims to make learning ASL more engaging and effective by leveraging technology to enhance the educational experience.",
    motivation:
      "Learning American Sign Language can be a challenging endeavor, especially for beginners who may not have access to qualified instructors or practice partners. Traditional learning methods often lack interactivity and immediate feedback, which are crucial for mastering sign language. ASLingo was developed to address these challenges by providing an accessible platform that combines interactive learning with real-time feedback. The motivation behind ASLingo is to empower individuals to learn ASL at their own pace while ensuring they receive constructive feedback to improve their skills effectively.",
    howItWorks:
      "ASLingo was built using HTML, providing a user-friendly interface for learners to navigate through different modules and access learning resources. The back-end is powered by Flask, which handles the processing of user data and communication with the machine learning model. The ML model, trained on the ASL alphabet, analyzes real-time video input from users to evaluate their signing accuracy. Users receive instant feedback on their performance, allowing them to identify areas for improvement and track their progress over time. The application also includes various learning modules, such as signing lessons and interactive quizzes, to provide a comprehensive learning experience.",
    technologies: [
      {
        name: "Python",
        url: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
      },
      {
        name: "Pandas",
        url: "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
      },
      {
        name: "NumPy",
        url: "https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white",
      },
      {
        name: "HTML5",
        url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      },
      {
        name: "Flask",
        url: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
      },
    ],
    slug: "aslingo",
  },
  {
    title: "HelloMilo",
    subtitle: "Speech Improvement Application",
    description: "A real-time speech teacher with personalized feedback.",
    image: "/projects/hellomilo/hellomilo.png",
    detailImage: "/projects/hellomilo/hellomilo-details-page.png",
    link: "https://github.com/maanikg/helloMilo",
    projectLink: null,
    paper: null,
    backgroundColor: "#ff93c2ff",
    projectDescription:
      "HelloMilo is a speech improvement application that acts as a real-time speech coach, providing personalized feedback to users. The app utilizes advanced speech recognition and analysis technologies to evaluate various aspects of speech, such as tone, volume, and pace. By offering a detailed breakdown of the users' speech patterns and quality, HelloMilo aims to help enhance communication skills.",
    motivation:
      "Effective communication is a vital skill in both personal and professional settings. However, many individuals struggle with aspects of their speech, such as clarity, confidence, and expressiveness. Traditional methods of improving speech often involve attending workshops or working with speech therapists, which may not be accessible or affordable for everyone. HelloMilo was developed to provide an accessible and convenient solution for individuals looking to improve their speech. The motivation behind HelloMilo is to offer personalized feedback that can be accessed anytime and anywhere, making speech improvement more attainable for a broader audience.",
    howItWorks:
      "HelloMilo was developed using Swift and SwiftUI, providing a seamless and intuitive user experience on iOS devices. The back-end leverages Firebase for data storage, ensuring secure and efficient management of user information. The core functionality of HelloMilo relies on machine learning models that analyze users' speech in real-time. The model was trained through Apple's machine learning development platform CreateML. I was able to feed audio clips of various categories (monotone, quick, etc.) in order to train the model. The analysis worked by taking 5 second clips at a time every 2.5 seconds, and applying the model to predict the estimated quality of speech; this process allowed for a seamless analysis of the entire audio. These models assess various parameters, such as speech rate and intonation patterns. Based on the analysis, HelloMilo generates a personalized feedback score indicating specefic areas where users can improve their speech. The app also includes features such as progress tracking, allowing users to monitor their improvement over time.",
    technologies: [
      {
        name: "Swift",
        url: "https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white",
      },

      {
        name: "Core ML",
        url: "https://img.shields.io/badge/Core%20ML-000000?style=for-the-badge&logo=apple&logoColor=white",
      },
      {
        name: "Firebase",
        url: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black",
      },
      {
        name: "Python",
        url: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
      },
      {
        name: "SwiftUI",
        url: "https://img.shields.io/badge/SwiftUI-FA7343?style=for-the-badge&logoColor=white",
      },
    ],
    slug: "hellomilo",
  },
  {
    title: "UExplore",
    subtitle: "Navigation Application",
    description: "Smarter Routes. Open Data. Beautifully Visualized.",
    image: "/projects/uexplore/uexplore.png",
    detailImage: "/projects/uexplore/uexplore.png",
    link: "https://github.com/xchkcode0803/UExplore",
    projectLink: null,
    paper: null,
    backgroundColor: "#79d8f5ff",
    projectDescription:
      "UExplore is a desktop GIS (Geographic Information System) application designed to help users explore cities around the world with intuitive map-based interactions. Built using C++, the application integrates data from the OpenStreetMap API and displays dynamic graphical elements via the GTK library. UExplore features layered geographic data visualization, real-time location searching, public transport overlays, and intelligent path-finding functionality, all in a clean, user-friendly interface.",
    motivation:
      "I recognized how overwhelming it can be to explore a new city—especially when balancing studies, transit, and personal interests. Traditional map applications often focus on general navigation but lack interactivity tailored to student needs, such as discovering nearby facilities or quickly identifying commute options. UExplore was built to bridge this gap by offering a customizable, lightweight desktop mapping tool. With features like auto-suggest search, detailed overlays for transportation, and an intuitive UI, it empowers students to explore unfamiliar cities with confidence and ease. Our goal was to blend the power of GIS with simplicity—delivering not just directions, but discovery.",
    howItWorks:
      "Upon launch, it dynamically renders map data—such as roads, buildings, parks, and water bodies—based on the user's zoom level, using a layered display system to avoid visual clutter. Users can search for specific locations using an autocomplete search bar, highlight places of interest, and overlay public transportation networks like subways, buses, and bike paths. The application also includes shortcut buttons for quick access to common POIs (e.g. restaurants or hospitals), and a powerful pathfinding model that computes optimal driving routes. This model accounts for real-world factors like speed limits and turn penalties, and offers step-by-step driving instructions with directional arrows for easy navigation. With its responsive UI and smart data visualization, UExplore provides a fast, intuitive way for users—especially students—to explore and understand new cities in detail.",
    technologies: [
      {
        name: "C++",
        url: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
      },
      {
        name: "GTK",
        url: "https://img.shields.io/badge/GTK-5790C4?style=for-the-badge&logo=gnome&logoColor=white",
      },
    ],
    slug: "uexplore",
  },
];
