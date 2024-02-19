import { siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: siteConfig.name,
		short_name: siteConfig.shortName,
		description: siteConfig.description,
		start_url: "/",
		display: "standalone",
		background_color: "#fff",
		theme_color: "#000",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon"
			}
		]
	};
}
