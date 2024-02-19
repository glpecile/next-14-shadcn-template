import { siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
		},
		sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
		host: siteConfig.siteUrl,
	};
}
