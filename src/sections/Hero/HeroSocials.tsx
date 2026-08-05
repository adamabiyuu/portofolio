import { socialLinks } from "@/data/socialLinks";

const HeroSocials = () => {
  return (
    <div className="mt-10 flex items-center gap-5">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="
              rounded-full
              p-3
              transition-all
              duration-300
              hover:-translate-y-1
              hover:text-sky-500
              text-slate-300
            "
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
};

export default HeroSocials;
