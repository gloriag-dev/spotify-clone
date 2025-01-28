import { Route, Routes } from "react-router-dom";
import LoginCard from "@/pages/LoginCard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthorizationGateway = (props: any) => {
  if (1 === 1) {
    //console.log("Authenticated", auth0.isAuthenticated);
    return <>{props.children}</>;
  }
  //console.log("Not authenticated", auth0.isAuthenticated);
  return (
    <Routes>
      <Route path="/" element={<LoginCard />} />
    </Routes>
  );
};
