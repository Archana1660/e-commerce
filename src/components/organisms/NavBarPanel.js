import { CartCount } from "../molecules/CartCount"
import { SearchInputAndButton } from "../molecules/SearchInputAndButton"
import { Link } from "react-router-dom"
export const NavBarPanel = () => {
    return <nav className="flex">
        <ul className="flex ">
            <li><Link to="/">Dashboard</Link></li>
        </ul>
        <SearchInputAndButton />
        <CartCount />
    </nav>
}