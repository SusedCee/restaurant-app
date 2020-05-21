import React from 'react'; 
import {Table} from 'react-bootstrap';

const Restaurants = ({ restaurantList, isLoaded, currentRestaurants }) => {

  const noResults = () => {
    if(restaurantList.length === 0) {
      return <p>NO RESULTS</p>
    }
  }

  if (!isLoaded) {
    return <div className='loading'> Loading restaurants... </div>
  }

	return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Phone</th>
            <th>Genre</th>
          </tr>
        </thead>
        {currentRestaurants.map(restaurant => {
          return(
          <tbody>
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
          </tbody>
          )
        },)}
      </Table> 
    {noResults()} 
    </div> 
	);
};

export default Restaurants;




