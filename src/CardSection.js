// 🔥 helper function (add here)
const getImage = (img) => {
  if (!img) return "https://via.placeholder.com/200";
  if (img.startsWith("http")) return img;

  return "https://media-assets.swiggy.com/swiggy/image/upload/" + img;
};

const CardSection = ({ resdata }) => {
  if (!resdata) return null;
  
  return (
    <div className="card">
      <img
     className="card-img"
     src={getImage(resdata.cloudinaryImageId)}
     alt={resdata.name}
     onError={(e) => {
      e.target.src = "https://via.placeholder.com/200";
  }}
    />

      <div className="details">
        <h3 className="res-name">{resdata.name}</h3>
        <h4 className="res-cuisine">{resdata.cuisines?.join(", ")}</h4>
        <h4 className="res-location">{resdata.locality}</h4>

        <div className="extra">
          <span className="rating">{resdata.avgRating} ⭐</span>
          <span className="cost">{resdata.costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export  default CardSection;