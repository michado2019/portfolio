import { Link } from "react-router-dom"
import logo from "./assets/_logo.png"
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
<div className="navbar-contents flex">
<div className="navbar-content1 flex mr-auto">
    <img src={logo} alt="img" className="" />
        <h2>Michado</h2>
</div>
<div className="navbar-content2 flex">
<Link to="/">Home</Link>
<Link to="/blogs">Blogs</Link>
</div>
<div className="navbar-content3 flex">
<div>

</div>
<div>
    
</div>
<div>
    
</div>
<div>
    
</div>
</div>
</div>
instagram
Discord
Github
    </div>
  )
}

export default Navbar