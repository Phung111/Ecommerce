import factoryForum from "assets/images/factory_forum.png";
import signin from "assets/images/sign_in_join.png";
import message from "assets/images/message.png";
import top1 from "assets/images/top1png.png";
import arrowdown from "assets/images/Expand_down_light.png";

export default function SignInJoin() {
  return (
    <>
      <div className="flex justify-end">
        <div className="flex flex-col gap-3">
          <div className="flex gap-7">
            <div className="flex shrink-0 flex-col items-center justify-between gap-1">
              <img src={factoryForum} alt="factoryForum" className="h-8 w-8" />
              <p className="text-primary">Factory Forum</p>
            </div>
            <div className="flex shrink-0 flex-col items-center justify-between gap-1">
              <img src={signin} alt="signin" className="h-8 w-8" />
              <p className="">Sign in / Join</p>
            </div>
            <div className="flex shrink-0 flex-col items-center justify-between gap-1">
              <img src={message} alt="message" className="h-8 w-8" />
              <p className="">Messages</p>
            </div>
          </div>
          <div className="flex gap-7">
            <img src={top1} alt="top1" />
            <img src={top1} alt="top1" />
            <div>
              <div className="flex items-center gap-2">
                <p>English</p>
                <img
                  src={arrowdown}
                  alt="arrowdown"
                  className="h-6 w-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
