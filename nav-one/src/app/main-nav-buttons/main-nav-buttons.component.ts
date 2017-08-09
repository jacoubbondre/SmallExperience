import { Component, Input, Inject, ElementRef, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

let rootElement:object;

@Component({
  selector: 'app-main-nav-buttons',
  templateUrl: './main-nav-buttons.component.html',
  styleUrls: ['./main-nav-buttons.component.less']
})
export class MainNavButtonsComponent implements OnInit {

  elementRef: ElementRef;

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
      this.elementRef = elementRef;
  }
  //
  playBuildAnimations(){
    //
    let aboutBtn = $(rootElement).find('#aboutButton');
    let workBtn = $(rootElement).find('#workButton');
    let thoughtBtn = $(rootElement).find('#thoughtButton');

    $(rootElement).css('display','block');

    //about
    setTimeout(function(){
      $(aboutBtn).find('.nav-header').css('top','0px');
      $(aboutBtn).find('.nav-line').css('width','100%');

      setTimeout(function(){
        $(aboutBtn).find('.nav-image-holder').css('top','0px');
        $(aboutBtn).find('.nav-image-holder').css('opacity',1);
      },200);
      setTimeout(function(){$(aboutBtn).find('.nav-img').css('opacity',1)},500);

      setTimeout(function(){
        $(aboutBtn).find('.left-arrows').css('opacity',0);
        $(aboutBtn).find('.main-nav-learn-more').css('opacity',1);
        $(aboutBtn).find('.main-nav-learn-more').css('top','0px');
      },400);
    },750);

    //work
    setTimeout(function(){
      $(workBtn).find('.nav-header').css('top','0px');
      $(workBtn).find('.nav-line').css('width','100%');

      setTimeout(function(){
        $(workBtn).find('.nav-image-holder').css('top','0px');
        $(workBtn).find('.nav-image-holder').css('opacity',1);
      },200);
      setTimeout(function(){$(workBtn).find('.nav-img').css('opacity',1)},500);

      setTimeout(function(){
        $(workBtn).find('.left-arrows').css('opacity',0);
        $(workBtn).find('.main-nav-learn-more').css('opacity',1);
        $(workBtn).find('.main-nav-learn-more').css('top','0px');
      },400);
    },900);

    //thought
    setTimeout(function(){
      $(thoughtBtn).find('.nav-header').css('top','0px');
      $(thoughtBtn).find('.nav-line').css('width','100%');

      setTimeout(function(){
        $(thoughtBtn).find('.nav-image-holder').css('top','0px');
        $(thoughtBtn).find('.nav-image-holder').css('opacity',1);
      },200);
      setTimeout(function(){$(thoughtBtn).find('.nav-img').css('opacity',1)},500);

      setTimeout(function(){
        $(thoughtBtn).find('.left-arrows').css('opacity',0);
        $(thoughtBtn).find('.main-nav-learn-more').css('opacity',1);
        $(thoughtBtn).find('.main-nav-learn-more').css('top','0px');
      },400);
    },1050);
    
  }
  //
  resetAnimations(){
    //
    console.log("Resetiing Build Animatiuons");
    setTimeout(function(){$(rootElement).css('display','none')},1000);
    $(rootElement).find('.nav-header').css('top','100px');
    $(rootElement).find('.nav-line').css('width','0px');
    $(rootElement).find('.nav-image-holder').css('top','100px');
    $(rootElement).find('.nav-image-holder').css('opacity',0);
    $(rootElement).find('.nav-img').css('opacity',0);
    $(rootElement).find('.left-arrows').css('opacity',0);
    $(rootElement).find('.main-nav-learn-more').css('opacity',0);
    $(rootElement).find('.main-nav-learn-more').css('top','100px');

  }
  //
  ngAfterViewInit() {
        this.resetAnimations();
  }
  //
  ngOnInit() {
      rootElement = $(this.elementRef.nativeElement);
  }

}
