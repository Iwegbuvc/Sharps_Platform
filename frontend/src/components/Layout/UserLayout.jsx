import Header from "../Common/Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Header */}
      <Header />
      {/* Logo-Header-Section  */}
      {/* Main-Section */}
      <main className="flex-1 overflow-hidden">
        <Outlet />
        {/* <Profile /> */}
      </main>
    </div>
  );
};

export default UserLayout;
