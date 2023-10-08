import avatar from "assets/images/avater2.png";
import search from "assets/images/Search_black.png";
import folder from "assets/images/Folder_line_light.png";

export default function ChatInfo() {
  return (
    <>
      <div className="flex w-full items-center justify-between gap-6 px-3 ">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt="avatar"
            className="aspect-square w-16 rounded-full object-cover"
          />
          <p className="text-[17px] font-medium">Jackson</p>
          <p className="text-[#888]">Truy cập 15h trước</p>
        </div>
        <div className="flex gap-3">
          <img
            src={search}
            alt="search"
            className="aspect-square w-11 cursor-pointer object-contain"
          />
          <img
            src={folder}
            alt="folder"
            className="aspect-square w-11 cursor-pointer object-contain"
          />
        </div>
      </div>
    </>
  );
}
