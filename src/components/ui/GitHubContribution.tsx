import { GitHubCalendar } from "react-github-calendar";

import profile from "@/data/profile";

const GitHubContribution = () => {
  return (
    <div className="mt-2 hidden lg:block">
      <h3
        className="
          mb-6
          text-center
          text-xl
          font-semibold
        "
      >
        GitHub Activity
      </h3>

      <div
        className="
          overflow-x-auto
          rounded-2xl
          border
          border-slate-800
          bg-slate-900/40
          p-6
          shadow-lg
        "
      >
        <GitHubCalendar username={profile.github} fontSize={14} />
      </div>
    </div>
  );
};

export default GitHubContribution;
