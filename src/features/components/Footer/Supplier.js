import avatar from "assets/images/avatar.png";
import ButtonPrimary from "features/components/Button/ButtonPrimary";

export default function Supplier() {
  return (
    <>
      <div className="bg-blue_light">
        <div className="container">
          <div className="px-14 py-6">
            <div className="flex flex-col gap-6">
              <h2>Send your message to this supplier</h2>
              <div className="px-9">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-[85px] py-2">
                      <p className="flex shrink-0 gap-1">
                        <span className="text-red">*</span>From:
                      </p>
                    </div>
                    <input
                      type="text"
                      className="w-3/5 rounded-lg p-2 placeholder:text-[#888]"
                      placeholder="Enter your email address "
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-[85px] py-2">
                      <p className="flex shrink-0 gap-1">
                        <span className="text-red">*</span>To:
                      </p>
                    </div>
                    <img
                      src={avatar}
                      alt="avatar"
                      className="aspect-square w-10"
                    />
                    <p className="capitalize">Mr. Melon</p>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-[85px] py-2">
                      <p className="flex shrink-0 gap-1">
                        <span className="text-red">*</span>Message:
                      </p>
                    </div>
                    <div className="flex w-full flex-col gap-1">
                      <textarea className="h-[150px] w-full rounded-lg p-2 placeholder:text-[#888]" />
                      <p className="text-[#888]">
                        Enter between 20 to 4,000 characters
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-[85px]">
                      <ButtonPrimary title={"send"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
