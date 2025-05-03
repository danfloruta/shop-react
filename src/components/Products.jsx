import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/shopSlice";
import ProductCard from "./ProductCard";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Slider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useSearchParams } from "react-router-dom";
import FadeInMotion from "./FadeInMotion";

const Products = () => {
  const { theme } = useContext(ThemeContext);
  const products = useSelector((state) => state.shop.products);
  const categoryTitle = useSelector((state) => state.shop.categoryTitle);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sorted, setSorted] = useState("implicit");
  const [searchParams, setSearchParams] = useSearchParams(); //1.

  useEffect(() => {
    dispatch(fetchProducts()); // forgot (), as in fetchProducts()
  }, [dispatch]);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    const newCategories = categories.includes(value)
      ? categories.filter((cat) => cat !== value)
      : [...categories, value];

    setCategories(newCategories);
    searchParams.set("category", newCategories.join(",")); //2. e non-standard sa folosesti array direct
    setSearchParams(searchParams); //3.
  };

  const handleSorting = (sort) => {
    setSorted(sort);
    if (sorted === "implicit") {
      //implicit
      setFiltered(products);
    } else if (sorted === "priceAscending") {
      //by price: ascending
      setFiltered([...products].sort((a, b) => a.price - b.price));
    } else if (sorted === "priceDescending") {
      //by price: descending
      setFiltered([...products].sort((a, b) => b.price - a.price));
    } else {
      //by rating
      setFiltered([...products].sort((a, b) => a.rating.rate - b.rating.rate)); // [...products] and not products, because sort mutates the original array, and you cannot mutate an array coming from redux in a normal function, only in a dispatch, so basically you use a copy of the array, which doesn't mather if it's mutated, because it only exists here
    }
    searchParams.set("sort", sort); //2.
    setSearchParams(searchParams); //.3
  };

  useEffect(() => {
    handleSorting(sorted);
  }, [sorted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let filteredProducts = products;
    if (categories.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        categories.includes(item.category) ? item : ""
      );
    }
    filteredProducts = filteredProducts.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );
    setFiltered(filteredProducts);
    searchParams.set("price", priceRange); //2.
    setSearchParams(searchParams); //3.
  };

  useEffect(() => {
    setFiltered(products);
  }, [products]);

  useEffect(() => {
    setFiltered(categoryTitle);
  }, [categoryTitle]);

  useEffect(() => {
    searchParams.delete("category");
    searchParams.delete("price");
    searchParams.delete("sort");
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ededed" : "#3d3d3d",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "1300px" }} className="mx-auto">
        <h1 className="font-bold text-4xl text-center pt-4">Products</h1>{" "}
        <div className="flex flex-row justify-between align-center">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "block", md: "block" },
            }}
          >
            <FilterListIcon sx={{ margin: "15px" }} />
            <span style={{ fontSize: "24px" }}>Filter</span>
          </IconButton>
          <select
            name="products"
            className="border rounded bg-white self-center max-h-8"
            value={sorted}
            onChange={(e) => setSorted(e.target.value)}
          >
            <option value="implicit">Implicit sorting</option>
            <option value="priceAscending">
              Sort by Price: lowest to highest
            </option>
            <option value="priceDescending">
              Sort by Price: highest to lowest
            </option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>
      </div>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "red" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: 250,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          role="presentation"
        >
          <h1 className="font-bold">Categories</h1>
          <Divider />
          <form style={{ listStyleType: "none" }} onSubmit={handleSubmit}>
            <li>
              <input
                type="checkbox"
                name="men's clothing"
                value="men's clothing"
                checked={categories.includes("men's clothing")}
                onChange={(e) => handleCategoryChange(e)}
              />
              <label className="pl-1">Men's Clothing</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="women's clothing"
                value="women's clothing"
                onChange={(e) => handleCategoryChange(e)}
                checked={categories.includes("women's clothing")}
              />
              <label className="pl-1">Women's Clothing</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="jewelery"
                value="jewelery"
                onChange={(e) => handleCategoryChange(e)}
                checked={categories.includes("jewelery")}
              />
              <label className="pl-1">Jewelery</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="electronics"
                value="electronics"
                onChange={(e) => handleCategoryChange(e)}
                checked={categories.includes("electronics")}
              />
              <label className="pl-1">Electronics</label>
            </li>
            <h1 className="font-bold pt-4 pb-4">Price</h1>
            <Divider />
            <br />
            {/* <br /> */}
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="on"
              min={0}
              max={1000}
              step={50}
              sx={{ maxWidth: "90%" }}
            />
            <Divider />
            <Button
              type="submit"
              sx={{
                backgroundColor: "#007bff",
                color: "white",
                cursor: "pointer",
                transition:
                  "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#0056b3",
                  color: "#f0f0f0",
                },
              }}
              onClick={toggleDrawer(false)}
            >
              Apply Filters
            </Button>
          </form>
        </Box>
      </Drawer>
      <div />
      <FadeInMotion>
        <div className="flex flex-row flex-wrap gap-4 justify-center p-12">
          {filtered.map((item) => (
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
    </div>
  );
};

export default Products;
