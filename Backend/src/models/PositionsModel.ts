import { model } from "mongoose";
import PositionsSchema from "../schemas/PositionsSchema";

const PositionsModel = model("Positions", PositionsSchema);

export default PositionsModel;
