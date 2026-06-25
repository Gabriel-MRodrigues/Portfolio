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
              Junior Full-stack Developer (Practicum → Volunteer Contributor) · New Brunswick Plants
              <span className="bg-white text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm ms-3">
                Latest
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2026 - Present · Fredericton, NB
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Originally joined New Brunswick Plants for a 7-week practicum and was retained afterward as a volunteer
              contributor based on team feedback, continuing to ship features on their production Next.js
              application. I built three SEO utilities from scratch — a sitemap generator, a JSON-LD schema
              generator, and an Open Graph generator — all integrated directly into the live app. I also refactored
              UI components with Material UI and designed a unified application theme to bring more visual
              consistency across the product, and resolved mobile responsiveness and server-side rendering issues
              across a WordPress + ACF + Next.js stack. Alongside the development work, I wrote internal
              documentation on Material UI usage and WordPress page conventions to help onboard future contributors,
              and took part in code reviews on GitHub.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Experience