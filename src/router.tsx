import { Route, Routes } from "react-router-dom";
import FormAdd from "./pages/form/Form";
import Columns from "./pages/column/Column";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/form" element={<FormAdd />} />
      <Route path="/column" element={<Columns />} />
    </Routes>
  );
}

export default AppRoutes;
