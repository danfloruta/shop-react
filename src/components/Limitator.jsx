import React from "react";
import { Card } from "@mui/material";

const Limitator = ({ icon: Icon, text }) => {
  return (
    <Card className="flex flex-row items-center p-4 w-4/6 md:w-1/6">
      <Icon fontSize="large" className="scale-150 pb-2 mt-4 mx-4" />
      <p className="font-semibold mt-2 text-center">{text}</p>
    </Card>
  );
};

export default Limitator;
