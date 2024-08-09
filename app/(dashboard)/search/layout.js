"use client"

import React from "react";
import { SearchProvider } from "@/lib/provider/SearchContext"; // Adjust the path if needed

function Layout({ children }) {
  return (
    <SearchProvider>
      {children}
    </SearchProvider>
  );
}

export default Layout;
