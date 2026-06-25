import { categoryList } from '@/assets/assets';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { iconMap } from '@/lib/iconMap';
import { ClimbingBoxLoader } from 'react-spinners';

function findIcon(iconKey) {
  return iconMap[iconKey] ?? null;
}

const Skills = ({ skills, isLoading }) => {
  const [activeCategory, setActiveCategory] = useState('backend');

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative scroll-mt-20">
      <div className="absolute left-[-600px] top-1/2 -translate-y-1/2 w-[850px] h-[600px] rounded-full white__gradient z-10 pointer-events-none" />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categoryList.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full capitalize transition-colors cursor-pointer shadow-lg',
                activeCategory === category
                  ? ' bg-white text-black'
                  : 'bg-black text-white',
              )}
            >
              {category}
            </button>
          ))}
        </div>
        {isLoading ? (
          <div className='flex item-center justify-center min-h-[300px]'>
            <ClimbingBoxLoader color='#ffffff' />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map(({ name, iconKey, _id }) => {
              const Icon = findIcon(iconKey);

              return (
                <div
                  key={_id}
                  className="relative p-6 border border-[var(--color-border)] rounded-lg bg-black/40 shadow-xl flex items-center justify-center"
                >
                  <h3 className="font-semibold text-lg text-center">{name}</h3>
                  <div className="absolute right-6 text-3xl">{Icon ? <Icon /> : null}</div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
