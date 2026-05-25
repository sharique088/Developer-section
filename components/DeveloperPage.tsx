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
import FeatureBar from "./dev/feature-bar";
import PlatformGrid from "./dev/platform-grid";
import DevelopersHub from "./dev/developers-hub";
import CTASection from "./dev/cta-section";
import FooterSection from "./dev/footer-section";

export function DeveloperPage() {
  // const [demoOpen, setDemoOpen] = useState(false);

  // const openDemo = useCallback(() => setDemoOpen(true), []);
  // const closeDemo = useCallback(() => setDemoOpen(false), []);

  return (
		<div className="relative min-h-screen overflow-x-hidden bg-white">
			<TopNav />

			<main className="mx-auto max-w-[1440px] px-4 pb-12 sm:px-6 sm:pb-16 lg:px-[52px]">
				<HeroSection  />
				<FeatureBar />
				<AdvantageSection />
        <PlatformGrid />
        <DevelopersHub />
        <CTASection />
        <FooterSection/>
			</main>

			{/* <BookDemoModal open={demoOpen} onClose={closeDemo} /> */}
		</div>
	);
}

