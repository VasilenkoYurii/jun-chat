import { useLocation } from "react-router";

import LoginForm from "../../modules/LoginForm/components/LoginForm";
import RegisterForm from "../../modules/RegisterForm/components/RegisterForm";

import "./AuthPage.scss";

const AuthPage = () => {
  const location = useLocation();

  return (
    <section className="auth">
      <div className="auth__content">
        {location.pathname === "/" && <LoginForm />}
        {location.pathname === "/signup" && <RegisterForm />}
      </div>
    </section>
  );
};

export default AuthPage;
