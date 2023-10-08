import ButtonChat from "features/components/Button/ButtonChat";
import ButtonMail from "features/components/Button/ButtonMail";
import avatar from "assets/images/avatar.png";

export default function ContactSupplier() {
  return (
    <>
      <div className="rounded-lg bg-gradient-to-t from-[rgba(136,136,136,0.50)] from-[-12.3%] to-white to-100% px-6 py-4">
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Contact Supplier</h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-6">
                <img src={avatar} alt="avatar" className="h-16 w-16" />
                <div className="flex flex-col justify-center gap-1">
                  <p className="text-primary">Mr. Melon</p>
                  <p className="text-[#888]">Sale Representative</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <ButtonMail />
                <ButtonChat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
