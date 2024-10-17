"use client";

import { useStore } from "@/store";
import { TabContent } from "@/types";

type Props = TabContent;

const Tab = ({ title, body, id }: Props) => {
  const activeTab = useStore((state) => state.activeTab);
  const handleCLick = useStore((state) => state.updateActiveTab);

  return (
    <div
      className={`hover:cursor-pointer px-5 py-6 ${
        id === activeTab
          ? "bg-selected-bg text-selected-text"
          : "bg-tab-bg text-tab-text"
      }`}
      onClick={() => handleCLick(id)}
    >
      <h3 className="font-medium text-2xl">{title}</h3>
      <p className="font-normal text-base mt-6">{body}</p>
    </div>
  );
};

export default Tab;
