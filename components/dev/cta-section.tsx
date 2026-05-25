'use client'
import Image from 'next/image';
import React, { useCallback, useState } from 'react'
import { ButtonPrimary, ButtonSecondary } from '../ui/Button';

export default function CTASection() {
   const [demoOpen, setDemoOpen] = useState(false);
  
    const openDemo = useCallback(() => setDemoOpen(true), []);
    const closeDemo = useCallback(() => setDemoOpen(false), []);
  
  return (
		<section
			className="relative mt-10 overflow-hidden rounded-[10px] border border-black/[0.01] bg-teal-cta shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] sm:mt-14"
			data-node-id="30:15"
		>
			<div className="flex flex-col gap-6 p-5 sm:p-8 lg:grid lg:grid-cols-2 lg:items-center">
				<div className="text-center lg:text-left">
					<h2 className="text-[16px] font-semibold text-grey-800">
						Ready to List Your Project?
					</h2>
					<p className="mx-auto mt-2 max-w-[383px] text-[14px] text-grey-700 lg:mx-0">
						Join a growing network of developers who trust Hayy.AI and our Smart
						Agencies to sell their projects faster.
					</p>
					<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-[17px] lg:justify-start">
						<ButtonPrimary
							type="button"
							onClick={openDemo}
							className="w-full sm:w-auto"
							data-node-id="30:3"
						>
							List your Project
							<Image
								src="/images/icons/arrow-white.svg"
								alt=""
								width={15}
								height={15}
							/>
						</ButtonPrimary>
						<ButtonSecondary
							type="button"
							onClick={openDemo}
							className="w-full sm:w-auto"
							data-node-id="30:6"
						>
							<span className="px-1.5">Book a Demo</span>
							<Image
								src="/images/icons/calendar.svg"
								alt=""
								width={24}
								height={24}
							/>
						</ButtonSecondary>
					</div>
				</div>
				<div className="relative h-[140px] w-full sm:h-[174px]">
					<Image
						src="/images/cta-skyline.png"
						alt=""
						fill
						className="object-contain object-center lg:object-right"
					/>
				</div>
			</div>
		</section>
	);
}
