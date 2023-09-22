import vietnam from "assets/images/vietnam.png";

export default function Logo() {
  return (
    <>
      <div className="flex h-[166.5px] shrink-0 items-center">
        <div className="flex h-[74px] shrink-0">
          <img src={vietnam} alt="logo" className="" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-extrabold capitalize text-primary">
            SuperVietNam
          </h1>
          <p className="text-[13px] font-extrabold text-gray">
            Connecting with Vietnamese suppliers
          </p>
        </div>
      </div>
    </>
  );
}
