import { useState } from "react";
import Reveal from "../compoents/Reveal";
import { contact } from "../Data/contact";

const topics = [
  "Job opportunity",
  "Freelance project",
  "Other",
];

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-[#eadfce] bg-[#fbf8f3] px-4 py-2.5 text-[15px] text-ink outline-none transition placeholder:text-[#b3a595] focus:border-[#c4621f] focus:bg-white focus:ring-4 focus:ring-[#c4621f]/10";

const labelClass =
  "block text-[10px] font-medium uppercase tracking-widest text-[#8a7b6e]";

const emptyForm = {
  name: "",
  email: "",
  company: "",
  topic: topics[0],
  message: "",
};

export default function ConnectPage() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const buildText = () =>
    [
      `Name: ${form.name}`,
      `Work email: ${form.email}`,
      `Company: ${form.company || "-"}`,
      `Topic: ${form.topic}`,
      "",
      form.message,
    ].join("\n");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `${form.topic} - ${form.name}`,
          from_name: "Portfolio contact form",
          name: form.name,
          email: form.email,
          company: form.company || "-",
          topic: form.topic,
          message: form.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm(emptyForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const details = [
    { label: "Name", value: contact.name },
    {
      label: "Mobile",
      value: contact.mobile,
      href: `tel:${contact.mobile.replace(/\s/g, "")}`,
    },
    { label: "LinkedIn", value: contact.linkedin, href: contact.linkedinUrl },
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  ];

  return (
    <div className="flex min-h-screen items-center pb-10 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 md:grid-cols-[1fr_1.15fr] md:gap-14">
        {/* ================= LEFT ================= */}
        <div>
          <Reveal className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-[#8a7b6e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4621f]" />
            Contact
          </Reveal>

          <Reveal
            as="h1"
            delay={100}
            className="mt-4 text-5xl font-light leading-[1.02] tracking-tighter text-ink md:text-6xl"
          >
            Let’s <span className="text-[#c4621f]">connect.</span>
          </Reveal>

          <Reveal
            as="p"
            delay={220}
            className="mt-4 max-w-md text-base leading-7 text-[#6f6459]"
          >
            Have an opportunity or want to build something together? I’d love
            to hear from you.
          </Reveal>

          {/* Detail cards */}
          <div className="mt-6 grid gap-2.5">
            {details.map((d, i) => {
              const Tag = d.href ? "a" : "div";
              return (
                <Reveal key={d.label} delay={320 + i * 90}>
                  <Tag
                    href={d.href}
                    target={d.href?.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-[#e8d9c8] bg-white px-5 py-3 transition-all duration-300 hover:border-[#c4621f] hover:shadow-[0_10px_28px_-14px_rgba(196,98,31,0.45)]"
                  >
                    <div className="min-w-0">
                      <p className={labelClass}>{d.label}</p>
                      <p className="mt-1 truncate text-[15px] text-ink">
                        {d.value}
                      </p>
                    </div>
                    {d.href && (
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e8d9c8] text-xs text-[#c4621f] transition duration-300 group-hover:rotate-45 group-hover:border-[#c4621f] group-hover:bg-[#c4621f] group-hover:text-white">
                        ↗
                      </span>
                    )}
                  </Tag>
                </Reveal>
              );
            })}
          </div>

          {/* CV button */}
          <Reveal delay={700} className="mt-6">
          <a
  href={contact.cvLink}
  download="Vijay_E_CV.pdf"
  className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-xs font-medium text-white transition-colors hover:bg-[#c4621f]"
>
              Download CV
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </Reveal>
        </div>

        {/* ================= RIGHT: FORM ================= */}
        <Reveal delay={200}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-[#e8d9c8] bg-white p-6 shadow-[0_20px_50px_-30px_rgba(120,70,20,0.35)] md:p-8"
          >
            <p className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-[#8a7b6e]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4621f]" />
              Send me a message
            </p>
            <h2 className="mt-2 text-xl font-light tracking-tighter text-ink md:text-2xl">
              Tell me about your idea<span className="text-[#c4621f]">.</span>
            </h2>

            <div className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Your name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@company.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="company">
                  Company (optional)
                </label>
                <input
                  id="company"
                  value={form.company}
                  onChange={update("company")}
                  placeholder="Company name"
                  className={fieldClass}
                />
              </div>

              {/* Topic chips */}
              <div>
                <span className={labelClass}>What’s this about?</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setForm({ ...form, topic: t })}
                      aria-pressed={form.topic === t}
                      className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                        form.topic === t
                          ? "border-[#c4621f] bg-[#c4621f] text-white"
                          : "border-[#e0d3c3] text-[#6f6459] hover:border-[#c4621f] hover:text-[#c4621f]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me a little about what you have in mind..."
                  className={`${fieldClass} resize-none`}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-xs font-medium text-white transition-colors hover:bg-[#c4621f] disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                <span className="transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </span>
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="rounded-full border border-[#e0d3c3] px-6 py-3 text-xs font-medium text-[#6f6459] transition-colors hover:border-[#c4621f] hover:text-[#c4621f]"
              >
                {copied ? "Copied ✓" : "Copy submission"}
              </button>
            </div>

            {/* Status messages */}
            {status === "success" && (
              <p
                role="status"
                className="mt-4 rounded-xl border border-[#e8d9c8] bg-[#fff8ec] px-4 py-3 text-sm text-[#6b3a1a]"
              >
                Thanks! Your message is on its way. I’ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                Something went wrong. Please try again, or email me directly at{" "}
                {contact.email}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </div>
  );

}