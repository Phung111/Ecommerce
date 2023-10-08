import Home from "features/components/Content/Home/Home";
import Products from "features/components/Content/Products/Products";
import AboutUs from "features/components/Content/AboutUs/AboutUs";
import Review from "features/components/Content/Review/Review";
import Menu from "../Header/Menu/Menu";
import { useSelector } from "react-redux";

export default function Content() {
  const baseData = useSelector((state) => state.baseData.data);
  const tabs = baseData.tabs;
  return (
    <>
      <Menu />
      {tabs[0] && <Home />}
      {tabs[1] && <Products />}
      {tabs[2] && <AboutUs />}
      {tabs[3] && <Review />}
    </>
  );
}
