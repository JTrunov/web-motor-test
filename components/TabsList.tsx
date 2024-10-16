import { TabContent } from "@/types";
import Tab from "@components/Tab";

type Props = {
  tabs: TabContent[];
};

const TabsList = ({ tabs }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      {tabs.map((tab) => (
        <Tab title={tab.title} body={tab.body} id={tab.id} key={tab.id} />
      ))}
    </div>
  );
};

export default TabsList;
