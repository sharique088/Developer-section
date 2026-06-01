import Image from "next/image";

const SECTION_W = 1357;
const SECTION_H = 408;

function pos(left: number, top: number, width?: number, height?: number) {
  return {
    left: `${(left / SECTION_W) * 100}%`,
    top: `${(top / SECTION_H) * 100}%`,
    ...(width !== undefined ? { width: `${(width / SECTION_W) * 100}%` } : {}),
    ...(height !== undefined ? { height: `${(height / SECTION_H) * 100}%` } : {}),
  };
}

export function AdvantageSection() {
  return (
		<section
			className="relative mt-8 w-full overflow-hidden rounded-[10px] border border-black/[0.01] bg-[rgba(34,177,183,0.07)] p-5 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] sm:mt-10 sm:p-6 lg:p-0"
			data-node-id="6:231"
		>
			{/* ——— Mobile / tablet stacked layout ——— */}
			<div className="lg:hidden">
				<p className="text-[14px] font-semibold text-grey-800">
					The Hayy.AI Advantage
				</p>
				<h2 className="mt-2 text-[22px] font-semibold leading-tight text-grey-800 sm:text-[24px]">
					Smart Agencies.
					<br />
					<span className="text-secondary">Real Results.</span>
				</h2>
				<p className="mt-3 text-[16px] leading-normal text-grey-700 sm:text-[16px]">
					Our Smart Agencies are the front line of your success. They understand
					your projects, engage buyers, answer inquiries and convert interest
					into real opportunities.
				</p>

				<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
					<StatBlock icon="/images/icons/people.svg" label="Smart Agencies" />
					<StatBlock
						icon="/images/icons/globe-stat.svg"
						label="Global Presence"
					/>
					<StatBlock
						icon="/images/icons/protect.svg"
						label="Qualified by AI"
						className="sm:col-span-2"
					/>
				</div>

				<div className="mt-8">
					<div className="mx-auto mb-4 flex w-fit items-center rounded-[15px] border border-black/20 bg-white px-4 py-3 shadow-[0px_0px_2px_rgba(0,0,0,0.25)]">
						<p className="text-[15px] font-semibold text-grey-800 sm:text-[16px]">
							Buyer Enquiry
						</p>
					</div>

					<div className="flex flex-col gap-4">
						<FlowCardMobile type="agency" />
						<div className="flex justify-center" aria-hidden>
							<svg width="24" height="32" viewBox="0 0 24 32" fill="none">
								<path
									d="M12 0V28M12 28L6 22M12 28L18 22"
									stroke="#22b1b7"
									strokeWidth="2"
									strokeDasharray="4 4"
								/>
							</svg>
						</div>
						<FlowCardMobile type="developer" />
						<div className="flex justify-center" aria-hidden>
							<svg width="24" height="32" viewBox="0 0 24 32" fill="none">
								<path
									d="M12 0V28M12 28L6 22M12 28L18 22"
									stroke="#22b1b7"
									strokeWidth="2"
									strokeDasharray="4 4"
								/>
							</svg>
						</div>
						<FlowCardMobile type="closed" />
					</div>
				</div>
			</div>

			{/* ——— Desktop Figma layout ——— */}
			<div className="relative mx-auto hidden w-full max-w-screen lg:block">
				<div
					className="relative w-full"
					style={{ paddingBottom: `${(SECTION_H / SECTION_W) * 100}%` }}
				>
					<div className="absolute inset-0 grid grid-cols-2">
						<div
							className="absolute flex flex-col justify-center gap-[18px] p-2"
							style={{
								left: pos(26, 0).left,
								top: '50%',
								transform: 'translateY(-50%)',
								width: `${(621 / SECTION_W) * 100}%`,
							}}
							data-node-id="6:227"
						>
							<p className="text-[14px] font-semibold text-grey-800">
								The Hayy.AI Advantage
							</p>
							<div className="text-[24px] font-semibold leading-tight text-grey-800">
								<p>Smart Agencies.</p>
								<p className="text-secondary">Real Results.</p>
							</div>
							<p className="max-w-[557px] text-[16px] leading-normal text-grey-700">
								Our Smart Agencies are the front line of your success. They
								understand your projects, engage buyers, answer inquiries and
								convert interest into real opportunities.
							</p>
							<div className="grid grid-cols-3 items-center gap-1">
								<StatBlock
									icon="/images/icons/people.svg"
									label="Smart Agencies"
								/>
								<StatBlock
									icon="/images/icons/globe-stat.svg"
									label="Global Presence"
								/>
								<StatBlock
									icon="/images/icons/protect.svg"
									label="AI-qualified high-intent buyers."
								/>
							</div>
						</div>

						<div>
							<div
								className="absolute"
								style={pos(848, 41, 446, 94)}
								data-node-id="35:300"
							>
								<Image
									src="/images/advantage-flow.svg"
									alt=""
									fill
									className="object-contain object-left-top"
								/>
							</div>

							<div
								className="absolute flex h-[49px] items-center rounded-[15px] border border-black/20 bg-white px-4 shadow-[0px_0px_2px_rgba(0,0,0,0.25)]"
								style={pos(694, 22, 142, 49)}
								data-node-id="6:69"
							>
								<p className="whitespace-nowrap text-[16px] font-semibold text-grey-800">
									Buyer Enquiry
								</p>
							</div>

							<div
								className="absolute flex flex-col items-center gap-6 rounded-[10px] border border-black/[0.01] bg-white px-2.5 py-4 shadow-[0px_0px_2px_rgba(0,0,0,0.25)]"
								style={pos(642, 107, 283, 277)}
								data-node-id="6:133"
							>
								<AgencyCardContent />
							</div>

							<div
								className="absolute flex flex-col items-center justify-center gap-3 rounded-[10px] border border-black/[0.01] bg-white p-2.5 shadow-[0px_0px_2px_rgba(0,0,0,0.25)]"
								style={pos(969, 131, 185, 240)}
								data-node-id="6:134"
							>
								<DeveloperCardContent />
							</div>

							<div
								className="absolute flex flex-col items-center justify-center gap-3 rounded-[10px] border border-black/[0.01] bg-white px-2.5 shadow-[0px_0px_2px_rgba(0,0,0,0.25)]"
								style={pos(1189, 153, 145, 183)}
								data-node-id="6:155"
							>
								<ClosedDealCardContent />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function FlowCardMobile({ type }: { type: "agency" | "developer" | "closed" }) {
  if (type === "agency") {
    return (
      <div className="mx-auto flex w-full max-w-[320px] flex-col items-center rounded-[10px] border border-black/[0.01] bg-white px-4 py-5 shadow-[0px_0px_2px_rgba(0,0,0,0.25)]">
        <AgencyCardContent />
      </div>
    );
  }
  if (type === "developer") {
    return (
      <div className="mx-auto w-full max-w-[220px] rounded-[10px] border border-black/[0.01] bg-white p-4 shadow-[0px_0px_2px_rgba(0,0,0,0.25)]">
        <DeveloperCardContent />
      </div>
    );
  }
  return (
    <div className="mx-auto w-full max-w-[200px] rounded-[10px] border border-black/[0.01] bg-white p-4 shadow-[0px_0px_2px_rgba(0,0,0,0.25)]">
      <ClosedDealCardContent />
    </div>
  );
}

function AgencyCardContent() {
  return (
    <>
      <div className="flex w-full max-w-[207px] flex-col gap-6">
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full max-w-[181px] items-center justify-between px-1.5">
            <Image src="/images/icons/profile-sm.svg" alt="" width={16} height={16} />
            <p className="text-[16px] font-medium text-grey-800">Smart Agency</p>
            <Image src="/images/icons/tick.svg" alt="" width={15} height={15} />
          </div>
          <div className="flex items-center">
            {[0, 1, 2, 3].map((i) => (
              <Image
                key={i}
                src={i % 2 === 0 ? "/images/agent-1.jpg" : "/images/agent-2.jpg"}
                alt=""
                width={60}
                height={60}
                className="-mr-[11px] rounded-full border-2 border-white object-cover last:mr-0"
                style={{ zIndex: 4 - i }}
              />
            ))}
          </div>
        </div>
        <div className="text-[14px] text-grey-700">
          <p>• Understands Buyer Needs</p>
          <p>• Provides Expert Guidance</p>
          <p>• Shares Relevant Options</p>
          <p>• Nurtures & Converts</p>
        </div>
      </div>
      <div className="flex h-[34px] w-full max-w-[225px] items-center justify-center rounded-[5px] border border-black/20 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
        <p className="text-[14px] font-medium text-secondary">Your Project Represented</p>
      </div>
    </>
  );
}

function DeveloperCardContent() {
  return (
    <>
      <p className="text-center text-[16px] font-semibold text-grey-800">Developer</p>
      <div className="relative mx-auto mt-2 h-[145px] w-[157px] overflow-hidden rounded-[11px]">
        <Image src="/images/developer-property.jpg" alt="" fill className="object-cover" />
      </div>
      <p className="mt-2 text-center text-[14px] text-grey-700">
        You Focus on Building.
        <br />
        We Handle the Rest.
      </p>
    </>
  );
}

function ClosedDealCardContent() {
  return (
    <>
      <p className="text-center text-[16px] font-semibold text-grey-800">Closed Deal</p>
      <Image
        src="/images/icons/handshake.svg"
        alt=""
        width={79}
        height={79}
        className="mx-auto my-2"
      />
      <p className="text-center text-[14px] text-grey-700">
        More Deals.
        <br />
        Faster.
      </p>
    </>
  );
}

function StatBlock({
  icon,
  label,
  className= '',
}: {
  icon: string;
  label: string;
  mediumTwoLines?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image src={icon} alt="stat-block" width={33} height={33} className="shrink-0 size-4" />
     <span className="text-sm font-medium leading-[140%] text-gray-800">{label}</span>
    </div>
  );
}
