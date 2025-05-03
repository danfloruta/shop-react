import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularProductsHome = () => {
  const products = useSelector((state) => state.shop.products);
  const [popularProducts, setPopularProducts] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const popularProds = products.filter((item) => item.rating.count >= 450);
    setPopularProducts(popularProds);
  }, [products]);

  return (
    <div style={{ margin: "40px auto", maxWidth: "90%" }} className="">
      <h3 className="text-center text-2xl font-bold p-4">Popular Products</h3>
      {popularProducts.length > 1 && (
        <Slider {...settings}>
          {popularProducts.map((item) => (
            <div key={item.id}>
              <ProductCard
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default PopularProductsHome;
