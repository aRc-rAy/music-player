import { searchIcon } from "../../assets";
import { logo } from "../../assets";

const Header = (props) => {
  return (
    <header className="header flex justify-sb">
      <div className="logo">
        <img src={logo.jpg} alt="W" />
      </div>
      <div>
        <img src={searchIcon} alt="search" />
      </div>
    </header>
  );
};
export default Header;
