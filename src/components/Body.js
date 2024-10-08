import RestarurantCard from "./RestarurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button clicked!");
          }}
          onMouseOver =  {
            () => {
              console.log('Mousing Over!');
            }
          }
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestarurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
