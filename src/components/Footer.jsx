import {
  faGithub,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const twitter = "https://x.com/Felixx_jnr?t=ViRhuKymNfmS_2pyCgv_cw&s=09";
  const facebook =
    "https://www.facebook.com/profile.php?id=100073334363631&mibextid=ZbWKwL";
  const email =
    "mailto:uyuoukoh@gmail.com?subject=Lets%20Work&body=Hey%2C%20Good%20day%2C%20My%20name%20is...";
  const github = "https://github.com/Felixx-jnr";

  return (
    <div className="footer">
      <div className="footer__overlay">
        <div className="footer__setup">
          <h2 className="footer__name">FELIX UDOH</h2>

          <div className="footer__links">
            <h2>LINKS</h2>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
          </div>

          <div className="footer__contact">
            <h2>CONTACTS</h2>
            <div className="main">
              <li>+234 705 771 8692</li>
              <li>
                <a href={email}>UYUOUKOH@GMAIL.COM</a>
              </li>
            </div>

            <div className="icon">
              <div>
                <a
                  href={github}
                  target="blank"
                >
                  {" "}
                  <li>
                    <FontAwesomeIcon icon={faGithub} />
                  </li>
                </a>
              </div>
              <div>
                <a
                  href={twitter}
                  target="blank"
                >
                  {" "}
                  <li>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </li>
                </a>
              </div>
              <div>
                <a
                  href={facebook}
                  target="blank"
                >
                  {" "}
                  <li>
                    <FontAwesomeIcon icon={faFacebook} />
                  </li>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p>2024 &copy; copyright. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
