import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'PowerShell für Einsteiger',
  tagline: 'Lerne PowerShell von Grund auf',
  favicon: 'https://personal.philiplorenz.com/favicon.ico',

  // Set the production url of your site here
  url: 'https://powershell.philiplorenz.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'PowerShell für Einsteiger',
      logo: {
        alt: 'Philip Lorenz',
        src: 'https://personal.philiplorenz.com/wp-content/uploads/2023/09/download-2.png',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Philip Lorenz',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/philip-lorenz-a8942a1aa/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@Philip-Lorenz',
            },
            {
              label: 'Mail',
              href: 'mailto:contact@philiplorenz.com',
            },
            {
              label: 'Website',
              href: 'https://personal.philiplorenz.com',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
