import { useStore } from "@/store";
import CustomButton from "@components/ui/CustomButton";

const Content = () => {
  const activeTab = useStore((state) => state.activeTab);

  return (
    <div className="font-normal text-lg">
      <div className="overflow-y-scroll h-[25rem] scroll">
        <h3 className="text-[32px] font-medium">Контент таба {activeTab}</h3>
        <br />
        <p>
          Безусловно, начало повседневной работы по формированию позиции
          способствует подготовке и реализации модели развития.{" "}
        </p>
        <br />

        <ul className="list-disc">
          <li>Элемент ненумерованного списка</li>
          <li>Элемент ненумерованного списка</li>
        </ul>
        <br />

        <p>
          Идейные соображения высшего порядка, а также постоянное
          информационно-пропагандистское обеспечение нашей деятельности выявляет
          срочную потребность приоретизации разума над эмоциями.{" "}
        </p>
        <br />

        <ol className="list-decimal">
          <li>Элемент нумерованного </li>
          <li>Элемент нумерованного </li>
        </ol>
        <br />

        <p>
          Каждый из нас понимает очевидную вещь: выбранный нами инновационный
          путь в значительной степени обусловливает важность
        </p>
      </div>

      <CustomButton className="w-full  h-12">Кнопка действия</CustomButton>
    </div>
  );
};

export default Content;
