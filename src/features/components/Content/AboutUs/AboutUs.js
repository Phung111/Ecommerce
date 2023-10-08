import SideBar from "features/components/Content/AboutUs/SideBar";
import Content from "features/components/Content/AboutUs/Content/Content";
import Supplier from "features/components/Footer/Supplier";

export default function AboutUs() {
  return (
    <>
      <div className="mx-auto max-w-[95%]">
        <div className="py-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[40%_auto]">
            <SideBar />
            <Content />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[95%] py-6">
        <Supplier />
      </div>
    </>
  );
}
