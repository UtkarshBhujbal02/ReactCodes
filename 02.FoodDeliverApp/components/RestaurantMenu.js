import { useParams } from "react-router-dom";
import { CDN_URL } from "../src/Constants";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { swiggy_menu_api_URL } from "../src/Constants";
import { MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from "../src/Constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // const [restaurant, setRestaurant] = useState(null);

  const [restaurant, menuItems] = useRestaurant(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  // async function getRestaurantInfo() {
  //   try {
  //     const data = await fetch(
  //       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5719139&lng=73.8231593&restaurantId=" + resId
  //     );
  //     const json = await data.json();
  //     console.log(json.data);
  //     setRestaurant(json?.data?.cards[2]?.card?.card?.info);

  //     setMenuItems(
  //       json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  //     );
  //     const menuItemsData =
  //       json?.data?.cards
  //         .find((x) => x.groupedCard)
  //         ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
  //         ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
  //         ?.map((x) => x.itemCards)
  //         .flat()
  //         .map((x) => x.card?.info) || [];

  //     const uniqueMenuItems = [];
  //     menuItemsData.forEach((item) => {
  //       if (!uniqueMenuItems.find((x) => x.id === item.id)) {
  //         uniqueMenuItems.push(item);
  //       }
  //     });
  //     setMenuItems(uniqueMenuItems);
  //   } catch (error) {
  //     setMenuItems([]);
  //     setRestaurant(null);
  //     console.log(error);
  //   }
  // }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <div>RestaurantId: {resId}</div>
        <h2>{restaurant.name}</h2>
        <img src={CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} ⭐</h3>
        <h3>{restaurant.costForTwoMessage} </h3>
      </div>
      <div>
        <h1>Menu</h1>
        {console.log(menuItems)}
        <ul>
          {menuItems.map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
