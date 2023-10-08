import avatar from "assets/images/avatar.png";
import chat from "assets/images/comment_light.png";

export default function FriendRequestReceved() {
  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg bg-white p-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <img src={avatar} alt="avatar" className="aspect-square w-[54px]" />
            <div className="flex flex-col justify-center">
              <p className="text-[17px] font-semibold uppercase">Jackson</p>
              <p className="text-[13px] font-semibold text-[#888]">3 ngày</p>
            </div>
          </div>
          <div>
            <img
              src={chat}
              alt="chat"
              className="aspect-square w-6 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex rounded-lg border bg-[#f2f2f2] p-3">
          <p className="h-10 overflow-scroll text-[13px]">
            Hi my name is Jackson, I'm finding facto for clothes
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <button className="cursor-pointer rounded-lg bg-[#f2f2f2] px-4 py-2 font-semibold text-black hover:bg-black/20">
            Từ chối
          </button>
          <button className="cursor-pointer rounded-lg bg-primary px-4 py-2 font-semibold text-white hover:bg-primary_dark">
            Đồng ý
          </button>
        </div>
      </div>
    </>
  );
}
