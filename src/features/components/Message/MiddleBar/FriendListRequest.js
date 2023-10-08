import FriendList from "../Header/FriendList";
import FriendRequest from "../Header/FriendRequest";

export default function FriendListRequest() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <FriendList hover={true} />
        <FriendRequest hover={true} />
      </div>
    </>
  );
}
