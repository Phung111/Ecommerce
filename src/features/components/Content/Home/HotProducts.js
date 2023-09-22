import hotProducts from "assets/images/hot_products.png";
import playButton from "assets/images/play_button.png";

export default function HotProducts() {
  return (
    <>
      <div className="flex">
        <div className="container">
          <div className="py-6">
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <h2>Hot Products</h2>
              </div>
              <div className="flex gap-6 ">
                <div className="relative">
                  <div className="absolute h-full w-full cursor-pointer hover:bg-black/20"></div>
                  <img
                    src={hotProducts}
                    alt="lightSoySauce"
                    className="aspect-square"
                  />
                  <img
                    src={playButton}
                    alt="playButton"
                    className="absolute bottom-[2%] left-[2%] h-[10%] w-[10%] object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center gap-12">
                  <p className="capitalize">
                    Blended Sesame Oil/Cooking Oil at Costco with BRC Cd quality
                    sauce
                  </p>
                  <div className="flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-3">
                      <p className="capitalize">
                        <span className="font-bold text-red">
                          US$0.39-0.499
                        </span>
                        / Piece
                      </p>

                      <p className="capitalize">
                        <span className="font-bold">1,200 Pieces </span>Piece
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="rounded-xl border border-[#E7E7E7] p-3 hover:bg-white_dark ">
                      <p className="capitalize">Contact Now</p>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <img
                    src={hotProducts}
                    alt="hotProducts"
                    className="aspect-square w-[212px]"
                  />
                  <img
                    src={hotProducts}
                    alt="hotProducts"
                    className="aspect-square w-[212px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
