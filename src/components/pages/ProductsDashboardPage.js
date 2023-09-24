import { useEffect } from "react"
import { Card } from "../organisms/Card";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../store/CartSlice";
import { getProducts } from "../../store/ProductDashboardSlice";
import { StatusCode } from "../../utils/StatusCode";

export const ProductsDashboardPage = () => {
    const dispatch = useDispatch()
    const { data: products, status } = useSelector(state => state.ALL_PRODUCT)

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
    return <div className="flex items-center justify-center min-h-screen ">
        {/* <h1 className="font-bold text-2xl">Product Dashboard</h1> */}
        <section className="bg-cyan-50 p-6 m-2 shadow-2xl rounded-3xl md:p-20 
       
        ">
            <div className="grid gap-5 md:grid-cols-3">
                {products?.map((product) => {
                    return <Card key={product.id} handleCart={handleAddItemToCart} itemDetail={product} isAddItemButton={true} />
                })}
            </div>

        </section>
    </div>
}