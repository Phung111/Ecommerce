import NewMessage from "./NewMessage";
import OldMessage from "./OldMessage";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListMessage } from "features/baseData/BaseData";

export default function ListChat() {
  const baseData = useSelector((state) => state.baseData.data);
  const listMessage = baseData.listMessage;

  const dispatch = useDispatch();
  const handleSetListMessage = (index) => {
    dispatch(setListMessage(index));
  };

  return (
    <>
      <div className="flex flex-col divide-y">
        <div className="flex justify-center gap-6">
          <div
            className={`flex cursor-pointer items-center justify-center border-b-[3px] px-5 py-3 ${
              listMessage[0] ? "border-primary" : "border-transparent"
            }`}
            onClick={() => handleSetListMessage(0)}
          >
            <p
              className={`text-[17px] ${
                listMessage[0] ? `text-[#555]` : "text-black"
              }  hover:font-medium hover:text-black`}
            >
              Tất cả
            </p>
          </div>
          <div
            className={`flex cursor-pointer items-center justify-center border-b-[3px] px-5 py-3 ${
              listMessage[1] ? "border-primary" : "border-transparent"
            }`}
            onClick={() => handleSetListMessage(1)}
          >
            <p
              className={`text-[17px] ${
                listMessage[0] ? `text-[#555]` : "text-black"
              }  hover:font-medium hover:text-black`}
            >
              Chưa đọc
            </p>
          </div>
        </div>
        <div className="flex flex-col divide-y overflow-auto">
          {listMessage[0] && (
            <>
              <NewMessage />
              <OldMessage />
              <OldMessage />
              <OldMessage />
              <OldMessage />
              <OldMessage />
              <OldMessage />
              <OldMessage />
              <OldMessage />
              <OldMessage />
              <OldMessage />
              <OldMessage />
              <OldMessage />
              <OldMessage />
              <OldMessage />
              <OldMessage />
              <OldMessage />
            </>
          )}
          {listMessage[1] && (
            <>
              <NewMessage />
            </>
          )}
        </div>
      </div>
    </>
  );
}
