import { Link } from "react-scroll";

import { socialLinks } from "@/data/socialLinks";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12 text-center">
        <Link to="home" smooth duration={500} offset={-80} className="cursor-pointer text-2xl font-bold transition hover:text-sky-400">
          Adam Abiyu
        </Link>

        <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">Building modern, responsive, and high-performance web applications with React, TypeScript, Tailwind CSS, and Go.</p>

        <div className="flex items-center gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-sky-400">
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        <div className="h-px w-full bg-slate-800" />

        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Adam Abiyu Febrisyam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
