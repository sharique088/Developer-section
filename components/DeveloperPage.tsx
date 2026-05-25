"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { AdvantageSection } from "@/components/AdvantageSection";
import { BookDemoModal } from "@/components/BookDemoModal";
import { HeroSection } from "@/components/HeroSection";
import { TopNav } from "@/components/TopNav";
import { ButtonPrimary, ButtonSecondary } from "@/components/ui/Button";
import {
  DEVELOPER_HUB_URL,
  featureBarItems,
  footerCompany,
  footerPlatform,
  footerResources,
  platformFeatures,
} from "@/lib/copy";

export function DeveloperPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  const openDemo = useCallback(() => setDemoOpen(true), []);
  const closeDemo = useCallback(() => setDemoOpen(false), []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <TopNav />

      <main className="mx-auto max-w-[1440px] px-4 pb-12 sm:px-6 sm:pb-16 lg:px-[52px]">
        <HeroSection onBookDemo={openDemo} />

        {/* Feature bar */}
        <section
          className="mt-6 flex flex-col gap-5 rounded-[10px] border border-black/10 bg-white p-4 shadow-[0px_0px_2px_rgba(0,0,0,0.25)] sm:mt-8 sm:gap-6 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-9"
          data-node-id="6:29"
        >
          {featureBarItems.map((item, i) => (
            <div
              key={item.title}
              className="flex w-full items-center gap-4 border-t border-black/5 pt-5 first:border-t-0 first:pt-0 lg:w-auto lg:border-t-0 lg:pt-0"
            >
              {i > 0 && (
                <Image
                  src="/images/icons/line.svg"
                  alt=""
                  width={1}
                  height={61}
                  className="hidden lg:block"
                />
              )}
              <div className="flex flex-1 items-center gap-3 lg:flex-initial">
                <Image src={item.icon} alt="" width={45} height={45} className="shrink-0" />
                <div className="text-[15px] sm:text-[16px]">
                  <p className="font-semibold text-grey-800">{item.title}</p>
                  {item.lines.map((line) => (
                    <p key={line} className="text-grey-700">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <AdvantageSection />

        {/* Platform grid */}
        <section className="mt-10 text-center sm:mt-14" data-node-id="33:276">
          <h2 className="px-2 text-[15px] font-semibold text-grey-800 sm:text-[16px]">
            Everything You Need. All in One Platform.
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-6">
            {platformFeatures.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center rounded-[10px] border border-black/[0.01] bg-white px-3 py-5 shadow-[0px_0px_2px_rgba(0,0,0,0.25)]"
              >
                <p className="text-[15px] font-semibold text-grey-800 sm:text-[16px]">{f.title}</p>
                <Image src={f.icon} alt="" width={80} height={80} className="my-3" />
                <div className="text-[14px] text-grey-700">
                  {f.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Developer Hub */}
        <section
          className="mt-10 flex flex-col items-center gap-8 rounded-[10px] border border-black/[0.01] bg-teal-muted p-5 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] sm:mt-14 sm:gap-10 sm:p-8 lg:flex-row lg:items-start lg:gap-10"
          data-node-id="25:107"
        >
          <div className="relative aspect-[512/310] w-full max-w-[512px] shrink-0 shadow-[-12px_4px_25.9px_0px_rgba(0,0,0,0.25)] lg:h-[310px] lg:aspect-auto">
            <Image src="/images/hub-mockup.png" alt="Developer Hub dashboard" fill className="object-cover" />
          </div>
          <div className="w-full max-w-[414px] text-center lg:text-left">
            <p className="text-[14px] font-semibold text-grey-800">Developer Hub</p>
            <h2 className="mt-2 text-[22px] font-semibold text-secondary sm:text-[24px]">
              Manage. Monitor. Grow.
            </h2>
            <p className="mt-4 text-[15px] text-grey-800 sm:text-[16px]">
              Your all-in-one hub to manage inventory, track leads, collaborate with Smart Agencies
              and close more deals.
            </p>
            <ul className="mt-4 list-disc pl-6 text-left text-[15px] text-grey-700 sm:text-[16px]">
              <li>Real-time dashboard & reporting</li>
              <li>Agency & lead collaboration</li>
              <li>Automated updates & notifications</li>
              <li>Role-based access for your team</li>
            </ul>
            <a
              href={DEVELOPER_HUB_URL}
              className="mt-6 flex h-[49px] w-full items-center justify-center gap-[10px] rounded-[10px] border border-black/20 bg-secondary px-[15px] text-[16px] font-semibold text-grey-800 shadow-[0px_0px_2px_rgba(0,0,0,0.25)] sm:mt-8 sm:w-auto sm:inline-flex"
              data-node-id="25:101"
            >
              Explore Developer Hub
              <Image
                src="/images/icons/arrow-request.svg"
                alt=""
                width={14}
                height={18}
                className="rotate-90"
                data-node-id="25:103"
              />
            </a>
          </div>
          <div className="w-full max-w-[320px] rounded-[10px] border border-black/10 bg-white p-4 shadow-[0px_0px_2px_rgba(0,0,0,0.25)] sm:max-w-[241px]">
            <p className="text-[32px] text-secondary">“</p>
            <p className="text-[14px] font-medium leading-normal text-grey-700">
              Hayy.AI&apos;s Smart Agencies bring us qualified buyers we couldn&apos;t reach on our own.
              Our sales cycle is faster and our global visibility has increased significantly.
            </p>
            <div className="mt-6 text-[16px]">
              <p className="font-semibold text-grey-800">Ahmed R.</p>
              <p className="text-grey-700">Sales Director</p>
              <p className="text-grey-700">Leading Developer, Dubai</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative mt-10 overflow-hidden rounded-[10px] border border-black/[0.01] bg-teal-cta shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] sm:mt-14"
          data-node-id="30:15"
        >
          <div className="flex flex-col gap-6 p-5 sm:p-8 lg:grid lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-[16px] font-semibold text-grey-800">Ready to List Your Project?</h2>
              <p className="mx-auto mt-2 max-w-[383px] text-[14px] text-grey-700 lg:mx-0">
                Join a growing network of developers who trust Hayy.AI and our Smart Agencies to sell
                their projects faster.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-[17px] lg:justify-start">
                <ButtonPrimary
                  type="button"
                  onClick={openDemo}
                  className="w-full sm:w-auto"
                  data-node-id="30:3"
                >
                  List your Project
                  <Image src="/images/icons/arrow-white.svg" alt="" width={15} height={15} />
                </ButtonPrimary>
                <ButtonSecondary
                  type="button"
                  onClick={openDemo}
                  className="w-full sm:w-auto"
                  data-node-id="30:6"
                >
                  <span className="px-1.5">Book a Demo</span>
                  <Image src="/images/icons/calendar.svg" alt="" width={24} height={24} />
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

        {/* Footer */}
        <footer
          className="mt-12 grid grid-cols-2 gap-8 sm:mt-16 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-between lg:gap-16"
          data-node-id="35:278"
        >
          <div className="col-span-2 max-w-[280px] md:col-span-3 lg:col-span-1">
            <Image src="/images/footer-logo.svg" alt="Hayy.AI" width={121} height={30} />
            <p className="mt-3 text-[14px] text-grey-800">
              AI-powered real estate platform connecting developers, agencies and buyers worldwide.
            </p>
            <div className="mt-4 flex gap-4">
              {[
                ["/images/icons/linkedin.svg", "LinkedIn"],
                ["/images/icons/youtube.svg", "YouTube"],
                ["/images/icons/instagram.svg", "Instagram"],
                ["/images/icons/facebook.svg", "Facebook"],
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
                <Image src="/images/icons/call.svg" alt="" width={24} height={24} className="shrink-0" />
                +971 52 721 0980
              </p>
              <p className="flex items-center gap-3 break-all">
                <Image src="/images/icons/mail.svg" alt="" width={24} height={24} className="shrink-0" />
                sales@hayy.ai
              </p>
              <p className="flex items-center gap-3 break-all">
                <Image src="/images/icons/web.svg" alt="" width={24} height={24} className="shrink-0" />
                www.hayy.ai
              </p>
            </div>
          </div>
        </footer>
      </main>

      <BookDemoModal open={demoOpen} onClose={closeDemo} />
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly string[] }) {
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
