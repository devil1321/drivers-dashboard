import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages

import DashboardAdmin from "./admin/DashboardAdmin";
import DashboardOverview from "./dashboard/DashboardOverview";
import MyProfile from "./MyProfile/MyProfile";
import SendMail from "./SendMail/SendMail";
import Messages from "./Messages/Messages";
import Kierowcy from "./tables/Kierowcy";
import Faktury from "./tables/Faktury";
import Umowy from "./tables/Umowy";
import Rozliczenia from "./tables/Rozliczenia";

import Signin from "./SignIn/Signin";
import Signup from "./SingUp/Signup";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ResetPassword from "./ResetPassword/ResetPassword";
import Lock from "./Lock/Lock";
import NotFoundPage from "./404/NotFound";
import ServerError from "./500/ServerError";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    {/* pages */}
    <RouteWithLoader exact path={Routes.Main.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />
    {/* dashboards */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.DashboardAdmin.path} component={DashboardAdmin} />
    <RouteWithSidebar exact path={Routes.SendMail.path} component={SendMail} />
    <RouteWithSidebar exact path={Routes.Messages.path} component={Messages} />
    <RouteWithSidebar exact path={Routes.MyProfile.path} component={MyProfile} />
    <RouteWithSidebar exact path={Routes.Faktury.path} component={Faktury} />
    <RouteWithSidebar exact path={Routes.Rozliczenia.path} component={Rozliczenia} />
    <RouteWithSidebar exact path={Routes.Kierowcy.path} component={Kierowcy} />
    <RouteWithSidebar exact path={Routes.Umowy.path} component={Umowy} />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
