import ContentTab from "@/components/ContentTab";
import TabsList from "@/components/TabsList";
import { tabs } from "@/constants";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen px-16">
      <div className="grid grid-cols-2 gap-11">
        <TabsList tabs={tabs} />
        <ContentTab />
      </div>
    </div>
  );
}
