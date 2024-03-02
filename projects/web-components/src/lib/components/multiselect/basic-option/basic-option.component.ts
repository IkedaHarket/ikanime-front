import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface Option{
  label:string
  key:string
  title: string
  name: string
}

@Component({
  selector: 'web-basic-option',
  standalone: true,
  imports: [],
  templateUrl: './basic-option.component.html',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( ()=> BasicOptionComponent ),
      multi: true,
    }
  ]
})
export class BasicOptionComponent implements ControlValueAccessor {
  @Input({ required: true }) option !: Option

  isChecked : boolean = false;

  private onChangeCallback: (_: any) => void = () => {};
  private onTouchedCallback: (_: any) => void = () => {};

  
  onChange(event: any, option: Option) {
    this.isChecked = event.target.checked;
    this.onChangeCallback(this.isChecked);
  }

  writeValue(value: any): void {
    this.isChecked = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }

}
