'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ButtonPrimary } from '@/components/ui/Button';
import { DEVELOPER_LOGIN_URL, demoFormBullets } from '@/lib/copy';
import Link from 'next/link';
import { ArrowRight, ChevronRight, X } from 'lucide-react';
import { useFormik } from 'formik';
import { demoFromSchema } from '@/features/book-demo-schema';


type BookDemoModalProps = {
	onClose: () => void;
};

const inputClass =
	'h-[40px] w-full rounded-lg border border-black/15 bg-white px-3 sm:px-4 text-sm outline-none transition-all placeholder:text-neutral-400 focus:border-secondary focus:ring-4 focus:ring-secondary/10';

const labelClass = 'mb-2 block text-xs sm:text-sm font-medium text-neutral-800';

export function BookDemoModal({ onClose }: BookDemoModalProps) {
	const [demoTime, setDemoTime] = useState('');
	const [mounted, setMounted] = useState(false);
	const [loading , setLoading] = useState(false);



	useEffect(() => {
		setMounted(true);
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	const { values, errors, touched, handleChange, handleBlur, handleSubmit , setFieldValue} =
		useFormik({
			initialValues: {
				company_name: '',
				contact_person: '',
				work_email: '',
				phone_number: '',
				company_website: '',
				country_region: '',
				preferred_time: demoTime || '',
				message: '',
			},
			validationSchema: demoFromSchema,
			onSubmit: (values) => {
				setLoading(true)
				console.log('Button Clicked..');
				console.log(values);
				setTimeout(() => {
					setLoading(false)
					onClose()
				},3000)
			},
		});

	if (!mounted) return null;

	return (
		<div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm sm:items-center px-4 ">
			<div className="relative flex h-[90vh] lg:h-[100vh] w-full  flex-col overflow-y-auto lg:overflow-hidden  bg-white shadow-2xl sm:min-h-[90vh] sm:max-w-[95vw] rounded-3xl md:max-h-[92vh] md:max-w-[90vw] lg:max-w-6xl">
				{/* Close */}
				<button
					onClick={onClose}
					className="absolute right-3 top-2 z-50 flex cursor-pointer items-center justify-center rounded-full bg-black/5 p-1.5 text-lg transition hover:bg-black/10 sm:right-5 sm:p-2 sm:text-xl"
				>
					<X size={14} className="sm:size-[15px]" />
				</button>

				<div className="h-auto overflow-y-auto flex flex-col lg:flex-row py-4 lg:py-0 ">
					{/* LEFT PANEL - Shows SECOND on mobile */}
					<div className=" w-full  bg-neutral-50 px-4 py-2 sm:px-6 md:px-8  lg:max-w-[400px] lg:h-full lg:overflow-y-auto lg:border-t-0 lg:border-r lg:px-10 flex flex-col justify-between scrollbar-width:none">
						{/* Top Section Wrapper to separate content cleanly from the footer links */}
						<div className="w-full flex flex-col ">
							{/* Logo Container - Made relative with standard mobile-first aspect sizing */}
							<div className="relative h-7 w-28 sm:h-0 sm:w-32">
								<Image
									src="/images/logo.svg"
									alt="Hayy AI"
									fill
									priority
									className="object-contain object-left"
								/>
							</div>

							{/* Header - Fixed line heights and absolute font sizes to match uniform scaling layout patterns */}
							<h2 className="mt-4 text-xl font-bold leading-tight text-neutral-900 sm:text-2xl md:text-3xl">
								Book a Demo with{' '}
								<span className="block text-secondary lg:inline-block">
									Hayy.AI
								</span>
							</h2>

							{/* Subtitle text */}
							<p className="mt-2 text-sm tracking-normal text-neutral-600 sm:text-base">
								Share your company details. We’ll book your{' '}
								<span className="text-secondary font-medium">Demo</span>.
							</p>

							{/* Hero Calendar Illustration - Optimized spacing constraints across viewports */}
							<div className="mt-6 flex w-full justify-center lg:mt-8">
								<Image
									src="/images/calender.svg"
									alt="Schedule demo"
									width={199}
									height={210}
									className="h-auto w-full max-w-[140px] object-contain sm:max-w-[170px] md:max-w-[199px]"
								/>
							</div>

							{/* Checklist Features Block */}
							<ul className="mt-6 sm:mt-8 sm:space-y-4 px-2 py-2.5">
								{demoFormBullets.map((item) => (
									<li key={item.text} className="flex items-start gap-4">
										<div className="relative mt-0.5 h-4 w-4 shrink-0 sm:h-5 sm:w-5">
											<Image
												src={item.icon}
												alt="bullet-icon"
												fill
												className="object-contain"
											/>
										</div>
										<span className="text-xs font-semibold text-neutral-800 sm:text-sm leading-normal">
											{item.text}
										</span>
									</li>
								))}
							</ul>

							<div className="mt-4 border-t border-black/10 pt-2  ">
								<p className="text-xs text-neutral-500 sm:text-sm">
									Already registered?
								</p>

								<Link
									href={DEVELOPER_LOGIN_URL}
									className="mt-1 inline-flex text-xs font-medium text-secondary hover:underline sm:text-sm transition-all duration-200"
								>
									Sign in to list your projects
								</Link>
							</div>
						</div>
					</div>

					{/* RIGHT PANEL (FORM) - Shows FIRST on mobile */}
					<form
						onSubmit={handleSubmit}
						className=" flex w-full flex-col px-4 py-6 sm:px-6 md:px-8  lg:h-full lg:max-h-screen"
					>
						<div className="flex-1 pr-1 sm:pr-2 lg:overflow-y-auto lg:[scrollbar-width:none] lg:[-ms-overflow-style:none] lg:[&::-webkit-scrollbar]:hidden">
							<div className="mb-6 block ">
								<h3 className="text-xl font-bold text-neutral-900">
									Request a Demo
								</h3>
								<p className="mt-1 text-sm text-neutral-600">
									Fill in your details to get started
								</p>
							</div>

							{/* Form Inputs Grid System */}
							<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
								<Field
									label="Company Name"
									placeholder="Your company name"
									name="company_name"
									value={values.company_name}
									error={errors.company_name}
									touched={touched.company_name}
									onChange={handleChange}
									onBlur={handleBlur}
									required
								/>

								<Field
									label="Contact Person"
									placeholder="Full name"
									required
									name="contact_person"
									value={values.contact_person}
									error={errors.contact_person}
									touched={touched.contact_person}
									onChange={handleChange}
									onBlur={handleBlur}
								/>

								<Field
									label="Work Email"
									type="email"
									placeholder="you@company.com"
									required
									name="work_email"
									value={values.work_email}
									error={errors.work_email}
									touched={touched.work_email}
									onChange={handleChange}
									onBlur={handleBlur}
								/>

								<PhoneField
									name="phone_number"
									value={values.phone_number}
									error={errors.phone_number}
									touched={touched.phone_number}
									onChange={handleChange}
									onBlur={handleBlur}
								/>

								<Field
									label="Company Website"
									placeholder="https://yourcompany.com"
									name="company_website"
									value={values.company_website}
									error={errors.company_website}
									touched={touched.company_website}
									onChange={handleChange}
									onBlur={handleBlur}
									required
								/>

								<Field
									label="Country / Region"
									placeholder="Select country"
									name="country_region"
									value={values.country_region}
									error={errors.country_region}
									touched={touched.country_region}
									onChange={handleChange}
									onBlur={handleBlur}
									required
								/>
							</div>

							{/* Preferred Demo Selection Buttons */}
							<div className="mt-5 sm:mt-6">
								<p className={labelClass}>
									Preferred Demo Time <span className="text-red-500">*</span>
								</p>

								{/* flex-wrap ensures these buttons wrap into grid rows safely on narrow devices */}
								<div className="mt-2 flex flex-wrap gap-2">
									<div className="flex  gap-4 ">
										{['This Week', 'Next Week', 'Suggest Time'].map(
											(item, idx) => (
												<DemoTimeOption
													key={idx}
													label={item}
													selected={demoTime === item}
													onSelect={() => {
														setDemoTime(item);
														setFieldValue('preferred_time', item);
													}}
												/>
											),
										)}
										{/* {demoTime === 'suggest' && (
											<Calendar
												value={date}
												onChange={(e) => setDate(e.value)}
											/>
										)} */}
									</div>
								</div>
								{errors.preferred_time && touched.preferred_time && (
									<span className="mt-1.5 block text-xs font-medium text-red-500">
										{errors.preferred_time}
									</span>
								)}
							</div>

							{/* Message Input Box */}
							<div className="mt-5 sm:mt-6">
								<label htmlFor="message" className={labelClass}>
									Message
								</label>

								<textarea
									id="message"
									name="message"
									value={values.message}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="Tell us what you'd like to discuss..."
									className="min-h-[100px] w-full rounded-xl border border-black/15 px-3 py-2.5 text-sm outline-none transition-all placeholder:text-neutral-400 focus:border-secondary focus:ring-4 focus:ring-secondary/10 sm:min-h-[110px] sm:px-4 sm:py-3"
								/>
								{errors.message && touched.message && (
									<span className="mt-1 block text-xs font-medium text-red-500">
										{errors.message}
									</span>
								)}

								<p className="mt-1 text-right text-xs text-neutral-400">
									{values.message.length}/500
								</p>
							</div>
						</div>

						<div className="mt-6 flex shrink-0 flex-col gap-4 border-t border-black/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
							<div className="flex items-start gap-2.5 max-w-xs sm:max-w-md">
								<Image
									src="/images/icons/lock-outline.svg"
									alt=""
									width={18}
									height={18}
									className="mt-0.5 shrink-0 sm:h-5 sm:w-5"
								/>
								<p className="text-xs leading-normal text-neutral-500">
									Your information is encrypted and securely stored.
								</p>
							</div>

							<ButtonPrimary
								type="submit"
								className="w-full sm:w-auto h-11 rounded-xl px-6 text-sm font-semibold flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
							>
								<span className="text-gray-800">
									{loading ? 'Requesting...' : 'Request Demo'}
								</span>
								<ArrowRight size={18} className="text-gray-800" />
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
	required,
	name,
	value,
	error,
	touched,
	onChange,
	onBlur,
}: {
	label: string;
	placeholder: string;
	type?: string;
	required?: boolean;
	name: string;
	value?: string;
	error?: string;
	touched?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}) {
	return (
		<div>
			<label className={labelClass}>
				{label} {required && <span className="text-red-500">*</span>}
			</label>
			<input
				name={name}
				value={value}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				className={inputClass}
			/>
			{error && touched && (
				<span className="text-[10px] sm:text-xs text-red-500 mt-1 block">
					{error}
				</span>
			)}
		</div>
	);
}

function PhoneField({
	name,
	value,
	error,
	touched,
	onChange,
	onBlur,
}: {
	name: string;
	value: string;
	error?: string;
	touched?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}) {
	return (
		<div>
			<label className={labelClass}>Phone Number / WhatsApp *</label>

			<div className="flex gap-2 sm:gap-3">
				<div className="flex h-10 sm:h-11 items-center justify-center gap-1.5 sm:gap-2 rounded-lg border border-black/15 px-2 sm:px-4">
					<Image
						src="/images/uae.svg"
						alt="uae-flag"
						width={14}
						height={14}
						className="sm:w-[18px] sm:h-[18px]"
					/>
					<span className="text-xs sm:text-sm">+971</span>
				</div>

				<input
					type="string"
					name={name}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					placeholder="Enter phone number"
					className={inputClass}
				/>
			</div>
			{error && touched && (
				<span className="text-[10px] sm:text-xs text-red-500 mt-1 block">
					{error}
				</span>
			)}
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
			className={`flex h-9 sm:h-11 items-center gap-2 sm:gap-3 rounded-xl border px-3 sm:px-5 text-xs sm:text-sm transition-all cursor-pointer ${
				selected
					? 'border-secondary bg-secondary/5 ring-4 ring-secondary/10'
					: 'border-black/10 hover:border-black/20'
			}`}
		>
			<div
				className={`size-2.5 sm:size-3 rounded-full border-2 ${
					selected ? 'border-secondary bg-secondary' : 'border-neutral-400'
				}`}
			/>

			<span>{label}</span>
		</button>
	);
}
