const HeroStatus = () => {
  return (
    <div
      className="
        absolute
        -bottom-8
        left-1/2
        w-72
        -translate-x-1/2
        rounded-3xl
        border
        p-5
        shadow-2xl
        backdrop-blur-xl
        transition-all
        duration-300
        border-slate-700
        bg-slate-900/80
      "
    >
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
        </span>

        <span className="font-semibold">Available for Work</span>
      </div>

      <div className="mt-4 space-y-2 text-sm text-slate-400">
        <p>💼 Frontend Web Developer</p>

        <p>📍 Indonesia</p>
      </div>
    </div>
  );
};

export default HeroStatus;
