import React, { useEffect, useState } from "react";
import { ActionButton } from "./joinUs";

const TypeformEmbed = () => {
  const [buttonClick, setButtonClick] = useState(false);
  useEffect(() => {
    // Load the Typeform script when the component mounts
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup by removing the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ActionButton
      text="Apply now"
      data-tf-popup="VxRLwf9l"
      data-tf-opacity="100"
      data-tf-size="100"
      data-tf-iframe-props="title=Vendor Application Form"
      data-tf-transitive-search-params
      data-tf-medium="snippet"
      onClick={() => setButtonClick(buttonClick ? false : true)}
    />
  );
};

export default TypeformEmbed;
