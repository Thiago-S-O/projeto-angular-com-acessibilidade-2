import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusBack]'
})
export class FocusBackDirective implements OnInit, OnDestroy {

  constructor() { }

  private lastFocusadElement: Element;

  public ngOnInit(): void {
    this.lastFocusadElement = document.activeElement;
  }

  ngOnDestroy(): void {
    if (this.lastFocusadElement) {
      (this.lastFocusadElement as HTMLElement).focus();
    }
  }
}
