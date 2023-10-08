import AboutUsComponent from "features/components/other/AboutUsComponent";
import certificate from "assets/images/HALAL-Certificate.webp.png";

export default function TradeCapacity() {
  return (
    <>
      <div className="w-full rounded-lg border border-[#e7e7e7] px-6 py-3">
        <div className="flex flex-col gap-6">
          <h2 className="text-red">Trade Capacity</h2>
          <div className="flex flex-col gap-6">
            <AboutUsComponent
              title={"International Commercial Terms (Incoterms)"}
              decription={"FOB, CFR, CIF"}
            />
            <AboutUsComponent title={"International"} decription={"FOB"} />
            <AboutUsComponent
              title={"Average Lead Time:"}
              decription={
                "Peak Season Lead Time: One month, Off season lead time: Within 15 workdays"
              }
            />
            <AboutUsComponent
              title={"Export Year"}
              decription={"Export Year"}
            />
            <AboutUsComponent
              title={"Export Percentage"}
              decription={"> 90%"}
            />
            <AboutUsComponent
              title={"Maint Markets"}
              decription={
                "North America, South America, Eastern Europe, Southeast Asia, Africa, Oceania, Mid East, Eastern Asia, Western Europe"
              }
            />
            <AboutUsComponent
              title={"Nearest Post"}
              decription={
                "JIAGEMIN NEW PORT NANSHA PORT, GUANGZHOU ZHONGSHAN PORT"
              }
            />
            <div className="grid grid-cols-[40%_auto]">
              <p className="text-[#888]">Import & Export Mode</p>
              <div className="flex w-full flex-col gap-3">
                <p className="w-full">Have Own Export License</p>
                <div className="grid grid-cols-2 divide-x divide-y divide-[#e7e7e7] border-[#e7e7e7]">
                  <p className="flex bg-[#EFF4FB] p-2 ">
                    Export License Number
                  </p>
                  <p className="flex p-2">03658457</p>
                  <p className="flex bg-[#EFF4FB] p-2 ">Export Company Name</p>
                  <p className="flex p-2">
                    ZHONGSHAN KWANGNA IMPORT & Export Co., LTD
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[40%_auto]">
              <p className="text-[#888]">License Photo</p>
              <div className="flex">
                <div className="rounded-lg border border-[#e7e7e7] px-8 py-1">
                  <img src={certificate} alt="certificate" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
