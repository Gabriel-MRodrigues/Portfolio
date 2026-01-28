import profile_image from './Profile-Picture.jpg';
import { FaCode } from 'react-icons/fa';
import { LuCircuitBoard } from 'react-icons/lu';
import { FaUsers } from 'react-icons/fa';

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
