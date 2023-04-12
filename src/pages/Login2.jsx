import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./Login.jsx";
import { LogoutButton } from "./Logout.jsx";
import { Profile } from "./Profile.jsx";
//import logo from "./logo.svg";
import "./Login2.css";

function Login2() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App1">
      <header className="App1-header">
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton/>
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default Login2;