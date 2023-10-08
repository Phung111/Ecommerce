import manny from "assets/images/manny.svg";

export default function OldMessage() {
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
            <p className="text-[17px] font-medium text-[#555]">Manny Nguyen</p>
            <p className="text-[13px] font-medium text-[#888]">1 hour</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-[250px] overflow-hidden overflow-ellipsis whitespace-nowrap text-[#888]">
              Can you copy this bag model for asjdhasdh assssssss ádasdasd
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
