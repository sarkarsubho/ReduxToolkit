import React, { useEffect, useState } from "react";
import "./nav.css";
import {add} from "../Store/cartSlice"
import { useDispatch } from "react-redux";

export const Products = () => {
    const dispatch=useDispatch();
    const [products,setProducts]=useState([]);
    const handleAdd=(product)=>{
       dispatch(add(product))
    }
    useEffect(()=>{
        const fetchProduct=async ()=>{
            const res=await fetch(`https://fakestoreapi.com/products`);
            let data= await res.json();
            console.log(data);
            setProducts(data)
        }
        fetchProduct();
    },[])
  return <div className="products">

    {
        products.map(product=>{
            return <div className="cart" key={product.id}>
                <img src={product.image} alt="product image"></img>
                <h4> {product.title}</h4>
                <p> Price :- {product.price}</p>
                <button onClick={()=>handleAdd(product)}> Add to Cart</button>
                </div>
        })
    }
    
  </div>;
};
