import "./footer.css";

const Footer = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center p-5 ">
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Privay Policy</a>
        </li>
      </ul>
      <div>
        <p>@ Your Website 2023. All Rights Reserved.</p>
      </div>
      <div className="d-flex">
        <button className="border-0 rounded-circle iconbtn">
          <i className="bi bi-facebook iconLogo"></i>
        </button>
        <button className="border-0 rounded-circle iconbtn">
          <i class="bi bi-twitter iconLogo"></i>
        </button>
        <button className="border-0 rounded-circle iconbtn">
          <i class="bi bi-instagram iconLogo"></i>
        </button>
      </div>
    </div>
  );
};
export default Footer;
