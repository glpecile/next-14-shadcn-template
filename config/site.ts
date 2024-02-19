export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Example App",
	shortName: "Ex",
	description: "Beautifully designed template built with Shadcn UI.",
	emoji: "🧙",
	backgroundColor: "#fff",
	themeColor: "#000",
	siteUrl: "https://example.com",
	category: "example",
	mainNav: [
		{
			title: "Home",
			href: "/",
		},
	],
	links: {
		twitter: "https://twitter.com/example",
		telegram: "https://t.me/example",
		github: "https://github.com/example",
		docs: "https://docs.example.com",
	},
};
