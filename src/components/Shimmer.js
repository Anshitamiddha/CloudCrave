import "./Shimmer.css";

const ShimmerCard = () => {
  return (
    <div className="res-container">
      <div className="shimmer sk-card-img"></div>
      <div className="sk-details">
        <div className="shimmer sk-res-name"></div>
        <div className="shimmer sk-cuisine"></div>
        <div className="shimmer sk-location"></div>
        <div className="sk-extra">
          <div className="shimmer sk-rating"></div>
          <div className="shimmer sk-cost"></div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="logo">
          <div className="shimmer sk-logo"></div>
        </div>
        <div className="navItems">
          <div className="sk-nav">
            <div className="shimmer sk-nav-item"></div>
            <div className="shimmer sk-nav-item"></div>
            <div className="shimmer sk-nav-item"></div>
            <div className="shimmer sk-nav-item"></div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="search">
        <div className="shimmer sk-search-bar"></div>
      </div>

      {/* Filters */}
      <div className="sk-filter-row">
        <div className="shimmer sk-filter-btn"></div>
        <div className="shimmer sk-filter-btn"></div>
        <div className="shimmer sk-filter-btn"></div>
        <div className="shimmer sk-filter-btn"></div>
      </div>

      {/* Cards */}
      <div className="cards-container">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default Shimmer;