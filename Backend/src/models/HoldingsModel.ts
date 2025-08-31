import { model } from "mongoose";
import HoldingsSchema from "../schemas/HoldingsSchema";

const HoldingsModel = model("Holdings", HoldingsSchema);

export default HoldingsModel;
