import React from "react";

const Center = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      {children}
    </div>
  );
};

export default Center;
