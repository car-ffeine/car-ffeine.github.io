// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CAR-FFEINE',
  url: 'https://car-ffenien.github.io',
  baseUrl: '/',
  organizationName: 'car-ffeine',
  projectName: 'car-ffeine',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          postsPerPage: 1,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'CAR-FFEINE',
          items: [
            {
              to: '/archive',
              label: '블로그',
              position: 'left'
            },
            {
              href: 'https://github.com/woowacourse-teams/2023-car-ffeine',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository',
            },
          ],
        },
        footer: {
          copyright: `Copyright © ${new Date().getFullYear()} CAR-FFEINE, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ['java', 'kotlin'],
        },
        mermaid: {
          theme: {
            light: 'neutral',
            dark: 'dark'
          },
        },
      }),
};

module.exports = config;
