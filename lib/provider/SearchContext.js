"use client"
import React, { createContext, useContext, useState, useRef } from "react";
import debounce from "lodash/debounce";

const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [srForAccounts, setSrForAccounts] = useState([]);
    const [srForPosts, setSrForPosts] = useState([]);
    const [srForTags, setSrForTags] = useState([]);

    const fetchResults = async (query) => {
        if (query.length > 0) {
            const res = await fetch(`/api/search?q=${query}`);
            const data = await res.json();
            setSrForAccounts(data.accounts);
            setSrForPosts(data.posts);
            setSrForTags(data.tags);
        } else {
            setSrForAccounts([]);
            setSrForPosts([]);
            setSrForTags([]);
        }
    };

    const debouncedFetchResults = useRef(debounce(fetchResults, 300)).current;

    const handleSearch = (query) => {
        setSearchQuery(query);
        debouncedFetchResults(query);
    };

    return (
        <SearchContext.Provider value={{ searchQuery, srForAccounts, srForPosts, srForTags, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
}

export const useSearch = () => useContext(SearchContext);
