import React from "react";
import reset from "./styles/reset.css";
import globalStyle from "./styles/globalStyle.css";

import { AppRoutes } from "./routes/index.jsx";

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}
export default App;
