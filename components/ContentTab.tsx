"use client";

import { useStore } from "@/store";
import Form from "@components/Form";
import Content from "@components/Content";
import CustomButton from "@components/ui/CustomButton";

// Здесь будет отображаться контент таба в зависимости от выбранного таба
const ContentTab = () => {
  const activeTab = useStore((state) => state.activeTab);

  return (
    <div className="bg-tab-bg p-5">
      <div className="font-normal text-lg">
        <div className="overflow-y-scroll h-[25rem] max-lg:h-[30rem] scroll">
          <h3 className="text-[32px] font-medium">Контент таба {activeTab}</h3>
          <br />
          {activeTab === 1 ? <Content /> : <Form />}
        </div>

        <CustomButton className="w-full  h-12">Кнопка действия</CustomButton>
      </div>
    </div>
  );
};

export default ContentTab;
