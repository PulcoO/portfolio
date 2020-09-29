import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerVisibility = false;
  footerClassActive = "footer footer-container-active";
  footerClassInactive = "footer footer-container-inactive";
  btnFooterClassInfo = "fas fa-info-circle fa-lg btn-information"
  btnFooterClassArrowDown = "fas fa-arrow-circle-down fa-lg btn-information"

  constructor() { }

  ngOnInit() {
  }

  footerBtnInfoClick(){
    this.footerVisibility = !this.footerVisibility;
  }

}
