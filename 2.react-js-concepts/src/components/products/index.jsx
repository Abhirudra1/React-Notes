/* eslint-disable react/prop-types */

import ProductItem from "./components/Product-item";
import './style.css'




function ProductList({ name, city, dummyProductData}) {
    const flag = false

    // function getText(getFlag){
    //     return getFlag ? <h4>I am true</h4> : <h4>I am false</h4>
    // }
    //  OR

    // const getText = flag? <h4>I am true</h4> : <h4>I am false</h4>
    
    // OR using if-else

    

    let getText = null
    if(flag){
        getText = <h4>I am true if</h4>
    } else{
        getText = <h4>else I am false </h4>
    }

    return ( 
        <div>
            <h3 className="title">ECommerce Project</h3>
            <p>My name is {name}. I am from {city}</p>

            {/* {getText(flag)} */}
            {getText}

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