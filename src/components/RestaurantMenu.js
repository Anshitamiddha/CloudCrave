import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [resId]);

    const fetchMenu = async () => {

        const data = await fetch(Menu_API(resId));

        const json = await data.json();

        console.log(json);

        setResInfo(json.data);
    };
    const info = resInfo?.cards?.find(
        (card) => card?.card?.card?.info
    )?.card?.card?.info;

    const itemCards =
  resInfo?.cards?.find(
    (c) => c?.groupedCard
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
    (c) => c?.card?.card?.itemCards
  )?.card?.card?.itemCards || [];
    if (!info) return <Shimmer />;

    const {
        name,
        cuisines,
        costForTwoMessage,
        areaName,
        avgRatingString,
    } = info;

    return (
  <div className="menu">

    <div className="restaurant-info">

      <h1 className="restaurant-name">
        {name}
      </h1>

      <p className="cuisines">
        {cuisines?.join(", ")}
      </p>

      <div className="meta-row">
        <span className="rating">⭐ {avgRatingString}</span>
        <span className="dot">•</span>
        <span className="price">{costForTwoMessage}</span>
      </div>

      <p className="location">
        {areaName}
      </p>

    </div>

    <h2 className="menu-title">Menu</h2>

    <ul className="menu-list">
      {itemCards.map((item) => (
        <li key={item.card.info.id} className="menu-item">

          <div className="item-name">
            {item.card.info.name}
          </div>

          <div className="item-price">
            ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
          </div>

        </li>
      ))}
    </ul>

  </div>
);
};

export default RestaurantMenu;