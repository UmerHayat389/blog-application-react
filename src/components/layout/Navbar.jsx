import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
return (
<nav className='bg-white shadow sticky top-0 z-50'>
<div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
<Link to='/' className='text-2xl font-bold text-indigo-600'>BlogSphere</Link>
<div className='space-x-6'>
<NavLink to='/' className='hover:text-indigo-600'>Home</NavLink>
<NavLink to='/blogs' className='hover:text-indigo-600'>Blogs</NavLink>
</div>
</div>
</nav>
)
}