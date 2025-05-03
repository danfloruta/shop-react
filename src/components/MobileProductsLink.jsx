import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MobileProductsLink = ({ showSubmenu, setShowSubmenu }) => {
  const products = useSelector((state) => state.shop.products);

  // useEffect(() => {
  //   console.log(showSubmenu);
  // }, [showSubmenu]);

  const toggleSubmenu = (name) => {
    setShowSubmenu((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink
          style={{
            display: "flex",
            flexDirection: "flex-row",
            justifyContent: "space-between",
          }}
          className={({ isActive }) => (isActive ? "active" : "")}
          to="products"
        >
          Products{" "}
        </NavLink>
        <span>
          {showSubmenu.products === false ? (
            <ArrowDropDown
              sx={{ color: "yellowgreen" }}
              onClick={(e) => {
                e.stopPropagation(); // stops the event from reaching the parent, because when you click the ArrowDropDown, the click propagates upward to the parent, and it makes toggleDrawer(false), this way you stop it from propagating
                setShowSubmenu((prev) => ({ ...prev, products: true }));
              }}
            ></ArrowDropDown>
          ) : (
            <ArrowDropUp
              sx={{ color: "yellowgreen" }}
              onClick={(e) => {
                e.stopPropagation();
                setShowSubmenu((prev) => ({ ...prev, products: false }));
              }}
            ></ArrowDropUp>
          )}
        </span>
      </div>
      {showSubmenu.products && (
        <>
          <div className="flex flex-row justify-between">
            <h4>Men's Clothes</h4>
            <span>
              {showSubmenu.mens === false ? (
                <ArrowDropDown
                  sx={{ color: "yellowgreen" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSubmenu((prev) => ({ ...prev, mens: true }));
                    //   toggleSubmenu("mens");
                  }}
                ></ArrowDropDown>
              ) : (
                <ArrowDropUp
                  sx={{ color: "yellowgreen" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSubmenu((prev) => ({
                      ...prev,
                      mens: false,
                    }));
                  }}
                ></ArrowDropUp>
              )}
            </span>
          </div>
          {showSubmenu.mens && (
            <ul className="list-disc list-inside">
              {products.map((item) =>
                item.category === `men's clothing` ? (
                  <NavLink key={item.id} to={`products/${item.id}`}>
                    <li>{item.title.slice(0, 15)}</li>
                  </NavLink>
                ) : null
              )}
            </ul>
          )}
          <div className="flex flex-row justify-between">
            <h4>Women's Clothes</h4>
            <span>
              {showSubmenu.womens === false ? (
                <ArrowDropDown
                  sx={{ color: "yellowgreen" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSubmenu((prev) => ({ ...prev, womens: true }));
                  }}
                ></ArrowDropDown>
              ) : (
                <ArrowDropUp
                  sx={{ color: "yellowgreen" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSubmenu((prev) => ({
                      ...prev,
                      womens: false,
                    }));
                  }}
                ></ArrowDropUp>
              )}
            </span>
          </div>
          {showSubmenu.womens && (
            <ul className="list-disc list-inside">
              {products.map((item) =>
                item.category === `women's clothing` ? (
                  <NavLink key={item.id} to={`products/${item.id}`}>
                    <li>{item.title.slice(0, 15)}</li>
                  </NavLink>
                ) : null
              )}
            </ul>
          )}
          <div className="flex flex-row justify-between">
            <h4>Jewelery</h4>
            <span>
              {showSubmenu.jewelery === false ? (
                <ArrowDropDown
                  sx={{ color: "yellowgreen" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSubmenu((prev) => ({ ...prev, jewelery: true }));
                  }}
                ></ArrowDropDown>
              ) : (
                <ArrowDropUp
                  sx={{ color: "yellowgreen" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSubmenu((prev) => ({
                      ...prev,
                      jewelery: false,
                    }));
                  }}
                ></ArrowDropUp>
              )}
            </span>
          </div>
          {showSubmenu.jewelery && (
            <ul className="list-disc list-inside">
              {products.map((item) =>
                item.category === `jewelery` ? (
                  <NavLink key={item.id} to={`products/${item.id}`}>
                    <li>{item.title.slice(0, 15)}</li>
                  </NavLink>
                ) : null
              )}
            </ul>
          )}
          <div className="flex flex-row justify-between">
            <h4>Electronics</h4>
            <span>
              {showSubmenu.electronics === false ? (
                <ArrowDropDown
                  sx={{ color: "yellowgreen" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSubmenu((prev) => ({
                      ...prev,
                      electronics: true,
                    }));
                  }}
                ></ArrowDropDown>
              ) : (
                <ArrowDropUp
                  sx={{ color: "yellowgreen" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSubmenu((prev) => ({
                      ...prev,
                      electronics: false,
                    }));
                  }}
                ></ArrowDropUp>
              )}
            </span>
          </div>
          {showSubmenu.electronics && (
            <ul className="list-disc list-inside">
              {products.map((item) =>
                item.category === `electronics` ? (
                  <NavLink key={item.id} to={`products/${item.id}`}>
                    <li>{item.title.slice(0, 15)}</li>
                  </NavLink>
                ) : null
              )}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default MobileProductsLink;
