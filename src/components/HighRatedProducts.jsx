import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HighRatedProducts = () => {
  const products = useSelector((state) => state.shop.products);
  const [highRatedProducts, setHighRatedProducts] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
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
    const highRated = products.filter((item) => item.rating.rate >= 4.5);
    setHighRatedProducts(highRated);
  }, [products]);
  return (
    <div style={{ margin: "40px auto", maxWidth: "90%" }} className="mx-auto">
      <h3 className="text-center text-2xl font-bold p-4">
        High Rated Products
      </h3>
      {highRatedProducts.length > 1 && (
        <Slider {...settings}>
          {highRatedProducts.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default HighRatedProducts;
