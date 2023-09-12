export const Button = ({ handleAddItemToCart, itemDetail }) => {
    return <button onClick={() => handleAddItemToCart(itemDetail)} className="bg-blue-600 rounded-lg w-32 h-10 text-white">Add Cart</button>
}