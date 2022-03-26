import React, { useEffect, useState } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Shop.css"
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import QnA from '../QnA/QnA';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    const producAddtoCart = (id) =>{
        // console.log(id);
        let newCart = [];
        const exists = cart.find(product => product.id === id.id);
        const rest = cart.filter(product => product.id === id.id);
        if(cart.length === 4 ){
            alert("Already 4 items are added");
            return cart;
        }
        else if(exists){
            newCart = [id];
            alert('Already added this item');
            return newCart;
        }
        else if(rest){
            newCart = [...cart, id];
        }
        setCart(newCart);
    }

    const choseProduct = () => {
        let product = []
        const cartItem = cart.length;
        const random = Math.floor(Math.random() * cartItem);
        product.push(cart[random])
        console.log(product)
        setCart(product)
    }
    const chooseAgain = () => {
        let product = [];
        setCart(product)
    }
    const deleteCart = (id) => {
        console.log(id);
    }

    return (
        <div className='shop-container'>
            <div className="mt-5 product-container1">
                <div className="container row g-4">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product= {product}
                            producAddtoCart= {producAddtoCart}
                        ></Product>)
                    }
                    <QnA></QnA>
                </div>
            </div>
            <div className="order-container m-0">
                <Cart cart={cart} 
                choseProduct={choseProduct}
                chooseAgain={chooseAgain}
                deleteCart={deleteCart} 
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;