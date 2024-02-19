import { siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*"
		},
		sitemap: `${siteConfig.links.website}/sitemap.xml`,
		host: siteConfig.links.website
	};
}
