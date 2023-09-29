import "bootstrap-icons/font/bootstrap-icons.css";
import "./features.css";
const Features = () => {
  return (
    <div className="features py-5">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 my-4">
            <i className="bi-window m-auto text-primary features-icon"></i>
            <h3>Fully Responsive</h3>
            <p className="lead">
              This theme will look great on any device, no matter the size!
            </p>
          </div>

          <div className="col-lg-4 my-4">
            <i className="bi-layers m-auto text-primary features-icon"></i>
            <h2>Bootstrap 5 Ready</h2>
            <p className="lead">
              Featuring the latest build of the new Bootstrap 5 framework!
            </p>
          </div>
          <div className="col-lg-4 my-4">
            <i className="bi-terminal m-auto text-primary features-icon"></i>
            <h2>Easy to Use</h2>
            <p className="lead">
              Ready to use with your own content, or customize the source files!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
