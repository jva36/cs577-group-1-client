/* global gapi */
import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import User from "../models/User";

// You can create your own credential by going to https://console.cloud.google.com/ and
// then searching for "Credentials". Follow the prompts to make an "OAuth client ID".
const clientId = "252849607062-f8t3cao62rg9eehldia363tbrfflpmil.apps.googleusercontent.com"

interface LoginState {
    isLoggedIn: boolean,
    name: string,
    userId: number
}

interface GoogleLoginFieldProps {
    user: (user: User) => void;
}

export default class GoogleLoginField extends React.Component<GoogleLoginFieldProps, LoginState> {
    constructor(props: GoogleLoginFieldProps) {
        super(props);
        this.loginSuccess = this.loginSuccess.bind(this);
        this.loginFailure = this.loginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.state = { isLoggedIn: false, name: "", userId: -1 };
    }

    loginSuccess(response: any) {
        const email = response.profileObj.email;

        fetch(`/api/user?email=${email}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    isLoggedIn: true,
                    name: response.profileObj.name,
                    userId: res.id
                });
                this.props.user(new User(this.state.isLoggedIn, this.state.name, this.state.userId));
            });
    }

    logout() {
        this.setState({ isLoggedIn: false, name: "", userId: -1 });
        this.props.user(new User());
    }

    loginFailure(response: any) {
        console.log("Google login error")
        console.log(response)
    }

    override render() {
        if (this.state.isLoggedIn) {
            return <>
                <div className="navbar-item has-text-weight-bold">
                    {this.state.name}
                </div>
                <GoogleLogout
                    clientId={clientId}
                    render={renderProps => (
                        <div className="navbar-item">
                            <button
                                className="button is-dark has-text-weight-bold"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled} >
                                <span className="icon">
                                    <i className="fab fa-google"></i>
                                </span>
                                <span>Log Out</span>
                            </button >
                        </div>
                    )}
                    onLogoutSuccess={this.logout}
                />
            </>;
        }

        return <GoogleLogin clientId={clientId}
            render={renderProps => (
                <div className="navbar-item">
                    <button
                        className="button is-dark has-text-weight-bold"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled} >
                        <span className="icon">
                            <i className="fab fa-google"></i>
                        </span>
                        <span>Log in with Google</span>
                    </button >
                </div>
            )}
            onSuccess={this.loginSuccess}
            onFailure={this.loginFailure}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
        />
    }
}
