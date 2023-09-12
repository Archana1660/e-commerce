import { useState, useEffect } from "react"
import { Card } from "../organisms/Card";
import { useDispatch } from "react-redux";
import { add } from "../../store/CartSlice";

export const ProductsDashboardPage = () => {
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        //api
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => setProduct(result))
    }, [])

    const handleAddItemToCart = (itemDetail) => {
        dispatch(add(itemDetail))
    }
    return <main>
        <h1 className="font-bold text-2xl">Product Dashboard</h1>
        <section className="grid grid-cols-4 gap-4">
            {product.map((product) => {
                return <Card key={product.id} handleCart={handleAddItemToCart} itemDetail={product} isAddItemButton={true} />
            })}
        </section>
    </main>
}