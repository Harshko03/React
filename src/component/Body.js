import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';  //resList is an array of restaurant objects
const Body = () => {
    return (
      <div className="body">
        <div className="filter-container">
          <button className='filter-btn' onClick={()=>{
console.log("clicked")
          }}>Top Restaurants</button>
        </div>
        <div className="res-container">
         
  
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
  
        </div>
      </div>
    );
  };

  export default Body;


// * in the above code, we are looping through the restaurant data using the map() method and passing each restaurant object as the argument to the RestaurantCard component. The key prop is added to each RestaurantCard component, which is used by React to keep track of which component corresponds to which restaurant data. This helps React optimize the re-rendering process.