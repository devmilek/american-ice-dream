import type React from "react";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { TopBar } from "@/components/layout/top-bar";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<TopBar />
			<Navigation />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

export default WebsiteLayout;
