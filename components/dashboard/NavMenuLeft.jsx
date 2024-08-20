import { DotFilledIcon, GearIcon, HomeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdAutoFixHigh, MdExplore } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineProfile, AiTwotoneHome } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IoNotificationsOutline, IoCreateOutline, IoAnalytics, IoMedal } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "../ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiUser } from "react-icons/ci";
import { FaLifeRing } from "react-icons/fa";
import "@/styles/Dashboard.min.css"
function NavMenuLeft() {
  return (
    <div className="h-screen w-2/5 flex flex-col items-end justify-between border-e-2">
      <div className="w-full max-w-[300px]">
        <p className="text-3xl text-center my-5 font-bold first-letter:text-blue-700 palanquin-dark-bold">Shayar</p>
        <ul className="space-y-2 font-medium px-5 py-2">
          <li>
            <Link
              href="/home"
              className="flex items-center py-2 px-4 text-gray-900 rounded-e-lg dark:text-white hover:bg-gray-100 active:bg-gray-50 dark:hover:bg-gray-700 group
              bg-blue-200  dark:bg-gray-900 border-l-4 border-blue-700   group-hover:bg-blue-600 group-active:bg-blue-700
              "
            >
              <AiTwotoneHome className="w-6 h-6" />
              <p className="ms-3 font-sans text-lg font-semibold">Home</p>
            </Link>
          </li>

          <li>
            <Link
              href="/search"
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
              href="/notification"
              className="flex  items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <div className="relative inline-flex items--center">
                <IoNotificationsOutline className="w-6 h-6" />
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                  20
                </div>
              </div>
              <p className="ms-3 font-sans text-lg font-normal">Notification</p>
            </Link>
          </li>

          <li>
            <Link
              href="/new"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <IoCreateOutline className="w-6 h-6" />
              <p className="ms-3 font-sans text-lg font-normal">Create</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center py-2 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaRegCircleUser className="w-6 h-6" />
              <p className="ms-3 font-sans text-lg font-normal">Profile</p>
            </Link>
          </li>
        </ul>
      </div>
      <ul className="space-y-2 font-medium px-5 py-2 w-full max-w-[300px]">
        <li>
          <div
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
              <DropdownMenuContent className="min-w-44 max-w-auto">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <CiUser className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MdAutoFixHigh className="mr-2 h-4 w-4" />
                    <span>App Preferences</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IoMedal className="mr-2 h-4 w-4" />
                    <span>Achievements</span>
                  </DropdownMenuItem>
                  </DropdownMenuGroup>


                  <DropdownMenuSeparator/>



                  <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <GearIcon className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FaLifeRing className="mr-2 h-4 w-4" />
                    <span>Help & Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IoAnalytics className="mr-2 h-4 w-4" />
                    <span>Analytics</span>
                  </DropdownMenuItem>
                  
                  
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NavMenuLeft;
