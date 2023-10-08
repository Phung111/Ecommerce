import jack from "assets/images/jack.svg";
import starlight from "assets/images/Star_light.png";
import imgCmt from "assets/images/commend_product.png";

export default function Commend() {
  return (
    <>
      <div className="flex gap-6 py-6">
        <div className="flex flex-col items-center">
          <img
            src={jack}
            alt="jack"
            className="aspect-square w-16 object-cover"
          />
          <p>Jack</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="relative -left-[2px] flex gap-1">
            <img
              src={starlight}
              alt="starlight"
              className="aspect-square w-6"
            />
            <img
              src={starlight}
              alt="starlight"
              className="aspect-square w-6"
            />
            <img
              src={starlight}
              alt="starlight"
              className="aspect-square w-6"
            />
            <img
              src={starlight}
              alt="starlight"
              className="aspect-square w-6"
            />
            <img
              src={starlight}
              alt="starlight"
              className="aspect-square w-6"
            />
          </div>
          <p className="text-[#888]">2023-07-12 10:15</p>
          <p>Product quality is stable and reliable</p>
          <div className="flex gap-6">
            <img
              src={imgCmt}
              alt="imgCmt"
              className="aspect-square w-[120px] rounded-lg"
            />
            <img
              src={imgCmt}
              alt="imgCmt"
              className="aspect-square w-[120px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
