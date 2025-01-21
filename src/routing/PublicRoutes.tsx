import { Route, Routes } from "react-router-dom";
import LoginCard from "../pages/LoginCard";
import RegisterCard from "../pages/RegisterCard";
import { useAuth0 } from "@auth0/auth0-react";
import { setUrl } from "../auth/utils";

export const PublicRoutes = () => {
  const auth0 = useAuth0();

  const onLogin = () => {
    setUrl(location.pathname);
    auth0.loginWithRedirect();
  };

  const onLogout = () => {
    auth0.logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };
  return (
    <div>
      {/* <header>
        {!auth0.isAuthenticated && <button onClick={onLogin}> Login</button>}
        {auth0.isAuthenticated && <button onClick={onLogout}> Logout</button>}
      </header> */}

      <Routes>
        <Route path="/" element={<LoginCard />} />
        <Route path="/register" element={<RegisterCard />} />
      </Routes>
    </div>
  );
};
