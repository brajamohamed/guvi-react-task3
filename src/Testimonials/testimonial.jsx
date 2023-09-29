import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="container-fluid testi py-5">
      <div className="container">
        <div>
          <h2>What people are saying...</h2>
        </div>
        <div className="row p-5">
          <div className="col-lg-4">
            <div className="card border border-0 m-2 d-flex justify-content-center align-items-center">
              <img
                src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="person1"
                className="card-img-top"
                id="pic"
              />
              <div className="card-body">
                <div className="card-title">
                  <h3>Margaret E.</h3>
                </div>
              </div>
              <div className="card-text">
                <p>"This is fantastic! Thanks so much guys!"</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border border-0 m-2 d-flex align-items-center">
              <img
                src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="person1"
                className="card-img-top"
                id="pic"
              />
              <div className="card-body">
                <div className="card-title">
                  <h3>Fred S.</h3>
                </div>
              </div>
              <div className="card-text">
                <p>
                  "Bootstrap is amazing. I've been using it to create lots of
                  super nice landing pages."
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border border-0 m-2 d-flex align-items-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1661341006680-5ef1216f2754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="person1"
                className="card-img-top"
                id="pic"
              />
              <div className="card-body">
                <div className="card-title">
                  <h3>Sarah W.</h3>
                </div>
              </div>
              <div className="card-text">
                <p>
                  "Thanks so much for making these free resources available to
                  us!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
