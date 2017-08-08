import { Component, Input, Inject, ElementRef } from '@angular/core';
import {MainNavComponent} from './main-nav/main-nav.component';
import * as jQuery from 'jquery';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';

  private rootElement;
  private elementRef: ElementRef;
  private target;

  public constructor(@Inject(ElementRef) elementRef: ElementRef) {
      this.elementRef = elementRef
      this.rootElement = $(this.elementRef.nativeElement);
  }
    
  public playAnimations(bType:string){
        //
  }
    
  public resetAnimations(){
            //
  }

  private ngAfterViewInit() {
        
    this.target = $(this.rootElement).find('.testClass');
    this.target.css('opacity',.5);
        
  }
}
