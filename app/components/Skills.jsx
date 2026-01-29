import { categoryList, skillsList } from '@/assets/assets';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('backend');

  const filteredSkills = skillsList.filter(
    (skill) => skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
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
                'px-5 py-2 rounded-full capitalize transition-colors cursor-pointer shadow-xl',
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-white',
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(({ name, icon, category }, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg shadow-lg flex items-center justify-center"
            >
              <h3 className="font-semibold text-lg text-center">{name}</h3>
              <div className="absolute right-6 text-3xl">{icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
