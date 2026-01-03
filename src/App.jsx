import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import BlogDetail from './components/blog/BlogDetail'
import Category from './pages/Category'
import NotFound from './pages/NotFound'


export default function App() {
return (
<Routes>
<Route path='/' element={<MainLayout />}>
<Route index element={<Home />} />
<Route path='blogs' element={<Blogs />} />
<Route path='blog/:id' element={<BlogDetail />} />
<Route path='category/:slug' element={<Category />} />
<Route path='*' element={<NotFound />} />
</Route>
</Routes>
)
}