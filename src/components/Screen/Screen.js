import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  walletSelector,
  isShowSelector,
  totalSelector,
  isShowTotalSelector,
} from "../../wallet/wallet.selectors";

const Screen = ({ wallet, isShow, isShowTotal, currency }) => {
  const walletDate = wallet
    .map((expense) => (expense = expense.date))
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  const walletByDate = Array.from(new Set(walletDate)).map((dateOperation) => {
    const walletSortByDate = wallet.filter(
      (expense) => expense.date === dateOperation
    );
    const date = {};
    date[dateOperation] = walletSortByDate;
    return date;
  });

  const wallets = walletByDate.map((expense) => {
    const key = Object.keys(expense);
    const values = Object.values(expense);
    const valueList = values.flat().map((obj) => {
      const { product, currency, amount } = obj;
      return (
        <li className="list-item" key={obj.id}>
          {product} {amount} {currency}
        </li>
      );
    });
    return (
      <div key={key}>
        <h2>{key}</h2>
        <ul className="list">{valueList}</ul>
      </div>
    );
  });
  return (
    <div className="screen">
      <ul className="list">
        {(isShowTotal && currency) || (isShow && wallets)}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    wallet: walletSelector(state),
    isShow: isShowSelector(state),
    currency: totalSelector(state),
    isShowTotal: isShowTotalSelector(state),
  };
};

Screen.propTypes = {
  wallet: PropTypes.arrayOf(PropTypes.shape).isRequired,
  isShow: PropTypes.bool.isRequired,
  isShowTotal: PropTypes.bool.isRequired,
  currency: PropTypes.string,
};

Screen.defaultProps = {
  currency: null,
};

export default connect(mapState)(Screen);
