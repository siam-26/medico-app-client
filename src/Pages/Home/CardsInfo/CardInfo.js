import React from "react";

const CardInfo = ({ infoCard }) => {
  const { name, description, img, bgColor } = infoCard;
  return (
    <div className={`card p-4 text-white md:card-side ${bgColor} shadow-xl`}>
      <figure>
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardInfo;
