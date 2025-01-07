import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { setUrl } from "../utils";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthorizationGateway = (props: any) => {
  const auth0 = useAuth0();
  const location = useLocation();
  const onLogin = () => {
    setUrl(location.pathname);
    auth0.loginWithRedirect();
  };

  const onLogout = () => {
    auth0.logout();
  };
  if (auth0.isAuthenticated) {
    return (
      <div>
        <Button onClick={onLogout}>logout</Button>
        {props.children}
      </div>
    );
  }
  return (
    <Button title="login" onClick={onLogin}>
      login
    </Button>
  );
};
