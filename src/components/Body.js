import resList from "../utils/mockData";
import CardSection from "../CardSection";


const Body = () => {
  return (
    <div className="body">

      {/* 🔍 filter Section */}

      <div className="  filter ">

        <button className="filter-btn"
        //filter logic
          onClick={()=>{
            
        }}
        
      > Top Rated Restaurant
      </button>
      </div>

      {/* 📦 Cards Container */}
      <div className="cards-container">
        {resList.map((res) => (
          <div className="res-container" key={res.id ?? res.name}>
            <CardSection resdata={res} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Body;