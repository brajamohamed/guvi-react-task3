import "./hero2.css";
import { useState } from "react";
import { Email_invalid, Email_valid } from "./Email_Response/email";

const Hero2 = () => {
  let email_id;
  let [validEmail, setValidEmail] = useState(0);
  let [clicked, setClick] = useState(false);

  function validateChange(e) {
    email_id = e.target.value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_id)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  function handleSubmit() {
    setClick(true);
  }

  return (
    <div
      id="hero2"
      className="d-flex align-items-center justify-content-center flex-wrap-wrap p-5"
    >
      <div id="content" className="container-lg">
        <h1 col-lg-6 className="lead text-white heading fw-bolder ">
          Ready to get started? Sign up now!
        </h1>
        <form action="" className="mt-4">
          <input
            id="email-input"
            type="text"
            onChange={validateChange}
            className="col-8 p-3 me-2 border rounded-2"
            placeholder="Email Address"
          />
          {clicked === false ? (
            <button
              id="submitbtn"
              type="button"
              disabled={!validEmail}
              onClick={handleSubmit}
              className="btn p-3 bg-primary border border-0 rounded-2 text-white"
            >
              Submit
            </button>
          ) : (
            <></>
          )}
        </form>
        {clicked === false ? <></> : <Email_valid />}
      </div>
    </div>
  );
};
export default Hero2;
