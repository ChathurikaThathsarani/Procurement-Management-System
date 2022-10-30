import axios from "axios";

import { autheader, api_base_url, getLoginUser } from "./utils";

const getOrders = async () => {
  try {
    let userdata = await getLoginUser();
    let header = await autheader();

    const { data } = await axios.get(
      api_base_url + "orders/" + userdata._id,
      header
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Orders retrival failed");
  }
};

const getDraftOrders = async () => {
  try {
    let userdata = await getLoginUser();
    let header = await autheader();

    const { data } = await axios.get(
      api_base_url + "orders/draft/" + userdata._id,
      header
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Orders retrival failed");
  }
};
const deleteDraftOrder = async (id) => {
  try {
    let header = await autheader();

    const { data } = await axios.delete(
      api_base_url + "order/draft/delete/" + id,
      header
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Order deletion failed");
  }
};
const getOrder = async (id) => {
  try {
    let header = await autheader();

    const { data } = await axios.get(api_base_url + "order/" + id, header);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Order retrival failed");
  }
};
const getProductForOrder = async (id) => {
  try {
    let header = await autheader();

    const { data } = await axios.get(
      api_base_url + "orders/draft/products/" + id,
      header
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Products retrival failed");
  }
};

const approveOrder = async (id, status) => {
  try {
    let header = await autheader();

    const { data } = await axios.put(
      api_base_url + "order/approved/" + id,
      { status },
      header
    );
    console.log("her");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Order approval failed");
  }
};
const draftOrderToPending = async (orderid, productName, productQty) => {
  try {
    let header = await autheader();

    const { data } = await axios.put(
      api_base_url + "order/pending/" + orderid,
      { productName, productQty },
      header
    );
    console.log("her");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Operation failed");
  }
};

const orderservice = {
  getOrders,
  getDraftOrders,
  deleteDraftOrder,
  getOrder,
  approveOrder,
  draftOrderToPending,
  getProductForOrder,
};

export default orderservice;
