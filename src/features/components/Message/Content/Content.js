import Chat from "./Chat";
import FriendRequest from "./FriendRequest";
import ListFriends from "./ListFriends";
import { useSelector } from "react-redux";

export default function Content() {
  const baseData = useSelector((state) => state.baseData.data);
  const messages = baseData.messages;
  return (
    <>
      {messages[0] && <Chat />}
      {messages[1] && <ListFriends />}
      {messages[2] && <FriendRequest />}
    </>
  );
}
