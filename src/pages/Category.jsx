// src/pages/Category.jsx

import { useParams } from 'react-router-dom'
import BlogCard from '../components/blog/BlogCard'
import { blogs } from '../data/blogs'
import Container from '../components/ui/Container'

export default function Category() {
  const { slug } = useParams()
  const filteredBlogs = blogs.filter(blog => blog.category === slug)

  return (
    <Container>
      <section className="py-12">
        <h1 className="text-4xl font-bold capitalize mb-8">
          {slug.replace('-', ' ')}
        </h1>

        {filteredBlogs.length === 0 ? (
          <p className="text-gray-600">No blogs found in this category.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </section>
    </Container>
  )
}
