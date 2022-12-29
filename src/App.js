import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormValidation from "./pages/FormValidation";
import Layout from "./pages/Layout";
import SubmitFormWithoutAPI from "./pages/SubmitFormWithoutAPI";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route index element={<Layout />} />
          <Route
            path="/SubmitFormWithoutAPI"
            element={<SubmitFormWithoutAPI />}
          />
          <Route path="/formValidation" element={<FormValidation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
