import RestarurantCard from "./RestarurantCard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body = () => {
  // Local State Variable - Super powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
// This syntax of creating state varibla using useState - is basically Array Destructuring.

  // Normal JS Variable
  let listOfRestaurantsJS = [
  {
    info:{
    id: "081001",
    name: "Brundavan Cafe",
    cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
    costForTwo: "₹150 for two",
    cuisines: ["North Indiann", "Biryani", "Tandoor"],
    avgRating: 3.8,
    deliveryTime: 45, 
  }
  },
  {
    info:{
      id: "081002",
      name: "Market Kitchen",
      cloudinaryImageId: "vkhcohhmqfczycw9vsar",
      costForTwo: "100 for two",
      cuisines: ["Mushroom", "South Indian Dosa", "Daal Baati"],
      avgRating: 4.7,
      deliveryTime: 50, 
      }
  },
  {
    info:{
      id: "081003",
      name: "Indie Republic",
      cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7s",
      costForTwo: "170 for two",
      cuisines: ["Kichdi", "South Indian Dosa", "Daal Baati"],
      avgRating: 4.3,
      deliveryTime: 45, 
      }
  }
  ];

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div>
        <button
          className="filter-btn"
          onClick={
            () => {
            // console.log("Button clicked!");
            // Filter Logic
            setListOfRestaurants()
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5)
            setListOfRestaurants(filteredList)
            console.log(listOfRestaurants);
          }
        }
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
        {listOfRestaurants.map((restaurant) => (
          <RestarurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
