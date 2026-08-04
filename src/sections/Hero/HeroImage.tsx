import profile from "@/assets/images/profile.png";

import { floatingIcons } from "@/data/floatingIcons";

// import HeroStatus from "./HeroStatus";

const HeroImage = () => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl" />

        <div
          className="
            relative
            h-96
            w-96
            overflow-hidden
            rounded-full
            border-4
            border-sky-500
            bg-slate-200
            shadow-2xl
            dark:bg-slate-800
          "
        >
          <img
            src={profile}
            alt="Adam Abiyu Febrisyam"
            className="
              h-full
              w-full
              object-cover
              scale-125
            "
          />
        </div>

        {floatingIcons.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`
                absolute
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-xl
                dark:border-slate-700
                dark:bg-slate-900
                ${item.className}
              `}
            >
              <Icon size={28} className={item.color} />
            </div>
          );
        })}
        {/* <HeroStatus /> */}
      </div>
    </div>
  );
};

export default HeroImage;
