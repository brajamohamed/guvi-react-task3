import "./two.css";
const Two = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row g-0">
          <div className="container two-text col-lg-6 order-lg-2 d-flex flex-column align-items-center justify-content-center">
            <h1>Updated For Bootstrap 5</h1>
            <p className="lead">
              Newly improved, and full of great utility classes, Bootstrap 5 is
              leading the way in mobile responsive web development! All of the
              themes on Start Bootstrap are now using Bootstrap 5!
            </p>
          </div>
          <div className="col-lg-6 order-lg-1">
            <img
              src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
              alt="2nd img"
              className="img-fluid"
              id="img2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Two;
