import { Button } from "@radix-ui/themes";
import React from "react";
import { Label } from "../ui/label";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import FooterLinks from "./FooterLinks";

function NavMenuRight() {
  return (
    <div className="h-screen w-2/5 flex flex-col justify-between border-s-2  px-5">
      <div>
        <div className="py-2">
          <h3 className="text-md font-semibold text-gray-800 dark:text-white  py-1">
            Suggested accounts
          </h3>
          <ul className="min-w-auto  max-w-[300px]">
            {[1, 2, 3, 4].map((_, i) => (
              <li key={i}>
                <div
                  href="#"
                  className="flex items-center justify-between py-2 px-4 text-gray-900 rounded-xl dark:text-white hover:bg-blue-100/50 dark:hover:bg-blue-700 group"
                >
                  <Link href={"#"} className="flex items-center cursor-pointer">
                    <Avatar>
                      <AvatarImage src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="ms-2 flex flex-col gap-0">
                      <Label className="font-semibold text-gray-700">
                        Jack Jack
                      </Label>
                      <span className="font-sans text-xs text-gray-500 ">
                        @jackjack
                      </span>
                    </div>
                  </Link>
                  <button className="py-1 px-2 me-2  text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Follow
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>


        <div className="p-2 mt-5 bg-gray-50">
          <h3 className="text-md font-semibold text-gray-800 dark:text-white  py-1">
            Trending Topics
          </h3>
          <ul className="min-w-auto  max-w-[300px]">
            {[1, 2, 3, 4].map((_, i) => (
              <li key={i}>
                <div
                  href="#"
                  className="flex items-center justify-between py-2 px-4 text-gray-900 rounded-xl dark:text-white hover:bg-blue-100/50 dark:hover:bg-blue-700 group"
                >
                  <Link href={"#"} className="flex items-center cursor-pointer">
                   
                    <div className="ms-2 flex flex-col gap-0">
                      <Label className="font-semibold text-gray-700">
                        Jack Jack
                      </Label>
                      <span className="font-sans text-xs text-gray-500 ">
                        @jackjack
                      </span>
                    </div>
                  </Link>
                  <button className="py-1 px-2 me-2  text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Follow
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-1">
        <FooterLinks />
      </div>
    </div>
  );
}

export default NavMenuRight;
