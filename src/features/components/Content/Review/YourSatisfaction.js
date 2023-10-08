import starEmpty from "assets/images/Star_not_light.png";

export default function YourSatisfaction() {
  return (
    <>
      <div className=" flex flex-col divide-y divide-[#E5E7EB] rounded-lg border">
        <div className="flex items-center gap-2 p-2">
          <p>Your satisfaction:</p>
          <img src={starEmpty} alt="starEmpty" />
          <img src={starEmpty} alt="starEmpty" />
          <img src={starEmpty} alt="starEmpty" />
          <img src={starEmpty} alt="starEmpty" />
          <img src={starEmpty} alt="starEmpty" />
        </div>
        <textarea
          rows="10"
          className="border-0 p-2"
          placeholder="Write down your experiences with this factory..."
        ></textarea>
      </div>
    </>
  );
}
