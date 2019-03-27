import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { checkLoggedIn } from "./util/session";

const renderApp = preloadedState => {
  const store = configureStore(preloadedState);
  window.state = store.getState;

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
};

(async () => renderApp(await checkLoggedIn()))();