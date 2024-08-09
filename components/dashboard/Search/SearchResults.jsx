import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import SearchPosts from "./SearchPosts";
import SearchTags from "./SearchTags";
import SearchAccounts from "./SearchAccounts";
const TabsData = ["Posts", "Tags", "Accounts"];
function SearchResults() {
  return (
    <TabGroup className={""}>
      <TabList className={"py-2 mt-3 px-10 border-b-2 flex justify-evenly gap-3"}>
        {TabsData.map((tab, index) => (
          <Tab as={Fragment} key={index}>
            {({ hover, selected }) => (
              <button
                className={clsx(
                  hover && "bg-gray-100/70",
                  selected && "bg-gray-200/70 text-blue-700 font-semibold",
                  "w-full py-2 rounded-lg"
                )}
              >
                {tab}
              </button>
            )}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>
            <SearchPosts/>
        </TabPanel>
        <TabPanel>
            <SearchTags/>
        </TabPanel>
        <TabPanel>
            <SearchAccounts/>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

export default SearchResults;
