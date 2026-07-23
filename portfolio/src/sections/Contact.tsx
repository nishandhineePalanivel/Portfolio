import { useState, type FormEvent } from "react";
import { Mail, Phone, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import { personal } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";
import { Toast, type ToastState } from "../components/Toast";

const CONTACT_LINKS = [
  { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: LinkedinIcon, label: "LinkedIn Profile", href: personal.links.linkedin },
  { icon: GithubIcon, label: "GitHub Profile", href: personal.links.github },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<ToastState>({ message: "", visible: false });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2600);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    showToast("Email address copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a recruiter"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    showToast("Opening your email client…");
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          tag="09 — Contact"
          title="Let's work together"
          description="Open to internships and entry-level roles in software engineering and IT. Reach out — I reply quickly."
        />

        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <Reveal>
            <div className="space-y-3">
              {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-lg border border-paper-line dark:border-ink-line hover:border-brass/60 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-brass/10 border border-brass/30 flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-brass" />
                  </span>
                  <span className="text-sm text-paper-text dark:text-ink-text group-hover:text-brass transition-colors truncate">
                    {label}
                  </span>
                </a>
              ))}

              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 p-3.5 mt-2 rounded-lg border border-dashed border-paper-line dark:border-ink-line text-sm font-medium text-paper-muted dark:text-ink-muted hover:border-brass hover:text-brass transition-colors"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? "Copied!" : "Copy email address"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="label-tag text-paper-muted dark:text-ink-muted block mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-paper-surface dark:bg-ink-surface border border-paper-line dark:border-ink-line text-paper-text dark:text-ink-text placeholder:text-paper-muted/60 dark:placeholder:text-ink-muted/60 focus:border-brass outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label-tag text-paper-muted dark:text-ink-muted block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-paper-surface dark:bg-ink-surface border border-paper-line dark:border-ink-line text-paper-text dark:text-ink-text placeholder:text-paper-muted/60 dark:placeholder:text-ink-muted/60 focus:border-brass outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="label-tag text-paper-muted dark:text-ink-muted block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-paper-surface dark:bg-ink-surface border border-paper-line dark:border-ink-line text-paper-text dark:text-ink-text placeholder:text-paper-muted/60 dark:placeholder:text-ink-muted/60 focus:border-brass outline-none transition-colors resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brass text-ink font-medium text-sm hover:bg-brass-bright transition-colors"
              >
                <Send size={15} /> Send message
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <Toast {...toast} />
    </section>
  );
}
