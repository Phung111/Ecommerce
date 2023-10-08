import AboutUsComponent from "features/components/other/AboutUsComponent";

export default function ProductionCapacity() {
  return (
    <>
      <div className="w-full rounded-lg border border-[#e7e7e7] px-6 py-3">
        <div className="flex flex-col gap-6">
          <h2 className="text-red">Production Capacity</h2>
          <div className="flex flex-col gap-6">
            <AboutUsComponent
              title={"Factory Address"}
              decription={
                "Rm 2314-16, 1 st Ziling Int’l Building, 82#, Zhongshan 5 Rd., East Dist. Zhongshan City, Gd, Zhongshan"
              }
            />
            <AboutUsComponent
              title={"R&D Capacity"}
              decription={"OEM, ODM, Own Brand()"}
            />
            <AboutUsComponent
              title={"No. of R&D Staff"}
              decription={"5-10 people"}
            />
            <AboutUsComponent
              title={"No of Production Lines"}
              decription={"10"}
            />
            <AboutUsComponent
              title={"Annual Output Value"}
              decription={"US$5 Million - US$ 10 Million"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
