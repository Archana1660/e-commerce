import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { CartIcon } from "../atoms/CartIcon"

export const CartCount = () => {
    const cartCount = useSelector(state => state.CART)
    return <div>
        <Link to="/cart">
            <CartIcon /><span>{cartCount.length}</span>
        </Link>

    </div>
}