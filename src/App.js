import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GoogleLogin from "react-google-login";
import Cookies from "js-cookies";
import DashBoard from "./Components/Dashboard";
import ErrorPage from "./Components/ErrorPage";
import NavBar from "./Components/NavBar";
import "./App.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DEV: "695935713496-rl0nkb8umdb0s0b954ijm8thpsurl28k.apps.googleusercontent.com",
      DEVAPI: "http://localhost:5000/user/login",
      isLoggedIn: false,
      user: null,
      responseGoogle: async (googleUser) => {
        const { tokenObj } = googleUser;
        const profile = googleUser.profileObj;

        const { email } = profile;
        const { name } = profile;
        const token = tokenObj.id_token;

        const response = await fetch(this.state.DEVAPI, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            token,
          }),
        });
        const content = await response.json();
        this.setState({ user: content.user, isLoggedIn: true });
        LocalStorage.set("user", content.user);
      },
      handleLogout: (event) => {
        event.preventDefault();
        this.setState({});
      },
    };
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="App">
        {!this.state.isLoggedIn ? (
          <div className="login-container">
            <h1>Login here</h1>
            <GoogleLogin
              className="Login-Button"
              clientId={this.state.DEV}
              buttonText="Continue with Google"
              onSuccess={this.state.responseGoogle}
              onFailure={this.state.responseGoogle}
            />
          </div>
        ) : (
          <Router>
            <NavBar isLoggedIn={this.state.isLoggedIn} />
            <Switch>
              <Route path="/" exact>
                <DashBoard user={this.state.user} />
              </Route>
              <Route component={ErrorPage} />
            </Switch>
          </Router>
        )}
      </div>
    );
  }
}
export const getAccessToken = () => Cookies.get("access_token_autog");
export const isAuthenticated = () => !!getAccessToken();
export const authenticate = async (response) => {
  console.log(getAccessToken());
  return typeof getAccessToken() !== "undefined";
};
