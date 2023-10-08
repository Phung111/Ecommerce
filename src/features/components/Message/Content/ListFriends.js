import search from "assets/images/Search_black.png";
import Select from "utils/Select";
import Contact from "./Contact";

export default function ListFriends() {
  return (
    <>
      <div className="flex flex-col gap-12 px-6 py-3">
        <div className="flex flex-col gap-6">
          <p className="text-[17px] font-semibold">Bạn bè ( 164 )</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative flex items-center rounded-lg border">
              <input
                type="text"
                placeholder="Tìm bạn"
                className="w-full border-none pl-11"
              />
              <img src={search} alt="search" className="absolute ml-2" />
            </div>
            <div className="rounded-lg bg-[#F2F2F2]">
              <Select
                px={3}
                py={2}
                bg={"#F2F2F2"}
                borderColor={false}
                borderRadius={true}
                options={["Tên (A-Z)", "Tên (Z-A)"]}
                sortArrow={true}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 overflow-auto pr-4">
          <div className="flex flex-col gap-6">
            <p className="text-[19px] font-semibold uppercase">A</p>
            <Contact name={"adam"} />
            <Contact name={"adam"} />
            <Contact name={"adam"} />
            <Contact name={"adam"} />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[19px] font-semibold uppercase">B</p>
            <Contact name={"bdam"} />
            <Contact name={"bdam"} />
            <Contact name={"bdam"} />
            <Contact name={"bdam"} />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[19px] font-semibold uppercase">C</p>
            <Contact name={"cdam"} />
            <Contact name={"cdam"} />
            <Contact name={"cdam"} />
            <Contact name={"cdam"} />
          </div>
        </div>
      </div>
    </>
  );
}
