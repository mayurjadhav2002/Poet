import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
	return (
		<div className='container flex flex-col md:flex-row justify-evenly items-center'>
			<Image
				src={"/image/Decore (1).svg"}
				width={800}
				height={700}
				className='absolute right-0 top-0  -z-[20]'
			/>
			<div className='space-y-4 md:space-y-7'>
				<p className='uppercase font-bold text-[#DF6951]'>
					Best Destinations around the world
				</p>
				<h1 className='text-4xl md:text-7xl font-bold text-[#181E4B]'>
					Travel, enjoy and live a new and full life
				</h1>
				<p className='text-[#5E6282] text-[16px] my-3'>
					Built Wicket longer admire do barton vanity itself do in it.
					Preferred to sportsmen it engrossed listening. Park gate
					sell they west hard for the.
				</p>
				<div className='flex items-center gap-8 overflow-visible'>
					<Link
						href='#'
						className='text-white bg-[#5E3BE1] px-3 md:px-6 py-2 md:py-3 text-center rounded-lg shadow-blue-100 shadow-xl'
					>
						Find out more
					</Link>
					<img src={"/image/PlayButton.jpg"} className=' h-10' />
				</div>
			</div>
			<Image
				src={"/image/GirlAndPlan.png"}
				width={800}
				height={800}
				className='md:mt-0 mt-4'
			/>
		</div>
	);
}

export default Hero;
