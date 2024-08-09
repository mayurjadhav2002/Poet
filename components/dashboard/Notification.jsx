import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GoHeartFill } from "react-icons/go";
import { FaCommentDots } from "react-icons/fa";

function Notification() {
  return (
    <div>
      <div className="block day-wise">
        <p className="pb-1 border-b-2 text-xs">Recent</p>
        <hr />
        <div className="mt-1 ">
          <div className="flex items-center justify-between border-b-[1px] border-gray-200">
            <Link
              href="#"
              className="flex items-start py-3 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
             <div className="relative inline-flex items--center">
                <Avatar>
                  <AvatarImage src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div class="absolute inline-flex items-center justify-center w-6 h-6  -top-2 -end-2 ">
                <FaCommentDots className="text-dark w-5 h-5" />

                </div>
                </div>

              <div className="ms-3">
                <div className="flex justify-between items-center">
                  <p className="font-sans text-sm">
                    <span className="text-blue-500 font-bold"> @lorem</span>{" "}
                    <strong>Commented</strong> on your post
                  </p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>

                <p className="text-sm mt-2 line-clamp-2 font-sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus omnis nobis quisquam inventore odio deserunt corporis
                  maiores, iure quo quidem a. Quo, a necessitatibus fugit
                  commodi porro nihil animi ducimus!
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-between border-b-[1px] border-gray-200">
            <Link
              href="#"
              className="flex items-center py-3 px-4 min-w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <div className="relative inline-flex items--center">
                <Avatar>
                  <AvatarImage src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div class="absolute inline-flex items-center justify-center w-6 h-6  -bottom-1 -end-2 ">
                <GoHeartFill className="text-red-400 w-5 h-5" />

                </div>
              </div>
              <div className="ms-3 flex w-full items-start justify-between">
                <p className="font-sans text-sm">
                  <span className="text-blue-500 font-bold"> @lorem</span>{" "}
                  <strong>Like</strong>  your post
                </p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
