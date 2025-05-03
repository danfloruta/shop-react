import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../store/shopSlice";
import { Button, Divider } from "@mui/material";
import { Stars } from "@mui/icons-material";
import { cartActions } from "../store/cartSlice";
import { Drawer, Box, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
// import Divider from "@mui/material/Divider";

const Product = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.shop.singleProduct);
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sidebarSubtotal, setSidebarSubtotal] = useState("");
  const [seeCartSidebar, setSeeCartSidebar] = useState(false);
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
    console.log(product);
  }, [id]); // the id as a dependency is necessary because everytime the id changes we need to re-fetch the product and re-render the dom, so that the correct product is shown on the page

  useEffect(() => {
    if (cart.length > 0) {
      let subtotal = cart.map((item) => item.itemsNum * item.price);
      subtotal = subtotal.reduce((num, acc) => num + acc);
      setSidebarSubtotal(subtotal);
    }
  }, [cart]);
  const handleCartSide = () => {
    dispatch(cartActions.addItemToCart(product));
    setSeeCartSidebar(true);
  };
  return (
    <div className="flex flex-row justify-center gap-4 m-8">
      <img
        src={product.image}
        alt=""
        style={{ maxHeight: "600px" }}
        className="rounded"
      />
      <div>
        <h1 className="text-2xl font-bold" style={{ maxWidth: "500px" }}>
          {product.title}
        </h1>
        <p>
          <span className="text-red-400 font-bold">${product.price}</span> |{" "}
          {product.category}
        </p>
        <span>
          <Stars /> {product?.rating?.rate || "NA"}/5
        </span>
        <Divider className="pb-4" />
        <p style={{ maxWidth: "500px" }}>{product.description}</p>
        <div className="flex gap-6 mt-5">
          <Button
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
            Add to Wishlist
          </Button>
          <Button
            sx={{
              backgroundColor: "#007bff",
              color: "white",
              justifySelf: "center",
              cursor: "pointer",
              transition:
                "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
              "&:hover": { backgroundColor: "#0056b3", color: "#f0f0f0" },
            }}
            onClick={() => handleCartSide()}
          >
            Add to Cart
          </Button>
        </div>

        <Drawer
          variant="temporary" // sau "temporary" pentru mobil
          anchor="right"
          open={seeCartSidebar}
          onClose={() => setSeeCartSidebar(false)}
          sx={{
            width: 400,
            flexShrink: 0,

            "& .MuiDrawer-paper": {
              width: 400,
              boxSizing: "border-box",
            },
          }}
          // onClick={() => setSeeCartSidebar(false)}
        >
          <div className="flex justify-end">
            <IconButton onClick={() => setSeeCartSidebar(false)}>
              <CloseIcon sx={{ color: "red" }} />
            </IconButton>
          </div>
          <div className="flex flex-col justify-between h-full">
            <Box sx={{ overflow: "auto" }}>
              <ul className="pt-8">
                {cart.map((item) => (
                  <div className="flex flex-row mb-4 shadow rounded">
                    <Badge badgeContent={item.itemsNum} color="error">
                      <img
                        className="object-cover"
                        src={item.image}
                        width={100}
                      />
                    </Badge>
                    <div className="flex flex-col p-2">
                      <p>{item.title}</p>
                      <div className="flex flex-row justify-between pr-8">
                        <p className="text-red-400 font-semibold">
                          ${item.price}
                        </p>
                        <div>
                          <IconButton
                            onClick={() =>
                              dispatch(cartActions.addItemToCart(item))
                            }
                          >
                            <span
                              role="img"
                              aria-label="add"
                              style={{ fontSize: 20 }}
                            >
                              ➕
                            </span>
                          </IconButton>

                          <IconButton
                            onClick={() =>
                              dispatch(cartActions.removeItemFromCart(item))
                            }
                          >
                            <span
                              role="img"
                              aria-label="remove"
                              style={{ fontSize: 20 }}
                            >
                              ➖
                            </span>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
              <Divider sx={{ my: 2, borderColor: "grey.300" }} />
            </Box>
            <div className="w-full">
              <div className="flex flex-row justify-between">
                <h5 className=" text-xl">Subtotal</h5>
                <h3>${sidebarSubtotal}</h3>
              </div>
              <Button
                sx={{
                  backgroundColor: "#007bff",
                  color: "white",
                  justifySelf: "center",
                  width: "100%",
                  marginBottom: "10px",
                  cursor: "pointer",
                  transition:
                    "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
                  "&:hover": { backgroundColor: "#0056b3", color: "#f0f0f0" },
                }}
                onClick={() => navigate("/cart")}
              >
                Go to cart
              </Button>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Product;
