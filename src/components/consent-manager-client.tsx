"use client";

import { DevTools } from "@c15t/dev-tools/react";
import {
	ConsentBanner,
	ConsentDialog,
	ConsentDialogTrigger,
	ConsentManagerProvider,
	ConsentWidget,
} from "@c15t/nextjs";
import { gtag } from "@c15t/scripts/google-tag";
import type { ReactNode } from "react";
import { env } from "@/env";

export default function ConsentManagerClient({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<ConsentManagerProvider
			options={{
				mode: "offline",
				scripts: [
					gtag({
						category: "measurement",
						id: env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
					}),
				],
				consentCategories: ["necessary", "measurement"],
				// Shows banner during development. Remove for production.
				overrides: { country: "PL" },
				i18n: {
					locale: "pl",
					messages: {
						pl: {
							consentTypes: {
								experience: {
									title: "Personalizacja",
									description:
										"Pozwalają nam dostosować treści i wygląd strony do Twoich indywidualnych potrzeb i historii przeglądania.",
								},
								functionality: {
									title: "Funkcjonalne",
									description:
										"Zapamiętują Twoje preferencje (np. język, region), aby korzystanie z serwisu było wygodniejsze.",
								},
								marketing: {
									title: "Marketing",
									description:
										"Umożliwiają wyświetlanie reklam dopasowanych do Twoich zainteresowań oraz mierzenie skuteczności kampanii.",
								},
								necessary: {
									title: "Niezbędne",
									description:
										"Pliki wymagane do prawidłowego działania strony, zapewnienia bezpieczeństwa oraz zapobiegania oszustwom.",
								},
								measurement: {
									title: "Analityka",
									description:
										"Pozwalają nam mierzyć ruch na stronie i rozumieć, które sekcje są najpopularniejsze, abyśmy mogli je ulepszać.",
								},
							},
						},
					},
				},
			}}
		>
			{process.env.NODE_ENV === "development" && <DevTools />}

			<ConsentDialogTrigger icon="fingerprint" showWhen="after-consent" />

			<ConsentDialog.Root>
				{/* <ConsentDialog.Overlay /> */}
				<ConsentDialog.Card>
					<ConsentDialog.Header>
						<ConsentDialog.HeaderTitle className="font-display text-lg">
							Ustawienia plików cookie
						</ConsentDialog.HeaderTitle>
						<ConsentDialog.HeaderDescription>
							Zmień ustawienia plików cookie, aby dostosować swoje doświadczenie
							na stronie.
						</ConsentDialog.HeaderDescription>
					</ConsentDialog.Header>
					<ConsentDialog.Content>
						<ConsentWidget.Root>
							<ConsentWidget.Accordion type="single">
								<ConsentWidget.AccordionItems />
							</ConsentWidget.Accordion>
							<ConsentWidget.Footer>
								<ConsentWidget.FooterSubGroup>
									<ConsentWidget.AcceptAllButton>
										Akceptuj wszystkie
									</ConsentWidget.AcceptAllButton>
									<ConsentWidget.RejectButton>
										Odrzuć
									</ConsentWidget.RejectButton>
								</ConsentWidget.FooterSubGroup>
								<ConsentWidget.SaveButton className="bg-navy text-white border-none shadow-none">
									Zapisz
								</ConsentWidget.SaveButton>
							</ConsentWidget.Footer>
						</ConsentWidget.Root>
					</ConsentDialog.Content>
				</ConsentDialog.Card>
			</ConsentDialog.Root>
			<CustomConsentBanner />
			{children}
		</ConsentManagerProvider>
	);
}

const CustomConsentBanner = () => {
	return (
		<ConsentBanner.Root className="left-auto right-0">
			<ConsentBanner.Overlay />
			<ConsentBanner.Card className="max-w-lg">
				<ConsentBanner.Header>
					<ConsentBanner.Title className="font-display">
						Ta strona używa plików cookie
					</ConsentBanner.Title>
					<ConsentBanner.Description>
						Ta strona wykorzystuje pliki cookie w celu poprawy komfortu
						przeglądania oraz analizy ruchu na stronie.
					</ConsentBanner.Description>
				</ConsentBanner.Header>
				<ConsentBanner.Footer className="bg-paper">
					<ConsentBanner.FooterSubGroup>
						<ConsentBanner.AcceptButton>
							Akceptuj wszystkie
						</ConsentBanner.AcceptButton>
						<ConsentBanner.RejectButton>
							Odrzuć wszystkie
						</ConsentBanner.RejectButton>
					</ConsentBanner.FooterSubGroup>
					<ConsentBanner.CustomizeButton>
						Dostosuj
					</ConsentBanner.CustomizeButton>
				</ConsentBanner.Footer>
			</ConsentBanner.Card>
		</ConsentBanner.Root>
	);
};
