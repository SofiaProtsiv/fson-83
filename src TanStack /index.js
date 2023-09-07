import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";
import { StateContext } from "./context/StateContext";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient({
  defaultOptions: {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  },
});

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <StateContext>
          <App />
        </StateContext>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
);
