import React, { Component } from 'react';

export default class EarthquakeInfo extends Component {
  render() {
    return(
      <div className="earthquake-title">
        "This is a list of 8 Earthquakes occurring on the morning of July 14th across the United States."
      </div>

    )
  }
}



// The EarthquakeInfo should render a single div with the class "earthquake-title" to match the class in the style sheet. The div should include the following text: "This is a list of 8 Earthquakes occurring on the morning of July 14th across the United States."
//
// Underneath the .title div you should place the EarthquakeInfo then the EarthquakeList components.
