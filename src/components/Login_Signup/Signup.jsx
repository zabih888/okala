import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Alert,
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ErrorHelper } from "../Global/ErrorHelper.js";
import { useDispatch, useSelector } from "react-redux";
import { postAsyncRegister } from "../../features/users/registerSlice.js";
import { showSuccessToast } from "../../utils/tools.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const { success, loading, error } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("نام کاربری الزامی است"),
      email: Yup.string()
        .email("ایمیل معتبر وارد کنید")
        .required("ایمیل الزامی است"),
      phoneNumber: Yup.number().required("تلفن الزامی است"),
      password: Yup.string().required("رمز عبور الزامی است"),
    }),
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  const submitForm = (values) => {
    dispatch(postAsyncRegister(values));
  };

  return (
    <Wrap>
      <Box
        style={{ direction: "ltr" }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          variant="standard"
          label="نام"
          fullWidth
          className="input"
          name="name"
          type="text"
          {...formik.getFieldProps("name")}
          error={formik.touched.name && formik.errors.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorHelper>{formik.errors.name}</ErrorHelper>
        ) : null}
        <TextField
          variant="standard"
          label="ایمیل"
          fullWidth
          className="input"
          type="email"
          name="email"
          {...formik.getFieldProps("email")}
          error={formik.touched.email && formik.errors.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorHelper>{formik.errors.email}</ErrorHelper>
        ) : null}
        <TextField
          variant="standard"
          label="تلفن"
          fullWidth
          className="input"
          type="tel"
          name="phoneNumber"
          {...formik.getFieldProps("phoneNumber")}
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <ErrorHelper>{formik.errors.phoneNumber}</ErrorHelper>
        ) : null}
        <FormControl variant="standard" fullWidth className="input">
          <InputLabel
            htmlFor="standard-adornment-password"
            error={formik.touched.password && formik.errors.password}
          >
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
        </FormControl>
        {formik.touched.password && formik.errors.password ? (
          <ErrorHelper>{formik.errors.password}</ErrorHelper>
        ) : null}
        <Button
          variant="contained"
          fullWidth
          type="submit"
          disabled={
            formik.errors.name ||
            formik.errors.email ||
            formik.errors.phoneNumber ||
            formik.errors.password
          }
        >
          ثبت نام
        </Button>
        <Link to="/login">قبلا ثبت نام کرده اید</Link>
        {success ? navigate("/") : null}
        {success ? showSuccessToast("ثبت نام با موفقیت انجام شد") : null}
        {loading ? <CircularProgress className="progress" /> : null}
        {error ? <ErrorHelper color="error">{error}</ErrorHelper> : null}
      </Box>
    </Wrap>
  );
};

export default Signup;

// =============== Style ================ //
const Wrap = styled.div`
  max-width: 350px;
  margin: 2rem auto;
  margin-bottom: 12rem;

  .input {
    margin-bottom: 0.5rem;
  }

  button {
    font-size: 18px;
  }

  .progress {
    margin: auto;
    display: block;
  }
`;
