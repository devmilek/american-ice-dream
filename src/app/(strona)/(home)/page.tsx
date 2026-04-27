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
		</>
	);
}
