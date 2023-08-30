import { withFormik } from "formik";
import RegisterForm from "../components/RegisterForm";

import validateForm from "@/utils/helpers/validateForm";

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    fullname: "",
    password: "",
    password_2: "",
  }),
  validate: (values) => {
    let errors = {};
    validateForm({ isAuth: false, values, errors });
    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    console.log("awd");

    return null;
  },

  displayName: "RegisterForm",
})(RegisterForm);
