import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Blogs from "../pages/blogs/Blogs"

const AppRouter = () => {
  return (
    <div>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/blogs" element={<Blogs />}/>
</Routes>
    </div>
  )
}

export default AppRouter