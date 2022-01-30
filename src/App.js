import RoomHolder from "components/RoomHolder";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "store";
import globalStyle from "utils/global-style.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchProductInfo() {
      const response = await fetch(
        "https://cdn.ggumim.co.kr/test/image_product_link.json"
      );
      const productInfo = await response.json();

      dispatch(productActions.fetchInfo(productInfo.productList));
    }

    fetchProductInfo();
  }, []);

  return <RoomHolder />;
};

export default App;
