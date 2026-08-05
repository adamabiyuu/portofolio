import { socialLinks } from "@/data/socialLinks";

const SocialLinks = () => {
  return (
    <div
      className="
        mt-10

        flex
        flex-wrap
        items-center
        justify-center
        gap-4

        lg:justify-start
      "
    >
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
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-full

              border
              border-slate-800

              bg-slate-900/50

              text-slate-200

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-sky-500/40
              hover:bg-slate-900
              hover:text-sky-500

              sm:h-14
              sm:w-14
            "
          >
            <Icon size={26} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
