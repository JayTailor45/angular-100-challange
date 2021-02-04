import { Directive, Output, EventEmitter, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {

  @Output() public debounceClick = new EventEmitter();
  public clicks = new Subject();
  public subscription: Subscription;

  public ngOnInit(): void {
    const debounceTimeInMs = 500;

    this.subscription = this.clicks.pipe(
      debounceTime(debounceTimeInMs)
    ).subscribe(val => {
      this.debounceClick.emit(val);
    });
  }

  @HostListener('click', ['$event'])
  public clickEvent(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
