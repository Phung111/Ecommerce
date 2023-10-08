import certificate from "assets/images/HALAL-Certificate.webp.png";

export default function CompanyShow() {
  return (
    <>
      <div className="w-full rounded-lg border border-[#e7e7e7] px-6 py-3">
        <div className="flex flex-col gap-6">
          <h2 className="text-red">Company Show</h2>
          <div className="flex flex-col gap-3">
            <div className="flex items-end gap-4">
              <p className="capitalize">Certificates</p>
              <p className="text-[13px] text-[#888]">18 Items</p>
            </div>
            <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
              {Array(4)
                .fill()
                .map((item, index) => (
                  <div className="flex flex-col gap-1" key={index}>
                    <div className="rounded-lg border border-[#e7e7e7] px-8 py-1">
                      <img src={certificate} alt="certificate" />
                    </div>
                    <p>Free Sale Certificate to USA .. By china</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-end gap-4">
              <p className="capitalize">Certificates</p>
              <p className="text-[13px] text-[#888]">18 Items</p>
            </div>
            <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
              {Array(4)
                .fill()
                .map((item, index) => (
                  <div className="flex flex-col gap-1" key={index}>
                    <div className="rounded-lg border border-[#e7e7e7] px-8 py-1">
                      <img src={certificate} alt="certificate" />
                    </div>
                    <p>Free Sale Certificate to USA .. By china</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
