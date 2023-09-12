import { useState } from "react"
import { CartIcon } from "../atoms/CartIcon"
import { Link } from "react-router-dom"

export const CartCount = () => {
    const [count, setCount] = useState(0)
    return <div>
        <Link to="/cart">
            <CartIcon /><span>{count}</span>
        </Link>

    </div>
}