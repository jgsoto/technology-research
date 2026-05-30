import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { LoginRHFPage } from "./pages/LoginRHFPage/LoginRHFPage";
import { RegisterRHFPage } from "./pages/RegisterRHFPage/RegisterRHFPage";
import { LoginFormikPage } from "./pages/LoginFormikPage/LoginFormikPage";
import { RegisterFormikPage } from "./pages/RegisterFormikPage/RegisterFormikPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { ComparisonPage } from "./pages/ComparisonPage/ComparisonPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-rhf" element={<LoginRHFPage />} />
        <Route path="/register-rhf" element={<RegisterRHFPage />} />
        <Route path="/login-formik" element={<LoginFormikPage />} />
        <Route path="/register-formik" element={<RegisterFormikPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
