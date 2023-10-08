import factoryForum from "assets/images/factory_forum.png";
import signin from "assets/images/sign_in_join.png";
import message from "assets/images/message.png";
import top1 from "assets/images/top1png.png";
import { setHomes, setMessages } from "features/baseData/BaseData";
import { useDispatch } from "react-redux";
import Select from "utils/Select";

export default function SignInJoin() {
  const dispatch = useDispatch();
  const handleSetHomes = (index) => {
    dispatch(setHomes(index));
  };
  const handleSetMessages = (index) => {
    dispatch(setMessages(index));
  };
  return (
    <>
      <div className="flex shrink-0 justify-end">
        <div className="flex flex-col gap-3">
          <div className="flex gap-6">
            <div className="flex gap-3 md:gap-6">
              <div className="flex shrink-0 flex-col items-center justify-between gap-2">
                <img
                  src={factoryForum}
                  alt="factoryForum"
                  className="h-8 w-8"
                />
                <p className="text-primary">Factory Forum</p>
                <img src={top1} alt="top1" />
              </div>
              <div className="flex shrink-0 flex-col items-center justify-between gap-2">
                <img src={signin} alt="signin" className="h-8 w-8" />
                <p className="">Sign in / Join</p>
                <img src={top1} alt="top1" />
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-2">
              <div
                className="flex cursor-pointer flex-col items-center gap-2 "
                onClick={() => {
                  handleSetMessages(0);
                  handleSetHomes(2);
                }}
              >
                <img src={message} alt="message" className="h-8 w-8" />
                <p className="">Messages</p>
              </div>
              <Select
                width={50}
                px={3}
                py={2}
                bg={"white"}
                borderColor={false}
                borderRadius={true}
                options={["English", "Tiếng Việt"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
