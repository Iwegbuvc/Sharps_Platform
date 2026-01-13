import TopBar from "../Layout/TopBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="shadow-sm bg-white">
      {/* Top-Bar */}
      <TopBar />
      {/* Nav-Bar */}
      <NavBar />
    </header>
  );
};

export default Header;
