import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@radix-ui/react-dropdown-menu";
import {
  DotsHorizontalIcon,
  DotsVerticalIcon,
  HeartFilledIcon,
  Share2Icon,
} from "@radix-ui/react-icons";
import { ScrollArea } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { BsHeartPulseFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";

function HomePage() {
  return (
    <ScrollArea
      type="always"
      scrollbars="vertical"
      className="w-full"
      style={{ height: "100vh" }}
    >
      <div className="p-4 flex justify-between items-center">
        <p className="text-bold text-xl font-bold palanquin-dark-regular">
          Feed
        </p>
        <ul className="flex items-center gap-3">
          <li>recent</li>
          <li>popular</li>
          <li>recommeded</li>
        </ul>
      </div>
      <div className="px-10 grid grid-flow-row gap-3">
        {[...Array(1)].map((_, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-violet-400 via-blue-500 to-indigo-600 p-5 rounded-xl"
          >
            <div className="flex items-center justify-between">
              <Link href={"#"} className="flex items-start cursor-pointer">
                <Avatar>
                  <AvatarImage src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="ms-2 flex flex-col ">
                  <div className="flex items-start gap-2">
                    <Label className="font-semibold text-gray-700">
                      Jack Jack
                    </Label>
                    <button className="py-1 px-2 me-2  text-xs font-medium text-gray-100 focus:outline-none bg-blue-600 rounded-full border border-gray-200 hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Follow
                    </button>
                  </div>

                  <span className="font-sans text-xs -mt-1 text-gray-500 ">
                    2 hours ago
                  </span>
                </div>
              </Link>
              <div className="flex items-center gap-3">
                <span className="flex text-xs gap-1 text-gray-600">
                  <GoHeartFill className="w-6 h-6 text-red-500" />
                  123
                </span>
                <div className="p-1 rounded-full  border-[1px] border-gray-300">
                  <DotsVerticalIcon className="text-black" />
                </div>
              </div>
            </div>
            {/* <div className="bg-gray-300 min-h-72 max-h-80 mt-3"></div> */}
            <div className="flex flex-col justify-center items-center text-center font-bold mt-3 gap-2 ">
              <div className="line-clamp-[8] ">
                <p>Keh bhi do, ek baar,</p>
                <p>Dil ki baat, jo hai pyar,</p>
                <p>Chhupaye rakhna, kyun,</p>
                <p>Jab dil se hai ek junoon.</p>
                <br />
                <p>Chandni raat mein, baatein humari,</p>
                <p>Jaan le jaayein, yeh yaari,</p>
                <p>Raahon mein khushboo, phoolon ki,</p>
                <p>Saath chalein, sapno ki.</p>
                <br />
                <p>Har pal ek nayi kahani,</p>
                <p>Suno dil se, ek purani,</p>
                <p>Keh bhi do, zindagi ki baat,</p>
                <p>Har ek pal, hai bas pyar ki raat.</p>

                <br />
                <p>Har pal ek nayi kahani,</p>
                <p>Suno dil se, ek purani,</p>
                <p>Keh bhi do, zindagi ki baat,</p>
                <p>Har ek pal, hai bas pyar ki raat.</p>
              </div>
              <div className="w-fit bg-red-50 text-blue-600 px-3 py-1  ">
                Read more
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

export default HomePage;
