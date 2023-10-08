import avatar from "assets/images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

export default function Contact({ name }) {
  const toggleOperationContact = (event) => {
    $(event.currentTarget).find(".operation__contact").toggleClass("hidden");
  };

  return (
    <>
      <div className="flex gap-2">
        <img src={avatar} alt="avatar" className="aspect-square w-[54px]" />
        <div className="flex w-full items-center justify-between border-b text-[17px] font-semibold capitalize">
          {name}
          <div
            className="relative flex items-center"
            onClick={toggleOperationContact}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-ellipsis"
              className="cursor-pointer hover:text-primary"
            />
            <div className="operation__contact hidden">
              <div className="absolute right-0 top-full z-10 flex flex-col rounded-lg border bg-white">
                <div className="cursor-pointer whitespace-nowrap rounded-lg px-3 py-2 hover:bg-black/20">
                  Xem thông tin
                </div>
                <div className="cursor-pointer whitespace-nowrap rounded-lg px-3 py-2 text-red hover:bg-black/20">
                  Xóa bạn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
