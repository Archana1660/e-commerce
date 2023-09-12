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
    console.log({ product })
    return <main>
        {product.map((item) => {
            return <Card itemDetail={item} />
        })}
    </main>
}