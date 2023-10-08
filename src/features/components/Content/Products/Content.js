import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductType2 from "features/components/other/ProductType2";
import bagged from "assets/images/bagged.png";
import Pagination from "features/components/other/Pagination";

export default function Content() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="rounded-lg bg-white px-6 py-3">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <h2>All Prodcuts</h2>
              <p className="text-[13px] text-[#888]">Total 227 Products</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-[13px] ">1/141</p>
              <div className="flex divide-x divide-[#e7e7e7] overflow-hidden rounded-lg border border-[#e7e7e7]">
                <FontAwesomeIcon
                  icon="fa-solid fa-chevron-left"
                  className="cursor-pointer px-4 py-3 text-black/10 hover:bg-gray"
                />
                <FontAwesomeIcon
                  icon="fa-solid fa-chevron-right"
                  className="cursor-pointer bg-[#f2f2f2] px-4 py-3  text-black hover:bg-gray"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {Array(28)
            .fill()
            .map((item, index) => (
              <ProductType2
                img={bagged}
                title={"Light Soy Sauce Meaning Soy Sauce Without Caramel"}
                price={"US$0.39-0.499"}
                quantity={1200}
                isContact={false}
                key={index}
              />
            ))}
        </div>
        <div className="mt-6">
          <Pagination />
        </div>
      </div>
    </>
  );
}
