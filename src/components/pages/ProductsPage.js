import { useState, useEffect } from "react"
import { Card } from "../organisms/Card";

export const ProductsPage = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        //api
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => setProduct(result))
    }, [])

    return <main>
        <h1 className="font-bold text-2xl">Product Dashboard</h1>
        <section className="grid grid-cols-4 gap-4">
            {product.map((item) => {
                return <Card key={item.id} itemDetail={item} />
            })}
        </section>
    </main>
}