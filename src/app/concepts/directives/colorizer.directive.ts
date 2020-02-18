import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor( private elementRef: ElementRef, private renderer: Renderer2) { // Dep Injection
    console.log('================= Inside Colorizer Directives ===================');
    // Step 1: find the element that is using the appColorizer directive
    console.log(this.elementRef.nativeElement);
    let el = this.elementRef.nativeElement;
    // Step 2: Change the color thru JS approach
    // el.style.backgroundColor = 'red';
    // el.style.color = 'white';

    // Step 2: Change the color thru Angular's Renderer2
    this.renderer.setStyle(el, 'background-color', 'red');
    // todo.. change the color of the content to white 
    this.renderer.setStyle(el, 'color', '#ffffff');
    // todo: increase the height of the div 
    this.renderer.setStyle(el, 'height', '200px');

  }

  // Handle Events inside Custom Directive
  @HostListener('click', ['$event.target'])
  onColorizerClick(element) {
    console.log(element);
    // todo: change the background color to be yellow
    this.renderer.setStyle(element, 'background-color', 'yellow');
    // todo: change the color to be black.
    this.renderer.setStyle(element, 'color', '#000');
  }

  // Todo: @HostBinding() 

}
