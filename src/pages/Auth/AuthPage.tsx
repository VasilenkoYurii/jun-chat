import { Button, Block } from "../../components";

import "./AuthPage.scss";

const AuthPage = () => {
  return (
    <section className="auth">
      <Block>
        <Button type="primary" size="large">
          Hello world
        </Button>
      </Block>
    </section>
  );
};

export default AuthPage;
