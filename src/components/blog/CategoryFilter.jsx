import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'

export default function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <Link
        to="/blogs"
        className="px-4 py-2 rounded-full bg-gray-200 hover:bg-indigo-600 hover:text-white transition"
      >
        All
      </Link>

      {categories.map(category => (
        <Link
          key={category.slug}
          to={`/category/${category.slug}`}
          className="px-4 py-2 rounded-full bg-gray-200 hover:bg-indigo-600 hover:text-white transition"
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}
