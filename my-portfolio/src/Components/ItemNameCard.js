import React from "react";

const ItemNameCard = (props) => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-2 s">{props.name}</h1>
    </div>
  );
};

export default ItemNameCard;
