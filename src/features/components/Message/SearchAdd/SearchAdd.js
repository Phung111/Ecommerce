import search from "assets/images/Search_black.png";
import add from "assets/images/Group_add_light.svg";
import $ from "jquery";

export default function SearchAdd({ height }) {
  const openModalAddFriend = (event) => {
    $("#add__friend").toggleClass("hidden");
    event.preventDefault();
  };

  return (
    <>
      <div className="flex items-center">
        <div className="flex items-start gap-6 px-6 pb-3 pt-6">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="rounded-lg border-none !bg-[#F2F2F2] py-2 pl-11"
            />
            <img
              src={search}
              alt="search"
              className="absolute ml-2 aspect-square w-8 cursor-pointer"
            />
          </div>
          <img
            src={add}
            alt="add"
            className="aspect-square w-11 cursor-pointer"
            onClick={openModalAddFriend}
          />
        </div>
      </div>
    </>
  );
}
