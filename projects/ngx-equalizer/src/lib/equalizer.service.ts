import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class EqualizerService {
  /**
   * Equalize the height of the specified elementRefs
   */
  equalizeElements(elementRefs: Array<ElementRef>): void {
    // Reset the height styles
    elementRefs.forEach((elementRef) => elementRef.nativeElement.style.height = null);

    // Retrieve the max height
    const maxHeight = elementRefs
      .map(elementRef => elementRef.nativeElement.getBoundingClientRect().height)
      .reduce((prev, curr) => {
        return curr > prev ? curr : prev;
      }, 0)
    ;

    // Set the max height to all elements
    elementRefs.forEach((elementRef) => elementRef.nativeElement.style.height = `${maxHeight}px`);
  }
}
