import React from "react";
import { Phone, Email, Facebook, Instagram } from "@mui/icons-material";
import { BiDollar } from "react-icons/bi";
import "../components/TopBar.css";
const TopBar = () => {
  return (
    <div>
      <div className="bg-amber-400 overflow-hidden">
        <div className="flex flex-row marqueecls">
          <div className="flex flex-row items-center gap-12 p-2 ">
            <div className="flex flex-row gap-0.5">
              <BiDollar color="green" className="justify-self-center" />
              <p className="text-xs flex flex-row">
                {" "}
                Win money with Placeholder{" "}
              </p>
              <BiDollar color="green" className="justify-self-center" />
            </div>
            <p className="font-bold text-xs">
              EASTER DISCOUNT: 20% EXTRA discount on all products
            </p>
            <p className="text-xs">
              Free of charge delivery on all purchases above $50
            </p>
            <p className="text-xs">Delivery in 1-2 business days</p>
            <p className="text-xs">Easybox Locker delivery, for $5</p>
          </div>
          <div className="flex flex-row items-center gap-12 p-2">
            <div className="flex flex-row gap-0.5">
              <BiDollar color="green" className="justify-self-center" />
              <p className="text-xs flex flex-row">
                {" "}
                Win money with Placeholder{" "}
              </p>
              <BiDollar color="green" className="justify-self-center" />
            </div>
            <p className="font-bold text-xs">
              EASTER DISCOUNT: 20% EXTRA discount on all products
            </p>
            <p className="text-xs">
              Free of charge delivery on all purchases above $50
            </p>
            <p className="text-xs">Delivery in 1-2 business days</p>
            <p className="text-xs">Easybox Locker delivery, for $5</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2">
          <Phone sx={{ fontSize: 20 }} />
          0770 054 362
        </span>
        <span className="flex items-center gap-2">
          <Email sx={{ fontSize: 20 }} />
          dan.floruta@gmail.com
        </span>
        <div className="flex items-center gap-1">
          <Facebook sx={{ fontSize: 20 }} />
          <Instagram sx={{ fontSize: 20 }} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
