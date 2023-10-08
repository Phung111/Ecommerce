import NewMessage from "./NewMessage";
import OldMessage from "./OldMessage";
import React from "react";

export default function ListChat() {
  return (
    <>
      <div className="flex flex-col divide-y">
        <div className="flex justify-center gap-6">
          <div className="flex items-center justify-center border-b-[3px] border-primary px-5 py-3">
            <p className="text-[17px] font-medium">Tất cả</p>
          </div>
          <div className="flex cursor-pointer items-center justify-center border-b-[3px] border-transparent px-5 py-3 hover:border-primary">
            <p className="text-[17px] text-[#555] hover:font-medium hover:text-black">
              Chưa đọc
            </p>
          </div>
        </div>
        <div className="flex flex-col divide-y overflow-auto">
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
        </div>
      </div>
    </>
  );
}
