import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPrice = cart.reduce((total, course) => total + course.price, 0);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        totalPrice = totalPrice + element.price;

    }

    return (
        <div className="m-2">
            <h2 className="cart"><i class="fas fa-shopping-cart">:{cart.length}</i></h2>
            <button type="button" className="btn btn-primary btn-block p-2">
                Checkout <span className="badge badge-light">{totalPrice}</span>
            </button>
        </div>
    );
};

export default Cart;