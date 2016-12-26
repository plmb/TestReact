var React = require('react');


var WeatherMessage = ({location, temp}) => {
    return(
      <p>It's it {temp} in {location}.</p>
    );
}

module.exports = WeatherMessage;