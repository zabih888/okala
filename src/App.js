import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Globals from "./components/Global/GlobalStyles";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./components/Login_Signup/Login";
import Signup from "./components/Login_Signup/Signup";
import { css, ThemeProvider } from "@emotion/react";
import theme from "./components/Theme";
import Footer from "./components/Footer";
import AuthProvider from "./features/users/authSlice";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Globals />
          <ThemeProvider theme={theme}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<Signup />} />
            </Routes>
            {/* <Footer /> */}
            <ToastContainer
              rtl
              toastClassName={css({ fontFamily: "Shabnam" })}
            />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  );
}

export default App;
