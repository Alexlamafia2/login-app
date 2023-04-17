import "./Home.css";
import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Home(props) {
  // =====================================HOOKS===================================================
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);

  // ============================FUNCTIONS================================================================
  function handleSignUp() {
    setIsLogIn(true);
  }

  function handleSignIn() {
    setIsLogIn(false);
  }

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  }

  function validateEmailHandler() {
    setEmailIsValid(enteredEmail.includes("@"));
  }

  function validatePasswordHandler() {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  }

  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);

    setEnteredPassword("");
    setEnteredEmail("");
  }

  // ===================================RETURN STATEMENT ====================================================
  return (
    <Fragment>
      {!isLogIn && (
        <div
          className={`${"control"} ${
            emailIsValid || passwordIsValid === false ? "invalid" : ""
          }} `}
        >
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login-form__title">Welcome!</h1>
            <input
              className="login-form__input"
              type="email"
              id="email"
              placeholder="Email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
            <input
              className="login-form__input"
              type="password"
              id="password"
              placeholder="Password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
            <button
              className="login-form__button--invisible"
              onClick={handleSignUp}
            >
              Don't have an account? Sign up!
            </button>
            <button
              className="login-form__button"
              type="submit"
              disabled={!formIsValid}
            >
              Submit
            </button>
          </form>
          <div className="login-social__buttons">
            <p style={{ color: "aliceblue" }}>or sign in with:</p>
            <button className="login-social__button">
              <p>
                <FontAwesomeIcon icon={faGithub} /> Github
              </p>
            </button>
            <button className="login-social__button">
              <div>
                <p>
                  <FontAwesomeIcon icon={faGoogle} /> Google
                </p>
              </div>
            </button>
          </div>
        </div>
      )}
      {isLogIn && (
        <div
          className={`${"control"} ${
            emailIsValid || passwordIsValid === false ? "invalid" : ""
          }} `}
        >
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login-form__title">Welcome!</h1>
            <input
              className="login-form__input"
              type="text"
              id="fname"
              placeholder="First Name"
            />
            <input
              className="login-form__input"
              type="text"
              id="lname"
              placeholder="Last Name"
            />
            <input
              className="login-form__input"
              type="email"
              id="email"
              placeholder="Email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
            <input
              className="login-form__input"
              type="password"
              id="password"
              placeholder="Password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
            <button
              className="login-form__button--invisible"
              onClick={handleSignIn}
            >
              Have an account? Sign in!
            </button>
            <button
              className="login-form__button"
              type="submit"
              disabled={!formIsValid}
            >
              Submit
            </button>
          </form>
          <div className="login-social__buttons">
            <p style={{ color: "aliceblue" }}>or sign up with:</p>
            <button className="login-social__button">
              <p>
                <FontAwesomeIcon icon={faGithub} /> Github
              </p>
            </button>
            <button className="login-social__button">
              <div>
                <p>
                  <FontAwesomeIcon icon={faGoogle} /> Google
                </p>
              </div>
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}
