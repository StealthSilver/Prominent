import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

export interface GeneralContextType {
  openBuyWindow: (uid: string) => void;
  closeBuyWindow: () => void;
}

const GeneralContext = React.createContext<GeneralContextType | undefined>(
  undefined
);

export const GeneralContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid: string) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
