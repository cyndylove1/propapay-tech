import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import { useState, useEffect } from "react";
import UserType from "./pages/Auth/UserType";
import SignUp from "./pages/Auth/SignUp";
import Preloader from "./components/Preloader";
import Congratulations from "./pages/Auth/Congratulations";
import RegisterWelcome from "./pages/Auth/RegisterWelcome";
import Login from "./pages/Auth/Login";
import VerifyEmailRegister from "./pages/Auth/VerifyEmailRegister";
import VerifyEmailLogin from "./pages/Auth/VerifyEmailLogin";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import CreateNewPassword from "./pages/Auth/CreateNewPassword";
import PasswordChanged from "./pages/Auth/PasswordChanged";
import BuyerDashboard from "./layout/Buyer";
import DashBoard from "./pages/BuyerPages/Dashboard";
import Properties from "./pages/BuyerPages/Properties";
import PersonalInformation from "./pages/Auth/PersonalInformation";
import NextOfKin from "./pages/Auth/NextOfKin";
import BankDetails from "./pages/Auth/BankDetails";
import SuccessInformation from "./pages/Auth/SuccesInfomation";
import Favourites from "./pages/BuyerPages/Favourites";
import Assets from "./pages/BuyerPages/Assets";
import Transactions from "./pages/BuyerPages/Transaction";
import Wallet from "./pages/BuyerPages/Wallet";
import Insight from "./pages/BuyerPages/Insights";
import Settings from "./pages/BuyerPages/Settings";
import HelpCenter from "./pages/BuyerPages/HelpCenter";
import FavouriteLists from "./pages/BuyerPages/FavouriteLists";
import AssetLists from "./pages/BuyerPages/AssetLists";
import PropertiesLists from "./pages/BuyerPages/PropertiesList";
import PropertyDetails from "./pages/BuyerPages/PropertyDetails";
import Document from "./pages/BuyerPages/Document";
import Integration from "./pages/BuyerPages/Integration";
import FavouriteView from "./pages/BuyerPages/FavouriteView.tsx";
import ReminderEdit from "./components/PaymentReminder/ReminderEdit.tsx";
import FlexPayment from "./pages/BuyerPages/FlexPayment/index.tsx";
import DashboardLayout from "./layout/Buyer/DasboardLayout.tsx";


function App() {
  const [scheduleOpen, setScheduleOpen] = useState<boolean>(false);
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
          className="flex items-center justify-center h-screen"
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
          <Route
            path="/payment"
            element={
              <ReminderEdit
                isOpenMenu={scheduleOpen}
                onClose={() => setScheduleOpen(false)}
              />
            }
          />

          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/lists" element={<PropertiesLists />} />
            <Route path="/properties/view" element={<PropertyDetails />} />
            <Route path="/favourite" element={<Favourites />} />
            <Route path="/favourite/lists" element={<FavouriteLists />} />
            <Route path="/favourite/view" element={<FavouriteView />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/assets/lists" element={<AssetLists />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/document" element={<Document />} />
            <Route path="/insight" element={<Insight />} />
            <Route path="/flex-payment" element={<FlexPayment/>} />
            <Route path="/settings" element={<Settings />}/>
            <Route path="/integration" element={<Integration />} />
            <Route path="/help-center" element={<HelpCenter />}>
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
