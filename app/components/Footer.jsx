import React from 'react';
import { IoArrowUpCircle } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="mx-auto py-5 px-4 relative border-t border-black bg-black/40 mt-12 pt-8 flex justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Gabriel Rodrigues. All rights
        reserved.
      </p>
      <a href="#top" className="p-2 rounded-full">
        <IoArrowUpCircle size={40} />
      </a>
    </footer>
  );
};

export default Footer;
