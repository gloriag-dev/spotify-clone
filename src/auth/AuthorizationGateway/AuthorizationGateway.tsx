import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import LoginCard from "@/custom/LoginCard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthorizationGateway = (props: any) => {
  const auth0 = useAuth0();
  // const location = useLocation();
  // const onLogin = () => {
  //   setUrl(location.pathname);
  //   auth0.loginWithRedirect();
  // };

  // const onLogout = () => {
  //   auth0.logout();
  // };
  if (auth0.isAuthenticated) {
    console.log("Authenticated", auth0.isAuthenticated);
    return <div>{props.children}</div>;
  }
  console.log("Not authenticated", auth0.isAuthenticated);
  return (
    <Routes>
      <Route path="/" element={<LoginCard />} />
    </Routes>
  );
};
