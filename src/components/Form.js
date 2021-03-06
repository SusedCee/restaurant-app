import React from 'react'; 

const Formm = ({ restaurants, handleSubmit, handleState, selectedState, selectedGenre, selectedSearch, onClick, handleChange }) => {


	return(
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
	)
}

export default Formm;


// import React from 'react';

//   const StateOptions = props => {
//   	const {state} = props;
//     var stateOptions = props.filter((v, i, a) => a.indexOf(v) === i); 
//     return (
//       <option>{stateOptions}</option>
//       );
//   };
// export default StateOptions;

// import React from 'react';

//   const GenreOptions = props => {
//   	const {state} = props;
//     var genreOptions = props.filter((v, i, a) => a.indexOf(v) === i); 
//     return (
//       <option>{genreOptions}</option>
//       );
//   };
// export default GenreOptions;



