import { Button } from "../atoms/Button";
import { ProductImage } from "../atoms/ProductImage";
import { AboutImage } from "../atoms/AboutImage";
import { useDispatch } from "react-redux";
import { add } from "../../store/CartSlice";
import './Card.css';

export const Card = ({ itemDetail }) => {
    const dispatch = useDispatch()

    let itemImage = itemDetail?.image;
    let itemDescription = itemDetail?.price;

    const handleAddItemToCart = (itemDetail) => {
        dispatch(add(itemDetail))
    }

    return <div className="shadow-lg rounded-xl p-10 card-section">
        <ProductImage itemImage={itemImage} />
        <div className="card-details">
            <h5 className="font-bold">{itemDetail.title}</h5>
            <AboutImage itemDescription={itemDescription} />
            <Button handleAddItemToCart={handleAddItemToCart} itemDetail={itemDetail} />
        </div>
    </div>
}