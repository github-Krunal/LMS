import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[@$!%*?&]/.test(value);
    const minLength = value.length >= 6;

    const valid = hasUpperCase && hasNumber && hasSpecialChar && minLength;

    return !valid
      ? { strongPassword: { hasUpperCase, hasNumber, hasSpecialChar, minLength } }
      : null;
  };
}
