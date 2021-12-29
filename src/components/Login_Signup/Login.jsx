import React from "react";
import styled from "styled-components";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ErrorHelper } from "../Global/ErrorHelper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { postAsyncLogin } from "../../features/users/loginSlice";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { showSuccessToast } from "../../utils/tools";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { success, loading, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "zabihnezami888@gmail.com",
      password: "nokia7plus",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("ایمیل الزامی میباشد")
        .email("ایمیل معتبر وارد کنید"),
      password: Yup.string().required("رمز عبور الزامی میباشد"),
    }),
    onSubmit: (values) => {
      submitForm(values);
    },
  });
  const submitForm = (values) => {
    dispatch(postAsyncLogin(values));
  };
  return (
    <Wrap>
      <Box
        component="form"
        style={{ direction: "ltr" }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          variant="standard"
          fullWidth
          className="input"
          label="ایمیل"
          name="email"
          type="email"
          {...formik.getFieldProps("email")}
          error={formik.touched.email && formik.errors.password}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorHelper>{formik.errors.email}</ErrorHelper>
        ) : null}
        <FormControl variant="standard" fullWidth className="input">
          <InputLabel error={formik.touched.password && formik.errors.password}>
            رمز عبور
          </InputLabel>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            {...formik.getFieldProps("password")}
            error={formik.touched.password && formik.errors.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorHelper>{formik.errors.password}</ErrorHelper>
          ) : null}
        </FormControl>
        <Button
          variant="contained"
          fullWidth
          type="submit"
          disabled={formik.errors.email || formik.errors.password}
        >
          ورود
        </Button>
        <Link to="/signUp">هنوز ثبت نام نکرده اید</Link>
        {success ? showSuccessToast("ورود با موفقیت انجام شد") : null}
        {success ? navigate("/") : null}
        {loading ? <CircularProgress className="progress" /> : null}
        {error ? <ErrorHelper>{error}</ErrorHelper> : null}
      </Box>
    </Wrap>
  );
};

export default Login;

// =================== Style ================= //
const Wrap = styled.div`
  max-width: 350px;
  margin: 2rem auto;
  margin-bottom: 17rem;

  .input {
    margin-bottom: 0.5rem;
  }

  button {
    font-size: 18px;
  }

  .progress {
    display: block;
    margin: auto;
  }
`;
