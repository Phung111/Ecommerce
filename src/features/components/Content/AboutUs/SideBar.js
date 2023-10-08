export default function SideBar() {
  return (
    <>
      <div className="min-w-[200px] md:min-w-[300px]">
        <div className="flex flex-col gap-2 rounded-lg border border-[#e7e7e7]">
          <h2 className="px-3 py-2">About Us</h2>
          <div className="flex flex-col gap-3">
            <p className="bg-[#e7e7e7] px-3 py-2">Company Profile</p>
            <p className="cursor-pointer px-3 py-2 hover:bg-[#e7e7e7]">
              Trade Capacity
            </p>
            <p className="cursor-pointer px-3 py-2 hover:bg-[#e7e7e7]">
              Production Capacity
            </p>
            <p className="cursor-pointer px-3 py-2 hover:bg-[#e7e7e7]">
              Company Show
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
