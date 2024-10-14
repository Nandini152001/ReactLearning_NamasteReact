import RestarurantCard from "./RestarurantCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
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

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //     const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //     const json = await data.json();
  //     console.log(json);
  //     // CORS - Cross Origin Request issue
  //     // WATCH: https://www.youtube.com/watch?v=tcLW5d0KAYE
  // }

  // Conditional Rendering
  // if(listOfRestaurants.length === 0 ){
  //   // return <h1>Loading.....</h1>;
  //   return <Shimmer/>;
  // }

  console.log(listOfRestaurants);
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
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
            setListOfRestaurants(filteredList)
            // console.log(listOfRestaurants);.
          }
        }
          // onMouseOver =  {
          //   () => {
          //     console.log('Mousing Over!');
          //   }
          // }
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
