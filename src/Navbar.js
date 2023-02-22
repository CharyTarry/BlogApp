 import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> Chary's World</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link></div>
        </nav>
    );    
       
}
export default Navbar;