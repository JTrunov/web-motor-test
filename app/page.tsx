import ContentTab from "@/components/ContentTab";
import TabsList from "@/components/TabsList";
import { tabs } from "@/constants";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen px-16 max-md:px-5 max-md:py-5 max-md:justify-start max-md:h-auto">
      <div className="grid grid-cols-2 gap-11 max-md:flex  max-md:flex-col max-md:gap-9 ">
        <TabsList tabs={tabs} />
        <ContentTab />
      </div>
    </div>
  );
}
