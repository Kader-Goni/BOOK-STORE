import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Product.css"
import {BsCartPlusFill} from "react-icons/bs"
import { Card } from 'react-bootstrap';

const Product = ({product, producAddtoCart}) => {
    const {name, img, price, stock, author} = product
    return (
        <div className='col-md-6 col-lg-4 d-flex justify-content-center'>
            <Card style={{ width: '18rem', height: '100%', backgroundColor: "#f0f8ff"}}>
                <Card.Img className='p-2 rounded-16' variant="top" src={img} />
                <Card.Body className='text-start'>
                    <h4 className='text-primary'>{name}</h4>
                    <h5 className=''>Price: ${price}</h5>  
                    <small className='fw-bold'>Author: <span className='text-success'>{author}</span></small>
                    <div className="mt-auto">
                        <small>In-Stock: {stock} copies only </small>
                    </div>
                </Card.Body>
                <button onClick={() => producAddtoCart(product)} className="border btn fw-bold bg-info bg-opacity-10">Add to Cart  <BsCartPlusFill size={'20px'}/></button>
            </Card>
        </div>
    );
};

export default Product;