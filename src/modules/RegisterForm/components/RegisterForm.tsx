import { Form, Input } from "antd";
import {
  MailOutlined,
  LockOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { Button, Block } from "../../../components";

const success = false;

const RegisterForm = () => {
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form
            // onFinish={handleSubmit}
            className="login-form"
          >
            <Form.Item
              // validateStatus={validateField("email", touched, errors)}
              // help={!touched.email ? "" : errors.email}
              hasFeedback
            >
              <Input
                id="email"
                prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                size="large"
                placeholder="E-Mail"
                // value={values.email}
                // onChange={handleChange}
                // onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              // validateStatus={validateField("email", touched, errors)}
              // help={!touched.email ? "" : errors.email}
              hasFeedback
            >
              <Input
                id="name"
                prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                size="large"
                placeholder="E-Mail"
                // value={values.email}
                // onChange={handleChange}
                // onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              // validateStatus={validateField("email", touched, errors)}
              // help={!touched.email ? "" : errors.email}
              hasFeedback
            >
              <Input
                id="password"
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                size="large"
                placeholder="E-Mail"
                // value={values.email}
                // onChange={handleChange}
                // onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              // validateStatus={validateField("password", touched, errors)}
              // help={!touched.password ? "" : errors.password}
              hasFeedback
            >
              <Input
                id="password2"
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                size="large"
                type="password"
                placeholder="Пароль"
                // value={values.password}
                // onChange={handleChange}
                // onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              {/* {isSubmitting && !isValid && <span>Ошибка!</span>} */}
              <Button
                // disabled={isSubmitting}
                // onClick={handleSubmit}
                type="primary"
                size="large"
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <InfoCircleOutlined />
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
