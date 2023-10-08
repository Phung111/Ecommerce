import Advertisement from "features/components/Content/Home/Advertisement";
import SoySauce from "features/components/Content/Home/SoySauce";
import HotProducts from "features/components/Content/Home/HotProducts";
import OyserSauce from "features/components/Content/Home/OyserSauce";
import OurStory from "features/components/Content/Home/OurStory";
import Supplier from "features/components/Footer/Supplier";

export default function Home() {
  return (
    <>
      <Advertisement />
      <SoySauce />
      <HotProducts />
      <OyserSauce />
      <OurStory />
      <div className="mx-auto max-w-[95%] py-6">
        <Supplier />
      </div>
    </>
  );
}
