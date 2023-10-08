import FactoryRating from "features/components/Content/Review/FactoryRating";
import YourSatisfaction from "features/components/Content/Review/YourSatisfaction";
import Commends from "features/components/Content/Review/Commends";

export default function Review() {
  return (
    <>
      <div className="mx-auto max-w-[75%]">
        <div className="flex flex-col gap-6 py-6">
          <FactoryRating />
          <YourSatisfaction />
          <Commends />
        </div>
      </div>
    </>
  );
}
