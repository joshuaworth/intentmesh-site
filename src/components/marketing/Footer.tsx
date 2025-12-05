import Link from "next/link";

const footerLinks = [
  { href: "/pullsheet", label: "Pullsheet" },
  { href: "/principle", label: "Principle" },
  { href: "/founder", label: "Founder" },
  { href: "/account-deletion", label: "Account Deletion" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

const socialLinks = [
  { href: "https://x.com/joshuaworth", label: "X" },
  { href: "https://www.linkedin.com/in/joshuaiuec", label: "LinkedIn" },
  { href: "https://www.linkedin.com/company/intent-mesh-llc/", label: "Company" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/70 text-white">
      <div className="container-outer flex flex-col gap-4 border-b border-white/10 py-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Pullsheet closed beta</p>
          <p className="text-sm text-slate-200">GPT-5.1 high reasoning included during beta (free now). Limited seats.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="mailto:support@intentmesh.systems?subject=Pullsheet%20Closed%20Beta%20Request&body=Name:%0ACompany:%0AEmail:%0APlatform:%20iOS%20TestFlight%20%2F%20Android%20Play%20Store%20%2F%20Both%0AUse%20case:%0A"
            className="jelly-pill px-5 py-3 text-xs uppercase tracking-[0.2em]"
          >
            Request beta access
          </Link>
        </div>
      </div>
      <div className="container-outer grid gap-6 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-teal-200">IntentMesh</p>
          <p className="mt-3 text-sm text-slate-200">
            Field intelligence for elevator crews and regulated work. Offline-first and compliance-forward.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-slate-100">
            <Link href="/contact" className="jelly-pill px-4 py-2">
              Let’s talk
            </Link>
            <Link href="/pullsheet" className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 hover:border-white/40">
              Pullsheet
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Navigate</p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-200">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Connect</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-200">
            {socialLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400">support@intentmesh.systems</p>
        </div>
      </div>
    </footer>
  );
}



