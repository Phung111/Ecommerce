import ListChat from "./ListChat";
import FriendListRequest from "./FriendListRequest";
import React from "react";
import { useSelector } from "react-redux";

export default function MiddleBar() {
  const baseData = useSelector((state) => state.baseData.data);
  const messages = baseData.messages;

  return (
    <>
      {messages[0] && <ListChat />}
      {messages[1] && <FriendListRequest />}
      {messages[2] && <FriendListRequest />}
    </>
  );
}
