import { Component, Input, Inject, ElementRef, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

let rootElement:object;

@Component({
  selector: 'app-main-nav-buttons',
  templateUrl: './main-nav-buttons.component.html',
  styleUrls: ['./main-nav-buttons.component.less']
})
export class MainNavButtonsComponent implements OnInit {

  private elementRef: ElementRef;

  public constructor(@Inject(ElementRef) elementRef: ElementRef) {
      this.elementRef = elementRef;
  }
  //
  public playAnimations(bType:string){
    //
  }
  //
  public resetAnimations(){
    //
  }
  //
  private ngAfterViewInit() {
        
  }
  //
  ngOnInit() {
      rootElement = $(this.elementRef.nativeElement);
  }

}
