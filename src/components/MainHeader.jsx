import { Link } from "react-router-dom"
import Image from "../images/savorhub.png"

const MainHeader = () => {
    return (
      <header className="main_header">
        <div className="container main_header-container">
          <div className="main_header-left">
            <h1>SavorHub</h1>
            <h2>Savor your every bite!</h2>
            <p>
              "SavorHub" is not just a restaurant; it's a culinary destination
              where every meal is an exquisite journey for the senses. Our restaurant invites you to embark on a adventure that celebrates the art of savoring every
              bite
            </p>
            <Link to="/menu" className="btn lg">
              Discover Menu
            </Link>
          </div>
          <div className="main_header-right">
            <div className="main_header-circle">
              <div className="main_header-image">
                <img src={Image} alt="Banner" />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default MainHeader