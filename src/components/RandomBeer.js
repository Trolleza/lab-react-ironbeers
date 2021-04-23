import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

export default class RandomBeer extends Component {
  state = {
    randomBeer: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      this.setState({ randomBeer: response.data });
      console.log(this.state.randomBeer);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="mt-5 text-center container">
          <img src={this.state.OneBeer.image_url} width="50px"></img>
          <h1>{this.state.OneBeer.name}</h1>
          <h4>
            {this.state.OneBeer.tagline} &nbsp;{' '}
            {this.state.OneBeer.first_brewed}{' '}
          </h4>
          <h5>{this.state.OneBeer.attenuation_level} </h5>
          <div>
            <p>{this.state.OneBeer.description}</p>
          </div>
          <p>{this.state.OneBeer.contributed_by}</p>
        </div>
      </div>
    );
  }
}
