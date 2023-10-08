import smile from "assets/images/happy_light.png";
import picture from "assets/images/Img_box_light.png";
import file from "assets/images/link_alt.svg";
import translate from "assets/images/translate.svg";

export default function Chat() {
  return (
    <>
      <div className="flex h-full flex-col">
        <div className="flex h-full bg-[#f2f2f2]"></div>
        <div className="flex shrink-0 flex-col divide-y divide-primary">
          <div className="flex gap-4 px-3 py-1">
            <img
              src={smile}
              alt="smile"
              className="aspect-square w-[34px] cursor-pointer"
            />
            <img
              src={picture}
              alt="picture1"
              className="aspect-square w-[34px] cursor-pointer"
            />
            <img
              src={file}
              alt="file"
              className="aspect-square w-[34px] cursor-pointer"
            />
            <img
              src={translate}
              alt="translate"
              className="aspect-square w-[34px] cursor-pointer"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full border-none"
              placeholder="Aa"
            />
          </div>
        </div>
      </div>
    </>
  );
}
