import { Form, Input } from "antd";
import {
  MailOutlined,
  UserOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import validateField from "@/utils/helpers/validateField";
import { Button, Block } from "../../../components";

const success = false;

interface RegisterFormProps {
  values: {
    email: string;
    fullname: string;
    password: string;
    password_2: string;
  };
  touched: any;
  errors: any;
  handleChange: any;
  handleBlur: any;
  handleSubmit: any;
  isValid: any;
  isSubmitting: any;
}

const RegisterForm = (props: RegisterFormProps) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
  } = props;

  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form onFinish={handleSubmit} className="login-form">
            <Form.Item
              validateStatus={validateField("email", touched, errors)}
              help={!touched.email ? "" : errors.email}
              hasFeedback
            >
              <Input
                id="email"
                prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                size="large"
                placeholder="E-Mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField("fullname", touched, errors)}
              help={!touched.fullname ? "" : errors.fullname}
              hasFeedback
            >
              <Input
                id="fullname"
                prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                size="large"
                placeholder="Ваше имя и фамилия"
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField("password", touched, errors)}
              help={!touched.password ? "" : errors.password}
              hasFeedback
            >
              <Input.Password
                id="password"
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                size="large"
                placeholder="Пароль"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField("password_2", touched, errors)}
              help={!touched.password_2 ? "" : errors.password_2}
              hasFeedback
            >
              <Input.Password
                id="password_2"
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                size="large"
                type="password"
                placeholder="Повторите пароль"
                value={values.password_2}
                onChange={handleChange}
                onBlur={handleBlur}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item>
              {isSubmitting && !isValid && <span>Ошибка!</span>}
              <Button
                disabled={isSubmitting}
                onClick={handleSubmit}
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
