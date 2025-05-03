import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { actionsShop, fetchProducts } from "../store/shopSlice";

const HoverBar = () => {
  const products = useSelector((state) => state.shop.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const sendToProdsByCat = (category) => {
    navigate("products");
    dispatch(actionsShop.filterByCategory(category));
    searchParams.delete("category");
    searchParams.set("category", category);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="flex flex-row gap-6 justify-between pr-4">
      <div className="flex flex-col">
        <ul>
          <h5
            className="font-bold text-gray-700 cursor-pointer"
            onClick={() => sendToProdsByCat(`men's clothing`)}
          >
            Men's clothing
          </h5>
          {products.map((item) =>
            item.category === `men's clothing` ? (
              <li
                key={item.id}
                className="text-xs text-gray-600 hover:text-gray-950 transition delay-75 pb-8"
              >
                <Link to={`products/${item.id}`}>
                  {item.title.slice(0, 35) + "..."}
                </Link>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
      <div className="flex flex-col">
        <ul>
          <h5
            className="font-bold text-gray-700 cursor-pointer"
            onClick={() => sendToProdsByCat(`women's clothing`)}
          >
            Women's clothing
          </h5>
          {products.map((item) =>
            item.category === `women's clothing` ? (
              <li
                key={item.id}
                className="text-xs text-gray-600 hover:text-gray-950 transition delay-75 pb-8"
              >
                <Link to={`products/${item.id}`}>
                  {item.title.slice(0, 35) + "..."}
                </Link>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
      <div className="flex flex-col">
        <ul>
          <h5
            className="font-bold text-gray-700 cursor-pointer"
            onClick={() => sendToProdsByCat(`jewelery`)}
          >
            Jewelery
          </h5>
          {products.map((item) =>
            item.category === `jewelery` ? (
              <li
                key={item.id}
                className="text-xs text-gray-600 hover:text-gray-950 transition delay-75 pb-8"
              >
                <Link to={`products/${item.id}`}>
                  {item.title.slice(0, 35) + "..."}
                </Link>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
      <div className="flex flex-col">
        <ul>
          <h5
            className="font-bold text-gray-700 cursor-pointer"
            onClick={() => sendToProdsByCat(`electronics`)}
          >
            Electronics
          </h5>
          {products.map((item) =>
            item.category === `electronics` ? (
              <li
                key={item.id}
                className="text-xs text-gray-600 hover:text-gray-950 transition delay-75 pb-8"
              >
                <Link to={`products/${item.id}`}>
                  {item.title.slice(0, 35) + "..."}
                </Link>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default HoverBar;
