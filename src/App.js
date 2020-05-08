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
      selectedGenre: '',
      search: '',
    } 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
      headers: {
      Authorization: 'Api-Key q3MNxtfep8Gt', }, 
    })
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

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {

  var { isLoaded, restaurants } = this.state;
  console.log(this.state);
  if (!isLoaded) {
    return <div> Loading restaurants... </div>
  } else {
      return (
        <div className='App'>
          <h1>HUNGR</h1>
          <p>When hunger kicks in during quarantine, use Hungr to search for a restaurant. </p>
          <form className='search-form'>
            <label>
            Search by name, city or genre
              <input
              className='search-bar' 
              type='text' 
              value={this.state.value}
              placeholder="e.g: Studio Cake, Reno, Italian"
              onChange={this.handleChange}
              />
            </label>
              <button
              className='search-button' 
              type='button'
              onClick={this.handleSubmit}
              > 
              Search 
              </button>
            <br />
            <label>
            State
              <select 
              value={this.state.selectedState}
              onChange={(e) => this.setState({selectedState: e.target.value})}>
                <option key='all-states'> 
                All
                </option>
                {restaurants
                  .sort((a, b) => a.state.localeCompare(b.state))
                  .map(selectedState => (
                    <option key={selectedState.value} value={selectedState.value}>
                    {selectedState.state}
                    </option>
                ))}
              </select>
            </label>
            <label>
            Genre
              <select value={this.state.selectedState}
                  onChange={(e) => this.setState({selectedGenre: e.target.value})}>
                <option key='all-states'> 
                All
                </option>
                {restaurants
                  .sort((a, b) => a.genre.localeCompare(b.genre))
                  .map(selectedGenre => (
                    <option key={selectedGenre.value} value={selectedGenre.value}>
                    {selectedGenre.genre}
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
