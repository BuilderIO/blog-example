import { Builder } from '@builder.io/react'
import dynamic from 'next/dynamic'

Builder.registerComponent(
  dynamic(() => import('./components/Card')),
  {
    name: 'Card',
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png',
    inputs: [
      {
        name: 'title',
        type: 'string',
        required: true,
        defaultValue: 'I am a React + Tailwind component!',
      },
      {
        name: 'description',
        type: 'text',
        defaultValue:
          'You can find my source code at: https://github.com/BuilderIO/blog-example/blob/main/components/Card.js',
        required: true,
      },
      {
        name: 'imgSrc',
        defaultValue:
          'https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c',
        friendlyName: 'image',
        type: 'file',
        allowedFileTypes: ['png', 'jpg', 'webp'],
      },
      {
        name: 'href',
        friendlyName: 'link',
        type: 'url',
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./components/Pre')),
  {
    name: 'Code',
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/code-asterix.png',
    inputs: [
      {
        name: 'children',
        friendlyName: 'code',
        type: 'code',
        options: {
          language: 'javascript',
        },
        defaultValue: `const hello = 'world'`,
        required: true,
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./components/PageTitle')),
  {
    name: 'PageTitle',
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/heading.png',
    inputs: [
      {
        name: 'children',
        friendlyName: 'title',
        type: 'string',
        required: true,
        defaultValue: 'I am a React + Tailwind component!',
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(async () => (await import('./components/NewsletterForm')).BlogNewsletterForm),
  {
    name: 'NewsletterForm',
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/mail-opened.png',
    inputs: [{ name: 'title', type: 'string', defaultValue: 'Subscribe to the newsletter' }],
  }
)
Builder.registerComponent(
  dynamic(async () => (await import('./components/social-icons')).SocialIconRow),
  {
    name: 'SocialIcons',
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/brand-twitter.png',
  }
)

Builder.registerComponent(
  dynamic(() => import('./components/TOCInline')),
  {
    name: 'TableOfContents',
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/list.png',
    inputs: [
      {
        name: 'toc',
        friendlyName: 'contents',
        type: 'list',
        defaultValue: [
          {
            value: 'Hello world',
            href: '#hello-world',
            depth: 1,
          },
        ],
        subFields: [
          {
            name: 'value',
            friendlyName: 'title',
            type: 'string',
            required: true,
            defaultValue: 'Hello World',
          },
          {
            name: 'url',
            type: 'string',
            defaultValue: '#hello-world',
            required: true,
          },
          {
            name: 'depth',
            type: 'number',
            defaultValue: 1,
            step: 1,
            min: 1,
            max: 10,
          },
        ],
      },
    ],
  }
)

Builder.register('insertMenu', {
  name: 'Blog Post Components',
  items: [
    { name: 'NewsletterForm' },
    { name: 'Card' },
    { name: 'Code' },
    { name: 'PageTitle' },
    { name: 'SocialIcons' },
    { name: 'TableOfContents' },
  ],
})
