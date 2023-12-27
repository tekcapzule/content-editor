import { Directive, ElementRef, Renderer2, HostListener, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appContenteditable]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ContenteditableDirective),
    multi: true
  }]
})
export class ContenteditableDirective implements ControlValueAccessor {
  private _onChange!: (value: any) => void;
  private _onTouched!: () => void;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setAttribute(this.el.nativeElement, 'contenteditable', 'true');
  }

  writeValue(value: any): void {
    this.renderer.setProperty(this.el.nativeElement, 'innerText', value);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  @HostListener('input')
  onInput() {
    const value = this.el.nativeElement.innerText;
    if (this._onChange) this._onChange(value);
  }

  @HostListener('blur')
  onBlur() {
    if (this._onTouched) this._onTouched();
  }
}
