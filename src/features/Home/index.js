import { useSelector } from "react-redux";
import InitAllData from "../baseData/InitAllData";
import Utils from "../../utils/Utils";


export default function Home() {
  const baseData = useSelector((state) => state.baseData.data);
  const webs = baseData.webs;
  return (
    <>
      <InitAllData />
      <Utils />
    </>
  );
}
