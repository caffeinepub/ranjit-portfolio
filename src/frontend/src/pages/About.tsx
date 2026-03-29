import { ChevronDown } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageLoader from "../components/PageLoader";

const storyItems = [
  {
    title: "How I Started?",
    content:
      "I developed a strong interest in learning and problem-solving from an early age. This passion led me to pursue Mathematics, where I found the perfect blend of logic and creativity. While exploring my academic interests, I began discovering the world of digital skills and how they could complement analytical thinking.",
  },
  {
    title: "Why I Chose Mathematics and Digital Marketing?",
    content:
      "I have always loved logical thinking and analysis — Mathematics provides exactly that. At the same time, I realized the growing importance of digital presence and online marketing. The combination of analytical skills from Mathematics and the creativity required in Digital Marketing makes it a perfect career path for me.",
  },
  {
    title: "My Goals and Passion",
    content:
      "My primary goal is to build a strong career that merges analytical expertise with digital creativity. I am passionate about continuously improving my skills, staying updated with industry trends, and achieving both personal and professional growth. I aspire to make a meaningful impact through my work.",
  },
];

const skills = [
  {
    title: "Mathematics",
    desc: "Strong problem-solving and analytical skills",
    tag: "Technical",
  },
  {
    title: "GMB",
    desc: "Google My Business profile optimization",
    tag: "Technical",
  },
  {
    title: "Website Design",
    desc: "Basic website creation and layout design",
    tag: "Technical",
  },
  {
    title: "SEO",
    desc: "Improving website visibility on search engines",
    tag: "Technical",
  },
];

const aboutBullets = [
  "Final-year Mathematics student",
  "Learning Digital Marketing skills",
  "Passionate about growth and learning",
  "Interested in creative and analytical work",
  "Focused on career development",
];

export default function About() {
  const [openStory, setOpenStory] = useState<number | null>(0);

  return (
    <>
      <PageLoader />
      <Header />
      <main className="pt-16">
        {/* Banner */}
        <section
          className="py-24 relative overflow-hidden"
          style={{ background: "#0a0a0a", borderLeft: "4px solid #FF3B3B" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at left, rgba(255,59,59,0.08) 0%, transparent 60%)",
            }}
          />
          <AnimatedSection className="relative z-10">
            <div className="max-w-6xl mx-auto px-6">
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#FF3B3B" }}
              >
                Who I Am
              </div>
              <h1 className="text-5xl font-bold text-white mb-3">About Me</h1>
              <p className="text-gray-400 text-base">
                Get to know who I am and what I do
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* About Details */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-14 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    About Ranjit
                  </h2>
                  <ul className="space-y-4">
                    {aboutBullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-gray-300 text-sm"
                      >
                        <span
                          className="mt-1.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
                          style={{ background: "#FF3B3B" }}
                        >
                          ✓
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="group relative">
                  <div
                    className="w-full h-80 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_12px_40px_rgba(255,59,59,0.2)] overflow-hidden"
                    style={{
                      background: "#141414",
                      border: "1px solid #2a2a2a",
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
                      style={{ background: "#1f1f1f" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Person icon"
                        fill="none"
                        className="w-10 h-10 text-gray-600"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <span className="text-gray-600 text-sm">Profile Photo</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* My Story */}
        <section className="py-20" style={{ background: "#0a0a0a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#FF3B3B" }}
              >
                Background
              </div>
              <h2 className="text-3xl font-bold text-white mb-10">My Story</h2>
              <div className="space-y-3">
                {storyItems.map((item, i) => (
                  <div
                    key={item.title}
                    className="rounded-xl overflow-hidden transition-all duration-200"
                    style={{
                      background: "#141414",
                      border: `1px solid ${openStory === i ? "rgba(255,59,59,0.4)" : "#2a2a2a"}`,
                    }}
                    data-ocid={`about.story.item.${i + 1}`}
                  >
                    <button
                      className="w-full flex items-center justify-between p-5 text-left"
                      type="button"
                      onClick={() => setOpenStory(openStory === i ? null : i)}
                      data-ocid={`about.story.toggle.${i + 1}`}
                    >
                      <span className="font-semibold text-white text-base">
                        {item.title}
                      </span>
                      <ChevronDown
                        size={18}
                        className="transition-transform duration-300 flex-shrink-0"
                        style={{
                          color: "#FF3B3B",
                          transform:
                            openStory === i ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>
                    {openStory === i && (
                      <div className="px-5 pb-5">
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#FF3B3B" }}
              >
                Expertise
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Skills and Expertise
              </h2>
              <p className="text-gray-400 text-sm mb-10">
                Technical Skills | Personal Skills
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {skills.map((skill, i) => (
                  <AnimatedSection key={skill.title} delay={i * 100}>
                    <div
                      className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                      style={{
                        background: "#141414",
                        border: "1px solid #2a2a2a",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          "0 8px 30px rgba(255,59,59,0.2)";
                        (e.currentTarget as HTMLDivElement).style.borderColor =
                          "rgba(255,59,59,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          "";
                        (e.currentTarget as HTMLDivElement).style.borderColor =
                          "#2a2a2a";
                      }}
                      data-ocid={`about.skill.item.${i + 1}`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                          style={{ background: "rgba(255,59,59,0.15)" }}
                        >
                          {i + 1}
                        </div>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            background: "rgba(255,59,59,0.1)",
                            color: "#FF3B3B",
                          }}
                        >
                          {skill.tag}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {skill.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{skill.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
