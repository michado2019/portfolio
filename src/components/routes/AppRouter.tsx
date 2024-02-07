import { Home } from "@mui/icons-material"
import { Route, Routes } from "react-router-dom"
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