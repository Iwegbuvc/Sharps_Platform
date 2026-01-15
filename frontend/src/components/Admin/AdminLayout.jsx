// // import { FaBars } from "react-icons/fa";
// // import { useState } from "react";
// // import AdminSidebar from "./AdminSidebar";
// // import { Outlet } from "react-router-dom";

// // const AdminLayout = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

// //   return (
// //     <div className="min-h-[100dvh] flex flex-col overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200">
// //       {/* MOBILE HEADER */}
// //       <div className="flex items-center p-4 bg-gray-900 text-white z-20">
// //         <button onClick={toggleSidebar}>
// //           <FaBars size={24} />
// //         </button>
// //         <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
// //       </div>

// //       {/* Overlay for mobile sidebar */}
// //       {isSidebarOpen && (
// //         <div
// //           className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
// //           onClick={toggleSidebar}
// //         />
// //       )}

// //       {/* Sidebar */}
// //       <div
// //         className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform
// //       ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
// //       transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}
// //       >
// //         <AdminSidebar toggleSidebar={toggleSidebar} />
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex-grow p-6 overflow-auto">
// //         <Outlet />
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminLayout;
// import { FaBars } from "react-icons/fa";
// import { useState } from "react";
// import AdminSidebar from "./AdminSidebar";
// import { Outlet } from "react-router-dom";

// // const AdminLayout = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       {/* 🔹 MOBILE TOP BAR */}
// //       <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-gray-900 text-white flex items-center px-4 z-30">
// //         <button onClick={toggleSidebar}>
// //           <FaBars size={24} />
// //         </button>
// //         <h1 className="ml-4 text-lg font-medium">Admin Dashboard</h1>
// //       </div>

// //       {/* 🔹 MAIN LAYOUT */}
// //       <div className="flex pt-14 md:pt-0">
// //         {/* Sidebar */}
// //         <div
// //           className={`fixed md:static inset-y-0 left-0 w-64 bg-gray-900 text-white transform
// //           ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
// //           md:translate-x-0 transition-transform duration-300 z-40`}
// //         >
// //           <AdminSidebar />
// //         </div>

// //         {/* Overlay (mobile only) */}
// //         {isSidebarOpen && (
// //           <div
// //             className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
// //             onClick={toggleSidebar}
// //           />
// //         )}

// //         {/* Main Content */}
// //         <main className="flex-1 p-6 ml-0 md:ml-10">
// //           <Outlet />
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };
// const AdminLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* MOBILE TOP BAR */}
//       <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-gray-900 text-white flex items-center px-4 z-30">
//         <button onClick={() => setIsSidebarOpen(true)}>
//           <FaBars size={24} />
//         </button>
//         <h1 className="ml-4 text-lg font-medium">Admin Dashboard</h1>
//       </div>

//       {/* MAIN LAYOUT */}
//       <div className="flex pt-14 md:pt-0 min-h-screen">
//         {/* SIDEBAR */}
//         <aside
//           className={`fixed md:static inset-y-0 left-0 w-64 bg-gray-900 text-white z-40
//           transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//           md:translate-x-0 transition-transform duration-300`}
//         >
//           <AdminSidebar />
//         </aside>

//         {/* OVERLAY (mobile only) */}
//         {isSidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
//             onClick={() => setIsSidebarOpen(false)}
//           />
//         )}

//         {/* CONTENT */}
//         <main className="flex-1 p-6 overflow-x-hidden">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 bg-gray-900 text-white">
        <AdminSidebar />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-gray-900 text-white
          transform transition-transform duration-300 ease-in-out
          lg:hidden
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <AdminSidebar onClose={() => setSidebarOpen(false)} />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center gap-4 bg-white px-4 py-3 shadow">
          <button onClick={() => setSidebarOpen(true)} className="text-xl">
            <FaBars />
          </button>
          <h1 className="font-semibold">Admin Panel</h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
