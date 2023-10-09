import product1 from "assets/images/product1.png";
import product2 from "assets/images/product2.png";
import product3 from "assets/images/product3.png";

export default function ProductDecription() {
  return (
    <>
      <div className="flex gap-12 bg-[#E7E7E7] px-6 py-3 xl:gap-24">
        <p className="text-primary">Home</p>
        <p className="cursor-pointer hover:text-primary">Product Description</p>
        <p className="cursor-pointer hover:text-primary">Why choose us</p>
        <p className="cursor-pointer hover:text-primary">FAQ</p>
      </div>
      <div className="flex flex-col gap-6 bg-white px-6 py-6">
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-[#900]">Basic Info</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <table className="border-collapse border">
              <tr>
                <td className="border bg-[#EFF4FB] p-3">Model No.</td>
                <td className="border p-3">500g*40bags/carton</td>
              </tr>
              <tr>
                <td className="border bg-[#EFF4FB] p-3">Model No.</td>
                <td className="border p-3">500g*40bags/carton</td>
              </tr>
              <tr>
                <td className="border bg-[#EFF4FB] p-3">Model No.</td>
                <td className="border p-3">500g*40bags/carton</td>
              </tr>
              <tr>
                <td className="border bg-[#EFF4FB] p-3">Model No.</td>
                <td className="border p-3">500g*40bags/carton</td>
              </tr>
              <tr>
                <td className="border bg-[#EFF4FB] p-3">Model No.</td>
                <td className="border p-3">500g*40bags/carton</td>
              </tr>
            </table>
            <table className="border-collapse border">
              <tr>
                <td className="border bg-[#EFF4FB] p-3">Model No.</td>
                <td className="border p-3">500g*40bags/carton</td>
              </tr>
              <tr>
                <td className="border bg-[#EFF4FB] p-3">Model No.</td>
                <td className="border p-3">500g*40bags/carton</td>
              </tr>
              <tr>
                <td className="border bg-[#EFF4FB] p-3">Model No.</td>
                <td className="border p-3">500g*40bags/carton</td>
              </tr>
              <tr>
                <td className="border bg-[#EFF4FB] p-3">Model No.</td>
                <td className="border p-3">500g*40bags/carton</td>
              </tr>
              <tr>
                <td className="border bg-[#EFF4FB] p-3">Model No.</td>
                <td className="border p-3">500g*40bags/carton</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-[#900]">Product Description</h2>
          <img
            src={product1}
            alt="product1"
            className="aspect-square object-cover"
          />
          <img
            src={product2}
            alt="product2"
            className="aspect-square object-cover"
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-[#900]">Why Choose Us ?</h2>
          <ul className="flex list-inside list-decimal flex-col gap-4">
            <li>
              We have been dedicated to the seasoning prodcuts in China for over
              20 years, now we are excellent experts in the field
            </li>
            <li>We have ability to develop new products by ourselves</li>
            <li>We are one-stop shop for all your purchasing requirement</li>
            <li>
              We have more than 10 exclusive agents in more than 10 countries
              and have sold our brands products for more than 15 years
            </li>
          </ul>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-[17px] font-semibold ">
            Certification and Inspection Report
          </h2>
          <img
            src={product3}
            alt="product3"
            className="aspect-square object-cover"
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-[#900]">FAQ</h2>
          <ul className="flex list-inside list-decimal flex-col gap-4">
            <li className="font-semibold">
              <span>Are you a manufacture</span>
              <p className="font-normal">
                zHONGSHAN kWANGNA import & export Co., LTD wasfounded in 2001,
                located in the rich Rearl River Delta, which is a comprehensive
                trading company that speacially in chinese cargo. We are pround
                of owning a team who is experienced in foreign trade for years.
                After these years experience, we have built our own factories,
                and also have built stable relationships with other factories
              </p>
            </li>
            <li className="font-semibold">
              <span>Can you help make me my own brand products</span>
              <p className="font-normal">
                OEM service acceptable, but we need you reach our MOQ, if not
                reach MOQ then need you to pay deposit for the remaining labels
              </p>
            </li>
            <li className="font-semibold">
              <span>Can I visit your factory</span>
              <p className="font-normal">
                Welcome to visit our factory, we will arrange full-time staff to
                serve you, and answer your questions any time
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
