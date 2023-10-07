import React, { useEffect } from "react";

const TypeformEmbed = () => {
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
    <button
      data-tf-popup="VxRLwf9l"
      data-tf-opacity="100"
      data-tf-size="100"
      data-tf-iframe-props="title=Vendor Application Form"
      data-tf-transitive-search-params
      data-tf-medium="snippet"
      style={{
        all: "unset",
        fontFamily: "Helvetica, Arial, sans-serif",
        display: "inline-block",
        maxWidth: "100%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        backgroundColor: "#3F6A3C",
        color: "#fff",
        fontSize: "20px",
        borderRadius: "25px",
        padding: "0 33px",
        fontWeight: "bold",
        height: "50px",
        cursor: "pointer",
        lineHeight: "50px",
        textAlign: "center",
        margin: "0",
        textDecoration: "none",
      }}
    >
      Apply now
    </button>
  );
};

export default TypeformEmbed;
