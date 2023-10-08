import Select from "utils/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuHeader() {
  return (
    <>
      <div className="mx-auto max-w-[95%]">
        <div className="relative flex flex-col-reverse items-center justify-center py-3 lg:flex-row">
          <div className="left-0 flex items-center gap-2 lg:absolute">
            <FontAwesomeIcon icon="fa-solid fa-bars" className="text-[20px]" />
            <Select
              width={50}
              px={3}
              py={2}
              bg={"white"}
              borderColor={false}
              borderRadius={true}
              options={[
                "All Categories",
                "Category 1",
                "Category 2",
                "Category 3",
              ]}
            />
          </div>
          <div className="flex gap-10">
            <p className="cursor-pointer text-[19px] font-semibold uppercase text-primary hover:text-primary">
              PRODUCTS
            </p>
            <p className="cursor-pointer text-[19px] font-semibold uppercase hover:text-primary">
              FACTORY LIST
            </p>
            <p className="cursor-pointer text-[19px] font-semibold uppercase hover:text-primary">
              FACTORY FORUM
            </p>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </>
  );
}
