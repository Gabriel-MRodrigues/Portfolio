import React from 'react';
import { TfiAngleDoubleRight } from 'react-icons/tfi';
import { IoMdDownload } from 'react-icons/io';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Header = () => {
  return (
    <div className="w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_image}
          alt="Profile-image"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
        Hey! I'm Gabriel Rodrigues
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] max-w-2xl mx-auto">
        software developer based in Fredericton.
      </h1>
      <p className="max-w-2xl mx-auto">
        I'm a Software Developer who enjoys transforming ideas into real-world
        applications and exploring frontend, backend, and cloud technologies, as
        well as embedded systems.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact <TfiAngleDoubleRight />
        </a>
        {/* download my resume*/}
        <a
          href="/Gabriel_Resume.pdf"
          className="px-10 py-3 border border-black rounded-full flex items-center gap-2"
          download
        >
          Resume <IoMdDownload />
        </a>
      </div>
    </div>
  );
};

export default Header;
