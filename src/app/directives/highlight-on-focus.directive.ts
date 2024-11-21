import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Add a listener for the focus event
    this.renderer.listen(this.el.nativeElement, 'focus', () => {
      this.highlight();
    });

    this.renderer.listen(this.el.nativeElement, 'blur', () => {
      this.removeHighlight();
    });
  }

  private highlight(): void {
    this.renderer.setStyle(this.el.nativeElement, 'border-color', 'red');
    this.renderer.setStyle(this.el.nativeElement, 'background-color' , "lightblue");
  }

  private removeHighlight(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'border-color');
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
