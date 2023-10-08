import CompanyProfile from "features/components/Content/AboutUs/Content/CompanyProfile";
import CompanyShow from "features/components/Content/AboutUs/Content/CompanyShow";
import ProductionCapacity from "features/components/Content/AboutUs/Content/ProductionCapacity";
import TradeCapacity from "features/components/Content/AboutUs/Content/TradeCapacity";

export default function Content() {
  return (
    <>
      <div className="flex flex-col gap-12">
        {/* <CompanyProfile /> */}
        <TradeCapacity />
        <ProductionCapacity />
        <CompanyShow />
      </div>
    </>
  );
}
