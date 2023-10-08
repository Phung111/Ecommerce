import mail from "assets/images/mail.png";

export default function ButtonMail() {
  return (
    <>
      <button>
        <button className="box-border flex h-10 w-[260px] items-center justify-center gap-3 rounded-2xl border border-[#E7E7E7] bg-primary hover:bg-primary_dark">
          <img src={mail} alt="mail" />
          <p className="capitalize text-white ">Contact Now</p>
        </button>
      </button>
    </>
  );
}
