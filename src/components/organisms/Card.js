import { Button } from "../atoms/Button";
import { ProductImage } from "../atoms/ProductImage";
import { AboutImage } from "../atoms/AboutImage";
import './Card.css';

export const Card = () => {
    return <div className="card-section">
        <ProductImage />
        <div className="card-details">
            <h5>title</h5>
            <AboutImage />
            <Button />
        </div>
    </div>
}