import ourStory from "assets/images/our_story.png";
import videoLight from "assets/images/Video_light.png";

export default function OurStory() {
  return (
    <>
      <div className="bg-blue_light">
        <div className="mx-auto max-w-[95%]">
          <div className="py-6">
            <div className="flex flex-col lg:flex-row">
              <div className="relative flex h-[384px] w-full items-center justify-center">
                <img
                  src={ourStory}
                  alt="ourStory"
                  className="absolute h-full w-full object-cover"
                />
                <div className="absolute h-full w-full cursor-pointer hover:bg-black/20"></div>
                <img src={videoLight} alt="videoLight" className="absolute" />
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col justify-between bg-[#E6ECF2] p-6">
                  <h2>Our Story</h2>
                  <div className="flex flex-col gap-4">
                    <p className="text-[17px] text-[#888] underline">
                      Subtitle
                    </p>
                    <div className="flex h-[250px] max-w-[450px] flex-col overflow-scroll">
                      <p className="text-[#555]">
                        {
                          "Zhong shan Kwang na Import and Export Co., LTDwasfounr) Zhong shan Kwang na Import and Export Co., LTDwasfounr) Zhong shan Kwang na Import and Export Co., LTDwasfounr) Zhong shan Kwang na Import and Export Co., LTDwasfounr) Zhong shan Kwang na Import and Export Co., LTDwasfounr) Zhong shan Kwang na Import and Export Co., LTDwasfounr) Zhong shan Kwang na Import and Export Co., LTDwasfounr) Zhong shan Kwang na Import and Export Co., LTDwasfounr) Zhong shan Kwang na Import and Export Co., LTDwasfounr) Zhong shan Kwang na Import and Export Co., LTDwasfounr) Zhong shan Kwang na Import and Export Co., LTDwasfounr) Zhong shan Kwang na Import and Export Co., LTDwasfounr) Zhong shan Kwang na Import and Export Co., LTDwasfounr) Zhong shan Kwang na Import and Export Co., LTDwasfounr)"
                        }
                      </p>
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
