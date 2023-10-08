import ChatInfo from "./ChatInfo";
import FriendList from "./FriendList";
import FriendRequest from "./FriendRequest";
import { useSelector } from "react-redux";

export default function Header() {
  const baseData = useSelector((state) => state.baseData.data);
  const messages = baseData.messages;
  return (
    <>
      <div className="flex items-center">
        {messages[0] && <ChatInfo />}
        {messages[1] && <FriendList hover={false} />}
        {messages[2] && <FriendRequest hover={false} />}
      </div>
    </>
  );
}
