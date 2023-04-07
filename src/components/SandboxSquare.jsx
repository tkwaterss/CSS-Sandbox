import React from "react";

const SandboxSquare = ({ state }) => {
  const style = {
    height: "300px",
    width: "300px",
    backgroundColor: "#232323",
    display: 'flex',
    justifyContent: state.justifyContent,
    alignItems: state.alignItems,
    flexDirection: state.flexDirection,
    flexWrap: state.flexWrap,
    gap: state.gap === '' ? '0px' : `${state.gap}px`,
  };

  return (
    <div style={style}>
      <div className="square">1</div>
      <div className="square">2</div>
      <div className="square">3</div>
      <div className="square">4</div>
      <div className="square">5</div>
      <div className="square">6</div>
    </div>
  );
};

export default SandboxSquare;
