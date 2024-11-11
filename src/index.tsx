import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
// import { UserProvider } from "./noUse/store/UserContext";
// import { ThemeProvider } from "./noUse/store/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <ThemeProvider>
  //   <UserProvider>
  <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
    <App />
  </ConfigProvider>
  //   </UserProvider>
  // </ThemeProvider>
);

// Đo lường hiệu suất
reportWebVitals();
