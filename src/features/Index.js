import Header from "features/components/Header/Header";
import Content from "features/components/Content/Content";
import Footer from "features/components/Footer/Footer";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Message from "./components/Message/Message";
import { useSelector } from "react-redux";

export default function Index() {
  const baseData = useSelector((state) => state.baseData.data);
  const homes = baseData.homes;

  return (
    <>
      {(homes[0] || homes[1]) && (
        <>
          <Header />
          {homes[0] && <Content />}
          {homes[1] && <ProductDetail />}
          <Footer />
        </>
      )}
      {homes[2] && <Message />}
    </>
  );
}
