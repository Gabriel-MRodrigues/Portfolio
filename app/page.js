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
import Experience from './components/Experience';

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

  const [loadingSkills, setLoadingSkills] = useState(true);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingInfo, setLoadingInfo] = useState(true);

  useEffect(() => {
    getSkills()
      .then(setSkills)
      .catch((err) => console.error('Failed to load skills', err))
      .finally(() => setLoadingSkills(false));

    getProjects()
      .then(setProjects)
      .catch((err) => console.error('Failed to load projects', err))
      .finally(() => setLoadingProjects(false));

    getInfo()
      .then(setInfo)
      .catch((err) => console.error('Failed to load info', err))
      .finally(() => setLoadingInfo(false));
    
  }, []);

  return (
    <>
      <Toaster />
      <Navbar />
      <Header />
      <AboutMe info={info} isLoading={loadingInfo} />
      <Experience />
      <Skills skills={skills} isLoading={loadingSkills} />
      <Projects projects={projects} isLoading={loadingProjects} />
      <Contact />
      <Footer />
    </>
  );
}
