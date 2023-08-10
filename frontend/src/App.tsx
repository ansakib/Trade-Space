import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Suspense } from "react";
import { Spinner } from "@chakra-ui/react";

import Things from "./components/Things";
import Register from "./components/Register/RegisterSteps";
import PostAd from "./components/Ads/PostAd";

import AdDetailsPage from "./pages/AdDetails.page";
// import CategoryList from "./components/Homepage/CategoryList";
import HomePage from "./pages/Home.page";
import GetAds from "./pages/GetAds.page";
import Protected from "./pages/Protected.page";
import Login from "./pages/Login.page";

const PrivateRoutes = () => {
  const isAuth = false;
  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

const RestrictedRoutes = () => {
  const isAuth = false;
  return <>{!isAuth ? <Outlet /> : <Navigate to="/protected" />}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/things/:id/" element={<Things />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/ads/post-ad/" element={<PostAd />} />
            <Route path="/protected/" element={<Protected />} />
          </Route>

          <Route element={<RestrictedRoutes />}>
            <Route path="/register/" element={<Register />} />
            <Route path="/login/" element={<Login />} />
          </Route>

          <Route path="/ads/" element={<GetAds />} />

          <Route path="/ads/:id/" element={<AdDetailsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
