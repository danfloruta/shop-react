import { Badge, IconButton, Stack } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const CardForCart = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row w-lg m-2">
      <div className="flex flex-row mr-4">
        {/* <h3 className="text-2xl mr-2 self-center">{item.itemsNum}X</h3> */}
        <Badge badgeContent={item.itemsNum} color="error">
          <img
            src={item.image}
            alt={item.title}
            width={50}
            style={{ objectFit: "cover" }}
            className="rounded"
          />
        </Badge>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          <h2 className="self-center">{item.title}</h2>
          {/* plus and minus button dispatch from cart add and remove */}
          <div className="flex flex-row">
            <IconButton
              onClick={() => dispatch(cartActions.addItemToCart(item))}
            >
              <span role="img" aria-label="add" style={{ fontSize: 20 }}>
                ➕
              </span>
            </IconButton>

            <IconButton
              onClick={() => dispatch(cartActions.removeItemFromCart(item))}
            >
              <span role="img" aria-label="remove" style={{ fontSize: 20 }}>
                ➖
              </span>
            </IconButton>
          </div>
        </div>

        <p className="ml-2 text-red-500 font-semibold">${item.price}</p>
      </div>
    </div>
  );
};

export default CardForCart;
