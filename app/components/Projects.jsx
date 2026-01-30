import { featuredList, projectList } from '@/assets/assets';
import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [activeProjects, setActiveProjects] = useState('featured');

  const filteredProjects = projectList.filter(
    (project) => project.featured === activeProjects,
  );

  return (
    <section id="projects" className="py-24 px-4 relative scroll-mt-20">
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
                className="group rounded-lg overflow-hidden shadow-lg p-3 bg-[var(--color-card-bg)] border border-[var(--color-border)]"
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
                        className="px-2 py-1 text-xs font-medium rounded-full shadow-lg"
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
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {demoUrl === '#' ? (
                      <></>
                    ) : (
                      <a href={demoUrl} target="_blank">
                        <FaExternalLinkAlt size={25} />
                      </a>
                    )}
                    <a href={repo} target="_blank">
                      <FaGithub size={25} />
                    </a>
                  </div>
                </div>
              </div>
            ),
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
