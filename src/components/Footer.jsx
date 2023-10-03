import { Link } from "react-router-dom"
import Logo from "../images/savorhub-logo.png"
import { BsFacebook, BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs"

const Footer = () => {
    return (
      <footer>
        <div className="footer_container">
          <article>
            <Link to="/" className="logo">
              <img src={Logo} alt="" />
            </Link>
            <h2>SavorHub</h2>
            <div className="footer_socials">
              <a href="https://www.linkedin.com/in/irfan-khan-raiyan">
                <BsLinkedin />
              </a>
              <a href="https://www.facebook.com/ikraiyan0001">
                <BsFacebook />
              </a>
              <a href="https://www.instagram.com/i_k_raiyan/">
                <BsInstagram />
              </a>
              <a href="https://github.com/IKRAIYAN">
                <BsGithub />
              </a>
            </div>
          </article>

          <article className="about">
            <h4>About SavorHub</h4>
            <a href="/">Location: TBA</a>
            <a href="/">Phone: +88 01714346346</a>
            <a href="mailto:info@btcn-bd.com">Email: ihkraiyan@gmail.com</a>
          </article>

          <article>
            <h4>Site Info</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/menu">Menu</Link>
          </article>
        </div>
        <div className="footer_copyright">
          <small>
            Copyright &copy; 2023 SavorHub. All rights reserved. Made by Irfan
            Khan Raiyan
          </small>
        </div>
      </footer>
    );
}

export default Footer