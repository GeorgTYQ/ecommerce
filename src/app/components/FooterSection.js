"use client";
import React, { useState } from "react";
import Link from "next/link";
import { UilGithub, UilLinkedin } from "@iconscout/react-unicons";
import { useMenuStore } from "@/app/store/store";
import LoadingButton from "@/app/componentsKit/Button";
const FooterSection = () => {
  const { selectedMenu, setSelectedMenu } = useMenuStore();
  const [loading, setLoading] = React.useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await res.json();
        alert("Error: " + (errorData.error || "Unknown error"));
      }
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <footer className="footer border-t footer-horizontal footer-center bg-stone-800 text-amber-600 p-8">
      {/* Contact Form */}
      <section
        id="contact-form"
        className="max-w-lg mx-auto w-full mb-8 bg-stone-900 p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold mb-4 text-amber-500">
          Contact Us
        </h3>

        {submitted && (
          <p className="mb-4 text-green-400 font-medium">
            Thank you for your message! We&apos;ll get back to you soon.
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-md px-3 py-2 bg-stone-800 text-amber-50 placeholder-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-md px-3 py-2 bg-stone-800 text-amber-50 placeholder-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="rounded-md px-3 py-2 bg-stone-800 text-amber-50 placeholder-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
          />
          <LoadingButton loading={loading} type="submit">
            Send Message
          </LoadingButton>
        </form>
      </section>

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
            href="https://www.linkedin.com/in/youquantan313"
            aria-label="LinkedIn"
            className="text-amber-600 hover:text-amber-800 transition"
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
