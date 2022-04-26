import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public elemRef: ElementRef) { 
    elemRef.nativeElement.style.backgroundColor = 'red';
  }

}
