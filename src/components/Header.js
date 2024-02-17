// Header.js

import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav className="nav">
            <Link to='/'>
                <div>Home</div>
            </Link>
        </nav>
    )
}

export default Header;