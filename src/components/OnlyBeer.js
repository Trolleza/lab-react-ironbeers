import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default class OnlyBeer extends Component {
  state = {
    OneBeer: '',
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      );
      console.log(response);
      this.setState({ OneBeer: { ...response.data } });
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
            {this.state.OneBeer.tagline} &nbsp; {this.state.OneBeer.first_brewed}{' '}
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
