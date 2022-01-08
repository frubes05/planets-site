import React from "react";

export const Burger = ({clickHandler}:any) => {
  return (
    <label htmlFor="burger" className="burger">
      <input type="checkbox" id="burger" className="burger-input" onClick={()=>clickHandler()} />
      <div className="burger-menu">
        <span className="burger-menu__line first"></span>
        <span className="burger-menu__line second"></span>
        <span className="burger-menu__line third"></span>
      </div>
    </label>
  );
};
