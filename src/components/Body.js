import { useEffect, useState } from "react";
import CardSection from "../CardSection";
import Shimmer from "./Shimmer";

const mockData = [
  {
    info: {
      name: "Chaayos Chai+Snacks=Relax",
      id: 90566,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_90566.JPG",
      locality: "Connaught Place",
      costForTwo: "₹250 for two",
      cuisines: [
        "Beverages",
        "Chaat",
        "Snacks",
        "Bakery",
      ],
      avgRating: 4.7,
    },
  },

  {
    info: {
      name: "Theobroma",
      id: 58217,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/31/e2c409d5-e7f6-4afd-bc80-3fff1f89f665_58217.JPG",
      locality: "Connaught Place",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
    },
  },

  {
    info: {
      name: "Burger King",
      id: 1150282,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/22/e40f52b6-4046-4ba9-891b-6dd0986dac71_1150282.jpg",
      locality: "Connaught Place",
      costForTwo: "₹500 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.5,
    },
  },
];

const Body = () => {
  const [ListOfRes, setNewListofRes] = useState(mockData);
  const [originalList, setOriginalList] = useState(mockData);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?" +
          encodeURIComponent(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&page_type=DESKTOP_WEB_LISTING"
          )
      );

      const json = await response.json();

      const apiList =
        json?.data?.cards[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants || [];

      if (apiList.length > 0) {
        setNewListofRes(apiList);
        setOriginalList(apiList);
      }
    } catch (error) {
      console.log("API failed, showing mock data");
    }
  };

  // Conditional Rendering
  if (ListOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-container">

        <div className="Search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="search-btn"
            onClick={() => {
              const filteredSearch = originalList.filter((res) =>
                res.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setNewListofRes(filteredSearch);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = originalList.filter(
                (res) => res.info?.avgRating > 4
              );

              setNewListofRes(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

      </div>

      <div className="cards-container">
        {ListOfRes.map((res) => (
          <div
            className="res-container"
            key={res.info?.id}
          >
            <CardSection resdata={res.info} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;