import { useDispatch } from "react-redux";
import { setHomes } from "features/baseData/BaseData";

export default function ProductType3({ img, title, price, col }) {
  const dispatch = useDispatch();
  const handleSetHomes = (index) => {
    dispatch(setHomes(index));
  };
  return (
    <>
      <div
        className="cursor-pointer overflow-hidden rounded-lg bg-white hover:brightness-75"
        onClick={() => handleSetHomes(1)}
      >
        <div className={`flex ${col ? "flex-col" : "flex-row"} gap-2`}>
          <img
            src={img}
            alt={`${img}`}
            className="aspect-square min-w-[100px]"
          />
          <div className={`flex flex-col gap-2`}>
            <p className="capitalize ">{title}</p>
            <p className="capitalize">
              <span className="font-bold text-[#E64545]">{price} </span>
              <span className="text-[#888]">/ Box</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
