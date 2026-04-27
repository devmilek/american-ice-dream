"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScriptAccent } from "@/components/ui/script-accent";
import { faqs } from "@/lib/data/faqs";

export function Faq() {
	return (
		<section id="faq" className="py-30" aria-labelledby="faq-title">
			<div className="container-page grid grid-cols-[0.8fr_1.2fr] items-start gap-20 max-lg:grid-cols-1 max-lg:gap-10">
				<div className="sticky top-25 max-lg:static">
					<Eyebrow>FAQ</Eyebrow>
					<h2
						id="faq-title"
						className="mt-4 mb-5 font-display text-[clamp(2rem,4vw+1rem,3.75rem)] leading-[1.05] tracking-[-0.02em] text-navy"
					>
						Najczęstsze <ScriptAccent size="sm">pytania</ScriptAccent>
					</h2>
					<p className="max-w-sm text-[15.5px] text-ink-soft">
						Nie znalazłeś odpowiedzi? Napisz do nas na{" "}
						<a
							href="mailto:hej@americanicedream.pl"
							className="border-b border-sky-deep text-sky-deep transition-colors hover:text-navy"
						>
							hej@americanicedream.pl
						</a>{" "}
						- chętnie pomożemy.
					</p>
				</div>

				<Accordion.Root
					type="single"
					defaultValue={faqs[0].id}
					collapsible
					className="flex flex-col gap-2"
				>
					{faqs.map((faq) => (
						<Accordion.Item
							key={faq.id}
							value={faq.id}
							className="group overflow-hidden rounded-md border border-navy/8 bg-paper transition-[border-color,box-shadow] duration-300 data-[state=open]:border-gold-soft data-[state=open]:shadow-soft"
						>
							<Accordion.Header>
								<Accordion.Trigger className="flex w-full cursor-pointer items-center justify-between gap-6 px-7 py-5.5 text-left font-display text-[1.2rem] font-medium leading-[1.35] text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2">
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
								<div className="max-w-xl px-7 pb-6">{faq.answer}</div>
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
