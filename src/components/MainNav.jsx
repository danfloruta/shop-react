import { Toolbar, Switch, Drawer, IconButton, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../App";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../components/MainNav.css";
import { Box, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HoverBar from "./HoverBar";
import MobileProductsLink from "./MobileProductsLink";
import SearchProdsNav from "./SearchProdsNav";
import { AccountCircle, Search, ShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { actionsShop } from "../store/shopSlice";

const MainNav = ({ sendCls }) => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const [openModalSearch, setOpenModalSearch] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const cart = useSelector((state) => state.cart.cart);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [hoverDrawerOpen, setHoverDrawerOpen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false); //1. pt effect de fade
  const [showSubmenu, setShowSubmenu] = useState({
    products: false,
    mens: false,
    womens: false,
    jewelery: false,
    electronics: false,
  });

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const handleProductsClick = () => {
    setHoverDrawerOpen(false);
    navigate("products");
  };

  useEffect(() => {
    if (hoverDrawerOpen) {
      setShowDrawer(true);
    } else {
      const timeout = setTimeout(() => setShowDrawer(false), 300); // ms = durata tranziției
      return () => clearTimeout(timeout);
    }
  }, [hoverDrawerOpen]); // 2. pt effect de fade

  return (
    <div className={sendCls}>
      <Toolbar
        sx={{
          background: "#007bff",
          color: "white",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div className="flex justify-between  w-full items-center flex-wrap">
          <div onClick={() => navigate("")}>
            <h1 className="font-bold text-2xl cursor-pointer">Placeholder</h1>
          </div>
          <ul id="ul-nav-main" className="hidden md:flex gap-2">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to=""
              onMouseEnter={() => setHoverDrawerOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="about-us"
              onMouseEnter={() => setHoverDrawerOpen(false)}
            >
              About Us
            </NavLink>
            <div onMouseEnter={() => setHoverDrawerOpen(true)}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="products"
                onClick={handleProductsClick}
              >
                Products
              </NavLink>
              {showDrawer && (
                //3.pt efect de fade
                <Box
                  onMouseLeave={() => setHoverDrawerOpen(false)}
                  sx={{
                    position: "absolute",
                    top: "80px",
                    left: "50%",
                    transform: hoverDrawerOpen
                      ? "translateX(-50%) translateY(0)"
                      : "translateX(-50%) translateY(-10px)",
                    opacity: hoverDrawerOpen ? 1 : 0,
                    pointerEvents: hoverDrawerOpen ? "auto" : "none",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    zIndex: 100,
                    backgroundColor: "white",
                    padding: 2,
                    boxShadow: 3,
                    borderRadius: 2,
                    minWidth: "900px",
                    maxWidth: "1200px",
                  }}
                >
                  <HoverBar />
                </Box>
              )}
            </div>

            {isAuth && (
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="wishlist"
                onMouseEnter={() => setHoverDrawerOpen(false)}
              >
                Wishlist
              </NavLink>
            )}
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="contact"
              onMouseEnter={() => setHoverDrawerOpen(false)}
            >
              Contact
            </NavLink>
          </ul>

          <div className="invisible md:visible md:flex ">
            <Link to="account">
              <AccountCircle />
            </Link>
            <Link to="cart">
              {cart.length > 0 && (
                <Badge
                  badgeContent={cart
                    .map((item) => item.itemsNum)
                    .reduce((acc, num) => acc + num)}
                  color="error"
                >
                  <ShoppingCart />
                </Badge>
              )}
            </Link>
            <SearchProdsNav />

            <h3>Light</h3>
            <Switch
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "greenyellow",
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "greenyellow",
                },
              }}
              onChange={handleTheme}
            />
            <h3>Dark</h3>
          </div>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }} // doar pe ecrane mici
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
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
              onClick={toggleDrawer(false)}
            >
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to=""
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="about-us"
              >
                About Us
              </NavLink>
              <MobileProductsLink
                showSubmenu={showSubmenu}
                setShowSubmenu={setShowSubmenu}
              />
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="contact"
              >
                Contact
              </NavLink>
              <Divider />
              <div className="flex flex-wrap xs:invisible md:flex justify-between">
                <h3>Light</h3>
                <Switch
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "greenyellow",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "greenyellow",
                    },
                  }}
                  onChange={handleTheme}
                />
                <h3>Dark</h3>
                <SearchProdsNav />
              </div>
            </Box>
          </Drawer>
        </div>
      </Toolbar>
    </div>
  );
};

export default MainNav;
