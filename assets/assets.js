// Profile picture
import profile_image from './Profile-Picture.jpg';

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
