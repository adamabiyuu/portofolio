interface PortfolioTabsProps {
  activeTab: "projects" | "certificates";
  onChange: (tab: "projects" | "certificates") => void;
}

const PortfolioTabs = ({ activeTab, onChange }: PortfolioTabsProps) => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="relative flex rounded-full bg-slate-100 p-1 dark:bg-slate-800">
        {/* Background Active */}
        <div
          className={`
            absolute
            top-1
            bottom-1
            w-[calc(50%-4px)]
            rounded-full
            bg-sky-500
            transition-all
            duration-300
            ${activeTab === "projects" ? "left-1" : "left-[calc(50%+2px)]"}
          `}
        />

        <button
          onClick={() => onChange("projects")}
          className={`
            relative
            z-10
            w-40
            rounded-full
            py-2
            text-sm
            font-medium
            transition-colors
            ${activeTab === "projects" ? "text-white" : "text-slate-600 dark:text-slate-300"}
          `}
        >
          Projects
        </button>

        <button
          onClick={() => onChange("certificates")}
          className={`
            relative
            z-10
            w-40
            rounded-full
            py-2
            text-sm
            font-medium
            transition-colors
            ${activeTab === "certificates" ? "text-white" : "text-slate-600 dark:text-slate-300"}
          `}
        >
          Certificates
        </button>
      </div>
    </div>
  );
};

export default PortfolioTabs;
