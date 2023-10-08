import ProductType1 from "features/components/other/ProductType1";

import lightSoySauce from "assets/images/light-soy-sauce.png";
import healthySoy from "assets/images/healthy_soy.png";

export default function SoySauce() {
  return (
    <>
      <div className="bg-blue_light">
        <div className="mx-auto max-w-[95%]">
          <div className="py-6">
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <h2>Soy Sauce</h2>
              </div>
              <div className="grid grid-cols-[auto_auto] grid-rows-1 gap-5">
                <ProductType1
                  img={lightSoySauce}
                  title={"Light Soy Sauce Meaning Soy Sauce Without Caramel"}
                  price={"US$0.39-0.499"}
                  quantity={1200}
                  isContact={true}
                  key={999}
                />
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                  {Array(6)
                    .fill()
                    .map((item, index) => (
                      <ProductType1
                        img={healthySoy}
                        title={"Healthy Soy Sauce for Japane dsds"}
                        isContact={false}
                        key={index}
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
