import {
  BookOpen,
  ChevronDown,
  Code,
  Globe,
  Lightbulb,
  Palette,
  Zap,
} from "lucide-react";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageLoader from "../components/PageLoader";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    desc: "Creating simple and attractive websites that represent your brand professionally and effectively online.",
    features: [
      "Clean modern layouts",
      "Mobile responsive",
      "User-friendly design",
    ],
  },
  {
    icon: Zap,
    title: "SEO",
    desc: "Improving your search engine ranking to help your business get discovered by the right audience.",
    features: ["Keyword optimization", "On-page SEO", "Performance tuning"],
  },
  {
    icon: BookOpen,
    title: "GMB Optimization",
    desc: "Optimizing Google Business profiles to boost local visibility and attract more customers.",
    features: ["Profile optimization", "Review management", "Local SEO"],
  },
];

const tools = [
  { icon: Palette, name: "Canva", desc: "Design & visual content creation" },
  { icon: Globe, name: "Wix", desc: "Website building & hosting" },
  { icon: Code, name: "AI with Coding", desc: "Smart development solutions" },
];

const faqs = [
  {
    q: "What services do you offer?",
    a: "I offer Website Design, SEO optimization, and Google My Business (GMB) optimization to help your business grow its online presence.",
  },
  {
    q: "How can I contact you?",
    a: "You can reach me via email at ranjitmohite909@gmail.com, Instagram at @ranjitmohite.___, or WhatsApp at 7745866526.",
  },
  {
    q: "Do you work on freelance projects?",
    a: "Yes! I am open to freelance projects and collaborations. Feel free to reach out to discuss your requirements.",
  },
  {
    q: "What tools do you use?",
    a: "I primarily use Canva for design work, Wix for website building, and various AI-assisted coding tools for development tasks.",
  },
  {
    q: "How long does a project take?",
    a: "Project timelines vary depending on complexity and requirements. Simple projects can be completed in a few days, while more complex ones may take 2–4 weeks.",
  },
];

const whyMe = [
  {
    icon: "💪",
    title: "Hardworking",
    desc: "Dedicated to delivering quality results with full commitment to every project.",
  },
  {
    icon: "⚡",
    title: "Fast Learner",
    desc: "Quickly adapts to new tools, technologies, and client requirements.",
  },
  {
    icon: "🎨",
    title: "Creative Thinking",
    desc: "Brings fresh, innovative ideas to every challenge and project.",
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                What I Do
              </div>
              <h1 className="text-5xl font-bold text-white mb-3">
                My Services
              </h1>
              <p className="text-gray-400 text-base">
                I offer professional digital services to help you grow online
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* Service Cards */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((svc, i) => {
                  const Icon = svc.icon;
                  return (
                    <div
                      key={svc.title}
                      className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                      style={{
                        background: "#141414",
                        border: "1px solid #2a2a2a",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor =
                          "#FF3B3B";
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          "0 12px 40px rgba(255,59,59,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor =
                          "#2a2a2a";
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          "";
                      }}
                      data-ocid={`services.card.item.${i + 1}`}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                        style={{ background: "rgba(255,59,59,0.1)" }}
                      >
                        <Icon size={22} style={{ color: "#FF3B3B" }} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {svc.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {svc.desc}
                      </p>
                      <ul className="space-y-1.5">
                        {svc.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2 text-sm text-gray-500"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: "#FF3B3B" }}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Tools */}
        <section className="py-20" style={{ background: "#0a0a0a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#FF3B3B" }}
              >
                Toolkit
              </div>
              <h2 className="text-3xl font-bold text-white mb-10">
                Tools and Skills I Use
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {tools.map((tool, i) => {
                  const Icon = tool.icon;
                  return (
                    <AnimatedSection key={tool.name} delay={i * 100}>
                      <div
                        className="p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                        style={{
                          background: "#141414",
                          border: "1px solid #2a2a2a",
                        }}
                      >
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                          style={{ background: "rgba(255,59,59,0.1)" }}
                        >
                          <Icon size={26} style={{ color: "#FF3B3B" }} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {tool.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{tool.desc}</p>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#FF3B3B" }}
              >
                FAQ
              </div>
              <h2 className="text-3xl font-bold text-white mb-10">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3 max-w-3xl">
                {faqs.map((faq, faqIdx) => (
                  <div
                    key={faq.q}
                    className="rounded-xl overflow-hidden transition-all duration-200"
                    style={{
                      background: "#141414",
                      border: `1px solid ${openFaq === faqIdx ? "rgba(255,59,59,0.4)" : "#2a2a2a"}`,
                    }}
                    data-ocid={`services.faq.item.${faqIdx + 1}`}
                  >
                    <button
                      className="w-full flex items-center justify-between p-5 text-left"
                      type="button"
                      onClick={() =>
                        setOpenFaq(openFaq === faqIdx ? null : faqIdx)
                      }
                      data-ocid={`services.faq.toggle.${faqIdx + 1}`}
                    >
                      <span className="font-semibold text-white text-sm">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-300 flex-shrink-0"
                        style={{
                          color: "#FF3B3B",
                          transform:
                            openFaq === faqIdx
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      />
                    </button>
                    {openFaq === faqIdx && (
                      <div className="px-5 pb-5">
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="py-20" style={{ background: "#0a0a0a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#FF3B3B" }}
              >
                Why Me
              </div>
              <h2 className="text-3xl font-bold text-white mb-10">
                Why Choose Me?
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {whyMe.map((item, i) => (
                  <AnimatedSection key={item.title} delay={i * 100}>
                    <div
                      className="p-7 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "#141414",
                        border: "1px solid #2a2a2a",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          "0 8px 30px rgba(255,59,59,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                          "";
                      }}
                      data-ocid={`services.whyme.item.${i + 1}`}
                    >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
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
