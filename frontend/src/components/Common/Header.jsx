import TopBar from "../Layout/TopBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="border-b border-black">
      {/* Top-Bar */}
      <TopBar />
      {/* Nav-Bar */}
      <NavBar />
    </header>
  );
};

export default Header;
