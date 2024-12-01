import React from "react";
import Sidebar from "./_components/Sidebar";
import Header from "../_components/Header";

export default function DashboardLayout({ children }) {


  return (
    <div className="flex">
      {/* Sidebar - Section */}
      <div className="md:w-52 lg:w-60 md:inline hidden min-h-screen">
        <Sidebar />
      </div>

      <div className="flex-1">
        {/* Header - Section */}
        <Header />

        {/* Main Body Content - Children Section */}
        <div className="w-[95%] mx-auto py-6">{children}</div>
      </div>
    </div>
  );
}

// {
//   /* Dashboard Header - Section */
// }
// <div className="bg-gray-100/70 shadow-md py-2">
//   {/* Inner Container - Header Section */}
//   <div className="w-[95%] md:w-[80%] mx-auto flex justify-end">
//     <UserButton />
//   </div>
// </div>;
