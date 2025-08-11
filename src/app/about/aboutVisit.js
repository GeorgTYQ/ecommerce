import React from "react";
import Link from "next/link";
import AboutMap from "./aboutMap";
const AboutVisit = () => {
  return (
    <section id="visit" className="max-w-6xl mx-auto px-6 py-14">
      <div className="bg-amber-700 text-white rounded-2xl p-8 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold">Come say hello</h4>
            <p className="text-sm opacity-90 mt-1">
              Open daily from 7am — 4pm • Melbourne | Australia
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-block bg-white text-amber-700 px-5 py-3 rounded-lg font-semibold shadow hover:opacity-95 transition"
            >
              Contact Us
            </Link>
            <Link
              href="https://maps.app.goo.gl/Ash97cNMaEThjEhEA"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-white text-white px-5 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Get Directions
            </Link>
          </div>
        </div>

        {/* Map goes below both divs */}
        <AboutMap />
      </div>
    </section>
  );
};

export default AboutVisit;
