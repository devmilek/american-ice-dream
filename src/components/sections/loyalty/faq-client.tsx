"use client";

import * as Accordion from "@radix-ui/react-accordion";
import type { LoyaltyFaqItem } from "@/lib/data/loyalty";

export function LoyaltyFaqClient({ items }: { items: LoyaltyFaqItem[] }) {
	return (
		<Accordion.Root
			type="single"
			defaultValue={items[0]?.id}
			collapsible
			className="flex flex-col gap-2"
		>
			{items.map((faq) => (
				<Accordion.Item
					key={faq.id}
					value={faq.id}
					className="group overflow-hidden rounded-md border border-navy/8 bg-paper transition-[border-color,box-shadow] duration-300 data-[state=open]:border-gold-soft data-[state=open]:shadow-soft"
				>
					<Accordion.Header>
						<Accordion.Trigger className="flex w-full cursor-pointer items-center justify-between gap-6 px-7 py-5.5 text-left font-display text-[1.15rem] font-medium leading-[1.35] text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2">
							<span>{faq.question}</span>
							<PlusIndicator />
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content
						className="overflow-hidden text-[15.5px] leading-[1.65] text-ink-soft"
						style={{
							animation: "var(--animate-accordion-down) forwards",
						}}
					>
						<div className="max-w-2xl px-7 pb-6">{faq.answer}</div>
					</Accordion.Content>
				</Accordion.Item>
			))}
		</Accordion.Root>
	);
}

function PlusIndicator() {
	return (
		<span
			aria-hidden
			className="relative flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full border border-navy transition-all duration-300 ease-silk group-data-[state=open]:rotate-45 group-data-[state=open]:bg-navy"
		>
			<span className="absolute h-[1.5px] w-3 bg-navy transition-colors group-data-[state=open]:bg-cream" />
			<span className="absolute h-3 w-[1.5px] bg-navy transition-colors group-data-[state=open]:bg-cream" />
		</span>
	);
}
