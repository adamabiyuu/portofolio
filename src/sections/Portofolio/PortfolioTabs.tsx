interface PortfolioTabsProps {
  activeTab: "projects" | "certificates";
  onChange: (tab: "projects" | "certificates") => void;
}

const PortfolioTabs = ({ activeTab, onChange }: PortfolioTabsProps) => {
  return (
    <div className="mt-2 flex justify-center">
      <div
        className="
          inline-flex
          rounded-xl
          border
          border-slate-800
          bg-slate-900/70
          p-1
          backdrop-blur
        "
      >
        <button
          onClick={() => onChange("projects")}
          className={`
            rounded-lg
            px-6
            py-2.5
            text-sm
            font-medium
            transition-all
            duration-300

            ${activeTab === "projects" ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25" : "text-slate-400 hover:bg-slate-800 hover:text-white"}
          `}
        >
          Projects
        </button>

        <button
          onClick={() => onChange("certificates")}
          className={`
            rounded-lg
            px-6
            py-2.5
            text-sm
            font-medium
            transition-all
            duration-300

            ${activeTab === "certificates" ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25" : "text-slate-400 hover:bg-slate-800 hover:text-white"}
          `}
        >
          Certificates
        </button>
      </div>
    </div>
  );
};

export default PortfolioTabs;
