import { useSelector } from "react-redux";

import Header from "features/components/Header/Header";
import Content from "features/components/Content/Content";
import Footer from "features/components/Footer/Footer";

export default function Home() {
  const baseData = useSelector((state) => state.baseData.data);

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
