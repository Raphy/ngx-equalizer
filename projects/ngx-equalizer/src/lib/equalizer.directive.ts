import { AfterViewChecked, ContentChildren, Directive, ElementRef, HostListener, QueryList } from '@angular/core';
import { EqualizeDirective } from './equalize.directive';
import { EqualizerService } from './equalizer.service';

@Directive({
  selector: '[equalizer]',
})
export class EqualizerDirective implements AfterViewChecked {
  @ContentChildren(EqualizeDirective, {read: ElementRef})
  children: QueryList<ElementRef>;

  constructor(
    private readonly equalizerService: EqualizerService
  ) {
  }

  ngAfterViewChecked(): void {
    this.equalize();
  }

  @HostListener('window:resize')
  private onWindowResize() {
    this.children.map((child) => console.log((child.nativeElement as HTMLElement).innerHTML));
    this.equalize();
  }

  equalize() {
    if (!this.children) {
      return;
    }

    this.equalizerService.equalizeElements(this.children.toArray());
  }
}
