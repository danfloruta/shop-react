import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardForCart from "./CardForCart";
import { SiVisa, SiMastercard } from "react-icons/si";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const handleSubmitData = () => {};
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    country: "",
    name: "",
    company: "",
    address: "",
    apartment: "",
    zipCode: "",
    city: "",
    county: "",
    telephone: "",
  });
  const [card, setCard] = useState({
    number: "",
    expirationDate: "",
    cvc: "",
  });
  const [emailIsTouched, setEmailisTouched] = useState(false);
  const [cardIsTouched, setCardisTouched] = useState(false);
  const [cvcIsTouched, setCvcisTouched] = useState(false);

  const calcTotalPrice = () => {
    if (cart.length > 0) {
      let cartPrice = cart.map((item) => item.itemsNum * item.price);
      console.log(cartPrice);
      cartPrice = cartPrice.reduce((num, acc) => num + acc);
      setTotalPrice(cartPrice);
    }
  };

  const applyDiscount = () => {
    if (discount === "Reduce10") {
      setTotalPrice((prev) => (prev = (prev / 10) * 9));
    } else {
      return;
    }
  };

  const handlePayNow = () => {
    console.log(userInfo, card);
  };

  useEffect(() => {
    console.log(cart);
    calcTotalPrice();
  }, [cart]);
  return (
    <div className="min-h-100 max-w-3/4 mx-auto">
      <div className="flex flex-row">
        <form onSubmit={handleSubmitData} className="pl-4">
          <h2 className="font-semibold text-2xl p-2">Contact</h2>
          <div className="flex flex-col w-md">
            <input
              className="rounded border p-2 m-2 w-full"
              type="email"
              placeholder="Email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              onBlur={() => setEmailisTouched(true)}
            />
            {emailIsTouched && !userInfo.email.includes("@") && (
              <span className="font-bold text-xs text-red-400 p-2 ">
                Email must contain "@"
              </span>
            )}
          </div>
          <div>
            <h2 className="font-semibold text-2xl p-2">Delivery</h2>
            <div>
              <div className="flex flex-row w-md">
                <input
                  className="rounded border p-2 m-2 w-full"
                  type="text"
                  placeholder="Country"
                  value={userInfo.country}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      country: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex flex-row w-md">
                <input
                  className="rounded border p-2 m-2 w-full"
                  type="text"
                  placeholder="Name"
                  value={userInfo.name}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <div className="flex flex-row w-md">
                  <input
                    className="rounded border p-2 m-2 w-1/3"
                    type="text"
                    placeholder="Company (optional)"
                    value={userInfo.company}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                  />
                  <input
                    className="rounded border p-2 m-2 w-1/3"
                    type="text"
                    placeholder="Address"
                    value={userInfo.address}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        address: e.target.value,
                      }))
                    }
                  />
                  <input
                    className="rounded border p-2 m-2 w-1/3"
                    type="text"
                    placeholder="Apartment (optional)"
                    value={userInfo.apartment}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        apartment: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex flex-row w-md">
                  <input
                    className="rounded border p-2 m-2 w-1/3"
                    type="number"
                    placeholder="Zipcode (optional)"
                    value={userInfo.zipCode}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        zipCode: e.target.value,
                      }))
                    }
                  />
                  <input
                    className="rounded border p-2 m-2 w-1/3"
                    type="text"
                    placeholder="City"
                    value={userInfo.city}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        city: e.target.value,
                      }))
                    }
                  />
                  <input
                    className="rounded border p-2 m-2 w-1/3"
                    type="text"
                    placeholder="County"
                    value={userInfo.county}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        county: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex flex-row w-md">
                  <input
                    className="rounded border p-2 m-2 w-full"
                    type="number"
                    placeholder="Telephone"
                    value={userInfo.telephone}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        telephone: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-md bg-gray-200 border rounded p-4">
            <h2 className="font-semibold text-2xl flex flex-row justify-between">
              Payment{" "}
              <span className="flex flex-row gap-2">
                <SiVisa size={32} color="#1a1f71" />
                <SiMastercard size={32} color="#eb001b" />
              </span>
            </h2>
            <input
              type="text"
              placeholder="Card Number"
              className="border rounded p-2 w-full"
              value={card.number}
              onChange={(e) =>
                setCard((prev) => ({
                  ...prev,
                  number: e.target.value,
                }))
              }
              onBlur={() => setCardisTouched(true)}
            />
            {cardIsTouched && card.number.length < 16 && (
              <h6 className="text-red-400 text-xs">
                Card number must contain 16 digits and must start with a 4
              </h6>
            )}
            <div className="flex flex-col w-md">
              <div className="flex flex-row">
                <input
                  type="text"
                  placeholder="Expiration Date (MM/YY)"
                  className="border rounded p-1 my-2 w-1/2"
                  value={card.expirationDate}
                  onChange={(e) =>
                    setCard((prev) => ({
                      ...prev,
                      expirationDate: e.target.value,
                    }))
                  }
                />
                <input
                  type="number"
                  placeholder="CVC"
                  className="border rounded p-1 my-2"
                  value={card.cvc}
                  onChange={(e) =>
                    setCard((prev) => ({
                      ...prev,
                      cvc: e.target.value,
                    }))
                  }
                  onBlur={() => setCvcisTouched(true)}
                />
              </div>
              <div className="flex flex-col items-end w-full">
                {cvcIsTouched && card.cvc.length < 3 && (
                  <h5 className="text-red-400 text-xs pr-8">
                    CVC must be 3 digits
                  </h5>
                )}
              </div>
            </div>
          </div>
          <Button
            sx={{
              backgroundColor: "#007bff",
              width: "100%",
              paddingY: "10px",
              marginBottom: "10px",
              color: "white",
              justifySelf: "center",
              cursor: "pointer",
              transition:
                "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
              "&:hover": { backgroundColor: "#0056b3", color: "#f0f0f0" },
            }}
            onClick={() => handlePayNow()}
          >
            Pay Now
          </Button>
        </form>
        <div className="flex flex-col h-full justify-center p-4 mt-8">
          {cart.length > 0 && (
            <div className="min-h-100">
              {cart.map((item) => (
                <CardForCart key={item.id} item={item} />
              ))}
            </div>
          )}
          {cart.length === 0 && (
            <div className="bg-blue-500 rounded px-8 py-4 w-lg mb-2">
              <p className="text-white text-center">Your cart is empty</p>
            </div>
          )}
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Discount Code"
              className="border rounded w-md mr-2"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
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
              onClick={() => applyDiscount()}
            >
              Apply
            </Button>
          </div>
          {cart.length > 0 && (
            <div className="flex flex-row justify-between px-2">
              <div>
                <h3 className="font-semibold text-xl">Subtotal</h3>
                <span>{}</span>
              </div>
              <div>
                <h2 className="font-semibold text-2xl">Total</h2>
                <span>
                  Including $
                  {(
                    totalPrice.toFixed(2) -
                    (
                      totalPrice.toFixed(2) -
                      (totalPrice.toFixed(2) / 100) * 16
                    ).toFixed(2)
                  ).toFixed(2)}{" "}
                  from taxes
                </span>
              </div>

              <p className="font-semibold text-xl text-red-400">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
