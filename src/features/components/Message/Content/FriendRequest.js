import FriendRequestSent from "./FriendRequestSent";
import FriendRequestReceved from "./FriendRequestReceved";

export default function FriendRequest() {
  return (
    <>
      <div className="h-full bg-[#f2f2f2] px-6 py-3">
        <div className="grid h-full grid-rows-2 gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-[17px] font-semibold uppercase">
              Lời mời đã nhận (4)
            </p>
            <div className="grid grid-cols-3 gap-5 overflow-auto">
              <FriendRequestReceved />
              <FriendRequestReceved />
              <FriendRequestReceved />
            </div>
            <div className="flex justify-center">
              <button className="cursor-pointer rounded-lg bg-white px-3 py-2 hover:bg-black/20">
                Xem thêm
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[17px] font-semibold uppercase">
              Lời mời đã gửi (48)
            </p>
            <div className="grid grid-cols-3 gap-5 overflow-auto">
              <FriendRequestSent />
              <FriendRequestSent />
              <FriendRequestSent />
              <FriendRequestSent />
              <FriendRequestSent />
              <FriendRequestSent />
              <FriendRequestSent />
              <FriendRequestSent />
              <FriendRequestSent />
              <FriendRequestSent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
