import { AbstractControl } from '@angular/forms';

export function urlValidator(control: AbstractControl) {
  if (!control.value.startsWith('https')) {
    return { urlValid: true };
  }
  return null;
}
