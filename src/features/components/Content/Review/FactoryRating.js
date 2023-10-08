import starlight from "assets/images/Star_light.png";
import Select from "utils/Select";

export default function FactoryRating() {
  return (
    <>
      <div className="flex flex-col items-start justify-between lg:flex-row">
        <div className="flex flex-col gap-3 xl:flex-row xl:gap-12">
          <div className="flex items-center gap-3">
            <p className="">Factory Rating</p>
            <div className="flex gap-2">
              <img
                src={starlight}
                alt="starlight"
                className="aspect-square shrink-0"
              />
              <img
                src={starlight}
                alt="starlight"
                className="aspect-square shrink-0"
              />
              <img
                src={starlight}
                alt="starlight"
                className="aspect-square shrink-0"
              />
              <img
                src={starlight}
                alt="starlight"
                className="aspect-square shrink-0"
              />
              <img
                src={starlight}
                alt="starlight"
                className="aspect-square shrink-0"
              />
            </div>
            <p className="text-[23px] text-primary">5.0</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="">Positive Rate</p>
            <p className="text-[23px] text-primary">95.5%</p>
          </div>
        </div>
        <div className="flex">
          <Select
            width={200}
            px={3}
            py={2}
            bg={"white"}
            border={true}
            borderColor={false}
            borderRadius={true}
            options={["By Time", "By Rating", "By Star"]}
          />
        </div>
      </div>
    </>
  );
}
