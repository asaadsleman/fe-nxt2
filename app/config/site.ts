export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Next.js + NextUI",
    description: "Make beautiful websites regardless of your design experience.",
    navItems: [
        {
            label: "Home",
            href: "/",
        },
    ],
    navMenuItems: [
        {
            label: "Dashboard",
            href: "/dashboard",
        },
        {
            label: "Logout",
            href: "/logout",
        },
    ],
    sideBarCategories: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Platform",
            href: "/",
        },
        {
            label: "Library",
            href: "/",
        },
        {
            label: "Analytics",
            href: "/",
        },
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui-docs-v2.vercel.app",
        USER_DATA_BE_API_ENDPOINT: "https://api.aisearchify.com/api/getglulibrary",
        BE_AUTH_API_ENDPOINT: "https://api.aisearchify.com/api/login",
        BE_CATEGOORIES_API: "https://api.aisearchify.com/api/gettopics"
    },
};
