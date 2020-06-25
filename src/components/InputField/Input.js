import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addPurchase,
  clearPurchase,
  showPurchase,
  fetchCurrency,
} from "../../wallet/wallet.actions";

const Input = ({ addPurchase, clearPurchase, showPurchase, total }) => {
  const [comand, setComand] = useState("");

  const handleComand = (event) => {
    setComand(event.target.value);
  };

  const makeComand = (event) => {
    if (event.key === "Enter") {
      const message = event.target.value;
      const mList = message.split(" ");
      const com = mList.splice(0, 1).join("");
      switch (com) {
        case "add": {
          const newPurchase = {
            id: Math.ceil(Math.random() * 10000),
            date: mList.splice(0, 1).join(""),
            amount: +mList.splice(0, 1).join(""),
            currency: mList.splice(0, 1).join(""),
            product: mList.join(""),
          };
          addPurchase(newPurchase);
          setComand("");
          return;
        }
        case "clear": {
          const date = mList.splice(0, 1).join("");
          clearPurchase(date);
          setComand("");
          return;
        }
        case "list": {
          console.log("i");
          showPurchase();
          setComand("");
          return;
        }
        case "total": {
          const currency = mList.splice(0, 1).join("");
          total(currency);
          setComand("");
          return;
        }
        default: {
          return;
        }
      }
    }
  };

  return (
    <div className="input">
      <input
        className="command-input"
        type="text"
        value={comand}
        name="comand"
        onChange={handleComand}
        onKeyPress={makeComand}
      />
    </div>
  );
};

const mapDispatch = {
  addPurchase: addPurchase,
  clearPurchase: clearPurchase,
  showPurchase: showPurchase,
  total: fetchCurrency,
};

Input.propTypes = {
  addPurchase: PropTypes.func.isRequired,
  clearPurchase: PropTypes.func.isRequired,
  showPurchase: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Input);
