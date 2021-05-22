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

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";

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
    <RouteWithSidebar exact path={Routes.Main.path} component={DashboardOverview} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.DashboardAdmin.path} component={DashboardAdmin} />
    <RouteWithSidebar exact path={Routes.SendMail.path} component={SendMail} />
    <RouteWithSidebar exact path={Routes.Messages.path} component={Messages} />
    <RouteWithSidebar exact path={Routes.MyProfile.path} component={MyProfile} />
    <RouteWithSidebar exact path={Routes.Faktury.path} component={Faktury} />
    <RouteWithSidebar exact path={Routes.Rozliczenia.path} component={Rozliczenia} />
    <RouteWithSidebar exact path={Routes.Kierowcy.path} component={Kierowcy} />
    <RouteWithSidebar exact path={Routes.Umowy.path} component={Umowy} />

    {/* components */}
    <RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />
    <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
    <RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
    <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
    <RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />
    <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />

    {/* documentation */}
    <RouteWithSidebar exact path={Routes.DocsOverview.path} component={DocsOverview} />
    <RouteWithSidebar exact path={Routes.DocsDownload.path} component={DocsDownload} />
    <RouteWithSidebar exact path={Routes.DocsQuickStart.path} component={DocsQuickStart} />
    <RouteWithSidebar exact path={Routes.DocsLicense.path} component={DocsLicense} />
    <RouteWithSidebar exact path={Routes.DocsFolderStructure.path} component={DocsFolderStructure} />
    <RouteWithSidebar exact path={Routes.DocsBuild.path} component={DocsBuild} />
    <RouteWithSidebar exact path={Routes.DocsChangelog.path} component={DocsChangelog} />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
