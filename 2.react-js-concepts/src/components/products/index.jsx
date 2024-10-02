/* eslint-disable react/prop-types */

import ProductItem from "./components/Product-item";
import './style.css'




function ProductList({ name, city, dummyProductData}) {
    return ( 
        <div>
            <h3 className="title">ECommerce Project</h3>
            <p>My name is {name}. I am from {city}</p>
            <ul>
                {
                    dummyProductData.map((item, index)=>(
                        <ProductItem singleProductItem={item} key={index} />
                    ))
                }
            </ul>
        </div>
     );
}

export default ProductList;