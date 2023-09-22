import { SearchInput } from "../atoms/SearchInput"
import { CartCount } from "../molecules/CartCount"
import { Link } from "react-router-dom"

export const NavBarPanel = () => {
    return <nav className="flex items-center  p-4 m-2 justify-around">
        <ul className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3 ">
            <li className="group"><Link to="/">Dashboard</Link><div className="border-black border-t-2 opacity-0 group-hover:opacity-100 duration-200"></div></li>
            <li className="group"><Link to="/cart">Cart</Link><div className="border-black border-t-2 opacity-0 group-hover:opacity-100 duration-200"></div></li>
            <li className="group"><Link to="/subscribe">Subscribe</Link><div className="border-black border-t-2 opacity-0 group-hover:opacity-100 duration-200"></div></li>
        </ul>
        <div className="flex space-x-6">
            <SearchInput />
            <CartCount />
        </div>
    </nav>
}