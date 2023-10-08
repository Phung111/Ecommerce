import { useDispatch } from "react-redux";
import { setHomes } from "features/baseData/BaseData";

export default function ProductType2({ img, title, price, quantity }) {
  const dispatch = useDispatch();
  const handleSetHomes = (index) => {
    dispatch(setHomes(index));
  };
  return (
    <>
      <div
        className="overflow-hidden rounded-lg bg-white p-5"
        onClick={() => handleSetHomes(1)}
      >
        <div className="flex flex-col gap-2">
          <img src={img} alt="lightSoySauce" className="aspect-square" />
          <p className="capitalize">{title}</p>
          <p className="capitalize">
            <span className="font-bold">{price} </span>/ Piece
          </p>
          <p className="capitalize">
            <span className="font-bold">{quantity} </span>Piece
          </p>
          <button className="rounded-xl border border-[#E7E7E7] p-3 hover:bg-white_dark ">
            <p className="capitalize">Contact Now</p>
          </button>
        </div>
      </div>
    </>
  );
}
