import SideBar from "./SideBar";
import MiddleBar from "./MiddleBar/MiddleBar";
import Header from "./Header/Header";
import Content from "./Content/Content";
import SearchAdd from "./SearchAdd/SearchAdd";
import React, { useState, useEffect } from "react";
import AddFriend from "./SearchAdd/AddFriend";

export default function Message() {
  const heightFirstRow = 80;
  const widthFirstColumn = 400;
  const [heightSecondRow, setHeightSecondRow] = useState(
    window.innerHeight - heightFirstRow,
  );

  useEffect(() => {
    const handleResize = () => {
      setHeightSecondRow(window.innerHeight - heightFirstRow);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [heightFirstRow]);

  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-full">
          <div
            className="grid divide-x divide-y"
            style={{
              gridTemplateRows: `${heightFirstRow}px ${heightSecondRow}px`,
              gridTemplateColumns: `${widthFirstColumn}px auto`,
            }}
          >
            <SearchAdd />
            <Header />
            <MiddleBar />
            <Content />
          </div>
        </div>
        <AddFriend />
      </div>
    </>
  );
}
