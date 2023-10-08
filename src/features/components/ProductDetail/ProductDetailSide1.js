import ContactNow from "features/components/Header/Contact/ContactNow";
import ContactSupplier from "features/components/Content/Products/ContactSupplier";
import ChatWithSupplier from "../Header/Contact/ChatWithSupplier";

export default function ProductDetailSide1() {
  return (
    <>
      <div className="flex flex-col ">
        <ContactNow />
        <ChatWithSupplier />
        <ContactSupplier />
      </div>
    </>
  );
}
