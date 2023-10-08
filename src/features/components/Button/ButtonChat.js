import chat from "assets/images/chat_with_supplier.png";
export default function ButtonChat() {
  return (
    <>
      <button>
        <button className="box-border flex h-10 w-[260px] items-center justify-center gap-3 rounded-2xl border border-[#E7E7E7] bg-white hover:bg-white_dark">
          <img src={chat} alt="chat" />
          <p className="text-blue ">Chat with Supplier</p>
        </button>
      </button>
    </>
  );
}
