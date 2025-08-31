"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const PositionsModel_1 = __importDefault(require("./models/PositionsModel"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
mongoose_1.default
    .connect(process.env.MONG_URI || "")
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
// inserting dummy holdings data
// app.get("/addHoldings", async (req, res) => {
//   try {
//     let tempHoldings = [
//       {
//         name: "BHARTIARTL",
//         qty: 2,
//         avg: 538.05,
//         price: 541.15,
//         net: "+0.58%",
//         day: "+2.99%",
//       },
//       {
//         name: "HDFCBANK",
//         qty: 2,
//         avg: 1383.4,
//         price: 1522.35,
//         net: "+10.04%",
//         day: "+0.11%",
//       },
//       {
//         name: "HINDUNILVR",
//         qty: 1,
//         avg: 2335.85,
//         price: 2417.4,
//         net: "+3.49%",
//         day: "+0.21%",
//       },
//       {
//         name: "INFY",
//         qty: 1,
//         avg: 1350.5,
//         price: 1555.45,
//         net: "+15.18%",
//         day: "-1.60%",
//         isLoss: true,
//       },
//       {
//         name: "ITC",
//         qty: 5,
//         avg: 202.0,
//         price: 207.9,
//         net: "+2.92%",
//         day: "+0.80%",
//       },
//       {
//         name: "KPITTECH",
//         qty: 5,
//         avg: 250.3,
//         price: 266.45,
//         net: "+6.45%",
//         day: "+3.54%",
//       },
//       {
//         name: "M&M",
//         qty: 2,
//         avg: 809.9,
//         price: 779.8,
//         net: "-3.72%",
//         day: "-0.01%",
//         isLoss: true,
//       },
//       {
//         name: "RELIANCE",
//         qty: 1,
//         avg: 2193.7,
//         price: 2112.4,
//         net: "-3.71%",
//         day: "+1.44%",
//       },
//       {
//         name: "SBIN",
//         qty: 4,
//         avg: 324.35,
//         price: 430.2,
//         net: "+32.63%",
//         day: "-0.34%",
//         isLoss: true,
//       },
//       {
//         name: "SGBMAY29",
//         qty: 2,
//         avg: 4727.0,
//         price: 4719.0,
//         net: "-0.17%",
//         day: "+0.15%",
//       },
//       {
//         name: "TATAPOWER",
//         qty: 5,
//         avg: 104.2,
//         price: 124.15,
//         net: "+19.15%",
//         day: "-0.24%",
//         isLoss: true,
//       },
//       {
//         name: "TCS",
//         qty: 1,
//         avg: 3041.7,
//         price: 3194.8,
//         net: "+5.03%",
//         day: "-0.25%",
//         isLoss: true,
//       },
//       {
//         name: "WIPRO",
//         qty: 4,
//         avg: 489.3,
//         price: 577.75,
//         net: "+18.08%",
//         day: "+0.32%",
//       },
//     ];
//     await Promise.all(
//       tempHoldings.map((item) => {
//         const newHolding = new HoldingsModel(item);
//         return newHolding.save();
//       })
//     );
//     res.json({ message: "Dummy holdings inserted successfully!" });
//   } catch (error) {
//     console.error("Error inserting holdings:", error);
//     res.status(500).json({ error: "Failed to insert holdings" });
//   }
// });
app.get("/addPositions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let tempPositions = [
            {
                product: "CNC",
                name: "EVEREADY",
                qty: 2,
                avg: 316.27,
                price: 312.35,
                net: "+0.58%",
                day: "-1.24%",
                isLoss: true,
            },
            {
                product: "CNC",
                name: "JUBLFOOD",
                qty: 1,
                avg: 3124.75,
                price: 3082.65,
                net: "+10.04%",
                day: "-1.35%",
                isLoss: true,
            },
        ];
        yield Promise.all(tempPositions.map((item) => {
            const newPosition = new PositionsModel_1.default(item);
            return newPosition.save();
        }));
        res.json({ message: "Dummy positions inserted successfully!" });
    }
    catch (error) {
        console.error("Error inserting positions:", error);
        res.status(500).json({ error: "Failed to insert positions" });
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
