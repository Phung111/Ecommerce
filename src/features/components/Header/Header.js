import ChatWithSupplier from "./Contact/ChatWithSupplier";
import ContactNow from "./Contact/ContactNow";
import Logo from "./Contact/Logo";
import SignInJoin from "./Contact/SignInJoin";
import ButtonMail from "features/components/Button/ButtonMail";
import ButtonChat from "features/components/Button/ButtonChat";

export default function Header() {
  return (
    <>
      <div className="flex flex-col">
        <div className="mx-auto w-[95%]">
          <div className="py-6">
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
              <Logo />
              <div className="col-span-2 hidden 2xl:flex">
                <div className="flex flex-col justify-between gap-2">
                  <ContactNow />
                  <div className="flex">
                    <ButtonMail />
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <ChatWithSupplier />
                  <div className="px-6">
                    <ButtonChat />
                  </div>
                </div>
              </div>
              <SignInJoin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
