import React from "react";
import Wallet from "./components/Wallet/Wallet";
import Help from "./components/Help/Help";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="wallet">
        <Help />
        <Wallet />
      </div>
    </Provider>
  );
};

export default App;
