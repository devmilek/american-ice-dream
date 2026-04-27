import { lokalizacjeCollection } from "@/keystatic/location-collection";
import { contactSingletion } from "@/keystatic/singletons/contact-singleton";
import { config } from "@keystatic/core";
import Image from "next/image";

export default config({
	storage: { kind: "local" },
	collections: {
		lokalizacje: lokalizacjeCollection,
	},
	locale: "pl-PL",
	singletons: {
		kontakt: contactSingletion,
	},
	ui: {
		brand: {
			name: "Asterio Studio CMS",
			mark: () => {
				return (
					<Image
						alt="Asterio Studio CMS - Logo"
						unoptimized
						src="https://www.asteriostudio.com/logo.svg"
						height={24}
						style={{ width: "24px", height: "24px" }}
						width={24}
					/>
				);
			},
		},
	},
});
