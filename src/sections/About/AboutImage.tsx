import profile from "@/assets/images/profile.png";

const AboutImage = () => {
  return (
    <div className="flex justify-center">
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          shadow-xl
          dark:border-slate-700
        "
      >
        <img
          src={profile}
          alt="Adam Abiyu Febrisyam"
          className="
            h-[450px]
            w-[350px]
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>
    </div>
  );
};

export default AboutImage;
