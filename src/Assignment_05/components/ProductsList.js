import React from 'react'
import Product from './Product'

const ProductsList = (props) => {
    
        
        console.log("Product List render => products ="+ props.products); 
        
        //data = Array.from(props.data)
        const products = Array.from(props.products);
        const ProductNodes = products.map((product) => 
            <Product key={product.id} id={product.id} name={product.prdname} quantity={product.qty}>
                {product.prc}
            </Product>
            );
         
        return(
            <> 
                <table> 
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {ProductNodes}
                    </tbody>
                </table>
            </>
        );
    
}

export default ProductsList ; 