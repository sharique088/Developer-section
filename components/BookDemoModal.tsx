'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ButtonPrimary } from '@/components/ui/Button';
import { DEVELOPER_LOGIN_URL, demoFormBullets } from '@/lib/copy';
import Link from 'next/link';
import { ArrowRight, ChevronRight, X } from 'lucide-react';

type DemoTime = 'this-week' | 'next-week' | 'suggest';

type BookDemoModalProps = {
	onClose: () => void;
};

const inputClass =
	'h-[40px] w-full rounded-lg border border-black/15 bg-white px-4 text-sm outline-none transition-all placeholder:text-neutral-400 focus:border-secondary focus:ring-4 focus:ring-secondary/10';

const labelClass = 'mb-2 block text-sm font-medium text-neutral-800';

export function BookDemoModal({ onClose }: BookDemoModalProps) {
	const [demoTime, setDemoTime] = useState<DemoTime>('this-week');

	const [message, setMessage] = useState('');

	// useEffect(() => {
	// 	document.body.style.overflow = 'hidden';

	// 	return () => {
	// 		document.body.style.overflow = 'auto';
	// 	};
	// }, []);

	return (
		<div
			className="fixed inset-0 z-[999] flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center"
			onClick={onClose}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="relative flex h-[100dvh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:h-auto sm:max-h-[92vh] sm:max-w-6xl sm:rounded-3xl"
			>
				{/* Close */}
				<button
					onClick={onClose}
					className="absolute right-5 top-2 z-50 flex  items-center justify-center rounded-full bg-black/5 p-2 text-xl transition hover:bg-black/10 cursor-pointer "
				>
					<X size={15} />
				</button>

				<div className="grid h-full overflow-hidden lg:grid-cols-[1fr_2fr]">
					{/* LEFT PANEL */}
					<div className="overflow-y-auto border-b border-black/10 bg-neutral-50 px-6 py-8 sm:px-10 lg:border-b-0 lg:border-r ">
						<div className="w-[128px] h-[32px] relative">
							<Image
								src="/images/logo.svg"
								alt="Hayy AI"
								fill
								priority
								className="object-cover"
							/>
						</div>

						<h2 className="mt-3 text-[24px] font-bold leading-[100%] text-neutral-900">
							Book a Demo with
							<span className="block text-secondary">Hayy.AI</span>
						</h2>

						<p className="mt-2 max-w-sm text-base tracking-normal  text-neutral-600">
							Share your company details. We’ll book your{' '}
							<span className="text-secondary">Demo</span>.
						</p>

						<div className="mt-4 flex justify-center">
							<Image
								src="/images/calender.svg"
								alt="Schedule demo"
								width={199}
								height={210}
								className="h-auto"
							/>
						</div>

						<ul className="mt-10 space-y-4">
							{demoFormBullets.map((item) => (
								<li key={item.text} className="flex items-center gap-2">
									<Image
										src={item.icon}
										alt="bullet-icon"
										width={18}
										height={18}
									/>

									<span className="text-sm font-semibold text-[#303044]">
										{item.text}
									</span>
								</li>
							))}
						</ul>

						<div className="mt-4 border-t border-black/10 pt-4">
							<p className="text-sm text-neutral-500">Already registered?</p>

							<Link
								href={DEVELOPER_LOGIN_URL}
								className="mt-1 inline-flex text-sm font-medium text-secondary "
							>
								Sign in to list your projects
							</Link>
						</div>
					</div>

					{/* RIGHT PANEL */}
					<form
						className="flex h-full min-h-0 flex-col overflow-hidden px-6 py-6 sm:px-8 sm:py-6"
						onSubmit={(e) => {
							e.preventDefault();
							onClose();
						}}
					>
						{/* Scrollable Content */}
						<div className="flex-1 overflow-y-auto pr-2">
							<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
								<Field
									label="Company Name"
									placeholder="Your company name"
									required
								/>

								<Field
									label="Contact Person"
									placeholder="Full name"
									required
								/>

								<Field
									label="Work Email"
									type="email"
									placeholder="you@company.com"
									required
								/>

								<PhoneField />

								<Field
									label="Company Website"
									placeholder="https://yourcompany.com"
									required
								/>

								<Field
									label="Country / Region"
									placeholder="Select country"
									required
								/>

								<Field
									label="Project Type"
									placeholder="Select project type"
									required
								/>

								<Field
									label="Number of Projects"
									placeholder="Select range"
									required
								/>
							</div>

							{/* Demo Time */}
							<div className="mt-5">
								<p className={labelClass}>
									Preferred Demo Time <span className="text-red-500">*</span>
								</p>

								<div className="mt-2 flex flex-wrap gap-2">
									{(
										[
											['this-week', 'This Week'],
											['next-week', 'Next Week'],
											['suggest', 'Suggest Time'],
										] as const
									).map(([value, label]) => (
										<DemoTimeOption
											key={value}
											label={label}
											selected={demoTime === value}
											onSelect={() => setDemoTime(value)}
										/>
									))}
								</div>
							</div>

							{/* Message */}
							<div className="mt-5">
								<label htmlFor="message" className={labelClass}>
									Message
								</label>

								<textarea
									id="message"
									value={message}
									onChange={(e) => setMessage(e.target.value.slice(0, 500))}
									placeholder="Tell us what you'd like to discuss..."
									className="min-h-[90px] w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-none transition-all placeholder:text-neutral-400 focus:border-secondary focus:ring-4 focus:ring-secondary/10"
								/>

								<p className="mt-1 text-right text-xs text-neutral-500">
									{message.length}/500
								</p>
							</div>
						</div>

						{/* Footer */}
						<div className="mt-5 flex shrink-0 flex-col gap-4 border-t border-black/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
							<div className="flex items-start gap-3">
								<Image
									src="/images/icons/lock-outline.svg"
									alt=""
									width={20}
									height={20}
								/>

								<p className="max-w-sm text-xs leading-5 text-neutral-500">
									Your information is encrypted and securely stored.
								</p>
							</div>

							<ButtonPrimary type="submit" className="h-11 rounded-xl px-6  ">
								<span className="text-gray-800">Request Demo</span>
								<ArrowRight size={18} className='text-gray-800'/>
							</ButtonPrimary>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

function Field({
	label,
	placeholder,
	type = 'text',
  required
}: {
	label: string;
	placeholder: string;
	type?: string
  required?: boolean
}) {
	return (
		<div>
			<label className={labelClass}>{label} {required && <span className='text-red-500'>*</span>}</label>
			<input type={type} placeholder={placeholder} className={inputClass} />
		</div>
	);
}

function PhoneField() {
	return (
		<div>
			<label className={labelClass}>Phone Number / WhatsApp *</label>

			<div className="flex gap-3">
				<div className="flex h-11 items-center justify-center gap-2 rounded-lg border border-black/15 px-4">
					<Image src="/images/uae.svg" alt='uae-flag' width={18} height={18} />
					<span className="text-sm">+971</span>
				</div>

				<input
					type="tel"
					placeholder="Enter phone number"
					className={inputClass}
				/>
			</div>
		</div>
	);
}

function DemoTimeOption({
	label,
	selected,
	onSelect,
}: {
	label: string;
	selected: boolean;
	onSelect: () => void;
}) {
	return (
		<button
			type="button"
			onClick={onSelect}
			className={`flex h-11 items-center gap-3 rounded-xl border px-5 text-sm transition-all ${
				selected
					? 'border-secondary bg-secondary/5 ring-4 ring-secondary/10'
					: 'border-black/10 hover:border-black/20'
			}`}
		>
			<div
				className={`size-3 rounded-full border-2 ${
					selected ? 'border-secondary bg-secondary' : 'border-neutral-400'
				}`}
			/>

			<span>{label}</span>
		</button>
	);
}
