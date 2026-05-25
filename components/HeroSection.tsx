'use client'
import Image from "next/image";
import { useState } from "react";
import { BookDemoModal } from "./BookDemoModal";



export function HeroSection() {
  const [openDemoBox , setOpenDemoBox] = useState<Boolean>(false)
  function handleDemoClose(){
    setOpenDemoBox(false)
  }
  return (
		<>
			<section
				className="relative mt-4 grid grid-cols-1 items-center gap-6 sm:mt-6 sm:gap-8 lg:grid-cols-2 lg:items-start lg:gap-8"
				data-node-id="2:19"
			>
				<div className="z-10 w-full max-w-[507px] pt-2 sm:pt-8">
					<h1
						className="text-[32px] font-bold leading-tight sm:text-[36px] lg:text-[40px]"
						data-node-id="2:39"
					>
						<span className="text-grey-800">List Smarter.</span>
						<br />
						<span className="text-secondary">Sell Faster.</span>
					</h1>
					<p
						className="mt-4 text-[15px] leading-normal text-grey-800 sm:mt-6 sm:text-[16px]"
						data-node-id="2:40"
					>
						List off-plan projects on Hayy.AI and connect with qualified global
						buyers through AI matching.
					</p>
					<button
						type="button"
						onClick={() => setOpenDemoBox(true)}
						className="mt-6 flex w-full max-w-sm items-center justify-center gap-3 rounded-[30px] bg-grey-800 py-1 pl-1 pr-[17px] sm:mt-10 sm:w-auto sm:justify-start"
						data-node-id="73:1395"
					>
						<span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-secondary bg-[#eff9fa]">
							<img
								src="/images/robot.svg"
								alt=""
								width={20}
								height={27}
								className="h-[27px] w-5"
							/>
						</span>
						<span className="text-[16px] font-semibold text-white cursor-pointer ">
							Book a Demo
						</span>
					</button>
				</div>

				<div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-lg bg-[#e8f6f7] sm:aspect-[903/517] sm:max-w-none lg:h-[518px] lg:max-h-[518px]">
					<Image
						fill
						src="/images/hero-bg.png"
						alt="Dubai skyline"
						className="absolute inset-0 h-full w-full object-cover"
						// fetchPriority="high"
						priority
					/>
					<div className="absolute right-[5%] top-[15%] size-[min(55vw,220px)] sm:right-[10%] sm:top-[130px] sm:size-[289px]">
						<img
							src="/images/robot-glow.svg"
							alt=""
							className="pointer-events-none absolute inset-0 h-full w-full object-contain"
						/>
						<div className="absolute inset-0 flex items-center justify-center">
							<img
								src="/images/robot.svg"
								alt="Hayy.AI bot"
								width={183}
								height={253}
								className="h-auto w-[70%] max-w-[183px] sm:w-[min(183px,70%)]"
							/>
						</div>
					</div>
				</div>
			</section>
			{openDemoBox && <BookDemoModal onClose={handleDemoClose} />}
		</>
	);
}
