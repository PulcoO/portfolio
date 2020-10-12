import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Planet } from '~app/_Models/Planet.model';
import { PlanetService } from '~app/_Services/Planet/planet.service';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent implements OnInit {

public planet : Planet;
public planets : Planet[];
  
  constructor( 
    private _planetService : PlanetService, 
    private _activeRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe( routeParams => {
      this.getPlanetById()
    })
  }
  /**
   * 
   */
  private getPlanetByName()
  {
    const PLANETNAME = this._activeRoute.snapshot.paramMap.get('PlanetName');
    this._planetService.getPlanetByName(PLANETNAME)
      .subscribe(planet => this.planet = planet)
  }
  /**
   * 
   */
  private getPlanetById(){
    const PLANETID = this._activeRoute.snapshot.paramMap.get('PlanetId');
    this._planetService.getPlanetById(PLANETID)
      .subscribe(planet =>this.planet = planet)
  }
  /**
   * 
   */
  private getPlanets()
  {
    this._planetService.getPlanets()
      .subscribe(planets => this.planets = planets)
  }

}
