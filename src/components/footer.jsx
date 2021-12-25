import home from "../images/icons/unclicked/home.png";
import search from "../images/icons/unclicked/search.png";
import notification from "../images/icons/unclicked/notification.png";
import user from "../images/icons/unclicked/user.png";
import reels from "../images/icons/unclicked/reels.png"
const Footer = () => {
  return <div className="footer">
      <img src={home} alt="home" className="home" />
      <img src={search} alt="searchButton" className="search" />
      <img src={reels} alt="reels" className="reels" />
      <img src={notification} alt="notification" className="notification" />
      <img src={user} alt="user" className="user" />
  </div>;
};

export default Footer;
