import React, { Component } from 'react';
import XLib from 'helpers/Lib'
import * as geolib from 'geolib';
class Home extends Component<any, any>
{
  render() {
    let start = {
      lat:'26.892880599999998',
      long:'80.94677399999999',
    };
    let end = {
      lat:'26.894449',
      long:'80.941628',
    };

    // Geolib Library
    let distance = geolib.getDistance(
      { latitude: 26.892880599999998, longitude:80.94677399999999 },
      { latitude: 26.894449, longitude: 80.941628 },
    )   
    let km = geolib.convertDistance(distance, 'km');
    return (
      <div className='dashboard'>
        <div id='dashdata'>
          Home
        </div>
        <div id="map"></div>
        <div>
          {
           km + 'km'  
          }
        </div>
      </div>
    );
  }
}
export default Home;
