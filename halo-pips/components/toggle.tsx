import React from "react";

const Toggle = () => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">TPB/HMIF?</span>
        <input type="checkbox" className="toggle" defaultChecked />
      </label>
    </div>
  );
};

export default Toggle;
