import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Product extends  Component
{
    render()
    { 
        const { product } = this.props;
        return ( 
            <div className="col-lg-4" style={{ marginBottom : 20 }}>
                <div className="card">
                    <img className="card-img-top" src={product.image} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">{product.title} </h4>
                        <p className="card-text">{product.body.substr(0,100)}...</p>
                        <Link className="btn btn-primary" to={`product/${product.id}`}>ـوضیحات بیشتر</Link>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Product;