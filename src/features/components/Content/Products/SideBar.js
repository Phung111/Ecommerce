import search from "assets/images/Search_light.png";
import ContactSupplier from "features/components/Content/Products/ContactSupplier";

export default function SideBar() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="rounded-lg bg-white p-4">
          <div className="flex flex-col gap-5">
            <div className="flex">
              <input
                type="text"
                className="rounded-bl-lg rounded-tl-lg border border-[#E7E7E7] p-3"
                placeholder="Search Prodcuts"
              />
              <div className="flex w-12 cursor-pointer items-center justify-center rounded-br-lg rounded-tr-lg border border-[#E7E7E7] bg-[#F2F2F2] hover:bg-white_dark">
                <img src={search} alt="search" className="h-8 w-8" />
              </div>
            </div>
            <h2>Product Group</h2>
            <div className="flex flex-col gap-1">
              <p className="rounded-lg bg-[#F2F2F2] p-2 text-primary">
                Perfurm
              </p>
              <p className="cursor-pointer rounded-lg p-2 capitalize hover:bg-[#F2F2F2] hover:text-primary">
                Peanut butter
              </p>
              <p className="cursor-pointer rounded-lg p-2 capitalize hover:bg-[#F2F2F2] hover:text-primary">
                Daily Cleaning/ Personal Care
              </p>
              <p className="cursor-pointer rounded-lg p-2 capitalize hover:bg-[#F2F2F2] hover:text-primary">
                Condiment
              </p>
              <p className="cursor-pointer rounded-lg p-2 capitalize hover:bg-[#F2F2F2] hover:text-primary">
                Sauce
              </p>
              <p className="cursor-pointer rounded-lg p-2 capitalize hover:bg-[#F2F2F2] hover:text-primary">
                Chicken Powder/MSG
              </p>
              <p className="cursor-pointer rounded-lg p-2 capitalize hover:bg-[#F2F2F2] hover:text-primary">
                Noodles
              </p>
              <p className="cursor-pointer rounded-lg p-2 capitalize hover:bg-[#F2F2F2] hover:text-primary">
                Vinegar
              </p>
              <p className="cursor-pointer rounded-lg p-2 capitalize hover:bg-[#F2F2F2] hover:text-primary">
                Japanese Series Seasoning
              </p>
              <p className="cursor-pointer rounded-lg p-2 capitalize hover:bg-[#F2F2F2] hover:text-primary">
                Salad Dressing
              </p>
              <p className="cursor-pointer rounded-lg p-2 capitalize hover:bg-[#F2F2F2] hover:text-primary">
                Moon Cake & Cookies
              </p>
            </div>
          </div>
        </div>
        <ContactSupplier />
      </div>
    </>
  );
}
