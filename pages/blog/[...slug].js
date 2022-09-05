import PageTitle from '@/components/PageTitle'
import { BuilderComponent, BuilderContent, builder } from '@builder.io/react'
import '../../builder.config'

builder.init('ccda6c7abf4c4b8195aa67d47de420dd')

export async function getStaticPaths() {
  const posts = await builder.getAll('blog-post', {
    fields: 'data.slug',
  })
  return {
    paths: posts.map(({ data }) => ({
      params: {
        slug: data.slug?.split('/') || '',
      },
    })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const post = await builder
    .get('blog-post', {
      query: {
        slug: params.slug.join('/'),
      },
    })
    .promise()

  return { props: { post: post || null } }
}

export default function Blog({ post }) {
  return (
    <>
      <BuilderContent model="blog-post" content={post}>
        {(data, content) => (
          <>
            <PageTitle>{data?.title}</PageTitle>
            <BuilderComponent model="blog-post" content={content} />
          </>
        )}
      </BuilderContent>
    </>
  )
}
