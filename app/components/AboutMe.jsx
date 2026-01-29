import { infoList } from '@/assets/assets';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground">
              Currently pursuing a diploma in{' '}
              <span className="font-semibold">
                Information Technology: Software Development
              </span>{' '}
              at{' '}
              <span className="font-semibold">
                New Brunswick Community College (NBCC)
              </span>
              .
            </p>
            <p className="text-muted-foreground">
              I build software to solve real problems. I work across frontend
              and backend development, cloud technologies, and embedded systems.
              I'm always learning new technologies, tools, and techniques to
              keep up with a fast-moving tech landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-start">
              <a
                href="https://www.linkedin.com/in/gabriel-mendes-rodrigues/"
                target="_blank"
                className="px-10 py-3 bg-black text-white rounded-full flex items-center gap-2"
              >
                LinkedIn
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {infoList.map(({ icon, title, description }, index) => (
              <div
                key={index}
                className="border border-black rounded-full px-5 py-3 min-h-[96px] flex items-center"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2">{icon}</div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
