import {
  BarChart2,
  ChevronRight,
  Lightbulb,
  Rocket,
  Target,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageLoader from "../components/PageLoader";

const slides = [
  {
    id: 1,
    heading: "Aspiring Mathematician",
    text: "I am an aspiring mathematician pursuing a B.Sc. in Mathematics with a strong passion for problem-solving and logical thinking. I enjoy exploring complex concepts and applying them practically. I am dedicated to continuous learning and self-improvement. Alongside my studies, I am also developing skills in digital marketing. My goal is to build a career that blends analytical expertise with creativity.",
    pattern: "math",
  },
  {
    id: 2,
    heading: "Digital Marketing Enthusiast",
    text: "I am a digital marketing enthusiast with a strong interest in online branding and growth strategies. I am learning key skills like SEO, social media marketing, and content creation. I continuously improve my skills to stay updated in this fast-growing field. My goal is to build a successful career in digital marketing.",
    pattern: "digital",
  },
];

const aboutBullets = [
  "Final-year B.Sc. Mathematics student",
  "Currently learning Digital Marketing",
  "Passionate about learning new skills",
  "Improving knowledge in digital marketing",
  "Enjoy exploring new ideas",
  "Focused on personal and professional growth",
];

const workSteps = [
  {
    num: "01",
    title: "Understanding Requirements",
    icon: Target,
    points: [
      "Analyze client needs",
      "Ask important questions",
      "Define clear goals",
    ],
  },
  {
    num: "02",
    title: "Planning Strategy",
    icon: Lightbulb,
    points: [
      "Create a structured plan",
      "Choose the right tools",
      "Set timelines",
    ],
  },
  {
    num: "03",
    title: "Execution",
    icon: Rocket,
    points: [
      "Implement the plan",
      "Focus on quality work",
      "Follow best practices",
    ],
  },
  {
    num: "04",
    title: "Review & Improvement",
    icon: BarChart2,
    points: [
      "Check performance",
      "Make necessary improvements",
      "Ensure client satisfaction",
    ],
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating || idx === current) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(idx);
        setAnimating(false);
      }, 400);
    },
    [animating, current],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <>
      <PageLoader />
      <Header />
      <main className="pt-16">
        {/* Hero Slider */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              background:
                slide.pattern === "math"
                  ? "linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 40%, #1a0000 100%)"
                  : "linear-gradient(135deg, #080808 0%, #0d0d0f 40%, #001020 100%)",
              opacity: animating ? 0 : 1,
            }}
          />
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                slide.pattern === "math"
                  ? `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='30' font-size='14' fill='white' font-family='serif'%3Eπ∑∫%3C/text%3E%3Ctext x='30' y='55' font-size='10' fill='white' font-family='serif'%3Eα β%3C/text%3E%3C/svg%3E")`
                  : `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white'/%3E%3Cline x1='30' y1='30' x2='55' y2='10' stroke='white' stroke-width='0.5'/%3E%3Cline x1='30' y1='30' x2='5' y2='50' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
            }}
          />
          {/* Red gradient corner */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, #FF3B3B 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
          />

          <div
            className="relative z-10 max-w-6xl mx-auto px-6 py-20 transition-all duration-500"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(10px)" : "translateY(0)",
            }}
          >
            <div className="max-w-2xl">
              <div
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,59,59,0.15)",
                  color: "#FF3B3B",
                  border: "1px solid rgba(255,59,59,0.3)",
                }}
              >
                {slide.pattern === "math" ? "Mathematics" : "Digital Marketing"}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 uppercase tracking-tight">
                {slide.heading}
              </h1>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl">
                {slide.text}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,59,59,0.4)]"
                style={{ background: "#FF3B3B" }}
                data-ocid="hero.contact.primary_button"
              >
                Contact Me <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                data-ocid="hero.slide.toggle"
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 h-2"
                    : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                }`}
                style={i === current ? { background: "#FF3B3B" } : {}}
                type="button"
                aria-label="Slide button"
              />
            ))}
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left */}
                <div>
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: "#FF3B3B" }}
                  >
                    About Me
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Who Am I?
                  </h2>
                  <ul className="space-y-3 mb-8">
                    {aboutBullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-gray-400 text-sm"
                      >
                        <span
                          className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#FF3B3B" }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                    style={{ border: "1.5px solid #FF3B3B", color: "#FF3B3B" }}
                    data-ocid="home.about.secondary_button"
                  >
                    Explore More <ChevronRight size={14} />
                  </Link>
                </div>
                {/* Right — profile placeholder */}
                <div className="relative group">
                  <div
                    className="w-full h-96 md:h-[480px] rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-[1.02] overflow-hidden"
                    style={{
                      background: "#141414",
                      border: "1px solid #2a2a2a",
                    }}
                  >
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center mb-4"
                      style={{ background: "#1f1f1f" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Person icon"
                        fill="none"
                        className="w-12 h-12 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">
                      Profile Photo
                    </span>
                    <span className="text-gray-700 text-xs mt-1">
                      Ranjit Mohite
                    </span>
                  </div>
                  {/* Decorative red border accent */}
                  <div
                    className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl -z-10"
                    style={{
                      background: "rgba(255,59,59,0.15)",
                      border: "1px solid rgba(255,59,59,0.2)",
                    }}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* How I Work */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-14">
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "#FF3B3B" }}
                >
                  Process
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  How I Work Step by Step?
                </h2>
              </div>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-6">
              {workSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <AnimatedSection key={step.num} delay={i * 100}>
                    <div
                      className="group p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                      style={{
                        background: "#141414",
                        border: "1px solid #2a2a2a",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          "0 12px 40px rgba(255,59,59,0.25)";
                        (e.currentTarget as HTMLDivElement).style.borderColor =
                          "rgba(255,59,59,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          "";
                        (e.currentTarget as HTMLDivElement).style.borderColor =
                          "#2a2a2a";
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <span
                          className="text-5xl font-bold leading-none opacity-30"
                          style={{ color: "#FF3B3B" }}
                        >
                          {step.num}
                        </span>
                        <div className="flex-1">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center mb-2"
                            style={{ background: "rgba(255,59,59,0.1)" }}
                          >
                            <Icon size={18} style={{ color: "#FF3B3B" }} />
                          </div>
                          <h3 className="text-lg font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {step.points.map((p) => (
                          <li
                            key={p}
                            className="flex items-center gap-2 text-sm text-gray-400"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: "#FF3B3B" }}
                            />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-24 relative overflow-hidden"
          style={{ background: "#0a0a0a" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,59,59,0.12) 0%, transparent 65%)",
            }}
          />
          <AnimatedSection className="relative z-10">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Let's Take Your Project
                <br />
                <span style={{ color: "#FF3B3B" }}>to the Next Level</span>
              </h2>
              <p className="text-gray-400 mb-8 text-base max-w-lg mx-auto">
                Ready to collaborate? I'm always open to new opportunities and
                exciting projects.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(255,59,59,0.45)]"
                style={{ background: "#FF3B3B" }}
                data-ocid="cta.contact.primary_button"
              >
                Contact Me <ChevronRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  );
}
