import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthLoginCallback } from "../../../../Desktop/online-menu/src/auth/AuthLoginCallback/AuthLoginCallBack";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/auth/login/callback" element={<AuthLoginCallback />} />
          <Route path="/app/*" element={<ProtectedRoutes />} />
          <Route path="*" element={<PublicRoutes />} />
        </Routes>
      </Router>
    </div>
  );
};
export default Routing;
