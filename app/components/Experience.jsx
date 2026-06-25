import React from 'react'

function Experience() {
  return (
    <section id="experience" className=" py-8 px-4 relative scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Experience
        </h2>

        <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto text-1xl font-semibold">
          You need it to get the job, but the job’s what gives it!
        </p>

        <p className='w-full text-left text-base font-light text-foreground sm:text-lg mb-12'>
            My journey as a developer has been driven by curiosity, continuous learning, and a passion for building things that people can use. Whether I'm creating web applications, exploring new technologies, or tracking down unexpected bugs, I enjoy the process of turning ideas into working solutions. Every project and internship has helped me become a stronger problem solver, a better collaborator, and a more confident developer.
        </p>

        <ol className="relative border-gray-200 border-s dark:border-gray-700">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white dark:ring-white dark:bg-black">
              <svg
                className="w-2.5 h-2.5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Volunteer Contributor · New Brunswick Plants
              <span className="bg-white text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm ms-3">
                Latest
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              June 2026 - Present · Fredericton, NB
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Following my practicum, I continued with the team as a volunteer developer, contributing to a production Next.js
              application. My work focused on improving UI consistency with Material UI, resolving responsiveness and SSR
              issues, and supporting the team through code reviews and technical documentation.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white dark:ring-white dark:bg-black">
              <svg
                className="w-2.5 h-2.5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Junior Full-stack Developer (Practicum) · New Brunswick Plants
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2026 - June 2026 · Fredericton, NB
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              During a 7-week practicum on a live production Next.js application, I built three SEO utilities from
              scratch — a sitemap generator, a JSON-LD schema generator, and an Open Graph generator — all integrated
              directly into the app. I got hands-on with a real-world WordPress + ACF + Next.js stack, diagnosing and
              fixing mobile responsiveness and server-side rendering issues that had been blocking feature work. By the end 
              of the practicum, my contributions led to continued involvement with the team as a volunteer contributor.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Experience