import Menu from "./Menu/Menu";
import ChatWithSupplier from "./Contact/ChatWithSupplier";
import ContactNow from "./Contact/ContactNow";
import Logo from "./Contact/Logo";
import SignInJoin from "./Contact/SignInJoin";
import { useEffect, useState } from "react";

export default function Header() {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      console.log("screenWidth", screenWidth);
      if (screenWidth > 1280) {
        setScreen(1280);
      } else if (screenWidth > 900) {
        setScreen(900);
      } else {
        setScreen(0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="p-5">
          {screen === 1280 && (
            <>
              <div className="grid grid-cols-4 items-center gap-5">
                <Logo />
                <ContactNow />
                <ChatWithSupplier />
                <SignInJoin />
              </div>
            </>
          )}
          {screen === 900 && (
            <>
              <div className="flex justify-between gap-5">
                <Logo />
                <div className="flex grow flex-col gap-5">
                  <ContactNow />
                  <ChatWithSupplier />
                </div>
                <SignInJoin />
              </div>
            </>
          )}
          {screen === 0 && (
            <>
              <div className="flex flex-col gap-5">
                <div className="flex justify-between gap-5">
                  <Logo />
                  <SignInJoin />
                </div>
                <div className="flex justify-center gap-5">
                  <ContactNow />
                  <ChatWithSupplier />
                </div>
              </div>
            </>
          )}
        </div>
        <Menu />
      </div>
    </>
  );
}
