import MenuHeader from "./MenuHeader";
import Direct from "./Direct";
import ProductInfo from "./ProductInfo";
import ProductDetailSide1 from "./ProductDetailSide1";

import product4 from "assets/images/product4.png";
import Supplier from "../Footer/Supplier";
import ProductType3 from "../other/ProductType3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setProductDetails } from "features/baseData/BaseData";
import { useDispatch, useSelector } from "react-redux";
import ProductDecription from "./ProductDecription";
import Review from "../Content/Review/Review";

export default function ProductDetail() {
  const baseData = useSelector((state) => state.baseData.data);
  const productDetails = baseData.productDetails;

  const dispatch = useDispatch();
  const handleSetProductDetails = (index) => {
    dispatch(setProductDetails(index));
  };
  return (
    <>
      <MenuHeader />
      <Direct />
      <div className="mx-auto max-w-[95%]">
        <div className="flex flex-col items-center gap-6 py-12 2xl:flex-row">
          <ProductInfo />
          <div className="flex">
            <ProductDetailSide1 />
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2]">
        <div className="mx-auto max-w-[95%]">
          <div className="py-6">
            <div className="flex gap-6">
              <div className="flex flex-col gap-6">
                <div className="flex w-full flex-col ">
                  <div className="flex gap-12 bg-white">
                    <p
                      className={`cursor-pointer border-b-2 border-transparent ${
                        productDetails[0] && "border-b-primary"
                      } px-6 py-3 font-semibold`}
                      onClick={() => handleSetProductDetails(0)}
                    >
                      Product Description
                    </p>
                    <p
                      className={`cursor-pointer border-b-2 border-transparent ${
                        productDetails[1] && "border-b-primary"
                      } px-6 py-3 font-semibold`}
                      onClick={() => handleSetProductDetails(1)}
                    >
                      Review
                    </p>
                    <p
                      className={`cursor-pointer border-b-2 border-transparent ${
                        productDetails[2] && "border-b-primary"
                      } px-6 py-3 font-semibold`}
                    >
                      Company Info
                    </p>
                  </div>
                  {productDetails[0] && <ProductDecription />}
                  {productDetails[1] && <Review />}
                </div>
                <div className="flex flex-col gap-6 bg-white px-6 py-6">
                  <Supplier />
                </div>
                <div className="flex flex-col gap-6 bg-white px-6 py-6">
                  <h2>People who viewed this also viewed</h2>
                  <div className="grid grid-cols-3 gap-6 xl:grid-cols-6">
                    {Array(6)
                      .fill()
                      .map((index) => (
                        <ProductType3
                          img={product4}
                          title={"500g Chinese Delicious Preserved"}
                          price={"US$ 25-50"}
                          col={true}
                        />
                      ))}
                  </div>
                </div>
              </div>
              <div className="hidden flex-col gap-6 lg:flex">
                <div className="flex flex-col gap-6 rounded-lg bg-white p-3">
                  <div className="flex justify-between">
                    <h2>You Might Also Like</h2>
                    <FontAwesomeIcon
                      icon="fa-solid fa-arrow-rotate-right"
                      className="cursor-pointer hover:text-blue"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    {Array(6)
                      .fill()
                      .map((index) => (
                        <ProductType3
                          img={product4}
                          title={"500g Chinese Delicious Preserved"}
                          price={"US$ 25-50"}
                          col={false}
                        />
                      ))}
                  </div>
                </div>
                <ProductDetailSide1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
