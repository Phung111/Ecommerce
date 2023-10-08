import bg from "assets/images/bg_contact_now.png";
import kwangna from "assets/images/kwangna.png";

export default function ContactNow() {
  return (
    <>
      <div className="flex w-[330px] flex-col gap-2 rounded-tl-lg rounded-tr-lg bg-white">
        <div className="relative flex h-20 w-full items-center justify-center gap-2 overflow-hidden rounded-lg">
          <img
            src={bg}
            alt="bg_contact_now"
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute flex items-center gap-2 px-6 py-2">
            <div className="rounded-x flex h-10 w-10 overflow-hidden">
              <img src={kwangna} alt="kwangna" className="object-contain" />
            </div>
            <div className="flex items-center">
              <p className="text-[13px] font-bold">
                Zhongshan Kwangna Import Export Co., LTD
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-[13px]">Manufacturer/Factory, Trading Company</p>
        </div>
        <hr className="border border-dashed border-[#E7E7E7]" />
      </div>
    </>
  );
}
