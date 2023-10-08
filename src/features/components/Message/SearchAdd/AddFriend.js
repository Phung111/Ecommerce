import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "assets/images/avatar.png";
import ContactNow from "features/components/Header/Contact/ContactNow";
import ChatWithSupplier from "features/components/Header/Contact/ChatWithSupplier";
import $ from "jquery";

export default function AddFriend() {
  const closeModalAddFriend = (event) => {
    $("#add__friend").toggleClass("hidden");
    event.preventDefault();
  };

  return (
    <>
      <div id="add__friend" className="fixed hidden h-full w-full bg-black/50">
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col gap-5 rounded-lg bg-white p-3">
            <div className="flex items-center justify-between">
              <p className="text-[17px] font-semibold">Thêm bạn</p>
              <FontAwesomeIcon
                icon="fa-solid fa-xmark"
                className="cursor-pointer text-xl hover:text-primary"
                onClick={closeModalAddFriend}
              />
            </div>
            <input
              type="email"
              className="!border-l-0 border-r-0 border-t-0 border-[#888] px-0"
              placeholder="Email"
            />
            <div className="flex flex-col items-center gap-2">
              <img
                src={avatar}
                alt="avatar"
                className="aspect-square w-[72px] rounded-full"
              />
              <p className="text-[17px] font-semibold">Jackson</p>
              <div className="flex gap-2">
                <button className="cursor-pointer rounded-lg bg-[#f2f2f2] px-4 py-2 font-semibold text-black hover:bg-black/20">
                  Kết bạn
                </button>
                <button className="cursor-pointer rounded-lg bg-[#f2f2f2] px-4 py-2 font-semibold text-black hover:bg-black/20">
                  Nhắn tin
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <ContactNow />
              <ChatWithSupplier />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
