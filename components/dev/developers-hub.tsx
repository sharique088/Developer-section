'use client'
import { DEVELOPER_HUB_URL } from '@/lib/copy'
import Image from 'next/image'
import React from 'react'

export default function DevelopersHub() {
  return (
    <section
              className="mt-10 flex flex-col items-center gap-8 rounded-[10px] border border-black/[0.01] bg-teal-muted p-5 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] sm:mt-14 sm:gap-10 sm:p-8 lg:flex-row lg:items-start lg:gap-10"
              data-node-id="25:107"
            >
              <div className="relative aspect-[512/310] w-full max-w-[512px] shrink-0 shadow-[-12px_4px_25.9px_0px_rgba(0,0,0,0.25)] lg:h-[310px] lg:aspect-auto">
                <Image
                  src="/images/hub-mockup.png"
                  alt="Developer Hub dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full max-w-[414px] text-center lg:text-left">
                <p className="text-[14px] font-semibold text-grey-800">
                  Developer Hub
                </p>
                <h2 className="mt-2 text-[22px] font-semibold text-secondary sm:text-[24px]">
                  Manage. Monitor. Grow.
                </h2>
                <p className="mt-4 text-[15px] text-grey-800 sm:text-[16px]">
                  Your all-in-one hub to manage inventory, track leads, collaborate
                  with Smart Agencies and close more deals.
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
                  Hayy.AI&apos;s Smart Agencies bring us qualified buyers we
                  couldn&apos;t reach on our own. Our sales cycle is faster and our
                  global visibility has increased significantly.
                </p>
                <div className="mt-6 text-[16px]">
                  <p className="font-semibold text-grey-800">Ahmed R.</p>
                  <p className="text-grey-700">Sales Director</p>
                  <p className="text-grey-700">Leading Developer, Dubai</p>
                </div>
              </div>
            </section>
  )
}
