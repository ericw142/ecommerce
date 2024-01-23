import React from 'react';

export const Cart = ({ cart, setCart }) => {
    const productList = cart?.products?.map((product) => {
        return (
            <li className='cart-product-list-item'>
                <div className='row'>
                    <div className='col'>
                        <p>{product.name}</p>
                    </div>
                    <div className='col'>
                        <p>{product.price}</p>
                    </div>
                </div>
            </li>
        )
    })
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col'>
                    {cart?.products?.length === 0 ? (
                        <div>
                            <h3><strong>Your Cart is empty</strong></h3>
                            <p>Your shopping cart is ready. Pick out some soap, check out our <a>recommendations</a>, and reach out if you have any questions!</p>
                        </div>
                    ) : (
                        <div>
                            <h3><strong>Your Cart</strong></h3>
                            <ul className='cart-product-list'>
                                {productList}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}