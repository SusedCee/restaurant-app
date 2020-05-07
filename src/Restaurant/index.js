import React from 'react';

  const Restaurant = props => {
  	const {name, city, state, telephone, genre} = props;
    return (

            <tr>
              <td>{name}</td>
              <td>{city}</td>
              <td>{state}</td>
              <td>{telephone}</td>
              <td>{genre}</td>
            </tr>

      );
  };
export default Restaurant;

