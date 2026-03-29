import { ExternalLink, Instagram, Mail } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageLoader from "../components/PageLoader";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      role="img"
      aria-label="WhatsApp"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "ranjitmohite909@gmail.com",
    href: "mailto:ranjitmohite909@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "ranjitmohite.___",
    href: "https://instagram.com/ranjitmohite.___",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "7745866526",
    href: "https://wa.me/917745866526",
  },
];

export default function Contact() {
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
                Get In Touch
              </div>
              <h1 className="text-5xl font-bold text-white mb-3">Contact Me</h1>
              <p className="text-gray-400 text-base">
                Feel free to reach out for any queries or collaboration
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* Contact Layout */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-10">
                {/* Left: Google Form placeholder */}
                <div
                  className="rounded-2xl flex flex-col items-center justify-center p-10 min-h-[480px]"
                  style={{
                    background: "#141414",
                    border: "2px dashed rgba(255,59,59,0.35)",
                  }}
                  data-ocid="contact.form.panel"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(255,59,59,0.1)" }}
                  >
                    <ExternalLink size={28} style={{ color: "#FF3B3B" }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">
                    Google Form
                  </h3>
                  <p className="text-gray-400 text-sm text-center leading-relaxed max-w-sm">
                    Google Form will appear here — replace the{" "}
                    <code
                      className="px-1.5 py-0.5 rounded text-xs"
                      style={{
                        background: "rgba(255,59,59,0.15)",
                        color: "#FF3B3B",
                      }}
                    >
                      src
                    </code>{" "}
                    attribute in the iframe below with your actual Google Form
                    link.
                  </p>
                  <div
                    className="mt-6 w-full rounded-xl overflow-hidden"
                    style={{ border: "1px solid #2a2a2a" }}
                  >
                    <iframe
                      src="YOUR_GOOGLE_FORM_URL_HERE"
                      title="Contact Form"
                      className="w-full"
                      style={{ height: "200px", background: "#0d0d0d" }}
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                    />
                  </div>
                  <p className="text-gray-600 text-xs mt-3 text-center">
                    Replace "YOUR_GOOGLE_FORM_URL_HERE" with your form URL
                  </p>
                </div>

                {/* Right: Contact Details */}
                <div className="flex flex-col justify-center gap-4">
                  <div className="mb-4">
                    <div
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "#FF3B3B" }}
                    >
                      Contact Info
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      Let's Connect
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">
                      I'm always open to meaningful conversations and new
                      opportunities.
                    </p>
                  </div>
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          background: "#141414",
                          border: "1px solid #2a2a2a",
                        }}
                        onMouseEnter={(e) => {
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.borderLeftColor = "#FF3B3B";
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.borderLeftWidth = "3px";
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.boxShadow = "0 6px 24px rgba(255,59,59,0.15)";
                        }}
                        onMouseLeave={(e) => {
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.borderLeftColor = "#2a2a2a";
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.borderLeftWidth = "1px";
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.boxShadow = "";
                        }}
                        data-ocid={`contact.${item.label.toLowerCase()}.link`}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                          style={{ background: "rgba(255,59,59,0.1)" }}
                        >
                          <Icon style={{ color: "#FF3B3B" }} />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">
                            {item.label}
                          </div>
                          <div className="text-white font-medium text-sm">
                            {item.value}
                          </div>
                        </div>
                        <ExternalLink
                          size={14}
                          className="ml-auto text-gray-600 group-hover:text-gray-400 transition-colors"
                        />
                      </a>
                    );
                  })}
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
