import React from 'react';
import './Item.css'
const Item = (props) => {
    const { id, img, name, price } = props.course;
    return (
        <div className="col-md-4 course border-white">
            <div className="single-item text-center my-4">
                <div className="card p-2">
                    <img className="card-img-top" src={img} alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h4 className="price">${price}</h4>
                        <button className="btn btn-sm btn-primary"
                            onClick={() =>props.addToCart(props.course)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;