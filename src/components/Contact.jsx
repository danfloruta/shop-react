import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@mui/material";
import { CheckBox, Email, Phone } from "@mui/icons-material";
import FadeInMotion from "./FadeInMotion";

const Contact = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [formVals, setFormVals] = useState({
    name: "",
    email: "",
    message: "",
    telephone: "",
  });
  const [agreed, setAgreed] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        setLat(latitude);
        setLon(longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
      console.log(formVals, agreed);
    }
  };
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ededed" : "#3d3d3d",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
      }}
    >
      <div>
        <h2 className="font-bold text-2xl text-center m-4">Contact</h2>
      </div>
      <FadeInMotion>
        <div className="flex md:flex-row justify-around w-4/12 mx-auto">
          <div>
            <h3>
              <Phone />
              Telephone
            </h3>
            <p className="font-semibold ml-6">0700445566</p>
          </div>
          <div>
            <h3>
              <Email />
              E-mail
            </h3>
            <p className="font-semibold ml-6">office@shop.com</p>
          </div>
        </div>
      </FadeInMotion>
      <FadeInMotion>
        <div className="flex flex-col w-10/12 mx-auto">
          <h3 className="font-semibold text-xl text-center w-6/12 mx-auto m-8">
            Your opinion is valuable to us. Tell us your woes, suggestions,
            improvements. We're here to listen. Always.
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col mx-auto m-8">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="rounded border-b p-2 w-md"
              value={formVals.name}
              onChange={(e) =>
                setFormVals((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
            <input
              type="number"
              placeholder="Telephone"
              name="telephone"
              className="rounded border-b p-2 w-md"
              value={formVals.telephone}
              onChange={(e) =>
                setFormVals((prev) => ({
                  ...prev,
                  telephone: e.target.value,
                }))
              }
            />
            <input
              type="email"
              name="email"
              className="rounded border-b p-2 w-md"
              placeholder="Email"
              value={formVals.email}
              onChange={(e) =>
                setFormVals((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
            <textarea
              name="message"
              placeholder="Message"
              className="rounded border-b p-2 w-md"
              value={formVals.message}
              onChange={(e) =>
                setFormVals((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
            ></textarea>
            <span className="flex flex-row gap-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <h6>I've read and agreed to the terms and conditions.</h6>
            </span>
            <Button
              type="submit"
              className="w-md"
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
            >
              Submit
            </Button>
          </form>
        </div>
      </FadeInMotion>
      {(!lat || !lon) && <p>Loading map...</p>}
      {lat && (
        <MapContainer center={[lat, lon]} zoom={13} style={{ height: "400px" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[lat, lon]}>
            <Popup>You are here</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Contact;
