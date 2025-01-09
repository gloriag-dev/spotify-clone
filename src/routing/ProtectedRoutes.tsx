import { Route, Routes } from "react-router-dom";
import { AuthorizationGateway } from "../auth/AuthorizationGateway/AuthorizationGateway";
import App from "@/App";

export const ProtectedRoutes = () => {
  return (
    <div>
      <AuthorizationGateway>
        <Routes>
          <Route path="/app/*" element={<App />} />
        </Routes>
      </AuthorizationGateway>
    </div>
  );
};

export default ProtectedRoutes;
