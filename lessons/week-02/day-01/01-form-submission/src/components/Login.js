// import useState hook from React
import { useState } from "react";

import { FormTitle } from "./FormTitle";

export const Login = ({ title, onSuccess }) => {
  // useState returns a tuple (array of 2 items) where the first item is the state variable and the second item is the setter function to set the state value

  // declare a state variable email and set the default value as ""
  const [email, setEmail] = useState("");

  // declare a state variable password and set the default value as ""
  const [password, setPassword] = useState("");

  // event handler function which is executed on the form input change event for email and destructure the currentTarget from the event object
  const handleOnChangeEmail = ({ currentTarget }) => {
    setEmail(currentTarget.value);
  };

  // event handler function which is executed on the form input change event for password and destructure the currentTarget from the event object
  const handleOnChangePassword = ({ currentTarget }) => {
    setPassword(currentTarget.value);
  };

  // event handler function which is executed on the form submit event
  const handleSubmit = (event) => {
    // prevent the default submission of the form
    event.preventDefault();

    // check if email and password match required values
    if (email === "bob.smith@email.com" && password === "Password123!") {
      // execute the onSuccess function provided by the App component down as a prop
      onSuccess();
    }
  };

  return (
    <div className="login">
      {/* title */}
      {/* use the logical AND (&&) operator to render the title div if title is truthy */}
      {title && <FormTitle title={title} />}

      {/* form */}
      {/* connect the form onSubmit event handler to the handleSubmit function */}
      <form className="login-form" onSubmit={handleSubmit}>
        {/* email address form input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email address"
            // get the value of the email input from the state variable of email
            value={email}
            // connect the onChange event handler to the handleChange function
            onChange={handleOnChangeEmail}
          />
        </div>

        {/* password form input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            // get the value of the password input from the state variable of password
            value={password}
            // connect the onChange event handler to the handleChange function
            onChange={handleOnChangePassword}
          />
        </div>

        {/* submit button */}
        <div className="d-grid gap-2 col-6 mx-auto pt-4">
          {/* ensure the type of the button is type "submit" for form submission */}
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
