import { Link } from 'react-router-dom'


export default function BlogCard({ blog }) {
return (
<div className='bg-white rounded-xl shadow hover:shadow-lg transition'>
<img src={blog.image} className='rounded-t-xl h-48 w-full object-cover' />
<div className='p-5'>
<h3 className='text-xl font-semibold mb-2'>{blog.title}</h3>
<p className='text-gray-600 mb-4'>{blog.excerpt}</p>
<Link to={`/blog/${blog.id}`} className='text-indigo-600 font-medium'>Read More →</Link>
</div>
</div>
)
}