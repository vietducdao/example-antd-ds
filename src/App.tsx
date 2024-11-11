import React from "react";
import AppRoutes from "./router";
import { BrowserRouter as Router } from "react-router-dom";
// import { ThemeProvider } from "./noUse/store/ThemeContext";

function App() {
  return (
    // <ThemeProvider>
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
    // </ThemeProvider>
  );
}

export default App;
