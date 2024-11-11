import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/loginpage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default AppRoutes;
