import { Button } from "../atoms/Button";
import { ProductImage } from "../atoms/ProductImage";
import { AboutImage } from "../atoms/AboutImage";
import './Card.css';

export const Card = ({ itemDetail }) => {
    let itemImage = itemDetail?.image;
    let itemDescription = itemDetail?.description;

    return <div className="card-section">
        <ProductImage itemImage={itemImage} />
        <div className="card-details">
            <h5>{itemDetail.title}</h5>
            <AboutImage itemDescription={itemDescription} />
            <Button />
        </div>
    </div>
}