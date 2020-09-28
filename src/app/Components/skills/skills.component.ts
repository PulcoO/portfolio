import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
          // Next
          if (dir === 'next') {
            $(slides).each(function(){
              if (-2 === parseInt($(this).css('order'))) {
                $(this).css('order', slides.length - 3);
              }	else {
                $(this).css('order', parseInt($(this).css('order')) - 1);
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
            });
          }
          $('.carousel').removeAttr('style');
          carouselAnimating = false;
        }, 600);
      }
      
    });

  }

  
  }
  
