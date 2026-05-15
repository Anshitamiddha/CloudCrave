import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://corsproxy.io/?" +
            encodeURIComponent(
                "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=41297&submitAction=ENTER"
            )
        );

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
            <h1>{name}</h1>

            <p>{cuisines.join(", ")}</p>

            <p>{avgRatingString}</p>

            <h3>{costForTwoMessage}</h3>

            <h3>{areaName}</h3>
            <h2>Menu</h2>

            <ul>
              {itemCards.map((item) => (
  <li key={item.card.info.id}>
    {item.card.info.name}
  </li>
))}
              
            </ul>
        </div>
    );
};

export default RestaurantMenu;