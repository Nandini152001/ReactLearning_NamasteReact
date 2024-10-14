import { CDN_URL } from "../utils/constants";

const RestarurantCard = (props) => {
    // const {resName, cuisine} = props;
    const { resData } = props;
  
    // OBJECT DESTRUCTING AND OPTIONAL CHAINING
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, deliveryTime} =
      resData?.info;
  
    // console.log("restaurant list"+ resData?.data);
    return (
      <div
        className="res-card"
        style={{
          backgroundColor: "lightgray",
        }}
      >
        <h3 className="res-card1">{name}</h3>
        <img
          alt="logo"
          className="res-img"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h4> {cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime + " min"}</h4>
      </div>
    );
  };

export default RestarurantCard;