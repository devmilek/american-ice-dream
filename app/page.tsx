import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { TopBar } from "@/components/layout/top-bar";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Locations } from "@/components/sections/locations";
import { Lodojady } from "@/components/sections/lodojady";
import { Marquee } from "@/components/sections/marquee";
import { Products } from "@/components/sections/products";
import { Reviews } from "@/components/sections/reviews";
import { Social } from "@/components/sections/social";

export default function Home() {
	return (
		<>
			<TopBar />
			<Navigation />
			<main className="flex-1">
				<Hero />
				<Marquee />
				<Features />
				<About />
				<Products />
				<Locations />
				<Lodojady />
				<Reviews />
				<Faq />
				<Social />
			</main>
			<Footer />
		</>
	);
}
