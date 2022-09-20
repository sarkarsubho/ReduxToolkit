import React, { useEffect } from "react";
import "./nav.css";
import {add} from "../Store/cartSlice"
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, Statues } from "../Store/productSlice";

export const Products = () => {
    const dispatch=useDispatch();
    // const [products,setProducts]=useState([]);
    const {data,status} =useSelector(state=>state.products)
    const handleAdd=(product)=>{
       dispatch(add(product))
    }
    useEffect(()=>{
        dispatch(fetchProduct())
        // const fetchProduct=async ()=>{
        //     const res=await fetch(`https://fakestoreapi.com/products`);
        //     let data= await res.json();
        //     console.log(data);
        //     setProducts(data)
        // }
        
        // fetchProduct();
    },[dispatch])

    if (status === Statues.LOADING){
        return <p>Loaging...</p>
    }
    if (status === Statues.ERROR){
        return <p>Something Went Wrong...</p>
    }
  return <div className="products">

    {
        data.map(product=>{
            return <div className="cart" key={product.id}>
                <img src={product.image} alt="product pic"></img>
                <h4> {product.title}</h4>
                <p> Price :- {product.price}</p>
                <button onClick={()=>handleAdd(product)}> Add to Cart</button>
                </div>
        })
    }
    
  </div>;
};
