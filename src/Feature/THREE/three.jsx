import "./three.css";
const Three = () => {
  return (
    <div>
      <div className="conainer-fluid">
        <div className="row g-0">
          <div className="container text-three col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h1>Easy to Use & Customize</h1>
            <p className="lead">
              Landing Page is just HTML and CSS with a splash of SCSS for users
              who demand some deeper customization options. Out of the box, just
              add your content and images, and your new landing page will be
              ready to go!
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="img 3"
              className="img-fluid"
              id="img3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Three;
