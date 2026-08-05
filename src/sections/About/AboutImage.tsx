import profile from "@/assets/images/profile.png";

const AboutImage = () => {
  return (
    <div
      className="
        flex
        justify-center
        lg:justify-start
      "
    >
      <div className="relative">
        {/* Glow */}
        <div
          className="
            absolute
            inset-0
            scale-105
            rounded-3xl
            bg-sky-500/15
            blur-3xl
          "
        />

        {/* Image Card */}
        <div
          className="
            relative

            overflow-hidden

            rounded-3xl

            border
            border-slate-700

            bg-slate-900

            shadow-2xl

            transition-all
            duration-500

            hover:-translate-y-2
            hover:border-sky-500/50
            hover:shadow-sky-500/20
          "
        >
          <img
            src={profile}
            loading="lazy"
            decoding="async"
            alt="Adam Abiyu Febrisyam"
            className="
              h-[320px]
              w-[260px]

              object-cover

              transition-transform
              duration-500

              hover:scale-105

              sm:h-[380px]
              sm:w-[300px]

              md:h-[420px]
              md:w-[330px]

              lg:h-[450px]
              lg:w-[350px]
            "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
