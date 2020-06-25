export const walletSelector = (state) => {
  return state.wallet.wallet;
};

export const isShowSelector = (state) => {
  return state.wallet.isShow;
};

export const totalSelector = (state) => {
  const currency = state.wallet.currency;

  const wallet = walletSelector(state);
  const result = wallet.reduce(function (acc, transaction) {
    const { currency, amount } = transaction;

    if (acc[currency] === undefined) {
      acc[currency] = 0;
    }
    const newTotal = acc[currency] + amount;

    acc[currency] = newTotal;
    return acc;
  }, {});

  let totalSum = 0;
  if (currency) {
    for (let key in result) {
      if (key === currency.currency) {
        totalSum += result[key];
      } else {
        totalSum =
          totalSum +
          result[key] *
            (currency.rates[currency.currency] / currency.rates[key]);
      }
    }
  }
  totalSum = `${totalSum.toFixed(2)} ${currency ? currency.currency : ""}`;

  return totalSum;
};

export const isShowTotalSelector = (state) => {
  return state.wallet.isShowTotal;
};
