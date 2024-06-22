import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Category from "./components/Category.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import NewsDetail from "./components/NewsDetail.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "article/:category",
    element: <Category />,
  },
  {
    path: "article/:category/:id",
    element: <NewsDetail />
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
