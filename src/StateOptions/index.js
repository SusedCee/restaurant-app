import React from 'react';

  const StateOptions = props => {
  	const {state} = props;
    var stateOptions = props.filter((v, i, a) => a.indexOf(v) === i); 
    return (
      <option>{stateOptions}</option>
      );
  };
export default StateOptions;
