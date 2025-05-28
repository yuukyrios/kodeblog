import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-5">
    <div className='container m-auto'>
      <div className="flex items-center max-w-screen-xl mx-auto">
        {/* Footer Content Wrapper */}
        <div className="flex  w-full">
          {/* Logo */}
          <div className="text-lg font-bold pl-3">
            <img
              src="./logo.svg"  // Placeholder logo image URL
              alt="Logo"
              className="h-10"
            />
          </div>

          {/* Footer Menu */}
          <div className="flex space-x-12">
            {/* Social Media Links */}
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  Instagram
                </a>
              </li>
            </ul>

            {/* Contact Menu */}
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="hover:text-green-500"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel:+123456789"
                  className="hover:text-green-500"
                >
                  Phone
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-green-500"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
