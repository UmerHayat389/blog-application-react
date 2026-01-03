import { useParams, Link } from 'react-router-dom'
import { blogs } from '../../data/blogs'

export default function BlogDetail() {
  const { id } = useParams()
  const blog = blogs.find(item => item.id === id)

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-xl font-semibold">Blog not found</p>
      </div>
    )
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[420px] object-cover rounded-xl mb-8"
      />

      <Link
        to={`/category/${blog.category}`}
        className="text-indigo-600 font-medium capitalize"
      >
        {blog.category.replace('-', ' ')}
      </Link>

      <h1 className="text-4xl font-bold mt-3 mb-6">
        {blog.title}
      </h1>

      <p className="text-gray-700 leading-relaxed text-lg">
        {blog.content}
      </p>
    </article>
  )
}
