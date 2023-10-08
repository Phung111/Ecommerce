import menu from "assets/images/Status_list.png";
import { setTabs } from "features/baseData/BaseData";
import { useDispatch, useSelector } from "react-redux";

export default function Menu() {
  const baseData = useSelector((state) => state.baseData.data);
  const tabs = baseData.tabs;

  const dispatch = useDispatch();
  const handleSetTabs = (index) => {
    dispatch(setTabs(index));
  };
  return (
    <>
      <div className="flex justify-center gap-1 bg-gray sm:gap-5 md:gap-10 lg:gap-20">
        <div
          onClick={() => handleSetTabs(0)}
          className={`${
            tabs[0] && "bg-red"
          } flex shrink-0 cursor-pointer rounded-lg px-5 py-3 hover:bg-red`}
        >
          <p className="capitalize text-white">homes</p>
        </div>
        <div
          onClick={() => handleSetTabs(1)}
          className={`${
            tabs[1] && "bg-red"
          } flex shrink-0 cursor-pointer gap-2 rounded-lg px-5 py-3 hover:bg-red`}
        >
          <img src={menu} alt="menu" />
          <p className="capitalize text-white">products</p>
        </div>
        <div
          onClick={() => handleSetTabs(2)}
          className={`${
            tabs[2] && "bg-red"
          } flex shrink-0 cursor-pointer rounded-lg px-5 py-3 hover:bg-red`}
        >
          <p className="capitalize text-white">about us</p>
        </div>
        <div
          onClick={() => handleSetTabs(3)}
          className={`${
            tabs[3] && "bg-red"
          } flex shrink-0 cursor-pointer rounded-lg px-5 py-3 hover:bg-red`}
        >
          <p className="capitalize text-white">rieview</p>
        </div>
      </div>
    </>
  );
}
