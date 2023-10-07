import React from "react";

const ShopperForm = () => {
  return (
    <div className="container mx-auto text-center">
      <form
        target="_blank"
        action="https://formsubmit.co/919de14d0d8b7728564203fba3755e55"
        method="POST"
        className="max-w-lg mx-auto"
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
        <button
          type="submit"
          className="bg-customDarkGreen text-white text-lg py-3 rounded-lg px-10 hover:bg-customGreen "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShopperForm;
