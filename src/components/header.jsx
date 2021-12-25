import logo from "../images/icons/logo.png";
import add from "../images/icons/add.png";
import message from "../images/icons/messenger.png";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="right">
        <img src={add} alt="add post" className="add" />
        <img src={message} alt="message" className="message" />
      </div>
    </div>
  );
};

export default Header;
