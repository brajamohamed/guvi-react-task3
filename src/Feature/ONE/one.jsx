import "./one.css";
const One = () => {
  return (
    <div className="container-fluid">
      <div className="row g-0">
        <div className="one-text col-lg-6 px-5 d-flex flex-column align-items-center justify-content-center">
          <h1>Fully responsive Design</h1>
          <p className="lead ">
            When you use a theme created by Start Bootstrap, you know that the
            theme will look great on any device, whether it's a phone, tablet,
            or desktop the page will behave responsively!
          </p>
        </div>

        <div className="col-lg-6 ">
          <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1519326882834-04c334752f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2004&q=80"
            alt=""
            id="img"
          />
        </div>
      </div>
    </div>
  );
};
export default One;
