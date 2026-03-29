import AnimatedSection from "../components/AnimatedSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageLoader from "../components/PageLoader";

const overview = [
  "Pursuing B.Sc. in Mathematics (3rd Year)",
  "Strong academic background with 86% in 10th grade",
  "Interest in continuous learning and self-improvement",
  "Actively developing digital marketing skills",
];

const timeline = [
  {
    year: "2022 – Present",
    degree: "B.Sc. Mathematics (3rd Year)",
    institution: "Kamla Nehru College",
    detail:
      "Currently in final year, focusing on advanced mathematics and analytical problem-solving.",
    current: true,
  },
  {
    year: "2021 – 2022",
    degree: "12th Science",
    institution: "Mohota Science College",
    detail:
      "Completed HSC with 63% marks. Developed foundational knowledge in science subjects.",
    current: false,
  },
  {
    year: "2019 – 2020",
    degree: "10th Standard",
    institution: "Pt. Bachhraj Vyas Vidyalaya",
    detail:
      "Completed SSC with an excellent 86% marks, demonstrating strong academic foundations.",
    current: false,
  },
];

export default function Education() {
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
                Academic Journey
              </div>
              <h1 className="text-5xl font-bold text-white mb-3">
                My Education
              </h1>
              <p className="text-gray-400 text-base max-w-lg">
                A strong academic foundation combined with a passion for
                continuous learning and digital skills development.
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* Overview */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <div
                className="p-8 rounded-2xl max-w-2xl"
                style={{ background: "#141414", border: "1px solid #2a2a2a" }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#FF3B3B" }}
                >
                  Overview
                </div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Education Highlights
                </h2>
                <ul className="space-y-4">
                  {overview.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <span
                        className="mt-1 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: "#FF3B3B" }}
                      >
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20" style={{ background: "#0a0a0a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#FF3B3B" }}
              >
                Timeline
              </div>
              <h2 className="text-3xl font-bold text-white mb-12">
                Academic Timeline
              </h2>
              <div className="relative max-w-3xl">
                {/* Vertical line */}
                <div
                  className="absolute left-5 top-0 bottom-0 w-0.5"
                  style={{
                    background:
                      "linear-gradient(to bottom, #FF3B3B, rgba(255,59,59,0.1))",
                  }}
                />
                <div className="space-y-10">
                  {timeline.map((item, i) => (
                    <AnimatedSection key={item.institution} delay={i * 150}>
                      <div className="relative flex gap-8 pl-16">
                        {/* Dot */}
                        <div
                          className="absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: item.current ? "#FF3B3B" : "#1a1a1a",
                            border: `2px solid ${item.current ? "#FF3B3B" : "rgba(255,59,59,0.4)"}`,
                            boxShadow: item.current
                              ? "0 0 16px rgba(255,59,59,0.5)"
                              : "none",
                          }}
                        >
                          <span className="text-white text-xs font-bold">
                            {i + 1}
                          </span>
                        </div>

                        {/* Content */}
                        <div
                          className="flex-1 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                          style={{
                            background: "#141414",
                            border: `1px solid ${item.current ? "rgba(255,59,59,0.3)" : "#2a2a2a"}`,
                          }}
                          data-ocid={`education.timeline.item.${i + 1}`}
                        >
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span
                              className="text-xs font-semibold px-2 py-0.5 rounded-full"
                              style={{
                                background: "rgba(255,59,59,0.1)",
                                color: "#FF3B3B",
                              }}
                            >
                              {item.year}
                            </span>
                            {item.current && (
                              <span
                                className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                                style={{ background: "#FF3B3B" }}
                              >
                                Current
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-white mb-1">
                            {item.degree}
                          </h3>
                          <p
                            className="font-medium mb-2 text-sm"
                            style={{ color: "#FF3B3B" }}
                          >
                            {item.institution}
                          </p>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
