export const Email_invalid = () => {
  return (
    <div className="text-white">
      <h6>Email Address is not valid.</h6>
      <a
        className="text-white"
        href="https://startbootstrap.com/solution/contact-forms"
      ></a>
    </div>
  );
};
export const Email_valid = () => {
  return (
    <div className="text-white">
      <h6>Form submission successful!</h6>
      <h6>To activate this form, sign up at </h6>
      <a
        className="text-white"
        href="https://startbootstrap.com/solution/contact-forms"
      >
        "https://startbootstrap.com/solution/contact-forms"
      </a>
    </div>
  );
};
