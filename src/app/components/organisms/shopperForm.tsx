import React from "react";
import { ActionButton } from "../atoms/actionButton";
const ShopperForm = () => {
  return (
    <div className="container mx-auto">
      <form
        target="_blank"
        action="https://formsubmit.co/919de14d0d8b7728564203fba3755e55"
        method="POST"
        className=" mx-auto"
      >
        <div className="mb-4">
          <div className="grid grid-cols-1  gap-4">
            <input
              type="email"
              name="email"
              className="border border-customDarkGreen rounded-lg p-3"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <ActionButton type="submit" text="Submit" />
      </form>
    </div>
  );
};

export default ShopperForm;
