import { func } from "prop-types";

export const ADD_PURCHASE = "ADD_PURCHASE";
export const CLEAR_PURCHASE = "CLEAR_PURCHASE";
export const SHOW_PURCHASE = "SHOW_PURCHASE";
export const TOTAL_PURCHASE = "TOTAL_PURCHASE";

export const addPurchase = (dataPurchase) => {
  return {
    type: ADD_PURCHASE,
    payload: {
      dataPurchase,
    },
  };
};

export const clearPurchase = (date) => {
  return {
    type: CLEAR_PURCHASE,
    payload: {
      date,
    },
  };
};

export const totalPurchase = (currency, data) => {
  return {
    type: TOTAL_PURCHASE,
    payload: {
      currency,
      data,
    },
  };
};

export const showPurchase = () => {
  return {
    type: SHOW_PURCHASE,
  };
};

export const fetchCurrency = (currency) => {
  return function (dispatch) {
    fetch(
      "http://data.fixer.io/api/latest?access_key=93263469677886fbff86a7028900ca55&symbols=USD,AUD,CAD,PLN,MXN&format=1"
    )
      .then((response) => response.json())
      .then((data) => dispatch(totalPurchase(currency, data)));
  };
};
