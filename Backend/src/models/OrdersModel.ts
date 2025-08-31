import { model } from "mongoose";
import OrdersSchema from "../schemas/OrdersSchema";

const OrdersModel = model("Orders", OrdersSchema);

export default OrdersModel;
