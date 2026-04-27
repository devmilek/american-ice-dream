import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data/nav";
import { MobileMenu } from "./mobile-menu";

export function Navigation() {
	return (
		<header className="sticky top-0 z-99999 border-b border-navy/8 bg-cream/88 backdrop-blur-md backdrop-saturate-150">
			<div className="container-page flex items-center justify-between gap-4 py-2 md:gap-6 md:py-1">
				<Link
					href="/"
					className="flex shrink-0 items-center"
					aria-label="American Ice Dream - strona główna"
				>
					<Image
						src="/logo.png"
						alt="American Ice Dream"
						width={180}
						height={160}
						priority
						className="h-[54px] w-auto md:h-[62px]"
					/>
				</Link>

				<nav
					className="hidden flex-1 justify-center gap-7 xl:gap-8 lg:flex"
					aria-label="Główna nawigacja"
				>
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="group relative py-1.5 text-[14.5px] font-medium text-navy"
						>
							{link.label}
							<span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 bg-sky transition-[width,left] duration-300 ease-silk group-hover:left-0 group-hover:w-full" />
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<Button asChild className="max-lg:hidden">
						<Link href="#lokalizacje">
							Znajdź lodziarnię
							<ArrowRight />
						</Link>
					</Button>
					<MobileMenu />
				</div>
			</div>
		</header>
	);
}
