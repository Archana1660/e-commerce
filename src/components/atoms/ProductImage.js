export const ProductImage = ({ itemImage: productImage }) => {
    return <img src={productImage} alt={productImage} className="w-96 h-96 object-contain group-hover:scale-105 duration-200" />
}