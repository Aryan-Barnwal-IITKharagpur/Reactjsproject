import logo from "./logo.svg";
import "./App.css";
import Form from "./pages/form/Form";
import SignIn from "./pages/sign_in/SignIn";
import Company_dashboard from "./pages/company-dashboard/Company_dashboard"
 import Admin_dashboard  from "./pages/admin-dashboard/Admin_dashboard"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/admin_dashboard" element={<Admin_dashboard />} />
      <Route path="/company_dashboard" element={<Company_dashboard />} />
      <Route path="/form" element={<Form />} />
      {/* <Route path="/about" element={<Form />} />
      <Route path="/contact" element={<Form />} /> */}
    </Routes>
  );
}

export default App;
