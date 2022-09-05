# Builder.io Blog Example

This is an example of a blog with [Builder.io](https://www.builder.io/m/developers), [Tailwind](https://github.com/tailwindlabs/tailwindcss), and [Next.js](https://github.com/vercel/next.js/),

We forked [TailwindBlog](https://github.com/timlrx/tailwind-nextjs-starter-blog) and added a Builder.io integation [here](https://github.com/BuilderIO/blog-example/blob/main/pages/blog/%5B...slug%5D.js#L1)

## Getting Started

1. Create a free account with [Builder.io](https://www.builder.io/)
2. In your Builder space, create a [section model](https://www.builder.io/c/docs/models-sections) named `blog-post`
3. Set the [Preview URL](https://www.builder.io/c/docs/guides/preview-url) of your model to `http://localhost:3000`
4. Clone this repo: `git clone https://github.com/BuilderIO/blog-example.git`
5. Install dependencies: `npm install`
6. Run the development server: `npm run dev`
7. Open Builder.io and make some blog posts!

To go live, be sure to also add your public API key (find in your [account settings](builder.io/account)) [here](https://github.com/BuilderIO/blog-example/blob/main/pages/blog/%5B...slug%5D.js#L4). You additionally may want to add some [custom fields](https://www.builder.io/c/docs/custom-fields) for the blog post `title` and `slug`
