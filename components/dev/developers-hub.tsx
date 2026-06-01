'use client'
import { DEVELOPER_HUB_URL, devHubPoint } from '@/lib/copy'
import { ArrowRight, Building, Building2 } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function DevelopersHub() {
  return (
		<section
			className="mt-10 grid grid-cols-1 xl:grid-cols-2 tems-center gap-8 rounded-[10px] border border-black/[0.01] bg-teal-muted p-5 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] sm:mt-14 sm:gap-10 sm:p-8 lg:flex-row lg:items-start lg:gap-10"
			data-node-id="25:107"
		>
			{/* Left Side Image  */}
			<div className="relative aspect-[625/379] w-full max-w-[625px] shrink-0 lg:h-[379px] lg:aspect-auto">
				<Image
					src="/images/hub-mockup.png"
					alt="Developer Hub dashboard"
					fill
					className="object-cover"
				/>
			</div>

			{/* Right Side Content */}
			<div className="w-full text-center lg:text-left flex flex-col gap-6">
				<p className="text-[14px] font-semibold text-grey-800">Developer Hub</p>
				<h2 className="text-[22px] font-semibold text-secondary sm:text-[24px]">
					Manage. Monitor. Grow.
				</h2>
				<p className="text-[16px] font-medium text-grey-800 sm:text-[16px]">
					Your all-in-one hub to manage inventory, track leads, collaborate with
					Smart Agencies and close more deals.
				</p>

				<div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
					{devHubPoint.map((point, index) => (
						<div key={point.id} className="relative flex lg:flex-col gap-3 px-4 items-center lg:items-start lg:justify-center p-4">
							{/* Gradient Divider */}
							{/* {index !== devHubPoint.length - 1 && (
								<div className="absolute right-0 bottom-0 h-full w-px bg-gradient-to-b from-transparent via-secondary to-transparent" />
							)} */}

							<Image
								src={point.icon}
								alt={point.descp}
								width={35}
								height={35}
							/>

							<span className="text-sm font-medium leading-[104%]">
								{point.descp}
							</span>
						</div>
					))}
				</div>

				<Link
					href={DEVELOPER_HUB_URL}
					className="flex h-12.25 max-w-fit items-center justify-start gap-3 rounded-[10px] border-2 border-secondary bg-secondary/80 px-4 text-[16px] font-semibold text-grey-800  sm:mt-8 sm:w-auto sm:inline-flex"
					data-node-id="25:101"
				>
					<Image
						src="/images/building.svg"
						alt="building"
						width={25}
						height={25}
					/>

					<span>Explore Developer Hub</span>
					<ArrowRight size={20} />
				</Link>
			</div>
		</section>
	);
}
