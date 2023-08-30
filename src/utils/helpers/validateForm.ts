interface Rules {
  email: (value: string) => void;
  password: (value: string) => void;
  password_2: (value: string) => void;
  fullname: (value: string) => void;
}

interface ValidateProps {
  isAuth: boolean;
  values: {
    email: string;
    fullname?: string;
    password: string;
    password_2?: string;
  };
  errors: any;
}

export default ({ isAuth, values, errors }: ValidateProps) => {
  const rules: Rules = {
    email: (value) => {
      if (!value) {
        errors.email = "Введите E-Mail";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Неверный E-Mail";
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = "Введите пароль";
      } else if (
        !isAuth &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
      ) {
        errors.password = "Слишком лёгкий пароль";
      }
    },
    password_2: (value) => {
      if (!isAuth && value === "") {
        errors.password_2 = "Введите пароль";
      }
      if (!isAuth && value !== values.password) {
        errors.password_2 = "Пароли не совпадают";
      }
    },
    fullname: (value) => {
      if (!isAuth && !value) {
        errors.fullname = "Укажите свое имя и фамилию";
      }
    },
  };

  Object.keys(values).forEach((key) => {
    const rule = rules[key as keyof Rules];
    if (rule) {
      rule(values[key as keyof typeof values]!);
    }
  });
};
