import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs'; // afin de pouvoir passer en assin
import { map, catchError } from 'rxjs/operators';

import { Planet } from '~app/_Models/Planet.model';
import { PLANETS } from '~app/_Data/Planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor() { }

  public getPlanets(): Observable<Planet[]>{
    return of (PLANETS)
  }

  /**
   * @param {string} planetName
   */
  public getPlanetByName(planetName) : Observable<Planet>{
    return of(PLANETS.find(planet => planet.name === planetName ))
  }

  /**
   * @param {string} planetId
   */
  public getPlanetById(planetId) : Observable<Planet>{
    return of(PLANETS.find(planet => planet.id === planetId ))
  }
}
