import {Link} from "react-router";

function Navbar(){
    return(
        <nav>
            <Link to="/">Home</Link>
            {"|"}
            <Link to="/users">Users</Link>
            {"|"}
            <Link to="/counter">Counter</Link>
        </nav>
    )
}

export default Navbar;