import { blogs } from '../../data/blogs'
import BlogCard from './BlogCard'
import CategoryFilter from './CategoryFilter'

export default function BlogList({ limit }) {
  const displayedBlogs = limit ? blogs.slice(0, limit) : blogs

  return (
    <div className="space-y-10">
      <CategoryFilter />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedBlogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  )
}
