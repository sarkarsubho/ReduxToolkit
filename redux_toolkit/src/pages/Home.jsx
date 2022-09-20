import React from "react";
import { Products } from "../components/Products";

export const Home = () => {
  return <div>
    <h3> Welcome to ReduxToolkit Store</h3>

    <section>
      <h3>Product</h3>
        
        <Products></Products>
    </section>
  </div>;
};
