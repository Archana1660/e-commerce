import { Button } from "../atoms/Button";
import { ProductImage } from "../atoms/ProductImage";
import { AboutImage } from "../atoms/AboutImage";
import { Link } from "react-router-dom";

import './Card.css';

export const Card = ({ handleCart, itemDetail, isAddItemButton = "true" }) => {

    let itemImage = itemDetail?.image;
    let itemDescription = itemDetail?.price;


    return <div className="shadow-lg rounded-xl p-10 bg-white group">
        <Link to={`/product/${itemDetail.id}`}> <ProductImage itemImage={itemImage} /></Link>
        <div className="card-details flex flex-col items-center justify-center space-y-2 mt-5">
            <h5 className="font-bold">{itemDetail.title}</h5>
            <AboutImage itemDescription={itemDescription} />
            <Button handleCart={handleCart} itemDetail={itemDetail} isAddItemButton={isAddItemButton} />
        </div>
    </div>
}