import React from 'react';

const Restaurants = ({ restaurants, loading }) => {

	return(
		<tbody className='list-group mb-4'>	
		{restaurants.map(restaurant => (
		    <tr>
		      <td>{restaurant.name}</td>
		      <td>{restaurant.city}</td>
		      <td>{restaurant.state}</td>
		      <td>{restaurant.telephone}</td>
		      <td>{restaurant.genre}</td>
		    </tr>  
		))}
	</tbody>
	)
}

export default Restaurants;