"use client";

import { useStore } from "@/store";
import { TabContent } from "@/types";

type Props = TabContent;

const Tab = ({ title, body, id }: Props) => {
  const handleCLick = useStore((state) => state.updateActiveTab);

  return (
    <div
      className="hover:cursor-pointer bg-tab  px-5 py-6"
      onClick={() => handleCLick(id)}
    >
      <h3 className="font-medium text-2xl">{title}</h3>
      <p className="font-normal text-base mt-6">{body}</p>
    </div>
  );
};

export default Tab;
