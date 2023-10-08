import SideBar from "features/components/Content/Products/SideBar";
import Content from "features/components/Content/Products/Content";

export default function Products() {
  return (
    <>
      <div className="bg-[#f2f2f2]">
        <div className="mx-auto max-w-[95%]">
          <div className="py-6">
            <div className="flex flex-col gap-6 md:flex-row">
              <SideBar />
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
