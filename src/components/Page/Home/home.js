import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./home.sass";
import SignIn from "../../SignIn";
import LogIn from "../../LogIn";
import WelcomeToUser from "../../WelcomeToUser/welcomeToUser";

const Home = ({ auth }) => {
  return (
    <div className="home">
      <div className="home__wrapper">
        <Switch>
          <Route
            exact
            path="/home/sign-in"
            render={() => {
              return <SignIn/>;
            }}
          />
          <Route
            exact
            path="/home/log-in"
            render={() => {
              return <LogIn />;
            }}
          />
          <Route
            exact
            path="/home/welcome"
            render={() => {
              return <WelcomeToUser/>;
            }}
          />
          <Redirect to={auth ? "/home/welcome" : "/home/log-in"}/>
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.authenticated;
};

Home.propTypes = {
  auth: PropTypes.bool
};

export default connect(mapStateToProps, undefined, undefined, { pure: false })(Home);
