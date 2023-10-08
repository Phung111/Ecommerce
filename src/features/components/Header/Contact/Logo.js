import vietnam from "assets/images/vietnam.png";
import { setHomes, setTabs } from "features/baseData/BaseData";
import { useDispatch } from "react-redux";

export default function Logo() {
  const dispatch = useDispatch();
  const handleSetHomes = (index) => {
    dispatch(setHomes(index));
  };
  const handleSetTabs = (index) => {
    dispatch(setTabs(index));
  };

  return (
    <>
      <div
        className="flex h-[166.5px] shrink-0 cursor-pointer items-center"
        onClick={() => {
          handleSetHomes(0);
          handleSetTabs(0);
        }}
      >
        <div className="flex h-[74px] shrink-0">
          <img src={vietnam} alt="logo" className="" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-extrabold capitalize text-primary">
            SuperVietNam
          </h1>
          <p className="text-[13px] font-extrabold text-gray">
            Connecting with Vietnamese suppliers
          </p>
        </div>
      </div>
    </>
  );
}
