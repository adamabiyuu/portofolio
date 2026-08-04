import { socialLinks } from "@/data/socialLinks";

const SocialLinks = () => {
  return (
    <div className="mt-10 flex items-center gap-5">
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="
              rounded-full
              p-2
              transition-all
              duration-300
              hover:-translate-y-1
              hover:text-sky-500
            "
          >
            <Icon size={28} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
