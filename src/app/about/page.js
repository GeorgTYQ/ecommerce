import AboutHero from "./aboutHero";
import AboutStory from "./aboutStory";
import AboutVisit from "./aboutVisit";
export default function AboutPage() {
  return (
    <section className="min-h-screen bg-amber-50 text-amber-900">
      {/* HERO */}
      <AboutHero />

      {/* STORY + FEATURES */}
      <AboutStory />

      {/* VISIT / CONTACT CTA */}
      <AboutVisit />
    </section>
  );
}
