import { platformFeatures } from '@/lib/copy'
import Image from 'next/image'
import React from 'react'

export default function PlatformGrid() {
  return (
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
                    <p className="text-[15px] font-semibold text-grey-800 sm:text-[16px]">
                      {f.title}
                    </p>
                    <Image
                      src={f.icon}
                      alt=""
                      width={80}
                      height={80}
                      className="my-3"
                    />
                    <div className="text-[14px] text-grey-700">
                      {f.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
  )
}
