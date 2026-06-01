import { footerCompany, footerPlatform, footerResources } from '@/lib/copy';
import Image from 'next/image';

export default function FooterSection() {
	return (
		<footer
			className="mt-12 grid grid-cols-2 gap-8 sm:mt-16 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-between lg:gap-16"
			data-node-id="35:278"
		>
			<div className="col-span-2 max-w-[280px] md:col-span-3 lg:col-span-1">
				<Image
					src="/images/footer-logo.svg"
					alt="Hayy.AI"
					width={121}
					height={30}
				/>
				<p className="mt-3 text-[14px] text-grey-800">
					AI-powered real estate platform connecting developers, agencies and
					buyers worldwide.
				</p>
				<div className="mt-4 flex gap-4">
					{[
						['/images/icons/linkedin.svg', 'LinkedIn'],
						['/images/icons/youtube.svg', 'YouTube'],
						['/images/icons/instagram.svg', 'Instagram'],
						['/images/icons/facebook.svg', 'Facebook'],
					].map(([src, label]) => (
						<Image key={label} src={src} alt={label} width={16} height={16} />
					))}
				</div>
			</div>
			<FooterColumn title="Platform" links={footerPlatform} />
			<FooterColumn title="Company" links={footerCompany} />
			<FooterColumn title="Resources" links={footerResources} />
			<div className="col-span-2 md:col-span-1 lg:col-span-1">
				<p className="text-[14px] font-semibold text-grey-800">Get in Touch</p>
				<div className="mt-4 space-y-3 text-[14px] text-black">
					<p className="flex items-center gap-3 break-all">
						<Image
							src="/images/icons/call.svg"
							alt=""
							width={24}
							height={24}
							className="shrink-0"
						/>
						+971 52 721 0980
					</p>
					<p className="flex items-center gap-3 break-all">
						<Image
							src="/images/icons/mail.svg"
							alt=""
							width={24}
							height={24}
							className="shrink-0"
						/>
						sales@hayy.ai
					</p>
					<p className="flex items-center gap-3 break-all">
						<Image
							src="/images/icons/web.svg"
							alt=""
							width={24}
							height={24}
							className="shrink-0"
						/>
						www.hayy.ai
					</p>
				</div>
			</div>
		</footer>
	);
}

function FooterColumn({
	title,
	links,
}: {
	title: string;
	links: readonly string[];
}) {
	return (
		<div>
			<p className="text-[14px] font-semibold text-grey-800">{title}</p>
			<ul className="mt-3 space-y-2.5">
				{links.map((link) => (
					<li key={link}>
						<a href="#" className="text-[14px] text-black hover:text-secondary">
							{link}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
