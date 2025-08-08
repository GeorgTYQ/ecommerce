import React from "react";
import Link from "next/link";
import { UilGithub, UilLinkedin } from "@iconscout/react-unicons";
const FooterSection = () => {
  return (
    <footer className="footer border-t footer-horizontal footer-center bg-base-200 text-base-content p-10">
      <nav
        aria-label="Footer navigation"
        className="grid grid-flow-col gap-6 mb-6 justify-center items-center"
      >
        <Link href="#home" className="link link-hover">
          Home
        </Link>
        <Link href="#" className="link link-hover">
          Contact
        </Link>
      </nav>

      <nav aria-label="Social media" className="mb-6">
        <div className="grid grid-flow-col gap-6 justify-center">
          <Link
            href="https://github.com/GeorgTYQ"
            aria-label="Github"
            className="hover:text-primary transition"
          >
            <UilGithub size={32} />
          </Link>
          <Link
            href="www.linkedin.com/in/youquantan313"
            aria-label="LinkedIn"
            className="hover:text-primary transition"
          >
            <UilLinkedin size={32} />
          </Link>
        </div>
      </nav>

      <div className="text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} George Full Stack. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default FooterSection;
