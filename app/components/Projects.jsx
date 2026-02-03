import { featuredList, projectList } from '@/assets/assets';
import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [activeProjects, setActiveProjects] = useState('featured');

  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectList.filter(
    (project) => project.featured === activeProjects,
  );

  return (
    <section
      id="projects"
      className="py-24 px-4 relative scroll-mt-20 overflow-hidden"
    >
      <div className="absolute right-[-600px] top-1/2 -translate-y-1/2 w-[850px] h-[600px] rounded-full white__gradient z-10 pointer-events-none" />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured Projects
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {featuredList.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveProjects(category)}
              className={cn(
                'px-5 py-2 rounded-full capitalize transition-colors cursor-pointer shadow-xl',
                activeProjects === category
                  ? 'bg-white text-black'
                  : 'bg-black text-white',
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(
            ({
              id,
              title,
              description,
              image,
              tags,
              demoUrl,
              repo,
              featured,
            }) => (
              <div
                key={id}
                onClick={() => setSelectedProject({ title, demoUrl, repo })}
                className="group rounded-lg overflow-hidden shadow-lg p-3 bg-[var(--color-card-bg)] cursor-pointer border border-[var(--color-border)] hover:bg-[var(--color-card-bg-hover)] duration-500"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={image ? image : '/projects/default_img.png'}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-2 text-xs font-medium font-semibold rounded-full shadow-lg bg-black/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {description}
                </p>
              </div>
            ),
          )}
          {selectedProject && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
              onClick={() => setSelectedProject(null)} // backdrop click closes
            >
              <div
                className="bg-[var(--color-card-bg)] rounded-lg p-6 w-full max-w-sm relative"
                onClick={(e) => e.stopPropagation()} // prevent bubbling
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 cursor-pointer"
                >
                  <RxCross2 size={25} />
                </button>

                <h2 className="text-xl font-semibold mb-4">
                  {selectedProject.title}
                </h2>

                <div className="flex flex-col gap-4">
                  {selectedProject.demoUrl !== '#' && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black justify-center hover:text-white hover:bg-black duration-500"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg justify-center bg-black text-white hover:bg-white hover:text-black duration-500"
                  >
                    <FaGithub />
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/Gabriel-MRodrigues"
            target="_blank"
            className="inline-flex px-10 py-3 rounded-full bg-black text-white items-center justify-center gap-2 hover:bg-white hover:text-black duration-500"
          >
            Check my GitHub <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
