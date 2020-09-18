import React from "react";

//transform: ;
//width: 100%;

const ComingSoon = () => {
  return (
    <div className="container">
      <div style={{ position: "relative", height: "30vh" }}>
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            transform: "translate(-50%, -50%)",
          }}
        >
          COMING SOON...
        </h1>
      </div>
    </div>
  );
};

export default ComingSoon;
