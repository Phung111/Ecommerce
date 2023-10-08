import mail from "assets/images/Message_open_light.png";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "features/baseData/BaseData";

export default function FriendRequest({ hover }) {
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
          messages[2] && hover && "bg-black/20"
        } flex cursor-pointer items-center gap-3 px-6 py-1 ${
          hover && "hover:bg-black/20"
        } `}
        onClick={() => handleSetMessages(2)}
      >
        <img
          src={mail}
          alt="mail"
          className="aspect-square w-11 cursor-pointer"
        />
        <p className="font-semibol text-[19px]">Lời mời kết bạn</p>
      </div>
    </>
  );
}
