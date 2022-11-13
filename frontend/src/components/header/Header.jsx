import Heropic from "../../assets/images/Party3.jpg";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">ZucoLinz & ShowLife</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={Heropic} alt="" />
    </div>
  );
};

export default Header;
