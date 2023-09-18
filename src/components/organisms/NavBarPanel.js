import { CartCount } from "../molecules/CartCount"
import { SearchInputAndButton } from "../molecules/SearchInputAndButton"
import { Link } from "react-router-dom"

export const NavBarPanel = () => {
    return <nav className="container mx-auto px-4 flex">
        <ul className="grow flex">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/subscribe">Subscribe</Link></li>
        </ul>
        {/* <SearchInputAndButton /> */}
        <CartCount />
    </nav>
}