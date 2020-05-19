import React from 'react'; 

const Restaurants = ({ restaurantList, isLoaded, currentRestaurants }) => {

  const noResults = () => {
    if(restaurantList.length === 0) {
      return <p>no results</p>
    }
  }
  
  if (!isLoaded) {
    return <div> Loading restaurants... </div>
  }

	return (
    <div>
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>City</td>
          <td>State</td>
          <td>Phone</td>
          <td>Genre</td>
        </tr>
      {currentRestaurants.map(restaurant => {
        return(
        <tr
        key={restaurant.id}
        name={restaurant.name} 
        city={restaurant.city} 
        state={restaurant.state} 
        telephone={restaurant.telephone} 
        genre={restaurant.genre}
        >
          <td>{restaurant.name}</td>
          <td>{restaurant.city}</td>
          <td>{restaurant.state}</td>
          <td>{restaurant.telephone}</td>
          <td>{restaurant.genre}</td>
        </tr>
        )
      },)}
      </tbody>
    </table> 
    {noResults()} 
    </div> 
	);
};

export default Restaurants;




