import "./style.css"
import instagram from "./../../img/icons/instagram.svg";
import github from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                  <img src={instagram} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={github} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023 Kutnyk Volodymyr Frontend-developer</p>
            </div>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;