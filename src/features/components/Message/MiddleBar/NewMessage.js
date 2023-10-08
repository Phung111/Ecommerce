import manny from "assets/images/manny.svg";
export default function NewMessage() {
  return (
    <>
      <div className="flex cursor-pointer gap-3 px-6 py-3 hover:bg-black/20">
        <img
          src={manny}
          alt="manny"
          className="aspect-square w-14 object-cover"
        />
        <div className="flex w-full flex-col justify-between gap-3">
          <div className="flex items-center justify-between">
            <p className="text-[17px] font-medium text-black">Manny Nguyen</p>
            <p className="text-[13px] font-medium text-black">1 hour</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-[250px] overflow-hidden overflow-ellipsis whitespace-nowrap">
              Can you copy this bag model for asjdhasdh assssssss ádasdasd
            </p>
            <div className="flex items-center justify-center rounded-lg bg-[#FF2900] px-[2px] py-[1px] text-[13px] text-white">
              5+
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
