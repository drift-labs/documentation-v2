// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Drift Protocol",
    tagline: "a robust, cross-margin DEX on Solana",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://drift-labs.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/documentation-v2/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "drift-labs", // Usually your GitHub org/user name.
    projectName: "documentation-v2", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "throw",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/drift-labs/documentation-v2/blob/master/", //todo: use github template?

                    // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },

                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl:
                //         "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                // },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "Drift Protocol v2",
                logo: {
                    alt: "Drift Protocol logo",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "mySidebar",
                        position: "left",
                        label: "Docs",
                    },
                    
                    //    { to: "/blog", label: "Blog", position: "left" },

                    {
                        type: "search",
                        position: "right",
                        className: "search",
                    },
                    {
                        href: "https://github.com/drift-labs/documentation-v2",
                        label: "Edit on GitHub",
                        position: "right",
                    },
                ],
            },
            algolia: {
                // The application ID provided by Algolia
                appId: "CUKQY5DIF0", // Todo
                apiKey: "85829b8cb9ff89da0c174440c43ad1b1", // Todo
                indexName: "umentation-v2",

                contextualSearch: true,
                searchPagePath: false,
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Docs",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discordapp.com/invite/driftprotocol",
                            },
                            {
                                label: "Forums",
                                href: "https://github.com/orgs/drift-labs/discussions",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/driftprotocol",
                            },
                            {
                                label: "Solana Stack Overflow",
                                href: "https://solana.stackexchange.com/",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            // {
                            //     label: "Blog",
                            //     to: "/blog",
                            // },
                            {
                                label: "GitHub",
                                href: "https://github.com/drift-labs/",
                            },
                            {
                                label: "API Docs",
                                href: "https://drift-labs.github.io/v2-teacher/",
                            },
                            {
                                label: "Stats",
                                href: "https://app.drift.trade/stats",
                            },
                        ],
                    },
                ],
                copyright: `${new Date().getFullYear()} Drift Protocol. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
