import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16  px-6 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center">
        

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0 pb-4">
          {/* GitHub */}
          <a href="https://github.com/idanidan29" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 flex justify-center items-center 
                            bg-gray-200 rounded-lg border border-gray-300
                            transition-all duration-300 hover:bg-gray-300 hover:scale-105">
              <FaGithub className="text-indigo-600 text-2xl" />
            </div>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/idan-levi-7a8506242/" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 flex justify-center items-center 
                            bg-gray-200 rounded-lg border border-gray-300
                            transition-all duration-300 hover:bg-gray-300 hover:scale-105">
              <CiLinkedin className="text-indigo-600 text-2xl" />
            </div>
          </a>
        </div>
        {/* Copyright Text */}
        <p className="text-sm md:text-base font-light text-gray-600">
          © 2025 Idan Levi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
