import React from 'react';
import { useState } from 'react';
import fakeData from '../../Fakedata/Coursedata';
import './Course.css'
import Item from '../Item/Item';
import Cart from '../Cart/Cart';
const Course = () => {

    const [courses, setCourse] = useState(fakeData);

    const [cart, setCart] = useState([]);
    const addToCart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
    }

    return (
        <div className="course-container">
            <div className="user-content">
                <ul>
                    {
                        courses.map(course => <Item course={course} key={course.id} addToCart={addToCart} />)
                    }
                </ul>
            </div>
            <div className="cart-container">

                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;