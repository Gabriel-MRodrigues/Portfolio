// Profile picture
import profile_image from './Profile-Picture.jpg';
import header_bg_gradient from './bg-gradient.png';

// Information Icons
import { FaCode } from 'react-icons/fa';
import { LuCircuitBoard } from 'react-icons/lu';
import { FaUsers } from 'react-icons/fa';

// SKills Icons
//Frontend
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaBootstrap } from 'react-icons/fa';
import { SiThymeleaf } from 'react-icons/si';
import { SiBlazor } from 'react-icons/si';
import { DiJqueryLogo } from 'react-icons/di';
import { RiNextjsFill } from 'react-icons/ri';
//Backend
import { AiOutlineDotNet } from 'react-icons/ai';
import { FaNodeJs } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
//Database
import { SiMysql } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { GrOracle } from 'react-icons/gr';
//Tools
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';
import { IoLogoFigma } from 'react-icons/io5';
import { VscVscode } from 'react-icons/vsc';
import { DiVisualstudio } from 'react-icons/di';
import { SiArduino } from 'react-icons/si';
import { SiPlatformio } from 'react-icons/si';
import { SiJira } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';
//Cloud
import { FaAws } from 'react-icons/fa';

export const assets = {
  profile_image,
  header_bg_gradient,
};

export const infoList = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Creating fullstack web applications with modern frameworks.',
  },
  {
    icon: <LuCircuitBoard />,
    title: 'Embedded Development',
    description: 'Building embedded systems with microcontrollers.',
  },
  {
    icon: <FaUsers />,
    title: 'Collaboration',
    description:
      'Working closely with teams to bring ideas and projects to life.',
  },
];

export const skillsList = [
  //Frontend
  {
    name: 'HTML',
    icon: <FaHtml5 />,
    category: 'frontend',
  },
  {
    name: 'CSS',
    icon: <IoLogoCss3 />,
    category: 'frontend',
  },
  {
    name: 'JavaScript',
    icon: <IoLogoJavascript />,
    category: 'frontend',
  },
  {
    name: 'React',
    icon: <FaReact />,
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    icon: <RiTailwindCssFill />,
    category: 'frontend',
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap />,
    category: 'frontend',
  },
  {
    name: 'Thymeleaf',
    icon: <SiThymeleaf />,
    category: 'frontend',
  },
  {
    name: 'Blazor',
    icon: <SiBlazor />,
    category: 'frontend',
  },
  {
    name: 'JQuery',
    icon: <DiJqueryLogo />,
    category: 'frontend',
  },
  {
    name: 'Next.js',
    icon: <RiNextjsFill />,
    category: 'frontend',
  },
  //Backend
  {
    name: '.NET',
    icon: <AiOutlineDotNet />,
    category: 'backend',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    category: 'backend',
  },
  {
    name: 'SpringBoot',
    icon: <SiSpringboot />,
    category: 'backend',
  },
  {
    name: 'Python',
    icon: <FaPython />,
    category: 'backend',
  },
  {
    name: 'C#',
    icon: <TbBrandCSharp />,
    category: 'backend',
  },
  {
    name: 'Java',
    icon: <FaJava />,
    category: 'backend',
  },
  {
    name: 'C++',
    icon: <SiCplusplus />,
    category: 'backend',
  },
  {
    name: 'PHP',
    icon: <FaPhp />,
    category: 'backend',
  },
  //Database
  {
    name: 'MySQL',
    icon: <SiMysql />,
    category: 'database',
  },
  {
    name: 'MSSQL',
    icon: <DiMsqlServer />,
    category: 'database',
  },
  {
    name: 'PHP',
    icon: <FaPhp />,
    category: 'database',
  },
  {
    name: 'Oracle',
    icon: <GrOracle />,
    category: 'database',
  },
  //Tools
  {
    name: 'Git',
    icon: <FaGitAlt />,
    category: 'tools',
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    category: 'tools',
  },
  {
    name: 'Docker',
    icon: <FaDocker />,
    category: 'tools',
  },
  {
    name: 'Figma',
    icon: <IoLogoFigma />,
    category: 'tools',
  },
  {
    name: 'Visual Studio Code',
    icon: <VscVscode />,
    category: 'tools',
  },
  {
    name: 'Visual Studio',
    icon: <DiVisualstudio />,
    category: 'tools',
  },
  {
    name: 'ArduinoIDE',
    icon: <SiArduino />,
    category: 'tools',
  },
  {
    name: 'PlatformIO',
    icon: <SiPlatformio />,
    category: 'tools',
  },
  {
    name: 'Jira',
    icon: <SiJira />,
    category: 'tools',
  },
  {
    name: 'Postman',
    icon: <SiPostman />,
    category: 'tools',
  },
  //Cloud
  {
    name: 'AWS',
    icon: <FaAws />,
    category: 'cloud',
  },
];

export const categoryList = [
  'frontend',
  'backend',
  'tools',
  'cloud',
  'database',
];

export const projectList = [
  {
    id: 1,
    title: 'Recipe Exchange',
    description:
      '"Recipe Exchange" is a static webpage platform. The project emphasizes responsiveness, ensuring a seamless experience across different screen sizes.',
    image: '/projects/recipe_exchange.png',
    tags: ['HTML', 'CSS'],
    demoUrl: 'https://gabriel-mrodrigues.github.io/Recipe-Exchange/',
    repo: 'https://github.com/Gabriel-MRodrigues/Recipe-Exchange',
    featured: 'all',
  },
  {
    id: 2,
    title: 'Library Management System',
    description: 'LMS built using C# as a Console App.',
    image: '/projects/lms.png',
    tags: ['C#', 'OOP'],
    demoUrl: '#',
    repo: 'https://github.com/Gabriel-MRodrigues/Library-Management-System',
    featured: 'all',
  },
  {
    id: 3,
    title: 'Expense Tracker',
    description: 'Web application for tracking expenses.',
    image: '/projects/expense_tracker.png',
    tags: ['C#', 'ASP.NET', 'Entity Framework', 'MVC'],
    demoUrl: '#',
    repo: 'https://github.com/Gabriel-MRodrigues/ExpenseTracker',
    featured: 'all',
  },
  {
    id: 4,
    title: 'Pig Game',
    description:
      'Dice game where players take turns to roll a dice and accumulate points.',
    image: '/projects/pig_game.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://gabriel-mrodrigues.github.io/Pig-Game/',
    repo: 'https://github.com/Gabriel-MRodrigues/Pig-Game',
    featured: 'all',
  },
  {
    id: 5,
    title: 'Bankist App',
    description:
      'Web application that simulates an user interface of a bank where users can check their transactions.',
    image: '/projects/bankist.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://gabriel-mrodrigues.github.io/BankistApp/',
    repo: 'https://github.com/Gabriel-MRodrigues/BankistApp',
    featured: 'all',
  },
  {
    id: 6,
    title: 'Movie App',
    description: 'A modern movie discovery app built using the TMDB API.',
    image: '/projects/movie_app.png',
    tags: ['React', 'AppWrite', 'The Movie Database (TMDB)'],
    demoUrl: '#',
    repo: 'https://github.com/Gabriel-MRodrigues/MovieApp',
    featured: 'all',
  },
  {
    id: 7,
    title: 'Game Store',
    description: 'Web application simulating a game store catalog.',
    image: '/projects/game_store.png',
    tags: ['C#', 'HTML', 'CSS', '.NET', 'Blazor'],
    demoUrl: '#',
    repo: 'https://github.com/Gabriel-MRodrigues/GameStore',
    featured: 'featured',
  },
  {
    id: 8,
    title: 'Alarm Control Node',
    description: 'Alarm system built with an ESP32 to monitor motion.',
    image: '/projects/alarm_control_node.png',
    tags: ['C++', 'ESP32', 'Embedded Systems'],
    demoUrl: '#',
    repo: 'https://github.com/Gabriel-MRodrigues/Embedded_Systems/tree/main/control-node',
    featured: 'featured',
  },
  {
    id: 9,
    title: 'LED Blink',
    description: 'Embedded System project to blink LEDs.',
    image: '',
    tags: ['C++', 'Arduino', 'Embedded Systems'],
    demoUrl: '#',
    repo: 'https://github.com/Gabriel-MRodrigues/Embedded_Systems/tree/main/LED_BLINK',
    featured: 'all',
  },
  {
    id: 10,
    title: 'Spaceship',
    description: 'Embedded System project to simulate spaceship launch.',
    image: '/projects/spaceship.png',
    tags: ['C++', 'Arduino', 'Embedded Systems'],
    demoUrl: 'https://wokwi.com/projects/452427386341351425',
    repo: 'https://github.com/Gabriel-MRodrigues/Embedded_Systems/tree/main/spaceship',
    featured: 'all',
  },
  {
    id: 11,
    title: 'Love Meter',
    description: 'Embedded System project to calculate temperature.',
    image: '/projects/love_o_meter.png',
    tags: ['C++', 'Arduino', 'Embedded Systems'],
    demoUrl: 'https://wokwi.com/projects/452973748642778113',
    repo: 'https://github.com/Gabriel-MRodrigues/Embedded_Systems/tree/main/Love_o_Meter',
    featured: 'all',
  },
  {
    id: 12,
    title: 'Color Mixing Lamp',
    description: 'Embedded System project to light LED through photo sensor.',
    image: '',
    tags: ['C++', 'ESP32', 'Embedded Systems'],
    demoUrl: '#',
    repo: 'https://github.com/Gabriel-MRodrigues/Embedded_Systems/tree/main/color_mixing_lamp',
    featured: 'all',
  },
  {
    id: 13,
    title: 'Digital Hourglass',
    description: 'Embedded System project to set alarm clock.',
    image: '/projects/digital_hourglass.png',
    tags: ['C++', 'ESP32', 'Embedded Systems'],
    demoUrl: 'https://wokwi.com/projects/454109990091329537',
    repo: 'https://github.com/Gabriel-MRodrigues/Embedded_Systems/tree/main/Digital_Hourglass',
    featured: 'all',
  },
  {
    id: 14,
    title: 'Bio Generator App',
    description:
      'Web based application to generate biography based on user input.',
    image: '/projects/biography_app.png',
    tags: ['React', 'NodeJs', 'Gemini'],
    demoUrl: '#',
    repo: 'https://github.com/Gabriel-MRodrigues/Bio-Generator-App',
    featured: 'featured',
  },
];

export const featuredList = ['featured', 'all'];
