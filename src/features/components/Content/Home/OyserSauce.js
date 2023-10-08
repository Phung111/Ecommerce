import japanSoy from "assets/images/japan_soy.png";
import ProductType1 from "features/components/other/ProductType1";

export default function OyserSauce() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-[95%]">
          <div className="py-6">
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <h2>Oyser Sauce and Rive Vinegar</h2>
              </div>
              <div className="grid grid-cols-3 lg:grid-cols-4">
                {Array(8)
                  .fill()
                  .map((item, index) => (
                    <ProductType1
                      img={japanSoy}
                      title={
                        "Light Soy Sauce Meaning Soy Sauce Without Caramel"
                      }
                      price={"US$0.39-0.499"}
                      quantity={1200}
                      isContact={false}
                      key={index}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
