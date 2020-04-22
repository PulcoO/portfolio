import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private footerVisibility = false;
  private footerClassActive = "footer footer-container-active";
  private footerClassInactive = "footer footer-container-inactive";
  private btnFooterClassInfo = "fas fa-info-circle fa-xl btn-information"
  private btnFooterClassArrowDown = "fas fa-arrow-circle-down fa-xl btn-information"

  constructor() { }

  ngOnInit() {
  }

  footerBtnInfoClick(){
    this.footerVisibility = !this.footerVisibility;
  }

}
