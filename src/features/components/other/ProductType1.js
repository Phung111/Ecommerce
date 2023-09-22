import playButton from "assets/images/play_button.png";

export default function ProductType1({
  img,
  title,
  price,
  quantity,
  isContact,
}) {
  return (
    <>
      <div className="bg-white p-5">
        <div className="flex flex-col gap-7 ">
          <div className="relative">
            <div className="absolute h-full w-full cursor-pointer hover:bg-black/20"></div>
            <img
              src={img}
              alt="lightSoySauce"
              className="aspect-square w-full"
            />
            <img
              src={playButton}
              alt="playButton"
              className="absolute bottom-[2%] left-[2%] h-[10%] w-[10%] object-contain"
            />
          </div>
          <div className="flex flex-col gap-6">
            <p className="capitalize">{title}</p>
            {(price || quantity) && (
              <div className="flex flex-col gap-3">
                {price && (
                  <p className="capitalize">
                    <span className="font-bold">{price} </span>/ Piece
                  </p>
                )}
                {quantity && (
                  <p className="capitalize">
                    <span className="font-bold">{quantity} </span>Piece
                  </p>
                )}
              </div>
            )}
          </div>
          {isContact && (
            <div>
              <button className="rounded-xl border border-[#E7E7E7] p-3 hover:bg-white_dark ">
                <p className="capitalize">Contact Now</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
