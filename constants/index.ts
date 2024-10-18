import { TabContent } from "@/types";

const tabs: TabContent[] = [
  {
    id: 1,
    title: "Заголовок таба 1",
    body: "Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов ",
  },
  {
    id: 2,
    title: "Заголовок таба 2",
    body: "Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов ",
  },
  {
    id: 3,
    title: "Заголовок таба 3",
    body: "Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов ",
  },
];

const inputs: {
  name: "name1" | "name2" | "name3";
  placeholder: string;
  required: boolean;
}[] = [
  {
    name: "name1",
    placeholder: "Имя*",
    required: true,
  },
  {
    name: "name2",
    placeholder: "Имя*",
    required: true,
  },
  {
    name: "name3",
    placeholder: "Имя*",
    required: true,
  },
];

export { tabs, inputs };
