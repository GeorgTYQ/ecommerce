import React from "react";
import Tick from "./tick";
const AboutStory = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow">
        <h2 className="text-2xl font-bold mb-3 underline-after">Our Story</h2>
        <p className="text-base leading-relaxed mb-4">
          What started in a small family kitchen blossomed into Lavosh Bakery.
          Inspired by traditional lavosh recipes and a love for time-honoured
          baking methods, we grew from sharing loaves with friends to serving
          our local community. Today, every item is made with patience, quality
          ingredients, and a commitment to taste.
        </p>
        <p className="text-base leading-relaxed">
          We believe good baking brings people together — from breakfast coffee
          to evening gatherings. Thank you for letting us be part of your
          moments.
        </p>
      </div>

      <aside className="bg-white rounded-2xl p-6 shadow flex flex-col gap-4">
        <h3 className="text-xl font-semibold underline-after">Why Choose Us</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3">
            <Tick />
            <span>
              Baked fresh daily in small batches — peak flavour, every time.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Tick />
            <span>
              Natural, high-quality ingredients; no artificial preservatives.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Tick />
            <span>
              Signature lavosh — crisp, versatile and perfect with anything.
            </span>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default AboutStory;
