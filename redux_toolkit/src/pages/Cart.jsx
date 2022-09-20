import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/nav.css"
import { remove } from "../Store/cartSlice";
export const Cart = () => {
 const dispatch=useDispatch();
  const cartItems=useSelector(state=>state.cart);
  const handleRemove=(id)=>{
   dispatch(remove(id));
   console.log(id)
  }
  return <div>
    {/* <details>
      <summary>click here to show details</summary>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat voluptates repellendus facere fugiat nobis temporibus laudantium officiis in tempore necessitatibus, quas possimus natus vero, impedit consequatur quisquam quasi recusandae. Impedit iure fugiat ipsam! Magnam cum impedit ab, accusamus in laboriosam architecto minus temporibus vel dignissimos aut magni commodi, laborum dolor! Error ex, reiciendis blanditiis tempora sunt consequuntur animi unde mollitia, deleniti facere repudiandae omnis repellat ducimus vitae aliquam voluptas magni aspernatur ipsa quia iste incidunt veniam exercitationem iusto! Facilis, corrupti.
    </details> */}
    <h3>Your added Items</h3>
    <div className="cartitem">
       {
        cartItems.map(product=>{
          return <div className="cart" key={product.id}>
          <img src={product.image} alt="product pic"></img>
          <h4> {product.title}</h4>
          <p> Price :- {product.price}</p>
          <button onClick={()=>handleRemove(product.id)}> Remove</button>
          </div>
        })
      }
    </div>
     
  </div>;
};
