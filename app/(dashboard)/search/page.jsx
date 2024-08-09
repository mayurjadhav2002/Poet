"use client";
import SearchInput from "@/components/dashboard/Search/SearchInput";
import SearchResults from "@/components/dashboard/Search/SearchResults";
import { useSearch } from "@/lib/provider/SearchContext";
import React from "react";

function SearchPage() {
  const { searchQuery, srForAccounts, srForPosts, srForTags, handleSearch } =
    useSearch();

  return (
    <>
      <div>
        <SearchInput />
        <SearchResults />
      </div>
    </>
  );
}

export default SearchPage;
