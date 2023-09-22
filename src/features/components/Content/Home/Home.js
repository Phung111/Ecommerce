import { useSelector } from "react-redux";

import Advertisement from "features/components/Content/Home/Advertisement";
import SoySauce from "features/components/Content/Home/SoySauce";
import HotProducts from "features/components/Content/Home/HotProducts";
import OyserSauce from "features/components/Content/Home/OyserSauce";
import OurStory from "features/components/Content/Home/OurStory";
import Supplier from "features/components/Footer/Supplier";

export default function Home() {
  const baseData = useSelector((state) => state.baseData.data);

  return (
    <>
      <Advertisement />
      <SoySauce />
      <HotProducts />
      <OyserSauce />
      <OurStory />
      <Supplier />
    </>
  );
}
