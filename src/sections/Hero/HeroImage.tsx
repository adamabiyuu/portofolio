import profile from "@/assets/images/profile.png";

import { floatingIcons } from "@/data/floatingIcons";

const HeroImage = () => {
  return (
    <div
      className="
        mb-10
        flex
        justify-center

        lg:mb-0
        lg:justify-end
      "
    >
      <div className="relative">
        {/* Glow */}
        <div
          className="
            absolute
            inset-0
            scale-110
            rounded-full
            bg-sky-500/20
            blur-3xl
          "
        />

        {/* Photo */}
        <div
          className="
            relative

            h-52
            w-52

            overflow-hidden
            rounded-full

            border-4
            border-sky-500

            bg-slate-800

            shadow-[0_0_70px_rgba(14,165,233,0.25)]

            sm:h-64
            sm:w-64

            md:h-72
            md:w-72

            lg:h-80
            lg:w-80

            xl:h-96
            xl:w-96
          "
        >
          <img
            src={profile}
            alt="Adam Abiyu Febrisyam"
            className="
              h-full
              w-full
              object-cover
              scale-110
            "
          />
        </div>

        {/* Floating Icons */}
        {floatingIcons.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.color}
              className={`
                absolute

                flex
                items-center
                justify-center

                h-10
                w-10

                rounded-xl

                border
                border-slate-700

                bg-slate-900/90

                shadow-xl

                backdrop-blur-xl

                sm:h-11
                sm:w-11

                lg:h-12
                lg:w-12

                xl:h-14
                xl:w-14

                ${item.className}
              `}
            >
              <Icon size={20} className={item.color} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroImage;
