import {FormControl} from "@angular/forms";

export function dateValidator(control: FormControl) {
  const date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)

  const value = control.value

  console.log(value)
  console.log(date.getTime())
  console.log(value >= date)

  return control.value >= date ? null : {
    dateValidator: {
      valid: false
    }
  }
}
