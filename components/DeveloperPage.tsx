
import { AdvantageSection } from "@/components/AdvantageSection";
import { HeroSection } from "@/components/HeroSection";
import { TopNav } from "@/components/TopNav";
import FeatureBar from "./dev/feature-bar";
import PlatformGrid from "./dev/platform-grid";
import DevelopersHub from "./dev/developers-hub";
import CTASection from "./dev/cta-section";
import FooterSection from "./dev/footer-section";

export function DeveloperPage() {
  return (
		<div className="relative min-h-screen overflow-x-hidden bg-white">
			<TopNav />

			<HeroSection />
			<main className="mx-auto max-w-screen mt-36 px-4 pb-12 sm:px-6 sm:pb-16 lg:px-[52px]">
				<FeatureBar />
				<AdvantageSection />
				<PlatformGrid />
				<DevelopersHub />
				<CTASection />
				<FooterSection />
			</main>

		</div>
	);
}

