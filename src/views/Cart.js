import React from 'react';

export const Cart = ({ cart, setCart }) => {
    const handleRemoveProductByName = (name) => {
        let temp = [...cart.products];
        let i = 0;
        while (i < temp.length) {
            if (temp[i].name === name) {
                temp.splice(i, 1);
            } else {
                ++i;
            }
        }
        setCart({...cart, products: temp });
    }

    const distinctProducts = [];
    if (cart.products) {
        for (let i = 0; i < cart.products.length; i++) {
            const prod = cart.products[i];
            const matchingProduct = distinctProducts.findIndex((el) => el.name === prod.name);

            if (matchingProduct !== -1) {
                distinctProducts[matchingProduct].count++;
            } else {
                distinctProducts.push({name: prod.name, count: 1, price: prod.price});
            }
       }
    }

    const productList = distinctProducts.map((product) => {
        return (
            <li className='cart-product-list-item'>
                <div className='row'>
                    <div className='col'>
                        <p style={{fontWeight: '600'}}>{product.name}</p>
                    </div>
                    <div className='col'>
                        <p>{product.count} bar{product.count > 1 ? 's' : ''} of soap</p>
                    </div>
                    <div className='col'>
                        <p>${product.price * product.count} (${product.price} x {product.count})</p>
                    </div>
                    <div className='col'>
                        <button className='btn btn-outline-dark' onClick={() => {handleRemoveProductByName(product.name)}}>X</button>
                    </div>
                </div>
            </li>
        )
    });

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