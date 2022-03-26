import React from 'react';
import {MdDelete} from "react-icons/md"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Cart.css"

const Cart = ({cart, choseProduct, chooseAgain, deleteCart}) => {
    
    return (
        <div className='sticky-top py-4'>
            <h5 className='fw-bold mb-4'>Cart Sammary</h5>
            {
                cart.map(p => <div className="d-flex text-start added-cart">
                    <div className="rounded-pill border cart-img">
                        <img src={p.img} alt="" srcset="" className='img-fluid' />
                    </div>
                    <div className="">
                        <h6 className='mb-1'>{p.name}</h6>
                        <h6 className='mb-0'>Price ${p.price}</h6>
                    </div>
                    <span onClick={()=> deleteCart(cart) } className='ms-auto fw-bold '><MdDelete size={'20px'} /></span>
                </div>)
            }
            <div className="">
                <button onClick={choseProduct} className='btn btn-outline-primary fw-bold w-100 my-3'>Choose 1 Book</button>
                <button onClick={chooseAgain} className='btn btn-outline-primary fw-bold w-100'>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;