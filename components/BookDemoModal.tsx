"use client";

import { ButtonPrimary } from "@/components/ui/Button";
import { DEVELOPER_LOGIN_URL, demoFormBullets } from "@/lib/copy";
import { useEffect, useState } from "react";

type DemoTime = "this-week" | "next-week" | "suggest";

type BookDemoModalProps = {
  open: boolean;
  onClose: () => void;
};

const inputClass =
  "flex h-10 w-full items-center rounded-[5px] border border-black/20 bg-white px-2.5 text-[14px] text-grey-800 placeholder:text-grey-700 outline-none focus:border-secondary";

const labelClass = "mb-2 block text-[16px] font-medium leading-5 text-grey-800";

export function BookDemoModal({ open, onClose }: BookDemoModalProps) {
  const [demoTime, setDemoTime] = useState<DemoTime>("this-week");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-demo-title"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[95dvh] w-full max-w-[1024px] flex-col overflow-hidden rounded-t-[10px] bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] sm:max-h-[95vh] sm:rounded-[10px]"
        onClick={(e) => e.stopPropagation()}
        data-node-id="84:1686"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex size-8 items-center justify-center rounded-full text-xl text-grey-800 hover:bg-black/5"
          aria-label="Close"
        >
          ×
        </button>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:min-h-[724px] lg:flex-row lg:overflow-hidden">
          {/* Left panel — Figma x:0–360 */}
          <aside className="relative w-full shrink-0 border-b border-black/10 px-5 pb-6 pt-12 sm:px-8 sm:pt-10 lg:w-[360px] lg:border-b-0 lg:border-r lg:px-12 lg:pb-8">
            <img src="/images/logo.svg" alt="Hayy.AI" className="h-8 w-auto" width={129} height={32} />

            <h2
              id="book-demo-title"
              className="mt-6 text-[24px] font-semibold leading-tight text-grey-800"
              data-node-id="84:1688"
            >
              Book a Demo
              <br />
              <span className="text-secondary">with Hayy.AI</span>
            </h2>

            <p className="mt-3 max-w-[290px] text-[16px] leading-normal text-grey-700" data-node-id="84:1689">
              Tell us about your development company, and our team will contact you to schedule a
              demo.
            </p>

            <img
              src="/images/demo-schedule.svg"
              alt=""
              width={200}
              height={201}
              className="mx-auto mt-8 h-[201px] w-[200px] object-contain"
              data-node-id="84:2277"
            />

            <ul className="mt-8 space-y-[12px]" data-node-id="87:2312">
              {demoFormBullets.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <img src={item.icon} alt="" width={33} height={33} className="shrink-0" />
                  <span className="text-[16px] text-grey-800">{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-[16px] text-grey-800" data-node-id="87:2315">
              Already registered?
            </p>
            <a
              href={DEVELOPER_LOGIN_URL}
              className="mt-1 inline-block text-[16px] font-medium text-secondary hover:underline"
              data-node-id="87:2317"
            >
              Sign in to list your projects
            </a>
          </aside>

          {/* Right panel — form */}
          <form
            className="relative flex flex-1 flex-col px-5 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-10 lg:pl-10"
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <Field label="Company Name *" placeholder="Enter your development company name" />
              <Field label="Contact Person Name *" placeholder="Enter your full name" />
              <Field label="Work Email *" placeholder="Enter your business email" type="email" />
              <PhoneField />
              <Field label="Company Website *" placeholder="https://yourcompany.com" />
              <Field label="Country / Region *" placeholder="Select your country / region" />
              <Field label="Project Type *" placeholder="Select project type" />
              <Field label="Number of Projects *" placeholder="Select number of projects" />
            </div>

            <div className="mt-5" data-node-id="92:302">
              <p className={labelClass}>Preferred Demo Time *</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-[17px]" data-node-id="92:301">
                {(
                  [
                    ["this-week", "This Week"],
                    ["next-week", "Next Week"],
                    ["suggest", "Suggest a time"],
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

            <div className="mt-5" data-node-id="92:303">
              <label className={labelClass} htmlFor="demo-message">
                Message
              </label>
              <textarea
                id="demo-message"
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 500))}
                placeholder="Tell us what you would like to discuss......."
                className="h-[82px] w-full resize-none rounded-[5px] border border-black/20 bg-white px-2.5 py-2.5 text-[14px] text-grey-800 placeholder:text-grey-700 outline-none focus:border-secondary"
                data-node-id="92:305"
              />
              <p className="mt-1 text-right text-[12px] text-grey-700">{message.length}/500</p>
            </div>

            <div className="mt-auto flex flex-col items-stretch justify-between gap-4 pt-8 sm:flex-row sm:items-center">
              <p
                className="flex max-w-[320px] items-start gap-2 text-[14px] leading-snug text-grey-700"
                data-node-id="101:270"
              >
                <img
                  src="/images/icons/lock-outline.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="mt-0.5 shrink-0"
                  data-node-id="101:271"
                />
                Your information is safe with us. We respect your privacy.
              </p>

              <ButtonPrimary type="submit" className="w-full sm:ml-auto sm:w-auto" data-node-id="101:275">
                <span data-node-id="92:408">Request Demo</span>
                <img
                  src="/images/icons/arrow-white.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="shrink-0"
                  data-node-id="101:273"
                />
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
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="min-h-[70px]">
      <label className={labelClass}>{label}</label>
      <input type={type} placeholder={placeholder} className={inputClass} />
    </div>
  );
}

function PhoneField() {
  return (
    <div className="min-h-[70px]" data-node-id="99:269">
      <label className={labelClass}>Phone Number / WhatsApp *</label>
      <div className="flex gap-1.5" data-node-id="99:268">
        <div
          className="flex h-10 w-[81px] shrink-0 items-center gap-2 rounded-[5px] border border-black/20 bg-white px-2.5"
          data-node-id="99:263"
        >
          <span className="text-lg leading-none" aria-hidden>
            🇦🇪
          </span>
          <span className="text-[14px] text-grey-800">+971</span>
        </div>
        <input
          type="tel"
          placeholder="Enter your contact number"
          className={`${inputClass} flex-1`}
          data-node-id="99:266"
        />
      </div>
    </div>
  );
}

/** Preferred demo time pill — Figma 92:261, 170×38 */
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
      className={`flex h-[38px] w-full min-w-0 flex-1 items-center justify-center gap-2 rounded-[5px] border border-black/20 bg-white px-3 shadow-[0px_0px_2px_rgba(0,0,0,0.25)] transition-colors sm:w-[170px] sm:flex-none ${
        selected ? "border-secondary ring-1 ring-secondary/30" : ""
      }`}
    >
      <span
        className={`size-3.5 shrink-0 rounded-full border-2 ${
          selected ? "border-secondary bg-secondary" : "border-grey-700 bg-white"
        }`}
        aria-hidden
      />
      <img src="/images/icons/calendar.svg" alt="" width={16} height={16} className="shrink-0" />
      <span className="text-[14px] text-grey-800">{label}</span>
    </button>
  );
}
