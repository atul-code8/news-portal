// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-200 pt-5">
      <div className="flex flex-wrap justify-around max-w-screen-xl mx-auto p-5">
        <div className="flex-1 min-w-[200px] m-3">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
        <div className="flex-1 min-w-[200px] m-3">
          <h4 className='mb-3'>Contact</h4>
          <p>Email: info@newsportal.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="flex-1 min-w-[200px] m-3">
          <h4 className='mb-3'>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='inline-block mr-3'>Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='inline-block mr-3'>Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='inline-block mr-3'>Instagram</a>
          </div>
        </div>
        <div className="flex-1 min-w-[200px] m-3">
          <h4 className='mb-3'>Legal</h4>
          <p><a href="/privacy-policy" className='hover:underline'>Privacy Policy</a></p>
          <p><a href="/terms-of-service" className='hover:underline'>Terms of Service</a></p>
        </div>
      </div>
        <div className="text-center p-3">
        <p className='m-0 text-[14px]'>&copy; 2024 News Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
