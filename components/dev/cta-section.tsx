'use client';
import Image from 'next/image';
import { useState } from 'react';
import { BookDemoModal } from '../BookDemoModal';

export default function CTASection() {
	const [openDemoBox, setOpenDemoBox] = useState<boolean>(false);

	function handleDemoClose() {
		setOpenDemoBox(false);
	}
	return (
		<>
			<section className="relative mt-10 overflow-hidden rounded-[10px] border border-black/[0.03] bg-teal-cta px-5 py-8 shadow-[0px_0px_4px_rgba(0,0,0,0.15)] sm:mt-14 sm:px-8 lg:h-[170px] lg:px-10">
				{/* Skyline */}
				<div className="pointer-events-none absolute bottom-0 right-0 h-full w-[420px] lg:w-[550px]">
					<Image
						src="/images/cta-skyline.png"
						alt=""
						fill
						priority
						className="object-contain object-right-bottom"
					/>
				</div>

				{/* Content */}
				<div className="relative z-10 flex h-full flex-col gap-6 lg:grid lg:grid-cols-[320px_1fr] items-center">
					{/* Left Content */}
					<div className="max-w-[320px] text-center lg:text-left">
						<h2 className="text-[24px] font-semibold leading-tight text-grey-800">
							Ready to List Your Project?
						</h2>

						<p className="mt-3 text-[14px] leading-[1.5] text-grey-700">
							Join a growing network of developers who trust Hayy.AI and our
							Smart Agencies to sell their projects faster.
						</p>
					</div>

					{/* CTA */}
					<div className="flex justify-center lg:justify-center">
						<button
							type="button"
							onClick={() => setOpenDemoBox(true)}
							className="flex h-[58px] items-center gap-4 rounded-full bg-[#2F2D47] pl-1 pr-7 shadow-sm transition-transform duration-300 hover:scale-[1.02] cursor-pointer "
						>
							<span className="flex size-[50px] items-center justify-center rounded-full border border-secondary bg-[#EFF9FA]">
								<Image src="/images/robot.svg" alt="" width={22} height={28} />
							</span>

							<span className="text-[18px] font-semibold text-white">
								Book a Demo
							</span>
						</button>
					</div>
				</div>
			</section>
			{openDemoBox && <BookDemoModal onClose={handleDemoClose} />}
		</>
	);
}