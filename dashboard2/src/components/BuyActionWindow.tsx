import { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import type { GeneralContextType } from "./GeneralContext";
import "./BuyActionWindow.css";

interface BuyActionWindowPropss {
  uid: string;
}

const BuyActionWindow: React.FC<BuyActionWindowPropss> = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState<number>(1);
  const [stockPrice, setStockPrice] = useState<number>(0.0);

  const generalContext = useContext<GeneralContextType | undefined>(
    GeneralContext
  );

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    generalContext?.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext?.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
