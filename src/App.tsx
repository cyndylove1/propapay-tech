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
import BuyerDashboard from "./layout/Buyer";
import DashBoard from "./pages/BuyerPages/Dashboard";
import Properties from "./pages/BuyerPages/Properties";
import PersonalInformation from "./pages/PersonalInformation";
import NextOfKin from "./pages/NextOfKin";
import BankDetails from "./pages/BankDetails";
import SuccessInformation from "./pages/SuccesInfomation";
import Favourites from "./pages/BuyerPages/Favourites";
import Assets from "./pages/BuyerPages/Assets";
import Bookings from "./pages/BuyerPages/Bookings";
import Transactions from "./pages/BuyerPages/Transaction";
import Wallet from "./pages/BuyerPages/Wallet";
import WalletTransactions from "./pages/BuyerPages/WalletTransaction";
import Insight from "./pages/BuyerPages/Insights";
import Instalment from "./pages/BuyerPages/Instalment";
import Settings from "./pages/BuyerPages/Settings";
import ProfileInformation from "./pages/BuyerPages/ProfileInformation";
import SecuritySettings from "./pages/BuyerPages/SecuritySettings";
import NotificationSettings from "./pages/BuyerPages/NotificationSettings";
import Preference from "./pages/BuyerPages/Preference";
import HelpCenter from "./pages/BuyerPages/HelpCenter";
import BuyLand from "./pages/BuyerPages/BuyLand";
import FavouriteLists from "./pages/BuyerPages/FavouriteLists";
import AssetLists from "./pages/BuyerPages/AssetLists";
import PropertiesLists from "./pages/BuyerPages/PropertiesList";
import PropertiesView from "./pages/BuyerPages/PropertiesView/PropertiesView";
import Document from "./pages/BuyerPages/Document";
import Integration from "./pages/BuyerPages/Integration";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  const excludePreloaderRoutes = ["/buyer-dashboard"];

  const showPreloader =
    loading && !excludePreloaderRoutes.includes(location.pathname);

  return (
    <>
      {showPreloader ? (
        <Preloader
          onComplete={() => setLoading(false)}
          className="flex h-screen items-center justify-center"
        />
      ) : (
        <Routes>
          <Route path="/user-type" element={<UserType />} />
          <Route path="/" element={<RegisterWelcome />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-register" element={<VerifyEmailRegister />} />
          <Route path="/verify-login" element={<VerifyEmailLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/new-password" element={<CreateNewPassword />} />
          <Route path="/congratulations" element={<Congratulations />} />
          <Route path="/password-changed" element={<PasswordChanged />} />
          <Route
            path="/personal-information"
            element={<PersonalInformation />}
          />
          <Route path="/next-kin" element={<NextOfKin />} />
          <Route path="/bank-details" element={<BankDetails />} />
          <Route path="/success-info" element={<SuccessInformation />} />

          <Route element={<BuyerDashboard />}>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/lists" element={<PropertiesLists />} />
            <Route path="/properties/view" element={<PropertiesView />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/favourites/lists" element={<FavouriteLists />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/assets/lists" element={<AssetLists />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route
              path="/wallet-transaction"
              element={<WalletTransactions />}
            />
            <Route path="/document" element={<Document />} />
            <Route path="/insight" element={<Insight />} />
            <Route path="/flex-payment" element={<Instalment />} />
            <Route path="/settings" element={<Settings />}>
              <Route
                path="/settings/profile"
                element={<ProfileInformation />}
              />
              <Route path="/settings/security" element={<SecuritySettings />} />
              <Route
                path="/settings/notifications"
                element={<NotificationSettings />}
              />
              <Route path="/settings/preference" element={<Preference />} />
            </Route>
            <Route path="/integration" element={<Integration />} />
            <Route path="/help-center" element={<HelpCenter />}>
              <Route path="/help-center/buy" element={<BuyLand />} />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
