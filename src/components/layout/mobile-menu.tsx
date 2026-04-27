"use client";

import {
	ArrowRight,
	ArrowRightIcon,
	ListIcon,
	XIcon,
} from "@phosphor-icons/react/dist/ssr";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/data/nav";

export function MobileMenu() {
	const [open, setOpen] = useState(false);

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger
				aria-label="Otwórz menu"
				className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-paper/70 text-navy transition-colors duration-200 hover:border-navy/30 hover:bg-paper lg:hidden"
			>
				<ListIcon className="h-5 w-5" />
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 z-[60] bg-navy/55 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />
				<Dialog.Content
					aria-describedby={undefined}
					className="fixed inset-y-0 right-0 z-[70] flex w-[min(22rem,92vw)] flex-col bg-cream shadow-[0_30px_80px_-20px_rgba(15,45,92,0.35)] data-[state=open]:animate-slide-in-right data-[state=closed]:animate-slide-out-right"
				>
					<div className="flex items-center justify-between border-b border-navy/8 px-6 py-4">
						<Dialog.Title className="font-display text-xl font-semibold text-navy">
							Menu
						</Dialog.Title>
						<Dialog.Close
							aria-label="Zamknij menu"
							className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/12 text-navy transition-colors duration-200 hover:border-navy/30 hover:bg-paper"
						>
							<XIcon className="h-5 w-5" />
						</Dialog.Close>
					</div>

					<nav
						aria-label="Menu mobilne"
						className="flex flex-col gap-1 overflow-y-auto px-4 py-4"
					>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setOpen(false)}
								className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-[1.35rem] font-medium text-navy transition-colors duration-200 hover:bg-paper"
							>
								{link.label}
								<ArrowRightIcon className="h-4 w-4 text-gold" />
							</Link>
						))}
					</nav>

					<div className="mt-auto flex flex-col gap-3 border-t border-navy/8 px-6 py-6">
						<span className="font-script text-xl text-gold">
							Zapraszamy codziennie
						</span>
						<Link
							href="#lokalizacje"
							onClick={() => setOpen(false)}
							className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3.5 text-sm font-semibold text-cream shadow-[0_12px_24px_-12px_rgba(15,45,92,0.5)] transition-transform duration-200 hover:-translate-y-0.5"
						>
							Znajdź lodziarnię
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
