'use client';
import React, { useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append('access_key', process.env.NEXT_PUBLIC_FORM_ACCESS_KEY);

    const response = await fetch(process.env.NEXT_PUBLIC_FORM_APP_BASE_URL, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast({
        title: 'Message sent!',
        description: "Thank you for your message, I'll get back to you soon!",
      });
      event.target.reset();
    } else {
      console.log('Error', data);
      toast({
        title: 'Something went wrong...',
        description: data.message,
      });
    }
    setIsSubmitting(false);
  };
  return (
    <div
      id="contact"
      className="relative overflow-hidden w-full px-[12%] py-10 scroll-mt-20"
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1500px] h-[200px] rounded-full white__gradient z-10 pointer-events-none" />

      <h4 className="text-center mb-2 text-lg">Connect with me</h4>
      <h2 className="text-center text-5xl">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Have a project in mind or want to collaborate? Feel free to reach out,
        I'm always open to discussing new opportunities.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            className="w-full p-3 text-sm sm:text-base outline-none border-[0.5px] border-[var(--color-border)] bg-[var(--color-card-bg)] rounded-md"
            type="text"
            placeholder="Enter your name"
            required
            name="name"
          />
          <input
            className="w-full p-3 text-sm sm:text-base outline-none border-[0.5px] border-[var(--color-border)] bg-[var(--color-card-bg)] rounded-md"
            type="email"
            placeholder="Enter your email"
            required
            name="email"
          />
        </div>
        <textarea
          className="w-full p-4 outline-none border-[0.5px] border-[var(--color-border)] bg-[var(--color-card-bg)] rounded-md mb-6"
          rows="6"
          placeholder="Enter your message"
          required
          name="message"
        ></textarea>

        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 border border-[var(--color-border)] bg-white text-black rounded-full mx-auto hover:bg-black hover:text-white duration-500 cursor-pointer"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'} <IoIosSend />
        </button>
      </form>
    </div>
  );
};

export default Contact;
