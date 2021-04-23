import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Beers from '../assets/beers.png';
import NewBeer from '../assets/new-beer.png';
import RandomBeer from '../assets/random-beer.png';

export default function HomePage() {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column">
        <div className="card" style={{ width: '50rem' }}>
          <img src={Beers} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">All Beers</h2>
            <p className="card-text, text-justify">
              A trip to Munich’s annual Oktoberfest comes with a few guarantees.
              Food will be in abundance: sausages, baked pretzels, punchy
              sauerkraut and buttered noodles. The crowd-puller will host
              gaggles of costumed guests, decked in lederhosen for men and
              dirndls (bodiced Bavarian dresses) for women. Music and parades
              will provide constant entertainment. And most important: there
              will be beer.
            </p>
            <a href="/beers" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div className="card" style={{ width: '50rem' }}>
          <img src={RandomBeer} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Random Beer</h2>
            <p className="card-text, text-justify">
              People have been celebrating with beer (and other booze) for
              millennia. When archaeologists traced the origins of human
              civilization, they found that communities centered on alcohol. The
              Göbekli Tepe site in southeastern Turkey, dated to more than
              10,000 years ago, shows evidence of beer brewing at ancient
              feasting sites. “Production and consumption of alcoholic beverages
              is an important factor in feasts facilitating the cohesion of
              social groups, and in the case of Göbekli Tepe, in organizing
              collective work,” Oliver Dietrich, an archaeologist for the German
              Archaeological Institute, told LiveScience.
            </p>
            <a href="/beers/random" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div className="card" style={{ width: '50rem' }}>
          <img src={NewBeer} className="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">New Beer</h2>
            <p className="card-text, text-justify">
              For most people, popping into the local bar isn’t a viable
              proposition right now, which means more people are drinking at
              home. And while drinking at home isn’t much of a substitute for
              gathering with friends at a bar, there are at least a few
              advantages. For one, you don’t have to worry about calling a Lyft
              at the end of the night. Now is also a good time to experiment
              with new drinks, whether that’s a cocktail you’ve never made, a
              tasty new tequila or a new craft beer from some of the best
              breweries. Despite the challenges this and last year have brought,
              plenty craft breweries have announced new beer offerings,
              especially amid the surge of liquor sales. If you’re looking to
              break out of a rut of drinking the same beer, we’ve rounded up
              some of the best new beer releases to try right now.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
