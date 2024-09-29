import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
})
export class InputFieldComponent {
  @Input() type: string = 'text';
  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() name: string = '';
  @Input() value: string = ''; // Add this line

  @Output() change = new EventEmitter<string>();

  isFocused: boolean = false;

  handleFocus() {
    this.isFocused = true;
  }

  handleBlur() {
    this.isFocused = false;
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value; 
    this.change.emit(input.value);
  }
}
