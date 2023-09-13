import { useEffect } from "react"
import { Card } from "../organisms/Card";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../store/CartSlice";
import { getProducts } from "../../store/ProductSlice";
import { StatusCode } from "../../utils/StatusCode";

export const ProductsDashboardPage = () => {
    const dispatch = useDispatch()
    const { data: products, status } = useSelector(state => state.PRODUCT)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    if (status === StatusCode.LOADING) {
        return <p>Loading...</p>
    }

    if (status === StatusCode.ERROR) {
        return <p>Error...</p>
    }

    const handleAddItemToCart = (itemDetail) => {
        dispatch(add(itemDetail))
    }
    return <main>
        <h1 className="font-bold text-2xl">Product Dashboard</h1>
        <section className="grid grid-cols-4 gap-4">
            {products?.map((product) => {
                return <Card key={product.id} handleCart={handleAddItemToCart} itemDetail={product} isAddItemButton={true} />
            })}
        </section>
    </main>
}