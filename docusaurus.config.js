module.exports = {
  title: "北野",
  tagline: 'something for nothing...', 
  titleDelimiter: "-",
  url: 'https://beiye.xyz',
  baseUrl: '/',                     
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '北野',//左上角用户名
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
        {
          to: 'blog/', 
          label: '博客', 
          position: 'right'
        },
        {
          label:'归档',
          position:'right',   
          to: "blog/tags", 
        },
        /* {
          label:'测试',
          position:'right',   
          
        }, */
        {
          label:'关于我',
          position:'right',
          items:[
            {
              label:'哔哩哔哩',
              href:'https://space.bilibili.com/13102775',
            },
            {
              label:'GitHub',
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
          title: '社交',
          items: [
            {
              label: '哔哩哔哩',
              href: 'https://space.bilibili.com/13102775',
            }
          ]
        }
        /* {
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
        },  ctrl+shift+A多行注释 */
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
        blog: {
          path: "./blog",
          routeBasePath: "/blog",
          blogSidebarTitle: "近期文章",
          //blogPostDate: 
          /*feedOptions: {
            type: "all",
            title: "峰华前端工程师",
            copyright: `Copyright © ${new Date().getFullYear()} 峰华 (张旭乾) Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/">冀ICP备14007097号-3</a></p>`,
          },*/
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
