import { UserIcon, SearchIcon } from "../../assets/images";
import "./style.css";
function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <div className="logo">
          <h1>Story Time</h1>
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>Favorites</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="header-right">
        <div className="search b-radius p-8">
          <SearchIcon
            style={{
              width: "20px",
              height: "20px",
              fill: "var(--primary-color)",
              padding: "0 8px",
            }}
          />
          <input type="text" className="search-input" name="search-input" placeholder="Search" />
        </div>
        <div className="user">
          <UserIcon
            style={{
              width: "40px",
              height: "40px",
              fill: "var(--primary-color)",
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
