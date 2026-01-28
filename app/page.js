'use client';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
    </>
  );
}
