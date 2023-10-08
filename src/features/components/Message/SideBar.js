import avatar from "assets/images/avater2.png";
import cmt from "assets/images/comment_light.png";
import order from "assets/images/Order_light.png";
import vietnam from "assets/images/vietnam.svg";
import my from "assets/images/my.svg";
import setting from "assets/images/Setting_line_light.png";
import { setMessages, setHomes, setTabs } from "features/baseData/BaseData";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBar({ toggleMiddleBar }) {
  const baseData = useSelector((state) => state.baseData.data);
  const messages = baseData.messages;
  const dispatch = useDispatch();
  const handleSetMessages = (index) => {
    dispatch(setMessages(index));
  };
  const handleSetHomes = (index) => {
    dispatch(setHomes(index));
  };
  const handleSetTabs = (index) => {
    dispatch(setTabs(index));
  };

  return (
    <>
      <div className="w-24 shrink-0 bg-primary py-6">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col px-3">
              <img
                src={avatar}
                alt="avatar"
                className="aspect-square w-20 rounded-full object-cover"
              />
            </div>
            <div className="flex w-full flex-col gap-6">
              <div
                className={`${
                  messages[0] && "bg-primary_dark"
                } flex cursor-pointer justify-center py-1 hover:bg-primary_dark`}
                title="Tin nhắn"
                onClick={() => handleSetMessages(0)}
              >
                <div className="relative">
                  <img
                    src={cmt}
                    alt="cmt"
                    className="aspect-square w-14  rounded-full object-cover"
                  />
                  <div className="absolute right-0 top-0 flex -translate-y-1 translate-x-2 items-center justify-center rounded-lg bg-[#FF2900] px-2 py-[2px] text-white">
                    5+
                  </div>
                </div>
              </div>
              <div
                className={`${
                  (messages[1] || messages[2]) && "bg-primary_dark"
                } flex cursor-pointer justify-center py-1 hover:bg-primary_dark`}
                title="Bạn bè"
                onClick={() => handleSetMessages(1)}
              >
                <img
                  src={order}
                  alt="order"
                  className="aspect-square w-14 cursor-pointer rounded-full object-cover "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div
              className="level__1 flex w-full cursor-pointer justify-center py-2 hover:bg-primary_dark"
              onClick={() => {
                handleSetHomes(0);
                handleSetTabs(0);
              }}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-house"
                className="text-[45px] text-white"
              />
            </div>
            <div className="level__1 relative flex w-full cursor-pointer justify-center py-1 hover:bg-primary_dark">
              <img
                src={setting}
                alt="setting"
                className=" aspect-square w-14 cursor-pointer rounded-full object-cover"
              />

              <div className="level__1__drop absolute bottom-0 left-full hidden w-[200px] flex-col rounded-lg border bg-white ">
                <div className="level__2 relative flex cursor-pointer whitespace-nowrap rounded-lg px-3 py-2 hover:bg-black/20">
                  Ngôn ngữ
                  <div className="level__2__drop absolute bottom-0 left-full hidden w-[200px] flex-col rounded-lg border bg-white ">
                    <div className="flex cursor-pointer gap-2 rounded-lg px-3 py-2 hover:bg-black/20">
                      <img src={vietnam} alt="vietnam" />
                      Tiếng việt
                    </div>
                    <div className="flex cursor-pointer gap-2 rounded-lg px-3 py-2 text-red hover:bg-black/20">
                      <img src={my} alt="my" />
                      English
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer whitespace-nowrap rounded-lg px-3 py-2 text-red hover:bg-black/20">
                  Đăng xuất
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
