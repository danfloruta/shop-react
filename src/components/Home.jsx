import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Banner from "./Banner";
import Limitator from "./Limitator";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HighRatedProducts from "./HighRatedProducts";
import PopularProductsHome from "./PopularProductsHome";
import FadeInMotion from "./FadeInMotion";

const limitators = [
  { icon: LocalShippingIcon, text: "Fast Delivery" },
  { icon: CreditCardIcon, text: "Secure Payment" },
  { icon: SupportAgentIcon, text: "24/7 Support" },
  { icon: VerifiedUserIcon, text: "Product Warranty" },
];

const Home = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ededed" : "#3d3d3d",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
      }}
    >
      <Banner />
      <FadeInMotion>
        <div
          className="flex flex-col md:flex-row items-center justify-center p-2 gap-8 my-8"
          // style={{ backgroundColor: "#007bff" }}
        >
          {limitators.map((item, index) => (
            <Limitator key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </FadeInMotion>
      <FadeInMotion>
        <HighRatedProducts />
      </FadeInMotion>
      <FadeInMotion>
        <PopularProductsHome />
      </FadeInMotion>
    </div>
  );
};

export default Home;
