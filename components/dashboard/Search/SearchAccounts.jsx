import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { StarIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

function SearchAccounts() {
  return (
    <ul className="">
      {[1, 2, 3, 4].map((_, i) => (
        <li
          key={i}
          className="border-[1px] border-gray-100 px-6 py-2 hover:bg-blue-100/50 dark:hover:bg-blue-700 "
        >
          <div
            href="#"
            className="flex items-center justify-between py-2 px-4 text-gray-900  dark:text-white group"
          >
            <Link href={"#"} className="flex items-center cursor-pointer">
              <Avatar>
                <AvatarImage src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ms-2 flex flex-col">
                <Label className="font-semibold text-gray-700 text-md hover:text-primary flex gap-1 items-center">
                  Jack Jack <StarIcon className="w-4 h-4"/>
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
          <p className="text-sm text-gray-700 px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            rem, autem in cumque aut deserunt asperiores dolore maxime nobis,
            officia ratione quia sit eum sint placeat. Tempora laudantium
            quisquam hic.
          </p>
        </li>
      ))}
    </ul>
  );
}

export default SearchAccounts;
