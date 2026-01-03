// src/pages/Home.jsx

import BlogList from '../components/blog/BlogList'
import Container from '../components/ui/Container'

export default function Home() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-6">
          Latest Articles
        </h1>

        <p className="text-gray-600 mb-10 max-w-2xl">
          Explore high-quality articles on web development, React, JavaScript,
          backend technologies, and modern UI design.
        </p>

        <BlogList limit={6} />
      </section>
    </Container>
  )
}
