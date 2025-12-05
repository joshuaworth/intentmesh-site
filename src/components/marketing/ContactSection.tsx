"use client";

import { useState } from "react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const email = "support@intentmesh.systems";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent("Pullsheet collaboration");
    const body = encodeURIComponent(`Name: ${name}\n\n${message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="container-outer py-20 text-white">
      <div className="jelly-surface grid gap-10 px-8 py-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Contact</p>
          <h2 className="mt-3 text-3xl font-headline">Let’s build something that compounds</h2>
          <p className="mt-4 text-slate-200">
            If you want Pullsheet for your team or want to collaborate on the intent layer, reach out. We respond faster
            than most elevator cars travel.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-100">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-2"
            >
              {copied ? "Email copied" : email}
            </button>
            <a
              href="https://cal.com/intentmesh"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-2"
            >
              Schedule a call
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            By contacting us you agree we can respond and keep your message to provide service. We do not sell your data.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        >
          <label className="text-xs uppercase tracking-[0.35em] text-teal-200">Quick note</label>
          <div className="mt-4 space-y-4">
            <input
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white focus:border-teal-300 focus:outline-none"
            />
            <textarea
              required
              placeholder="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="h-28 w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white focus:border-teal-300 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-full border border-white/30 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:border-white/60"
          >
            Send note
          </button>
        </form>
      </div>
    </section>
  );
}

