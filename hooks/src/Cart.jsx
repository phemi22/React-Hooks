import { useState, useMemo } from "react"
import styles from "./ShoppingCart.module.css"

export default function ShoppingCart(){
    const [cartItems, setCartItems] = useState([
        {
            nameOfProduct : "Blender",
            price : 10,
            qty : 2,
            id : 1
        },
        {
            nameOfProduct : "Oven",
            price : 30,
            qty : 5,
            id : 2
        },
        {
            nameOfProduct : "Table",
            price : 1,
            qty : 3,
            id : 3
        }
    ])

    const [discountCode, setDiscountCode] = useState("")

    // Calculate Total Price
    const totalAmount = useMemo(()=>{
        let totalPrice = 0
        cartItems.forEach((item)=>{
            totalPrice += item.price * item.qty
        })
        return totalPrice
    }, [cartItems])

    // Add Quantity
    const addQuantity = (id, newQty)=>{
        const update = cartItems.map((item)=>
            item.id === id ? {...item, qty : newQty} : item
        )
        setCartItems(update)
    }

    return(

        <div className={styles.container}>
            <h2 className={styles.heading}>Shopping Cart</h2>
            <div className={styles.cartItems}>
                {cartItems.map((item)=>{
                    return (
                    <div key={item.id} className={styles.cartItems}>
                        Product Name : {item.nameOfProduct} | Price : {item.price} | Qty : {item.qty}
                        <button onClick={()=> addQuantity(item.id, item.qty + 1)} className={styles.button}>Add +</button>
                    </div>
                    )
                })}
            </div>

            <h4 className={styles.totalAmount}>Total Price : ${totalAmount}</h4>

            {/* Discount Code Section */}
            <input 
            type="text"
            placeholder="Enter Discount Code"
            name="discount"
            value={discountCode}
            className={styles.input}
            onChange={(e)=>setDiscountCode(e.target.value)}
            />
        </div>
    )
}