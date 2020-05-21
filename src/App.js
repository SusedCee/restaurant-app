import React, { Component } from 'react';
import './App.css';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import Restaurants from './components/Restaurants';
import Pagination from './components/Pagination';
//import Formm from './components/Form';

class App extends Component {

//State of app
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      isLoaded: false,
      selectedState: '',
      selectedSearch: '',
      selectedGenre: '',
      currentPage: 1,
      resPerPage: 10,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.clearAll.bind(this);
  }

//Happens once app is visited
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

//Updating a filter change and updating the current page to 1
  handleChange(event) {
    this.setState({search: event.target.value, currentPage: 1});
  }

//Updating input search and setting current page to 1
  handleSubmit(event) {
    event.preventDefault();
    this.setState({selectedSearch: this.state.search, currentPage: 1})
  }

//Clear all filters button by setting state to all
  clearAll(event) {
    this.setState({
    selectedState: "",
    selectedSearch: "",
    selectedGenre: "" , 
    currentPage: 1,    
    });
  }

  render() {

    var { isLoaded, restaurants, currentPage, resPerPage } = this.state;

//function that maps all restaurants based on filters chosen
    const restaurantList = restaurants
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter((data) => {
      if(this.state.selectedSearch === '' && this.state.selectedState === '' && this.state.selectedGenre === '') {
        return data
      }
      else if((data.name.toLowerCase().includes(this.state.selectedSearch.toLowerCase()) || data.city.toLowerCase().includes(this.state.selectedSearch.toLowerCase()) || data.genre.toLowerCase().includes(this.state.selectedSearch.toLowerCase())) && this.state.selectedState === '' && this.state.selectedGenre === '') {
        return data
      }
      else if((data.name.toLowerCase().includes(this.state.selectedSearch.toLowerCase()) || data.city.toLowerCase().includes(this.state.selectedSearch.toLowerCase()) || data.genre.toLowerCase().includes(this.state.selectedSearch.toLowerCase())) && this.state.selectedState === data.state && this.state.selectedGenre === '') {
        return data
      }
      else if((data.name.toLowerCase().includes(this.state.selectedSearch.toLowerCase()) || data.city.toLowerCase().includes(this.state.selectedSearch.toLowerCase()) || data.genre.toLowerCase().includes(this.state.selectedSearch.toLowerCase())) && this.state.selectedState === data.state && this.state.selectedGenre === data.genre) {
        return data
      }
      else if(this.state.selectedSearch === '' && this.state.selectedState === data.state && this.state.selectedGenre === '') {
        return data
      }
      else if(this.state.selectedSearch === '' && this.state.selectedState === '' && data.genre.toLowerCase().includes(this.state.selectedGenre.toLowerCase())) {
        return data
      }
      else if(this.state.selectedSearch === '' && data.state.toLowerCase().includes(this.state.selectedState.toLowerCase()) && data.genre.toLowerCase().includes(this.state.selectedGenre.toLowerCase())) {
        return data
      }
    })

//Get current posts depending on page
    const indexOfLastRes = currentPage * resPerPage;
    const indexOfFirstRes = indexOfLastRes - resPerPage;
    const currentRestaurants = restaurantList.slice(indexOfFirstRes, indexOfLastRes);

//Change page
    const paginate = (pageNumber) => {
      this.setState({currentPage: pageNumber});
    } 

    return (
      <div className='App'>
        <h1>HUNGR</h1>
        <h4>When quarantine hunger kicks in, use Hungr to search for a restaurant. </h4>
        <div className="search-section">
          <Form.Group className="search-group">
            <InputGroup className="search">
              <FormControl
              className='search-bar'
              type='text'
              size="sm"
              value={this.state.value}
              aria-label="Search by name, city, or genre"
              aria-describedby="basic-addon2"
              placeholder="Search by name, city, or genre"
              onChange={this.handleChange}
              />
              <InputGroup.Append>
                <Button
                variant="outline-dark"
                className='search-button' 
                type='button'
                size="sm"
                onClick={this.handleSubmit}
                > 
                Search 
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group className="dropdown search-group">
            <label>
            State
              <select 
              value={this.state.selectedState}
              className="select"
              onChange={(e) => this.setState({selectedState: e.target.value, currentPage: 1})}
              >
                <option value=''>All</option>
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
          </Form.Group>
          <Form.Group className="dropdown search-group">
            <label>
            Genre
              <select value={this.state.selectedGenre}
              className="select"
                onChange={(e) => this.setState({selectedGenre: e.target.value, currentPage: 1})}>
                <option value=''>All</option>
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
                <option value="Grill">Grill</option>
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
          </Form.Group> 
          <Form.Group className="search-group">
            <Button className="clear" size="sm" variant="outline-dark" type="button" onClick={this.onClick}>Clear All Filters</Button>
          </Form.Group>
        </div>
        <Restaurants currentRestaurants={currentRestaurants} restaurantList={restaurantList} isLoaded={isLoaded} />
        <Pagination resPerPage={resPerPage} totalRes={restaurantList.length}  paginate={paginate}/>
        <img className="wheat-image" src="wheat.png" alt="wheat"/>
      </div>
    );
  }
}

export default App;
