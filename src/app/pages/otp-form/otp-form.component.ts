import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './otp-form.component.html',
  styleUrl: './otp-form.component.css',
})
export class OtpFormComponent {
  otp: string[] = Array(4).fill('');
  otpDigits: number[] = Array(4).fill(0);

  onInput(event: any, index: number) {
    const value = event.target.value;
    if (value.length === 1 && index < 3) {
      const nextInput = index + 1;
      if (nextInput < this.otp.length) {
        const inputElement = document.getElementsByClassName('otp-input')[
          nextInput
        ] as HTMLInputElement;
        inputElement.focus();
      }
    }
  }

  focusInput(index: number) {
    const inputElement = document.getElementsByClassName('otp-input')[
      index
    ] as HTMLInputElement;
    inputElement.select();
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && index > 0 && this.otp[index] === '') {
      // Move back to the previous input on backspace if current is empty
      const prevInput = index - 1;
      const inputElement = document.getElementsByClassName('otp-input')[
        prevInput
      ] as HTMLInputElement;
      inputElement.focus();
    }
  }
}
