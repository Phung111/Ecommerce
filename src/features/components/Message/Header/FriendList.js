import group from "assets/images/Group_light.svg";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "features/baseData/BaseData";

export default function FriendList({ hover }) {
  const baseData = useSelector((state) => state.baseData.data);
  const messages = baseData.messages;
  const dispatch = useDispatch();
  const handleSetMessages = (index) => {
    dispatch(setMessages(index));
  };
  return (
    <>
      <div
        className={`${
          messages[1] && hover && "bg-black/20"
        } flex cursor-pointer items-center gap-3 px-6 py-1 ${
          hover && "hover:bg-black/20"
        } `}
        onClick={() => handleSetMessages(1)}
      >
        <img
          src={group}
          alt="group"
          className="aspect-square w-11 cursor-pointer"
        />
        <p className="font-semibol text-[19px]">Danh sách bạn bè</p>
      </div>
    </>
  );
}
