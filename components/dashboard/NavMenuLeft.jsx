import { DotFilledIcon, HomeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdExplore } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IoNotificationsOutline, IoCreateOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "../ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NavMenuLeft() {
  return (
    <div className="h-screen w-1/4 flex flex-col justify-between border-e-2">
      <div className="">
        <Image
          src="/image/logo/Shayar.jpg"
          width={158}
          height={58}
          alt={"App logo"}
          className="mx-auto mt-5"
        />
        <ul className="space-y-2 font-medium px-5 py-2">
          <li>
            <Link
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 active:bg-gray-50 dark:hover:bg-gray-700 group"
            >
              <AiTwotoneHome className="w-6 h-6" />
              <p className="ms-3 font-sans text-lg font-semibold">Home</p>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <IoIosSearch className="w-6 h-6" />
              <p className="ms-3 font-sans text-lg font-normal">Search</p>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <MdExplore className="w-6 h-6" />
              <p className="ms-3 font-sans text-lg font-normal">Explore</p>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <IoNotificationsOutline className="w-6 h-6" />
              <p className="ms-3 font-sans text-lg font-normal">Notification</p>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <IoCreateOutline className="w-6 h-6" />
              <p className="ms-3 font-sans text-lg font-normal">Create</p>
            </Link>
          </li>
        </ul>
      </div>
      <ul className="space-y-2 font-medium px-5 py-2">
        <li>
          <Link
            href="#"
            className="flex items-center justify-between py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <Link href={"#"} className="flex items-center">
              <Avatar>
                <AvatarImage src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ms-3 flex flex-col gap-1">
                <Label>Jack Jack</Label>
                <span className="font-sans text-xs text-gray-400">
                  @jackjack
                </span>
              </div>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:bg-gray-200 p-1 rounded-sm">
                <BsThreeDots className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavMenuLeft;
