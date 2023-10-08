import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pagination() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 2xl:flex-row-reverse 2xl:justify-between">
        <div className="flex gap-4">
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-white text-primary hover:bg-white_dark">
            1
          </div>
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#e7e7e7] bg-white hover:bg-white_dark ">
            2
          </div>
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#e7e7e7] bg-white hover:bg-white_dark ">
            3
          </div>
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#e7e7e7] bg-white hover:bg-white_dark ">
            4
          </div>
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#e7e7e7] bg-white hover:bg-white_dark ">
            5
          </div>
          <div className="hidden gap-4 xl:flex">
            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#e7e7e7] bg-white hover:bg-white_dark ">
              6
            </div>
            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#e7e7e7] bg-white hover:bg-white_dark ">
              7
            </div>
            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#e7e7e7] bg-white hover:bg-white_dark ">
              8
            </div>
            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#e7e7e7] bg-white hover:bg-white_dark ">
              9
            </div>
            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#e7e7e7] bg-white hover:bg-white_dark ">
              10
            </div>
          </div>

          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#e7e7e7] bg-white hover:bg-white_dark ">
            ...
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-3 hover:bg-primary_dark ">
            <p className="text-white">Next</p>
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-right"
              className="text-white"
            />
          </button>
        </div>
        <div className="flex w-full items-center justify-center gap-4">
          <p className="">Show:</p>
          <button href="#" className="text-primary">
            10
          </button>
          <p className="">/</p>
          <button href="#" className="hover:text-primary_dark">
            30
          </button>
          <p className="">/</p>
          <button href="#" className="hover:text-primary_dark">
            50
          </button>
        </div>
      </div>
    </>
  );
}
