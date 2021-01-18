import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollDirective]'
})
export class ScrollDirectiveDirective {

  constructor(
    private elem: ElementRef
  ) { }

  //second way
  @HostListener("scroll", ["$event"])
  onScroll(event: any) {
    let tracker = event.target;
    let limit = tracker.scrollHeight - tracker.clientHeight;

    if (event.target.scrollTop === limit) {
      alert('end')
    }
  }

  //first way
  // @HostListener("scroll", ["$event"])
  // onWindowScroll() {
  //   let pos = (this.elem.nativeElement.scrollTop || this.elem.nativeElement.body.scrollTop) + this.elem.nativeElement.offsetHeight;
  //   let max = this.elem.nativeElement.scrollHeight;
  //   if (pos == max) {
  //     alert('hiasdf')
  //   }
  // }
}
