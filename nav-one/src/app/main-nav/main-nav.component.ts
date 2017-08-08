import { Component, Input, Inject, ElementRef, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

let navState:boolean = false;
let rootElement:object;

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.less']
})
export class MainNavComponent implements OnInit {

  private elementRef: ElementRef;
  private navToggleButton;

  public constructor(@Inject(ElementRef) elementRef: ElementRef) {
      this.elementRef = elementRef;
  }
    
  public playAnimations(bType:string){
        //
  }
    
  public resetAnimations(){
            //
  }

 

  private ngAfterViewInit() {

    var toggleState = this.toggleNavState;
        
    this.navToggleButton = $(rootElement).find('#main-nav-toggle');
    this.navToggleButton.click(function(){
      console.log("click");
      toggleState();
    });
    
        
  }

  ngOnInit() {
    
      rootElement = $(this.elementRef.nativeElement);
  }

  toggleNavState(){
    
    let yellow = $(rootElement).find('.yellow-cover');
    let blue = $(rootElement).find('.blue-cover');
    let red = $(rootElement).find('.red-cover');
    if(navState){
      setTimeout(function(){yellow.css('width','0px')},150);
      setTimeout(function(){blue.css('width','0px')},75);
      setTimeout(function(){red.css('width','0px')},0);
      
    } else {
      yellow.css('width','100vw');
      setTimeout(function(){red.css('width','100vw')},150);
      setTimeout(function(){blue.css('width','100vw')},75);
    }
    navState = !(navState);
  }

}
