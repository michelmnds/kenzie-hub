import React from "react";
import reset from "./styles/reset.css";
import globalStyle from "./styles/globalStyle.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AppRoutes } from "./routes/index.jsx";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <AppRoutes />
    </div>
  );
}
export default App;
