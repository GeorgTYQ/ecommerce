import React from "react";
import Link from "next/link";
import { UilGithub, UilLinkedin } from "@iconscout/react-unicons";
const FooterSection = () => {
  return (
    <footer className="footer border-t footer-horizontal footer-center bg-base-200 text-base-content p-5 bg-stone-800">
      <nav
        aria-label="Footer navigation"
        className="grid grid-flow-col gap-6 mb-4 justify-center items-center text-amber-600  "
      >
        <Link
          href="#home"
          className=" hover:text-amber-800 inline-flex cursor-pointer items-center gap-x-1.5 py-1 px-3 rounded-full font-medium border-3"
        >
          Home
        </Link>
        <Link
          href="#"
          className="hover:text-amber-800 inline-flex cursor-pointer items-center gap-x-1.5 py-1 px-3 rounded-full font-medium border-3"
        >
          Contact
        </Link>
      </nav>

      <nav aria-label="Social media" className="mb-4">
        <div className="grid grid-flow-col gap-6 justify-center">
          <Link
            href="https://github.com/GeorgTYQ"
            aria-label="Github"
            className="text-amber-600 hover:text-amber-800 transition"
          >
            <UilGithub size={32} />
          </Link>
          <Link
            href="www.linkedin.com/in/youquantan313"
            aria-label="LinkedIn"
            className="text-amber-600 hover:text-amber-800  transition"
          >
            <UilLinkedin size={32} />
          </Link>
        </div>
      </nav>

      <div className="text-center text-sm text-amber-600">
        <p>
          © {new Date().getFullYear()} George Full Stack. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default FooterSection;
