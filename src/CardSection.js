// 🔥 helper function
const getImage = (img) => {
  if (!img) return "https://via.placeholder.com/200";

  if (img.startsWith("http")) return img;

  return (
    "https://media-assets.swiggy.com/swiggy/image/upload/" + img
  );
};

const CardSection = ({ resdata }) => {
  if (!resdata) return null;

  const {
    name,
    cuisines,
    locality,
    avgRating,
    costForTwo,
    cloudinaryImageId,
  } = resdata;

  return (
    <div className="card">
      <img
        className="card-img"
        src={getImage(cloudinaryImageId)}
        alt={name}
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/200";
        }}
      />

      <div className="details">
        <h3 className="res-name">{name}</h3>

        <h4 className="res-cuisine">
          {cuisines?.join(", ")}
        </h4>

        <h4 className="res-location">
          {locality}
        </h4>

        <div className="extra">
          <span className="rating">
            {avgRating} ⭐
          </span>

          <span className="cost">
            {costForTwo}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardSection;