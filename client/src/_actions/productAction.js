import { ADD_PRODUCT, RECENT_PRODUCT } from "./type";
import { addProdRequest } from "../api/productApi";
import { baseRequest } from "../api/common";

export function addProduct(dataToSubmit) {
  const request = addProdRequest()
    .post("/api/products", dataToSubmit)
    .then((response) => {
      console.log("res", response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err.response.data;
    });
  return {
    type: ADD_PRODUCT,
    payload: request,
  };
}

export function getRecentProduct(dataToSubmit) {
  const params = { lastId: dataToSubmit };
  const request = baseRequest({ params })
    .get(`/api/products/recent`)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
      return err.response.data;
    });
  return {
    type: RECENT_PRODUCT,
    payload: request,
  };
}
