import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import UserType from "./pages/UserType";
import SignUp from "./pages/SignUp";
import Preloader from "./components/Preloader";
import Congratulations from "./pages/Congratulations";
import RegisterWelcome from "./pages/RegisterWelcome";
import Login from "./pages/Login";
import VerifyEmailRegister from "./pages/VerifyEmailRegister";
import VerifyEmailLogin from "./pages/VerifyEmailLogin";
import ForgotPassword from "./pages/ForgotPassword";
import CreateNewPassword from "./pages/CreateNewPassword";
import PasswordChanged from "./pages/PasswordChanged";
// import Layout from "./components/Layout";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  const excludePreloaderRoutes = ["/congratulations", "/password-changed"];

  const showPreloader =
    loading && !excludePreloaderRoutes.includes(location.pathname);

  

  return (
    <>
      {showPreloader ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <Routes>
          {/* <Route element={<Layout />}> */}
          <Route path="/" element={<UserType />} />
          <Route path="/register-welcome" element={<RegisterWelcome />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-register" element={<VerifyEmailRegister />} />
          <Route path="/verify-login" element={<VerifyEmailLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/new-password" element={<CreateNewPassword />} />
          <Route path="/congratulations" element={<Congratulations />} />
          <Route path="/password-changed" element={<PasswordChanged />} />
        </Routes>
      )}
    </>
  );
}

export default App;
