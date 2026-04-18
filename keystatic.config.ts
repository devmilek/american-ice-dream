import { config } from "@keystatic/core";
import { lokalizacjeCollection } from "./keystatic/location-collection";

export default config({
	storage: { kind: "local" },
	collections: {
		lokalizacje: lokalizacjeCollection,
	},
});
