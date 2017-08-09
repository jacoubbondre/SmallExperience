import { Directive, Input, Inject, ElementRef } from '@angular/core';
import * as jQuery from 'jquery';

let rootElement:object;

@Directive({
  selector: '[appMainNavButton]'
})
export class MainNavButtonDirective {

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
        rootElement = $(this.elementRef.nativeElement);
        $(rootElement).click(function(){
            console.log("click");
        });
  }
 
}
