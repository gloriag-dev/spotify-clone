import { Routes } from "react-router-dom";
import { AuthorizationGateway } from "../auth/AuthorizationGateway/AuthorizationGateway";

export const ProtectedRoutes = () => {
  return (
    <div>
      <AuthorizationGateway>
        <Routes>
          <div>routes</div>
        </Routes>
      </AuthorizationGateway>
    </div>
  );
};
