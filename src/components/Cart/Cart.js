import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = cart.reduce((total, current) => total + current.price, 0);
    //let totalPrice = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const element = cart[i];
    //     totalPrice = totalPrice + element.price;

    // }

    return (
        <div className="m-2">
            <h2 className="cart"><i class="fas fa-shopping-cart">:{cart.length}</i></h2>
            {
                cart.map(item => <li className="list-group-item d-flex my-2 shadow justify-content-between">
                    <span>{item.name}</span> <span> ${item.price}</span>
                </li>)
            }
            <button type="button" className="btn btn-primary btn-block p-2">
                Checkout <span className="badge badge-light">${totalPrice}</span>
            </button>
        </div>
    );
};

export default Cart;