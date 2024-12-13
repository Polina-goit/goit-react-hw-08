import css from "./App.module.css";
import "modern-normalize/modern-normalize.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { refreshUser } from "../../redux/auth/operations";

import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { PrivateRoute } from "../../PrivateRoute";
import { RestrictedRoute } from "../../RestrictedRoute";
import { Layout } from "../../Layout";
import Home from "../../pages/Home/Home";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from "../../redux/auth/selectors";
import Login from "../../pages/Login";
import Contact from "../Contact/Contact";

const App = () => {
  const dispatch = useDispatch();
  const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);

    return {
      isLoggedIn,
      isRefreshing,
      user,
    };
  };
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Oval />
  ) : (
    <div className={css.container}>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contact />} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </>
    </div>
  );
};

export default App;
