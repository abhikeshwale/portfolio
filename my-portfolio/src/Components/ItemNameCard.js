import React from "react";

const ItemNameCard = (props) => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-2 s">{props.name}</h1>
    </div>
  );
};

export default ItemNameCard;
