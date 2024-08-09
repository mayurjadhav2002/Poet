import { useSearch } from '@/lib/provider/SearchContext'
import React from 'react'

function SearchInput() {
    const {handleSearch, searchQuery} = useSearch()
  return (
    <form className="px-10 mx-auto mt-3">
                <h2 className="text-xl font-semibold text-gray-700 mb-5">Search</h2>

    <label
      for="default-search"
      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    >
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        onChange={(e) => handleSearch(e.target.value)}
        value={searchQuery}
        className="block w-full p-4 ps-12 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Poets, Poems, Shayaries..."
        required
      />
    </div>
  </form>
  )
}

export default SearchInput