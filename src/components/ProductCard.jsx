import { Button, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { actionsShop } from "../store/shopSlice";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";

const ProductCard = ({ id, title, image, price }) => {
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.shop.wishlist);
  const dispatch = useDispatch();
  const [showHeart, setShowHeart] = useState(false);

  const addItemToWish = (e) => {
    dispatch(actionsShop.addToWishList(e));
  };
  const removeItemFromWish = (e) => {
    dispatch(actionsShop.removeFromWishlist(e));
  };
  return (
    <Card className="w-75 p-8 justify-center rounded">
      <Link to={`/products/${id}`}>
        <div
          className="overflow-hidden relative"
          onMouseEnter={() => setShowHeart(true)}
          onMouseLeave={() => setShowHeart(false)}
        >
          <img
            src={image}
            style={{ height: "200px", objectFit: "cover" }}
            className="mx-auto transition duration-300 hover:scale-105"
          />
          {wishlist.find((item) => item.id === id) ? (
            <Favorite
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                removeItemFromWish(id);
              }}
              sx={{
                position: "absolute",
                bottom: "20px",
                left: "45%",
                transform: showHeart ? "translateY(0)" : "translateY(20px)",
                opacity: showHeart ? 1 : 0,
                pointerEvents: showHeart ? "auto" : "none",
                transition: "opacity 0.4s ease, transform 0.4s ease",
                alignSelf: "center",
                transitionDelay: showHeart ? "0.2s" : "0s",
                color: "red",
                justifySelf: "center",
                cursor: "pointer",
                "&:hover": {
                  color: "#7B1E1E",
                },
              }}
            ></Favorite>
          ) : (
            <FavoriteBorderOutlined
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                addItemToWish(id);
              }}
              sx={{
                position: "absolute",
                bottom: "20px",
                left: "45%",
                transform: showHeart ? "translateY(0)" : "translateY(20px)",
                opacity: showHeart ? 1 : 0,
                pointerEvents: showHeart ? "auto" : "none",
                transition: "opacity 0.4s ease, transform 0.4s ease",
                alignSelf: "center",
                transitionDelay: showHeart ? "0.2s" : "0s",
                color: "red",
                justifySelf: "center",
                cursor: "pointer",
                "&:hover": {
                  color: "#7B1E1E",
                },
              }}
            ></FavoriteBorderOutlined>
          )}
        </div>
      </Link>
      <Link to={`/products/${id}`}>
        <h4 className="text-center">{title.slice(0, 25)}</h4>
      </Link>
      <h5 className="text-center text-red-500 font-bold">${price}</h5>
      <div className="flex flex-col justify-center p-4">
        <Button
          onClick={() => navigate(`/products/${id}`)}
          sx={{
            backgroundColor: "#007bff",
            color: "white",
            justifySelf: "center",
            cursor: "pointer",
            transition:
              "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#0056b3",
              color: "#f0f0f0",
            },
          }}
        >
          See Details
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
