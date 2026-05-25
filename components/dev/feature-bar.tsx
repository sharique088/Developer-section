'use client'
import { featureBarItems } from '@/lib/copy'
import Image from 'next/image'
import React from 'react'

export default function FeatureBar() {
  return (
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
  )
}
