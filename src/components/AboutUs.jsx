import React, { useContext } from "react";
import { ThemeContext } from "../App";
import conojeghuo from "../assets/pexels-conojeghuo-375889.jpg";
import olly from "../assets/pexels-olly-974902.jpg";
import solliefollio from "../assets/pexels-solliefoto-298863.jpg";
import pavel from "../assets/pexels-pavel-danilyuk-6612714.jpg";
import tima from "../assets/pexels-tima-miroshnichenko-6169668.jpg";
import angela from "../assets/pexels-angela-roma-7319125.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import FadeInMotion from "./FadeInMotion";

const AboutUs = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ededed" : "#3d3d3d",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
      }}
    >
      <div>
        <h2 className="text-center font-bold text-4xl p-8">About Us</h2>
      </div>
      <FadeInMotion>
        <div className="flex flex-col md:flex-row md:max-w-10/12 md:mx-auto gap-4 p-8">
          <div className="md:w-1/2 flex items-center overflow-hidden">
            <img
              src={conojeghuo}
              alt=""
              className="rounded w-full h-full object-cover transform transition-transform duration-1000 hover:scale-102"
            />
          </div>
          <div className="md:w-1/2 text-justify">
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              quas illo voluptatem illum, cum cumque, ex voluptas laudantium in
              consequatur nulla nostrum culpa inventore sed molestiae, saepe
              accusamus ratione. Omnis, corporis, delectus porro quisquam
              aliquam nulla aut error quo maxime facilis dicta facere mollitia
              velit nihil quaerat rerum debitis alias? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet repudiandae harum
              dolores hic expedita deserunt illum quasi dolor! Ipsum voluptatum
              excepturi accusamus inventore voluptatibus, a blanditiis in atque
              quia, adipisci quidem soluta perferendis ipsam magnam aut
              veritatis iusto aspernatur! Quibusdam qui sed maiores aut ad,
              perferendis in quas harum quam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Assumenda cumque, consequatur
              deleniti iusto animi omnis debitis recusandae rerum in magnam odit
              velit impedit numquam, praesentium reiciendis quisquam
              consequuntur rem repellat.
            </p>
            <Button
              sx={{
                backgroundColor: "#007bff",
                paddingY: "10px",
                color: "white",
                justifySelf: "center",
                cursor: "pointer",
                transition:
                  "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
                "&:hover": { backgroundColor: "#0056b3", color: "#f0f0f0" },
              }}
              onClick={() => navigate("/products")}
            >
              Products
            </Button>
          </div>
        </div>
      </FadeInMotion>
      <FadeInMotion>
        <div className="hidden md:flex md:flex-row md:max-w-10/12 md:mx-auto gap-4 p-8">
          <div className="w-1/2 text-justify">
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              quas illo voluptatem illum, cum cumque, ex voluptas laudantium in
              consequatur nulla nostrum culpa inventore sed molestiae, saepe
              accusamus ratione. Omnis, corporis, delectus porro quisquam
              aliquam nulla aut error quo maxime facilis dicta facere mollitia
              velit nihil quaerat rerum debitis alias? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet repudiandae harum
              dolores hic expedita deserunt illum quasi dolor! Ipsum voluptatum
              excepturi accusamus inventore voluptatibus, a blanditiis in atque
              quia, adipisci quidem soluta perferendis ipsam magnam aut
              veritatis iusto aspernatur! Quibusdam qui sed maiores aut ad,
              perferendis in quas harum quam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Assumenda cumque, consequatur
              deleniti iusto animi omnis debitis recusandae rerum in magnam odit
              velit impedit numquam, praesentium reiciendis quisquam
              consequuntur rem repellat. 1
            </p>
            <Button
              sx={{
                backgroundColor: "#007bff",
                paddingY: "10px",
                color: "white",
                justifySelf: "center",
                cursor: "pointer",
                transition:
                  "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
                "&:hover": { backgroundColor: "#0056b3", color: "#f0f0f0" },
              }}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>
          <div className="w-1/2 flex items-center overflow-hidden">
            <img
              src={olly}
              alt=""
              className="rounded w-full h-full object-cover transform transition-transform duration-1000 hover:scale-102"
            />
          </div>
        </div>
      </FadeInMotion>
      <FadeInMotion>
        <div className="flex flex-col max-w-10/12 mx-auto gap-4 md:hidden pb-4 overflow-hidden">
          <div>
            <img
              src={olly}
              alt=""
              className="rounded w-full h-full object-cover transform transition-transform duration-1000 hover:scale-102"
            />
          </div>
          <div className="text-justify">
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              quas illo voluptatem illum, cum cumque, ex voluptas laudantium in
              consequatur nulla nostrum culpa inventore sed molestiae, saepe
              accusamus ratione. Omnis, corporis, delectus porro quisquam
              aliquam nulla aut error quo maxime facilis dicta facere mollitia
              velit nihil quaerat rerum debitis alias? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eveniet repudiandae harum
              dolores hic expedita deserunt illum quasi dolor! Ipsum voluptatum
              excepturi accusamus inventore voluptatibus, a blanditiis in atque
              quia, adipisci quidem soluta perferendis ipsam magnam aut
              veritatis iusto aspernatur! Quibusdam qui sed maiores aut ad,
              perferendis in quas harum quam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Assumenda cumque, consequatur
              deleniti iusto animi omnis debitis recusandae rerum in magnam odit
              velit impedit numquam, praesentium reiciendis quisquam
              consequuntur rem repellat.
            </p>
            <Button
              sx={{
                backgroundColor: "#007bff",
                paddingY: "10px",
                color: "white",
                justifySelf: "center",
                cursor: "pointer",
                transition:
                  "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
                "&:hover": { backgroundColor: "#0056b3", color: "#f0f0f0" },
              }}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </FadeInMotion>
    </div>
  );
};

export default AboutUs;
