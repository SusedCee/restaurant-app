import React, { Component } from 'react';
import Restaurant from './Restaurant'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      isLoaded: false,
    } 
  }

  componentDidMount() {
    fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
      headers: {
      Authorization: 'Api-Key q3MNxtfep8Gt', }, })
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        restaurants: json,
      })
    });
  }

    handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }



  render() {

  var { isLoaded, restaurants } = this.state;
  console.log(this.state);
  if (!isLoaded) {
    return <div> Loading restaurants... </div>
  } else {
    return (
      <div className="App">
        <h1>HUNGR</h1>
        <p>When hunger kicks in during quarantine, use Hungr to search for a restaurant. </p>
        <form className='search-form'>
          <label>
          Search for a reastaurant
            <input 
            className='search-bar' 
            type='text' 
            placeholder="Search Restaurants"
            onChange={this.handleInputChange}
          />
          </label>
          <br />
          <button
          className='search-button' 
          type='submit'
          > 
          Search 
          </button>
        </form>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>City</td>
              <td>State</td>
              <td>Phone</td>
              <td>Genre</td>
            </tr>
        {restaurants
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((restaurant, id) => (
        <Restaurant 
        key={restaurant.id}
        name={restaurant.name} 
        city={restaurant.city} 
        state={restaurant.state} 
        telephone={restaurant.telephone} 
        genre={restaurant.genre}
        />
        ))}
          </tbody>
          </table>

      </div>
    );
  }
  }
}

export default App;
