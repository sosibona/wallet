import React from "react";

const Help = () => {
  return (
    <div className="help">
      <h2>Help</h2>
      <p className="help-comand">
        <span className="command">add 2020-06-25 12 USD Jogurt</span> - adds
        expense entry to the list of user expenses.
      </p>
      <p className="help-comand">
        <span className="command">list</span> - shows the list of all expenses
        sorted by date{" "}
      </p>
      <p className="help-comand">
        <span className="command">clear 2017-04-25</span> - removes all expenses
        for specified date
      </p>
      <p className="help-comand">
        <span className="command">total PLN</span> - calculate the total amount
        of money spent and present it to user in specified currency
      </p>
      <a href="https://www.easymarkets.com/int/learn-centre/discover-trading/currency-acronyms-and-abbreviations/">
        Currency Acronyms and Abbreviations
      </a>
    </div>
  );
};

export default Help;
