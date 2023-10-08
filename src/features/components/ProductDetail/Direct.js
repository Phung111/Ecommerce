import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Direct() {
  return (
    <>
      <div className="bg-[#f2f2f2]">
        <div className="mx-auto max-w-[95%]">
          <div className="px-6 py-3">
            <div className="flex items-center justify-center gap-2">
              <p className="cursor-pointer text-[13px] hover:text-primary">
                Home
              </p>
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-right"
                className="text-[10px]"
              />
              <p className="cursor-pointer text-[13px] hover:text-primary">
                Agriculture & Food{" "}
              </p>
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-right"
                className="text-[10px]"
              />
              <p className="cursor-pointer text-[13px] hover:text-primary">
                Farming
              </p>
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-right"
                className="text-[10px]"
              />
              <p className="cursor-pointer text-[13px] hover:text-primary">
                Bean & Preparation
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
