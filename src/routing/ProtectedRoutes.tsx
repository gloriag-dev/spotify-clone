import { Route, Routes } from "react-router-dom";
import { AuthorizationGateway } from "../auth/AuthorizationGateway/AuthorizationGateway";
import App from "@/App";

import Navbar from "@/common/Navbar";
import Player from "@/common/Player";

export const ProtectedRoutes = () => {
  return (
    <AuthorizationGateway>
      <Navbar />
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Player />
    </AuthorizationGateway>
  );
};

export default ProtectedRoutes;
