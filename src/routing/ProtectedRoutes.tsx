import { Route, Routes } from "react-router-dom";
import { AuthorizationGateway } from "../auth/AuthorizationGateway/AuthorizationGateway";
import App from "@/App";
import { Home } from "@/pages/Home";

export const ProtectedRoutes = () => {
  return (
    <div>
      <AuthorizationGateway>
        <Routes>
          <Route path="/app/home" element={<App />} />
        </Routes>
      </AuthorizationGateway>
    </div>
  );
};

export default ProtectedRoutes;
