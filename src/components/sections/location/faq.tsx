"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import type { Location } from "@/lib/data/locations";
import type { LocationDetails } from "@/lib/data/location-details";
import { LocalizationEntry } from "@/keystatic/location-collection";

type Props = {
	location: Location;
	details: LocationDetails;
};

export function LocationFaq({ details }: { details: LocalizationEntry }) {
	return (
		<section
			id="faq"
			className="bg-cream-soft py-24 lg:py-28"
			aria-labelledby="loc-faq-title"
		>
			<div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
				<div className="lg:sticky lg:top-28 lg:self-start">
					<Eyebrow>FAQ · {details.address.city}</Eyebrow>
					<h2
						id="loc-faq-title"
						className="mt-4 mb-5 font-display text-[clamp(1.9rem,3.4vw+0.8rem,3rem)] leading-[1.08] tracking-[-0.02em] text-navy"
					>
						Najczęstsze <ScriptAccent size="sm">pytania</ScriptAccent>
					</h2>
					<p className="max-w-sm text-[15.5px] text-ink-soft">
						Pytania specyficzne dla naszej lodziarni w {details.address.city}.
						Ogólne pytania znajdziesz w{" "}
						<a
							href="/#faq"
							className="border-b border-sky-deep text-sky-deep transition-colors hover:text-navy"
						>
							globalnym FAQ
						</a>
						.
					</p>
				</div>

				<Accordion.Root
					type="single"
					defaultValue={details.faqs[0]?.id}
					collapsible
					className="flex flex-col gap-2"
				>
					{details.faqs.map((faq) => (
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
			</div>
		</section>
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
