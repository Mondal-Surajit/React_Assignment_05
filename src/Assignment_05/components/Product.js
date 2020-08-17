import React from 'react'

const Product = (props) => {
        return(
            <>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.quantity}</td>
                    <td>{props.children}</td>
                </tr>
            </>
        );
}

export default Product ;