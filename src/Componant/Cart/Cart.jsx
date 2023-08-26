/* eslint-disable react/prop-types */
import './Cart.css'

const Cart = ({cart}) => {
    // const {cart} = props;
    let total =0;
    let shhipping =0;
    for (const i of cart ){
        total = total+i.price;
        shhipping = shhipping + i.shipping;
    }
    const taxRate = 12; // 12%
    const taxAmount = (total * taxRate) / 100;
    const GrandTotal = taxAmount + total + shhipping;

    return (
        <div className='cart'>
           <h1>Order summary </h1>
        <p>Select items: {cart.length}</p> 
         <p>Total price: {total} </p>
         <p>Shipping:  {shhipping} </p>
         <p>Tax: {taxAmount.toFixed(2)} </p>
         <h4>Grand total :  {GrandTotal.toFixed(2)} </h4>
        </div>
    );
};

export default Cart;