import {
  SHOW_PURCHASE,
  ADD_PURCHASE,
  CLEAR_PURCHASE,
  TOTAL_PURCHASE,
} from "./wallet.actions";

const initialState = {
  wallet: [
    {
      id: "200",
      product: "Test",
      date: "2020-03-21",
      currency: "USD",
      amount: 100,
    },
    {
      id: "210",
      product: "Test",
      date: "2020-03-20",
      currency: "PLN",
      amount: 100,
    },
    {
      id: "211",
      product: "Test",
      date: "2020-03-22",
      currency: "PLN",
      amount: 100,
    },
    {
      id: "290",
      product: "Test",
      date: "2020-04-22",
      currency: "PLN",
      amount: 100,
    },
    {
      id: "100",
      product: "Test",
      date: "2020-02-21",
      currency: "USD",
      amount: 100,
    },
    {
      id: "110",
      product: "Test",
      date: "2020-02-20",
      currency: "PLN",
      amount: 100,
    },
    {
      id: "111",
      product: "Test",
      date: "2020-02-22",
      currency: "PLN",
      amount: 100,
    },
  ],
  isShow: false,
  isShowTotal: false,
  currency: null,
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PURCHASE: {
      console.log("r");
      return {
        ...state,
        isShow: true,
        isShowTotal: false,
      };
    }
    case ADD_PURCHASE: {
      const updateWallet = state.wallet.concat(action.payload.dataPurchase);
      return {
        ...state,
        isShow: false,
        isShowTotal: false,
        wallet: updateWallet,
        currency: null,
      };
    }
    case CLEAR_PURCHASE: {
      const updateWallet = state.wallet.filter(
        (expense) => expense.date !== action.payload.date
      );
      return {
        ...state,
        isShow: true,
        isShowTotal: false,
        wallet: updateWallet,
      };
    }
    case TOTAL_PURCHASE: {
      const { rates } = action.payload.data;
      rates["EUR"] = 1;
      const total = {
        currency: action.payload.currency,
        rates,
      };
      return {
        ...state,
        currency: total,
        isShowTotal: true,
      };
    }
    default:
      return state;
  }
};

export default walletReducer;
