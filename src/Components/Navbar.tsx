import {Link} from "react-router";

function Navbar(){
    return(
        <nav className="flex gap-4 p-4 border-b">
            <Link to="/">Home</Link>
            {"|"}
            <Link to="/users">Users</Link>
            {"|"}
            <Link to="/counter">Counter</Link>
        </nav>
    )
}

export default Navbar;