'use client';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}
