import RestaurantList from "../src/Constants";
import { CDN_URL } from "../src/Constants";


const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{avgRating} ⭐</h4>
    </div>
  );
};


export default RestaurantCard;
