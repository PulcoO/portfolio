import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.scss']
})
export class LoveComponent implements OnInit {

public imagesPathR = "./assets/images/";
public loveArray : any = [
  {
    imageName : "LoveGameOfThrone",
    imageType : "png",
    title : "I love Game Of Throne"
  },
  {
    imageName : "LoveDoctorWho",
    imageType : "png",
    title : "I love Doctor Who"
  },
  {
    imageName : "LoveStudioGhibli",
    imageType : "png",
    title : "I Love Studio Ghibli Movies"
  },
  {
    imageName : "LoveSeaFood",
    imageType : "png",
    title : "I love Sea Food"
  },
  {
    imageName : "LoveVideoGames",
    imageType : "png",
    title : "I love Video Games"
  },
  {
    imageName : "LoveDigital",
    imageType : "png",
    title : "I love Digital"
  },
  {
    imageName : "LoveHistory",
    imageType : "png",
    title : "I'm a huge fan of history"
  },
  {
    imageName : "LoveHiking",
    imageType : "png",
    title : "I love Hiking !"
  },
  {
    imageName : "LoveMyCat",
    imageType : "jpg",
    title : "I Love my cat so much ! &#x1F605;"
  }

];
public activeLoveTitle ;

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {

      // Move last 2 slides to begining
      $('.slide').each(function(i){
        if ($(this).is(':last-of-type')) {
          $(this).css('order', -1);
        } else if ($(this).is(':nth-last-of-type(2)')) {
          $(this).css('order', -2);
        } else {
          $(this).css('order', i);
        }
        switch (parseInt($(this).css('order'))){
          case 0:
            $(this).css('opacity', 0.75);
            break;
          case 1 :
            $(this).css('opacity', 1);
            break;
          case 2 :
            $(this).css('opacity', 0.75);
            break;
          case 3 :
            $(this).css('opacity', 0.25);
            break;
          case -1 :
            $(this).css('opacity', 0.25);
            break;
          default :
            $(this).css('opacity', 0);
            break;
        }
      });
      
      // One at a time, wait for animation
      var carouselAnimating = false;
    
      // Carousel Nav
      $('.carousel-nav button').click(function(e){
        e.preventDefault();
        var dir = ($(this).hasClass('next')) ? 'next' : 'prev';
        if (carouselAnimating === false) {
          carouselAnimating = true;
          moveSlides(dir);
          slidesReset(dir);
        }
      });
      
      // Carousel moves all slides left or right by one slide
      function moveSlides(dir){
        var dir = (typeof dir !== "undefined") ? dir : 'next',
        currentLeft = parseFloat($('.carousel').css('margin-left')),
        slideWidth = $('.slide').outerWidth(true);
        slideWidth = (dir === 'next') ? slideWidth * -1 : slideWidth;
        $('.carousel').removeClass('noanimate');
        $('.carousel').css('margin-left', (currentLeft + slideWidth) + 'px');
      }
    
      // Reset Slides next For infinitite display
      function slidesReset(dir) {
        var dir = (typeof dir !== "undefined") ? dir : 'next';
        setTimeout(function(){
          // don't animate order/carousel shift
          $('.carousel').addClass('noanimate');
          var slides = $('.slide');
          var loveStatement = $('#loveStatement');
          // Next
          if (dir === 'next') {
            $(slides).each(function(){
              if (-2 === parseInt($(this).css('order'))) {
                $(this).css('order', slides.length - 3);
              }	else {
                $(this).css('order', parseInt($(this).css('order')) - 1);
              }
              switch (parseInt($(this).css('order'))){
                case 0:
                  $(this).css('opacity', 0.75);
                  break;
                case 1 :
                  $(this).css('opacity', 1);
                  break;
                case 2 :
                  $(this).css('opacity', 0.75);
                  break;
                case 3 :
                  $(this).css('opacity', 0.25);
                  break;
                case -1 :
                  $(this).css('opacity', 0.25);
                  break;
                default :
                  $(this).css('opacity', 0);
                  break;
              }
            });
          // Prev
          } else {
            $(slides).each(function(){
              if (slides.length === parseInt($(this).css('order')) + 3) {
                $(this).css('order', -2);
              }	else {
                $(this).css('order', parseInt($(this).css('order')) + 1);
              }
              switch (parseInt($(this).css('order'))){
                case 0:
                  $(this).css('opacity', 0.75);
                  break;
                case 1 :
                  $(this).css('opacity', 1);
                  break;
                case 2 :
                  $(this).css('opacity', 0.75);
                  break;
                case 3 :
                  $(this).css('opacity', 0.25);
                  break;
                case -1 :
                  $(this).css('opacity', 0.25);
                  break;
                default :
                  $(this).css('opacity', 0);
                  break;

              }
            });
          }
          $('.carousel').removeAttr('style');
          carouselAnimating = false;
        }, 600);
      }
      
    });
    // console.log(this.loveArray.filter(l => l.imageName === 'LoveGameOfThrone'))
    // console.log(this.getTitleOfLoveById('LoveGameOfThrone'))
      }

  getTitleOfLoveById(activeLoveId){
    return this.loveArray.filter(l => l.imageName === activeLoveId)
  }
}
