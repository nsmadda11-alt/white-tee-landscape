import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/white-tee-landscape/',
  title: 'White Tee Landscape',
  description: 'Research hub for the single-product white T-shirt market',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Landscape', link: '/landscape/' },
      { text: 'Competitors', link: '/competitors/' },
      { text: 'Sources', link: '/research/' },
      { text: 'Later', link: '/later/' },
    ],
    sidebar: [
      { text: 'Project', items: [{ text: 'Overview', link: '/' }, { text: 'Future work', link: '/later/' }] },
      { text: 'Research', items: [{ text: 'Market map', link: '/landscape/' }, { text: 'Competitor profiles', link: '/competitors/' }, { text: 'Profile template', link: '/competitors/template' }, { text: 'Source log', link: '/research/' }] },
    ],
    socialLinks: [],
    footer: { message: 'Working research · Record sources and dates for every claim', copyright: 'Project workspace' },
    search: { provider: 'local' },
  },
})
