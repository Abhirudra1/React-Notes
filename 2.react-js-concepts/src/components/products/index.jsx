/* eslint-disable react/prop-types */

import ProductItem from "./components/Product-item";
import './style.css'
import { useEffect, useState } from "react";


const initialState = true;

function ProductList({ name, city, dummyProductData}) {
    // let flag = false

    // function getText(getFlag){
    //     return getFlag ? <h4>I am true</h4> : <h4>I am false</h4>
    // }
    //  OR

    // const getText = flag? <h4>I am true</h4> : <h4>I am false</h4>
    
    // OR using if-else



    // let getText = null
    // if(flag){
    //     getText = <h4>I am true if</h4>
    // } else{
    //     getText = <h4>else I am false </h4>
    // }


    const [flag, setFlag] = useState(initialState);
    const [count, setCount] = useState(0);
    const [changeStyle, setChangeStyle] = useState(false);

  function handleToggleText() {
    setFlag(!flag);
  }

  function handleIncreaseCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    setFlag(!flag);
    console.log("run only once page load");

    return () => {
      console.log("component is unmounted -> some side effects here also");
    };
  }, []); // this will only run on page load once

  useEffect(() => {
    if (count === 10) setChangeStyle(true);
  }, [count]);

  console.log(changeStyle);

    return ( 
        <div>
            <h3 className="title">ECommerce Project</h3>
            <p>My name is {name}. I am from {city}</p>
            
            <button onClick={handleToggleText}>Toggle Text</button>
            {/* {getText(flag)} */}
            {/* {getText} */}

            <div>
                <button
                    style={{
                        backgroundColor: changeStyle ? "black" : "white",
                        color: changeStyle ? "#ffffff" : "#000000",
                    }}
                    onClick={handleIncreaseCount}
                    >
                    Increase Count
                </button>
                <p>Count is {count}</p>
            </div>

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