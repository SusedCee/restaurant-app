import React, { Component } from 'react';
//import Restaurant from './Restaurant';
//import StateOptions from './StateOptions';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      isLoaded: false,
      selectedState: '',
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
    })
    .catch(error => {
      console.log(error);
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
          Search by name, city or genre
            <input 
            className='search-bar' 
            type='text' 
            placeholder="e.g: Denver"
            onChange={this.handleInputChange}
            />
            <button
            className='search-button' 
            type='submit'
            > 
            Search 
            </button>
          </label>
          <br />
          <label>
          State
          <select value={this.state.filteredState}
              onChange={(e) => this.setState({filteredState: e.target.value})}>
          {restaurants
            .sort((a, b) => a.state.localeCompare(b.state))
            .map(filteredStates => (
              <option key={filteredStates.value}>
              {filteredStates.state}
              </option>
          ))}

          </select>
          </label>
          <label>
          Genre
          <select>
          {restaurants
            .sort((a, b) => a.genre.localeCompare(b.genre))
            .map(filteredGenre => (
              <option>
              {filteredGenre.genre}
              </option>
          ))}
          </select>
          </label>
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
        ))}
          </tbody>
          </table>

      </div>
    );
  }
  }
}

export default App;
