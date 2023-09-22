import ProductType1 from "features/components/other/ProductType1";

import lightSoySauce from "assets/images/light-soy-sauce.png";
import healthySoy from "assets/images/healthy_soy.png";

export default function SoySauce() {
  return (
    <>
      <div className="bg-blue_light">
        <div className="container">
          <div className="py-6">
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <h2>Soy Sauce</h2>
              </div>
              <div className="flex gap-5">
                <div className="w-[40%] shrink-0">
                  <ProductType1
                    img={lightSoySauce}
                    title={"Light Soy Sauce Meaning Soy Sauce Without Caramel"}
                    price={"US$0.39-0.499"}
                    quantity={1200}
                    isContact={true}
                  />
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {Array(6)
                    .fill()
                    .map((index) => (
                      <ProductType1
                        img={healthySoy}
                        title={"Healthy Soy Sauce for Japane dsds"}
                        isContact={false}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
