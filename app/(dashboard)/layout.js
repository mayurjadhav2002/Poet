import Header from "@/components/dashboard/Header";
import NavMenuLeft from "@/components/dashboard/NavMenuLeft";
import NavMenuRight from "@/components/dashboard/NavMenuRight";
import React from "react";

function RootLayout({ children }) {
  return (
    <>
      <div className="flex justify-between">
        <NavMenuLeft />
        <div className="w-full">{children}</div>
        <NavMenuRight />
      </div>
    </>
  );
}

export default RootLayout;
