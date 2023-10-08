import arrowDown from "assets/images/Expand_down_light.png";
import AboutUsComponent from "features/components/other/AboutUsComponent";

export default function CompanyProfile() {
  return (
    <>
      <div className="w-full rounded-lg border border-[#e7e7e7] px-6 py-3">
        <div className="flex flex-col gap-6">
          <h2 className="text-red">Company Profile</h2>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex flex-col items-center gap-3">
              <div className="h-[120px] w-[165px] rounded-lg border border-[#e7e7e7] xl:h-[240px] xl:w-[330px]"></div>
              <button className="rounded-lg bg-blue_light px-3 py-2 hover:bg-gray hover:text-white">
                Book a Factory Tour
              </button>
            </div>
            <div className="flex flex-col gap-6">
              <AboutUsComponent
                title={"Business Type:"}
                decription={"Manufacturer/Factory, Trading Company"}
              />
              <AboutUsComponent
                title={"Business Range:"}
                decription={
                  "Agriculture & Food, Bags, Cases & Boxes, Light Industry & Daily U"
                }
              />
              <div className="flex">
                <p className="w-[200px] shrink-0 text-[#888]">Main Products:</p>
                <p className="text-blue">
                  Smiki Soy Sauce, Smiki Seasoning, Noodle, Detergent, Powder,
                  Mushroom, Can, MSG, ...
                </p>
              </div>
              <AboutUsComponent
                title={"Main Markets"}
                decription={
                  "North America, South Amereca, Eastern Europe, Southeast Asia, Africa, Oceania, Mid East, ..."
                }
              />
              <AboutUsComponent
                title={"Average Lead Time:"}
                decription={
                  "Peak Season Lead Time: One month Off Season Lead Time: within 15 workdays"
                }
              />

              <div className="flex flex-col gap-2">
                <div className="h-[0.5px] bg-[#e7e7e7]"></div>
                <p className="">
                  Rating: <span className="text-blue">5.0/5</span>
                </p>
              </div>
            </div>
          </div>
          <p className="text-justify">
            Zhongshan Kwangna import and export CO., LTD was found in 2001,
            located in the industry developed, traffic convenient, rich Pearl
            River Delta, is a comprehensive trading company that speacially in
            Chinese cargo. We are proud of owning a team who is experienced in
            foreign trade for over 21 years. After these years business
            experience, we have built our own factories, an also have built
          </p>
          <div className="flex gap-2">
            <p className="capitalize text-blue">View All</p>
            <img src={arrowDown} alt={arrowDown} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}
