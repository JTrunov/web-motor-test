type TabContent = {
  id: number;
  title: string;
  body: string;
};

type FormValues = {
  name1: string;
  name2: string;
  name3: string;
};

type FormReducerAction = {
  type: "change_name1" | "change_name2" | "change_name3";
  newVal: string;
};

export type { TabContent, FormValues, FormReducerAction };
