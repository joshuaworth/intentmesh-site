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

