export const Button = ({ handleCart, itemDetail, isAddItemButton = true, customStyle = '' }) => {


    const styleAddButton = `bg-blue-600 rounded-lg w-32 h-10 text-white ${customStyle}`;
    const styleRemoveButton = `bg-red-600 rounded-lg w-32 h-10 text-white`

    return isAddItemButton ?
        <button onClick={() => handleCart(itemDetail)} className={styleAddButton}>Add Cart</button>
        :
        <button onClick={() => handleCart(itemDetail)} className={styleRemoveButton}>Remove Cart</button>

}