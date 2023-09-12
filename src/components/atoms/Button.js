export const Button = ({ handleCart, itemDetail, isAddItemButton }) => {

    return isAddItemButton ?
        <button onClick={() => handleCart(itemDetail)} className="bg-blue-600 rounded-lg w-32 h-10 text-white">Add Cart</button>
        :
        <button onClick={() => handleCart(itemDetail)} className="bg-red-600 rounded-lg w-32 h-10 text-white">Remove Cart</button>

}