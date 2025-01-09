import { Route } from "react-router-dom";
import { AuthLoginCallback } from "../../../../Desktop/online-menu/src/auth/AuthLoginCallback/AuthLoginCallBack";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";

const Routing = () => {
  return (
    <div>
      <Route path="/auth/login/callback" element={<AuthLoginCallback />} />
      <Route path="/app/*" element={<ProtectedRoutes />} />
      <Route path="*" element={<PublicRoutes />} />
    </div>
  );
};
export default Routing;
