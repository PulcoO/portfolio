import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Planet } from '~app/_Models/Planet.model';
import { PlanetService } from '~app/_Services/Planet/planet.service';
declare var $ :any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public planets : Planet[];
  @ViewChild('solarSystem') solarSystem:ElementRef; 

  constructor(
    private _planetService : PlanetService,
    private el:ElementRef 
  ) { }

  ngOnInit() {
    this.getPlanets()
    console.log(this.planets)

      var body = $(".page_content"),
          universe = $("#universe"),
          solarsys = $("#solar-system");
    
      var init = function() {
        body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
          $(this).removeClass('hide-UI').addClass("set-skills");
          $(this).dequeue();
        });
      };
    
      var setView = function(view) { universe.removeClass().addClass(view); };
    
      $("#toggle-data").click(function(e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
      });
    
      $("#data a").hover(function(e) {
        var ref = $(this).attr("class");
        console.log(ref)
        solarsys.removeClass().addClass(ref);
        var solarRed = solarsys
        console.log(solarRed);
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
      });
    
      init();
  }
  ngAfterViewInit() {
    console.log(this.solarSystem.nativeElement);
  }

  private getPlanets()
  {
    this._planetService.getPlanets()
      .subscribe(planets => this.planets = planets)
  }

  
  }
  
