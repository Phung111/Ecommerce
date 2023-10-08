import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgCmt from "assets/images/product.jpg";
import play from "assets/images/Video_light.png";
import AboutUsComponent from "features/components/other/AboutUsComponent";
import box from "assets/images/box.svg";
export default function ProductInfo() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
        <div className="flex w-[330px] shrink-0 flex-col gap-8">
          <div className="relative flex aspect-square  cursor-pointer items-center justify-center overflow-hidden rounded-lg">
            <img
              src={imgCmt}
              alt="imgCmt"
              className="h-full w-full object-cover hover:brightness-75"
            />
            <img src={play} alt="play" className="absolute" />
          </div>
          <div className="flex gap-2">
            <div className="flex h-full shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#f2f2f2] p-2 text-[#888] hover:brightness-75">
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            </div>
            <div className="grid grid-cols-5 gap-2">
              <img
                src={imgCmt}
                alt="imgCmt"
                className="aspect-square max-w-[50px] rounded-lg border border-primary"
              />
              <img
                src={imgCmt}
                alt="imgCmt"
                className="aspect-square max-w-[50px] cursor-pointer rounded-lg border hover:border-primary"
              />
              <img
                src={imgCmt}
                alt="imgCmt"
                className="aspect-square max-w-[50px] cursor-pointer rounded-lg border hover:border-primary"
              />
              <img
                src={imgCmt}
                alt="imgCmt"
                className="aspect-square max-w-[50px] cursor-pointer rounded-lg border hover:border-primary"
              />
              <img
                src={imgCmt}
                alt="imgCmt"
                className="aspect-square max-w-[50px] cursor-pointer rounded-lg border hover:border-primary"
              />
            </div>

            <div className="flex h-full shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#f2f2f2] p-2 text-[#888] hover:brightness-75">
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <h2 className="text-[19px]">
            500g Bagged or Canned Preserved Dried Salted Black Beans
            Irreplaceable Flavor
          </h2>
          <div className="flex justify-end">
            <button
              href="#"
              className="inline-flex items-center gap-2 text-[13px] text-blue hover:brightness-75"
            >
              Get Latest Price
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-right"
                className="text-[13px] "
              />
            </button>
          </div>
          <div className="flex flex-col divide-y">
            <div className="py-3">
              <div className="flex items-center gap-9 rounded-lg bg-[#F2F2F2] p-3">
                <div className="flex shrink-0 items-center gap-3">
                  <p className="text-[19px] font-bold text-red">US$ 25-50</p>
                  <p className="text-[#888]">/</p>
                  <p className="text-[#888]">Box</p>
                </div>
                <div className="h-full w-[0.5px] shrink-0 bg-[#888]"></div>
                <div className="inline-flex items-center gap-2">
                  <p className="">100 Boxes</p>
                  <p className="text-[#888]">(Min. Order)</p>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div className="flex flex-col gap-5">
                <AboutUsComponent
                  title={"Product Type:"}
                  decription={"Salted Black Beans"}
                />
                <AboutUsComponent
                  title={"Type:"}
                  decription={"Dried Salted Black Beans"}
                />
                <AboutUsComponent title={"Processing:"} decription={"Dried"} />
                <AboutUsComponent
                  title={"Fermentable:"}
                  decription={"Fermentable"}
                />
                <AboutUsComponent title={"Color:"} decription={"Black"} />
                <AboutUsComponent
                  title={"Shelf Life:"}
                  decription={"2 Years"}
                />
              </div>
            </div>
            <div className="py-3">
              <div className="flex flex-col gap-6 md:flex-row md:gap-20">
                <div className="flex">
                  <p className="w-[200px] shrink-0 text-[#888]">Sample:</p>
                  <div className="flex shrink-0 items-center gap-3">
                    <p className="font-bold text-red">US$ 0/Piece</p>
                    <p className="text-[#888]">1 Piece (Min.Order)</p>
                  </div>
                </div>
                <div className="flex justify-end gap-1">
                  <img src={box} alt="box" />
                  <button
                    href="#"
                    className="whitespace-nowrap text-blue hover:brightness-75"
                  >
                    Request Sample
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
