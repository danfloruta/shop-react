import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import FadeInMotion from "./FadeInMotion";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.shop.wishlist);
  // const [wishlist, setWishlist] = useState(
  //   JSON.parse(localStorage.getItem("wishlist") || [])
  // ); // replaced wishlist with this for storage

  return (
    <FadeInMotion>
      <div className="flex flex-row gap-4 justify-center min-h-96 flex-wrap p-4">
        {wishlist.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            category={item.category}
            description={item.description}
            image={item.image}
            price={item.price}
            rating={item.rating}
            id={item.id}
          />
        ))}
      </div>
    </FadeInMotion>
  );
};

export default Wishlist;
