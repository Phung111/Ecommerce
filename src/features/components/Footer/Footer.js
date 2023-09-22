import fb from "assets/images/fb.png";
import twitter from "assets/images/twitter.png";
import instagram from "assets/images/instagram.png";
import youtube from "assets/images/youtube.png";
import tiktok from "assets/images/tiktok.png";

export default function Footer() {
  return (
    <>
      <div className="bg-[#e7e7e7]">
        <div className="mx-auto max-w-[90%]">
          <div className="flex flex-col">
            <div className="flex flex-col justify-between gap-6 py-3 lg:flex-row">
              <div className="flex justify-center gap-12">
                <div className="flex shrink-0 flex-col gap-6">
                  <p className="font-bold">About Us</p>
                  <p className="text-[13px]">About SuperVietNam.com</p>
                  <p className="text-[13px]">Site Map</p>
                </div>
                <div className="flex shrink-0 flex-col gap-6">
                  <p className="font-bold">Help</p>
                  <p className="text-[13px]">FAQ</p>
                  <p className="text-[13px]">Contact Us</p>
                  <p className="text-[13px]">Submit a Complaint</p>
                </div>
                <div className="flex shrink-0 flex-col gap-6">
                  <p className="font-bold">Language Options</p>
                  <p className="text-[13px]">Tiếng Việt</p>
                  <p className="text-[13px]">English</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-6">
                <img
                  src={fb}
                  alt="fb"
                  className="aspect-square h-11 w-11  shrink-0"
                />
                <img
                  src={twitter}
                  alt="twitter"
                  className="aspect-square h-11 w-11  shrink-0"
                />
                <img
                  src={instagram}
                  alt="instagram"
                  className="aspect-square h-11 w-11  shrink-0"
                />
                <img
                  src={youtube}
                  alt="youtube"
                  className="aspect-square h-11 w-11  shrink-0"
                />
                <img
                  src={tiktok}
                  alt="tiktok"
                  className="aspect-square h-11 w-11  shrink-0"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 py-3">
              <div className="flex divide-x">
                <a
                  href="#"
                  className="cursor-pointer px-2 text-center text-[#555] hover:text-blue"
                >
                  Hot Prodcuts
                </a>
                <a
                  href="#"
                  className="cursor-pointer px-2 text-center text-[#555] hover:text-blue"
                >
                  VietNam Products
                </a>
                <a
                  href="#"
                  className="cursor-pointer px-2 text-center text-[#555] hover:text-blue"
                >
                  VietNam Manufactures/Suppliers
                </a>
                <a
                  href="#"
                  className="cursor-pointer px-2 text-center text-[#555] hover:text-blue"
                >
                  Wholesale Products
                </a>
                <a
                  href="#"
                  className="cursor-pointer px-2 text-center text-[#555] hover:text-blue"
                >
                  WholeSale Price
                </a>
                <a
                  href="#"
                  className="cursor-pointer px-2 text-center text-[#555] hover:text-blue"
                >
                  VietNam Factory
                </a>
              </div>
              <div className="flex divide-x">
                <a
                  href="#"
                  className="cursor-pointer px-2 text-center text-[#555] hover:text-blue"
                >
                  Copyright © VietNam Exporting Technology
                </a>
                <a
                  href="#"
                  className="cursor-pointer px-2 text-center text-[#555] hover:text-blue"
                >
                  User Agreement
                </a>
                <a
                  href="#"
                  className="cursor-pointer px-2 text-center text-[#555] hover:text-blue"
                >
                  Declaration
                </a>
                <a
                  href="#"
                  className="cursor-pointer px-2 text-center text-[#555] hover:text-blue"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
