import { withFormik } from "formik";

import LoginForm from "../components/LoginForm";

import validateForm from "@/utils/helpers/validateForm";

const LoginFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validate: (values) => {
    let errors = {};

    validateForm({ isAuth: true, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    console.log("awd");
  },
  displayName: "LoginForm",
})(LoginForm);

export default LoginFormContainer;
