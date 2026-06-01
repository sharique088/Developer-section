'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BookDemoModal } from './BookDemoModal';

export function HeroSection() {
	const [openDemoBox, setOpenDemoBox] = useState(false);

	return (
		<>
			<section className="relative mt-4 overflow-hidden sm:mt-6">
				<div className="grid items-center  gap-10 lg:grid-cols-[460px_1fr] lg:gap-0">
					{/* LEFT CONTENT */}
					<div className="relative z-20 flex flex-col items-center px-5 text-center sm:px-8 md:px-10 lg:items-start lg:px-14 lg:py-10 lg:text-left">
						<h1 className="text-[34px] font-bold leading-[1.1] text-grey-800 sm:text-[42px] lg:text-[52px]">
							List Smarter.
							<br />
							<span className="text-secondary">Sell Faster.</span>
						</h1>

						<p className="mt-5 max-w-[520px] text-[15px] leading-7 text-grey-700 sm:text-[16px]">
							List off-plan projects on Hayy.AI and connect with qualified
							global buyers through AI-powered matching.
						</p>

						<button
							type="button"
							onClick={() => setOpenDemoBox(true)}
							className="mt-7 flex h-[58px] items-center gap-4 rounded-full bg-grey-800 pl-1 pr-7 shadow-sm transition-transform duration-300 hover:scale-[1.02] cursor-pointer "
						>
							<span className="flex size-[50px] items-center justify-center rounded-full border border-secondary bg-[#EFF9FA]">
								<Image src="/images/robot.svg" alt="" width={20} height={27} />
							</span>

							<span className="text-[17px] font-semibold text-white">
								Book a Demo
							</span>
						</button>
					</div>

					{/* RIGHT IMAGE */}
					<div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[560px]">
						{/* Desktop Gradient */}
						{/* <div className="absolute inset-0 z-10 hidden bg-gradient-to-r from-white via-transparent/2 to-transparent lg:block" /> */}

						{/* Mobile Gradient
						<div className="absolute inset-0 z-10 bg-gradient-to-b from-white/5 via-transparent to-transparent lg:hidden" /> */}

						<Image
							fill
							src="/images/hero-bg.svg"
							alt="Dubai-skyline"
							priority
							className="
								object-contain
								object-center
								sm:object-cover
								lg:object-contain
								xl:object-cover
							"
						/>
					</div>
				</div>
			</section>

			{openDemoBox && <BookDemoModal onClose={() => setOpenDemoBox(false)} />}
		</>
	);
}
