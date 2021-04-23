import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'

export default class AllBeers extends Component {
  state = {
    Beerslist: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      console.log(response);
      this.setState({ Beerslist: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
        
      <div style={{width: '500'}} >
        <Navbar />
        <hr />
        <div>
          {this.state.Beerslist.map((beer) => {
            return (
              <div key={beer._id} className="media m-3">
                <Link to={ `/beers/${beer._id}`}>
                <img
                  src={beer.image_url}
                  width="40px"
                  className="align-self-center mr-3"
                  alt="beerimage"
                />
                </Link>
                <div className="media-body" >
                  <h3 className="mt-0">{beer.name}</h3>
                  <p>{beer.tagline}</p>
                  <h5>Created By: {beer.contributed_by}</h5>
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    );
  }
}
