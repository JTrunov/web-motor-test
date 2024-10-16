"use client";

import { useStore } from "@/store";
import Form from "@components/Form";
import Content from "@components/Content";

// Здесь будет отображаться контент таба в зависимости от выбранного таба
const ContentTab = () => {
  const activeTab = useStore((state) => state.activeTab);

  return (
    <div>
      <h3>Контент таба {activeTab}</h3>
      {activeTab === 1 ? <Content /> : <Form />}
    </div>
  );
};

export default ContentTab;
