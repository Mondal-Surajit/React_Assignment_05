import React, {useState, useEffect} from 'react'
import ProductsList from './ProductsList';
import axios from 'axios'

const AllProductsPage = (props) => {
    
    const [products, setResponseData] = useState('');

    const fetchData = React.useCallback(() => {
        axios.get('http://localhost:4000/products')
        .then((response) => {
          setResponseData(response.data)
        })
        .catch((error) => {  
          throw error
        })
      },[])
 
      useEffect(() => {
        fetchData()
      }, [fetchData])
    
        return(
            <>
                <h2>Products List (using Functional Componets)</h2>
                <ProductsList products={products} />
            </>
        );

    
}

export default AllProductsPage;