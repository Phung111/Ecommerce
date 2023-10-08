import Commend from "features/components/Content/Review/Commend";
import Pagination from "features/components/other/Pagination";
export default function Commends() {
  return (
    <>
      <div className="flex flex-col gap-6 divide-y divide-[#E5E7EB]">
        <Commend />
        <Commend />
        <Commend />
        <Commend />
      </div>
      <div className="py-12">
        <Pagination />
      </div>
    </>
  );
}
