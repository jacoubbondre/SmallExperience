import { Component, Input, Inject, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.less']
})
export class WorkWithUsComponent implements OnInit {

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

  ngOnInit() {
  }

}
