import {
  Facebook,
  FacebookRounded,
  Instagram,
  LinkedIn,
  X,
} from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [newsLetter, setNewsLetter] = useState("");
  const handleNewsletter = () => {
    console.log("subscribed");
  };
  return (
    <div
      className="w-full height-100 flex justify-between p-12 flex-col sm:flex-row"
      style={{ backgroundColor: "#007bff", color: "white" }}
    >
      <div className="place-self-center md:pl-4">
        <h1 className="text-2xl font-bold ">Placeholder</h1>
        <p>Buy the best men wear on the planet</p>
        <div className="flex gap-1">
          <a href="https://www.facebook.com/dan.floruta" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/danfloruta" target="_blank">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/in/dan-floruta" target="_blank">
            <LinkedIn />
          </a>
          <a href="https://www.x.com/dan.floruta" target="_blank">
            <X />
          </a>
        </div>
      </div>
      <div className="flex gap-16 w-full justify-center flex-wrap">
        <div>
          <h3>Navigation</h3>
          <Divider className="bg-white" />
          <ul id="ul-nav-main" className="flex flex-col">
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
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="products"
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="contact"
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <div>
          <h3>Info</h3>
          <Divider className="bg-white" />
          <ul className="flex flex-col">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="terms-and-conditions"
            >
              Terms and Conditions
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="privacy-policy"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="company"
            >
              Company
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="help"
            >
              Customer Help
            </NavLink>
          </ul>
        </div>
        <div>
          <form onSubmit={handleNewsletter}>
            <h3>Join our newsletter</h3>
            <Divider className="bg-white" />
            <div className="flex flex-col mt-2">
              <input
                type="email"
                className="bg-gray-50 text-gray-950 rounded p-1"
                placeholder="Email"
                value={newsLetter}
                onChange={(e) => setNewsLetter(e.target.value)}
              />
              <Button
                type="submit"
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
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
