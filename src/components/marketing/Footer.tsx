import Link from "next/link";

const footerLinks = [
  { href: "/pullsheet", label: "Pullsheet" },
  { href: "/labs", label: "Labs" },
  { href: "/principle", label: "Principle" },
  { href: "/founder", label: "Founder" },
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
          <p className="mt-4 text-xs text-slate-400">hq@intentmesh.systems</p>
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";

const navLinks = [
  { label: "Why", href: "#why" },
  { label: "Pullsheet", href: "#pullsheet" },
  { label: "Labs", href: "#labs" },
  { label: "Principle", href: "#principle" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="container-outer border-t border-white/10 py-10 text-xs text-slate-400">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Intent Mesh LLC</p>
      </div>
    </footer>
  );
}

