import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

var path = require('path');

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en',
  title: 'ThingSet Protocol Specification',
  description: 'The ThingSet protocol provides a consistent, standardized way to configure, ' +
      'monitor and control ressource-constrained devices via different communication ' +
      'interfaces like Serial, LoRa, USB, Bluetooth or CAN.',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
    //['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#5bbad5"}],
    ['link', { rel: "shortcut icon", href: "/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#2b5797"}],
    ['meta', { name: "msapplication-config", content: "/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  markdown: {
    code: {
      lineNumbers: false
    }
  },
  base: '/thingset/',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: '/favicons/apple-touch-icon.png',
    navbar: [
      {
        text: 'History',
        ariaLabel: 'History Menu',
        children: [
          { text: 'v0.4 (current)', link: '/' },
          { text: 'v0.3', link: '/v0.3/' },
          { text: 'v0.2', link: '/v0.2/' },
          { text: 'v0.1', link: '/v0.1/' }
        ]
      }
    ],
    sidebar: {
      '/v0.1/': [
        'general',
        'functions',
        'can'
      ],
      '/v0.2/': [
        {
          text: 'Why ThingSet?',
          children: [
            { text: 'Introduction', link: 'README.md' },
            '1b_existing_solutions'
          ]
        },{
          text: 'Application Layer',
          children: [
            '2a_general',
            '2b_functions'
          ]
        },{
          text: 'Lower Layers',
          children: [
            '3a_serial',
            '3b_can',
            '3c_lora'
          ]
        }
      ],
      '/v0.3/': [
        {
          text: 'Why ThingSet?',
          children: [
            { text: 'Introduction', link: 'README.md' },
            '1b_existing_solutions'
          ]
        },{
          text: 'Application Layer',
          children: [
            '2a_general',
            '2b_text_mode',
            '2c_binary_mode',
          ]
        },{
          text: 'Lower Layers',
          children: [
            '3a_serial',
            '3b_can',
            '3c_lorawan'
          ]
        },{
          text: 'Protocol Mapping',
          children: [
            '4a_http',
            '4b_coap',
            '4c_mqtt'
          ]
        },{
          text: 'Tools',
          children: [
            '5a_serial',
            '5b_can',
          ]
        }
      ],
      '/': [  // v0.4 (must be defined at the end as fallback)
        {
          text: 'Why ThingSet?',
          children: [
            '1a_introduction',
            '1b_existing_solutions'
          ]
        },{
          text: 'Application Layer',
          children: [
            '2a_general',
            '2b_text_mode',
            '2c_binary_mode',
          ]
        },{
          text: 'Lower Layers',
          children: [
            '3a_serial',
            '3b_can',
            '3c_lorawan'
          ]
        },{
          text: 'Protocol Mapping',
          children: [
            '4a_http',
            '4b_coap',
            '4c_mqtt'
          ]
        },{
          text: 'Tools',
          children: [
            '5a_serial',
            '5b_can',
          ]
        }
      ]
    },
    contributors: false,
    docsRepo: 'LibreSolar/thingset',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    lastUpdated: true,
    sidebarDepth: 1
  }
})
