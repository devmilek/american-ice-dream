import keystaticConfig from "@/keystatic/keystatic.config";
import { createReader } from "@keystatic/core/reader";

export const keystaticReader = createReader(process.cwd(), keystaticConfig);

export const getContactData = async () => {
	const contact = await keystaticReader.singletons.kontakt.readOrThrow();
	return contact;
};

export const getLocationsData = async () => {
	const locations = await keystaticReader.collections.lokalizacje.all();
	return locations;
};
