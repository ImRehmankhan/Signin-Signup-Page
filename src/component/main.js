import React, { Component } from "react";
import Signin from "./Signin";
import Signinup from "./Signinup";

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBZXzshGiMmU0VV9BRQ-xJNeX6reKsshLk",
  authDomain: "todo-82a6a.firebaseapp.com",
  projectId: "todo-82a6a",
  storageBucket: "todo-82a6a.appspot.com",
  messagingSenderId: "849108318200",
  appId: "1:849108318200:web:d0eb18ad93f3b1c4dd880d",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageshow: false,
      message: "",
      StyleProperty: true,
    };
  }
  changepagehandler = (e) => {
    this.setState({
      pageshow: !this.state.pageshow,
    });
    e.preventDefault();
  };
  signuphandler = (event) => {
    var Name = event.target.name.value;
    var Email = event.target.email.value;
    var Password = event.target.password.value;
    var cpassword = event.target.cpassword.value;
    if (Password !== cpassword) {
      this.setState({
        message: "confirm password not match",
        StyleProperty: false,
      });
      return;
    }
    event.preventDefault();
    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.setState(
          {
            message: "Register Successfully",
            StyleProperty: true,
          },
          () => {
            event.target.name.value = "";
            event.target.email.value = "";
            event.target.password.value = "";
            event.target.cpassword.value = "";
          }
        );

        // ...
      })
      .catch((error) => {
        this.setState({
          message: error.message,
          StyleProperty: false,
        });
      });
  };
  signinhandler = (event) => {
    event.preventDefault();
    var Email = event.target.email.value;
    var pass = event.target.password.value;
    signInWithEmailAndPassword(auth, Email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.setState(
          {
            message: "Login successfully",
            StyleProperty: true,
          },
          () => {
            event.target.email.value = "";
            event.target.password.value = "";
          }
        );

        // ...
      })
      .catch((error) => {
        this.setState({
          message: error.message,
          StyleProperty: false,
        });
      });
  };
  googlehandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        this.setState(
          {
            message: "google login successfully",
            StyleProperty: true,
          })
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        this.setState(
          {
            message: "google login fail",
            StyleProperty: false,
          })
      });
  };
  render() {
    return (
      <div>
        {this.state.pageshow ? (
          <Signinup
            message={this.state.message}
            style={this.state.StyleProperty}
            submit={this.signuphandler}
            changepage={this.changepagehandler}
            google={this.googlehandler}
          />
        ) : (
          <Signin
            style={this.state.StyleProperty}
            message={this.state.message}
            submit={this.signinhandler}
            changepage={this.changepagehandler}
            google={this.googlehandler}
          />
        )}
      </div>
    );
  }
}

export default Main;
