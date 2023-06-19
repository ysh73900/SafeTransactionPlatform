import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import store from "./store/store";

import "./index.css";
import { SnackbarProvider } from "notistack";
import { ThemeProvider, createTheme } from "@mui/material";

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnectV1,
} from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

const muiTheme = createTheme({});
// const smartWalletConfig = {
//   factoryAddress: "",
//   gasless: true,
//   thirdwebApiKey: process.env.REACT_APP_THIRDWEB_API_KEY,
//   personalWallets: [metamaskWallet(), coinbaseWallet(), walletConnectV1()],
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThirdwebProvider
      activeChain={Sepolia}
      supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnectV1()]}
    >
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
          marginTop: "70px",
        }}
        autoHideDuration={2500}
      >
        <ThemeProvider theme={muiTheme}>
          <App />
        </ThemeProvider>
      </SnackbarProvider>
    </ThirdwebProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
