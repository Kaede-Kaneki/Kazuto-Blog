module.exports = {
  title: "Kaztuto和人",
  tagline: '魔法小屋', 
  titleDelimiter: "-",
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',                     
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Kaztuto和人',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      }, 
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'right',
        }, 
        {to: 'blog', label: '博客', position: 'right'},
        /* {
          href: 'https://github.com/Kaede-Kaneki',
          label: 'GitHub',
          position: 'right',
        },
        {
          href:'https://space.bilibili.com/13102775',
          label: '哔哩哔哩',
          position:'right',
        }, */
        {
          label:'关于我',
          position:'right',
          items:[
            {
              label:'哔哩哔哩',
              to:"tags/哔哩哔哩",
              href:'https://space.bilibili.com/13102775',
            },
            {
              label:'GitHub',
              to:"tags/GitHub",
              href: 'https://github.com/Kaede-Kaneki',
            },
          ]
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kazuto和人 Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        }, 
        /* blog: {
         path:"./blog",
         routeBasePath:"/"
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
