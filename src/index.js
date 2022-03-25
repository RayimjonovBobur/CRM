import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ConfigProvider } from "antd";
import ruRu from "antd/lib/locale/ru_RU";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./store";

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ruRu}>
      <Provider store={store}>
        <PersistGate loading={"... loading"} persistor={persistor}>
          <Router>
            <App />
          </Router>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
