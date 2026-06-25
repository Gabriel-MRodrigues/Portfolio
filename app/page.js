'use client';
import { useEffect, useState } from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Toaster } from './components/ui/toaster';

async function getSkills() {
  const res = await fetch(`/api/skills`, { cache: 'no-store' });
  return res.json();
}

async function getProjects() {
  const res = await fetch(`/api/projects`, { cache: 'no-store' });
  return res.json();
}

async function getInfo() {
  const res = await fetch(`/api/info`, { cache: 'no-store' });
  return res.json();
}

export default function Home() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function loadInformation() {
      setSkills(await getSkills());
      setProjects(await getProjects());
      setInfo(await getInfo());
    }

    loadInformation();
  }, []);

  return (
    <>
      <Toaster />
      <Navbar />
      <Header />
      <AboutMe info={info} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
  );
}
