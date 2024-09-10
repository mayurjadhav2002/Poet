"use client";
import {Button} from "@headlessui/react";
import {
	ChevronDownIcon,
	Cross1Icon,
	DropdownMenuIcon,
	HamburgerMenuIcon,
	HomeIcon,
} from "@radix-ui/react-icons";
import {Icon} from "@radix-ui/themes/dist/cjs/components/callout";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
const Links = [
	{name: "Home", href: "#", icon: HomeIcon},
	{name: "About", href: "#", icon: HomeIcon},
	{name: "Contact", href: "#", icon: HomeIcon},
	{name: "Services", href: "#", icon: HomeIcon},
];
function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<div className='w-full top-0'>
			<div className='container py-4 mx-auto flex justify-between items-center'>
				<Image
					src={"/image/Logo.png"}
					width={70}
					height={70}
					alt={"shayar logo"}
				/>

				<div className='hidden md:flex items-center gap-10'>
					{Links.map((link, index) => (
						<Link key={index} href='#' className='text-[#212832]'>
							{link.name}
						</Link>
					))}
				</div>

				<div className='hidden md:flex items-center gap-10'>
					<Link href='#' className='text-[#212832]'>
						Login
					</Link>
					<Link
						href='#'
						className='text-[#212832] px-3 py-1.5 text-center border-[#212832] border-[1.5px] rounded-lg'
					>
						Sign Up
					</Link>
					<Link
						href='#'
						className='text-[#212832] flex items-center gap-2'
					>
						En <ChevronDownIcon />
					</Link>
				</div>

				{/* Mobile Menu Icon */}
				<div className='md:hidden flex items-center z-20'>
					<button onClick={toggleMenu}>
						{isMenuOpen ? (
							<Cross1Icon className='w-6 h-6 text-[#212832]' />
						) : (
							<HamburgerMenuIcon className='w-6 h-6 text-[#212832]' />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed inset-0 scroll-none bg-white transform ${
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 ease-in-out md:hidden z-10`}
			>
				<div className='flex flex-col w-11/12 space-y-5 mx-auto py-4 mt-10'>
					{Links.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							className='text-[#212832] flex items-center gap-2 text-lg'
							onClick={toggleMenu}
						>
							<link.icon className='w-6 h-6' />
							{link.name}
						</Link>
					))}

					<Link
						href='#'
						className='w-full text-[#212832] px-3 py-1.5 text-center border-[#212832] border-[1.5px] rounded-lg'
					>
						Login
					</Link>
					<Link
						href='#'
						className='w-full text-white px-3 py-1.5 text-center bg-blue-600 border-blue-600 border-[1.5px] rounded-lg'
					>
						Sign Up
					</Link>
					<Link
						href='#'
						className='text-[#212832] flex items-center gap-2'
					>
						En <ChevronDownIcon />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
