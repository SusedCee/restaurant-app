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
      selectedSearch: null,
      selectedGenre: '',
      search: null,
      resListLoaded: false
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
    this.setState({selectedSearch: this.state.search})
  }

  render() {

  var { isLoaded, restaurants } = this.state;
  console.log(this.state);

  const restaurantList = restaurants
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((data) => {
      if(this.state.selectedSearch === null || this.state.selectedSearch === '')
        return data
      else if(data.name.toLowerCase().includes(this.state.selectedSearch.toLowerCase()) || data.city.toLowerCase().includes(this.state.selectedSearch.toLowerCase()) || data.genre.toLowerCase().includes(this.state.selectedSearch.toLowerCase())) {
        return data
      }
    })
    .map(restaurant => {
      if (restaurant === 0) {
        return (
          <div> There are no matching results </div>
        )
      }
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
    })

  if (!isLoaded) {
    return <div> Loading restaurants... </div>
  } else {
      return (
        <div className='App'>
          <h1>HUNGR</h1>
          <p>When hunger kicks in during quarantine, use Hungr to search for a restaurant. </p>
          <form className='search-form'>
            <label>
            Search by name, city, or genre
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
                <option key='all-states'>All</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </label>
            <label>
            Genre
              <select value={this.state.selectedState}
                  onChange={(e) => this.setState({selectedGenre: e.target.value})}>
                <option key='all-genres'>All</option>
                <option value="American">American</option>
                <option value="Asian">Asian</option>
                <option value="Bakery">Bakery</option>
                <option value="Belgian">Belgian</option>
                <option value="Bistro">Bistro</option>
                <option value="British">British</option>
                <option value="Cafe">Cafe</option>
                <option value="Coffee">Coffee</option>
                <option value="Contemporary">Contemporary</option>
                <option value="Continental">Continental</option>
                <option value="Eclectic">Eclectic</option>
                <option value="European">European</option>
                <option value="French">French</option>
                <option value="Fusion">Fusion</option>
                <option value="Hawaiian">Hawaiian</option>
                <option value="International">International</option>
                <option value="Irish">Irish</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Kosher">Kosher</option>
                <option value="Oysters">Oysters</option>
                <option value="Pasta">Pasta</option>
                <option value="Polynesian">Polynesian</option>
                <option value="Pacific Rim">Pacific Rim</option>
                <option value="Sandwiches">Sandwiches</option>
                <option value="Seafood">Seafood</option>
                <option value="Steak">Steak</option>
                <option value="Sushi">Sushi</option>
                <option value="Tea">Tea</option>
                <option value="Traditional">Traditional</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vietnamese">Vietnamese</option>
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
            {restaurantList}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default App;

              // {restaurants
              //   .sort((a, b) => a.name.localeCompare(b.name))
              //   .map((restaurant, id) => (
              //     <tr
              //     key={restaurant.id}
              //     name={restaurant.name} 
              //     city={restaurant.city} 
              //     state={restaurant.state} 
              //     telephone={restaurant.telephone} 
              //     genre={restaurant.genre}
              //     >
              //       <td>{restaurant.name}</td>
              //       <td>{restaurant.city}</td>
              //       <td>{restaurant.state}</td>
              //       <td>{restaurant.telephone}</td>
              //       <td>{restaurant.genre}</td>
              //     </tr>
              // ))}


    // const items = Information
    // .filter((data)=>{
    //   if(this.state.search == null)
    //       return data
    //   else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.country.toLowerCase().includes(this.state.search.toLowerCase())){
    //       return data
    //   }
    // }).map(data=>{
    //   return(
    //   <div>
    //     <ul>
    //       <li style={{position:'relative',left:'10vh'}}>
    //         <span style={styleInfo}>{data.name}</span>
    //         <span style={styleInfo}>{data.age}</span>
    //         <span style={styleInfo}>{data.country}</span>
    //       </li>
    //     </ul>
    //   </div>
    //   )
    // })


                // {restaurants
                //   .sort((a, b) => a.state.localeCompare(b.state))
                //   .map(selectedState => (
                //     <option key={selectedState.value} value={selectedState.value}>
                //     {selectedState.state}
                //     </option>
                // ))}

                // {restaurants
                //   .sort((a, b) => a.genre.localeCompare(b.genre))
                //   .map(selectedGenre => (
                //     <option key={selectedGenre.value} value={selectedGenre.value}>
                //     {selectedGenre.genre}
                //     </option>
                // ))}
