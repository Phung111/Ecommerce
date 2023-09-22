import menu from "assets/images/Status_list.png";

export default function Menu() {
  return (
    <>
      <div className="flex justify-center gap-10 bg-gray lg:gap-20">
        <div className="flex shrink-0 cursor-pointer rounded-lg px-5 py-3 hover:bg-red">
          <p className="capitalize text-white">homes</p>
        </div>
        <div className="flex shrink-0 cursor-pointer gap-2 rounded-lg px-5 py-3 hover:bg-red">
          <img src={menu} alt="menu" />
          <p className="capitalize text-white">products</p>
        </div>
        <div className="flex shrink-0 cursor-pointer rounded-lg px-5 py-3 hover:bg-red">
          <p className="capitalize text-white">about us</p>
        </div>
        <div className="flex shrink-0 cursor-pointer rounded-lg px-5 py-3 hover:bg-red">
          <p className="capitalize text-white">rieview</p>
        </div>
      </div>
    </>
  );
}
