import React from "react";
import photo from "../assets/banner-react.jpg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FadeInMotion from "./FadeInMotion";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "relative", // Poziționează div-ul la un loc relativ
        maxWidth: "100vw",
        height: "700px",
        backgroundImage: `url(${photo})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover", // Asigură-te că imaginea va acoperi întregul div
        backgroundPosition: "center", // Centerizează imaginea
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Overlay semitransparent
        }}
      ></div>

      {/* Textul și butonul */}

      <div className=" absolute top-1/2 left-1/2 text-center md:text-left md:left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <FadeInMotion>
          <h1 className="text-2xl md:text-4xl text-gray-100 font-semibold md:w-6/12 z-50">
            Welcome to our wonderful world
          </h1>
        </FadeInMotion>
        <FadeInMotion>
          <p className="text-gray-100 md:w-7/12 z-50">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            consectetur atque qui quibusdam minima eum.
          </p>
        </FadeInMotion>
        <FadeInMotion>
          <Button
            onClick={() => navigate("products")}
            sx={{
              backgroundColor: "#007bff", // Culoare buton
              color: "white",
              "&:hover": {
                backgroundColor: "#0056b3", // Efect de hover
              },
              marginTop: "15px",
              paddingX: "20px",
              paddingY: "10px",
              paddingTop: "15px",
            }}
          >
            Products
          </Button>
        </FadeInMotion>
      </div>
    </div>
  );
};

export default Banner;
