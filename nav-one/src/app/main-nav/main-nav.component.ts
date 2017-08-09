import { Component, Input, Inject, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as jQuery from 'jquery';
import {MainNavButtonsComponent} from '../main-nav-buttons/main-nav-buttons.component';

let rootElement:object;
let navState:boolean = false;

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.less']
})
export class MainNavComponent  implements AfterViewInit {
  @ViewChild(MainNavButtonsComponent) private mn:MainNavButtonsComponent;
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

 

  ngAfterViewInit() {
    rootElement = $(this.elementRef.nativeElement);
    //this.mn.playBuildAnimations();
    var toggleState = this.toggleNavState;
        
    this.navToggleButton = $(rootElement).find('#main-nav-toggle');
    //this.navToggleButton.click(function(){
      //console.log(this.mn);
      //toggleState();
    //});
    
        
  }

  toggleNavState(){
    console.log(this.mn);
    let yellow = $(rootElement).find('.yellow-cover');
    let blue = $(rootElement).find('.blue-cover');
    let red = $(rootElement).find('.red-cover');
    if(navState){
      setTimeout(function(){yellow.css('width','0px')},150);
      setTimeout(function(){blue.css('width','0px')},75);
      setTimeout(function(){red.css('width','0px')},0);
      this.mn.resetAnimations();
      
    } else {
      yellow.css('width','100vw');
      setTimeout(function(){red.css('width','100vw')},150);
      setTimeout(function(){blue.css('width','100vw')},75);
      this.mn.playBuildAnimations();
    }
    navState = !(navState);
  }

}
